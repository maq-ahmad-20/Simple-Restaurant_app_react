import React, { useContext } from "react";
import classes from './headerCartbutton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-context";
const HeaderCartButton = (props) => {

    const cartContext = useContext(CartContext);

    const noOfCartItems = cartContext.items.length;

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                1
            </span>
        </button>
    )
}

export default HeaderCartButton;