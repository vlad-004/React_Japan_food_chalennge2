import React from "react";

/** Это объект, так как компонент возвращает jsx код  **/
const CartContext = React.createContext({
    items: [],
    amount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;