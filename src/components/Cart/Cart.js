import styles from './Cart.module.css';
import Modal from "../UI/Modal";


const Cart = (props) => {
    const cartItems = (
        <ul className={styles['cart-items']}>
            { //эти фигурные скобки нужны для того чтобы опять начать писать js код
                // ниже обычный массив объектов js
                [
                    {
                        id: 'm1', name: 'Sushi', amount: 2, price: 10.99,
                    },
                ].map((item) => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))
            }
        </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className={styles.total}>
                <span>Итого</span>
                <span>100 лей</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Закрыть</button>
                <button className={styles.button}>Закрыть</button>
            </div>
        </Modal>
    );
};

export default Cart;