import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = (props) => {
    return <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>корзина</span>
        <span className={styles.badge}>2</span>
    </button>
}

export default HeaderCartButton;
