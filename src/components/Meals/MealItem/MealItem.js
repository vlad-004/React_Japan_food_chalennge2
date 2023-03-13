import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const formattedPrice = `$${props.price.toFixed(2)}`;// первый знак доллара будет помещен перед ценой как конкатанация а вот второй знак ,
    // для динамического ввода контента в эту шаблонную строку

    return <li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{formattedPrice}</div>
        </div>

        <div>
            <MealItemForm id={props.id} />
        </div>
    </li>
}

export default MealItem;