import CartContext from "./cart-context";

/**Цель этого компонента управлять данными контекста корзины и
 * предоставлять этот контекст всем компанентам кто имеет к этому
 * контексту доступ. **/
const CartContextProvider = (props) => {

    const addItemHandler = item => {

    };

    const removeItemHandler = id => {

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartContextProvider;