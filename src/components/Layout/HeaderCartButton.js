import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

/** этот компонент будет каждый раз переоцениваться заново реактом при
 * изменении контекста CartContext, и контест бует изменятся когда мы
 * будем его изменять в CartContextProvider  **/
const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);

    /*Кол-во добавленных пунктов меню в корзину */
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0)



    return <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>корзина</span>
        <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
}

export default HeaderCartButton;
