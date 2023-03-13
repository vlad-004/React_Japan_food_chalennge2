import Header from "./components/Layout/Header";
import React, {useState} from "react";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";


function App() {
    const [cartIsVisible, setCartIsVisible] = useState(false);

    // Обработчик видимости корзины
    const showCartHandler = () => {
        setCartIsVisible(true);
    };

    const hideCartHandler = () => {
        setCartIsVisible(false);
    }
    return (
        <CartContextProvider>
            {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler}  />
            <main>
                <Meals/>
            </main>
        </CartContextProvider>
    );
}

export default App;
