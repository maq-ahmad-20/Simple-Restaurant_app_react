import React, { useContext, useEffect, useState } from "react";
import classes from './headerCartbutton.module.css';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-context";
const HeaderCartButton = (props) => {

    const [btnIsHighlited, setBtnIsHighlited] = useState(false)

    const cartContext = useContext(CartContext);
    const { items } = cartContext;
    const noOfCartItems = cartContext.items.reduce((len, item) => {
        return len += item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump : ''}`


    useEffect(() => {
        if (items.length === 0) return;
        setBtnIsHighlited(true);

        const timer = setTimeout(() => {
            setBtnIsHighlited(false);
        }, 300)

        return () => {
            clearTimeout(timer)
        }

    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {noOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton;