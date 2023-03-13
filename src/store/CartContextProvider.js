import CartContext from "./cart-context";
import {useReducer} from "react";
import cart from "../components/Cart/Cart";

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item); // при методе concat в переменной будет новый массив со вставленным новым элементом
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
};


/**Цель этого компонента управлять данными корзины (контекста) и
 * предоставлять этот контекст всем компанентам кто имеет к этому
 * контексту доступ.
 *
 * Нам надо будет проверять является ли блюдо частью корзины или это новое блюдо которого нет в корзине.
 *
 * Код в этом компоненте будет пересобираться каждый раз при изменении корзины.
 * **/
const CartContextProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item,
        });
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartContextProvider;