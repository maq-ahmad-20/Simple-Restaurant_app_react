
import classes from './cart.module.css'
import React, { useContext } from 'react'
import CartContext from '../../Store/Cart-context'
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext)

    const totalAmount = `Rs ${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);

    }
    const cartAddItemHandler = (item) => {

        cartContext.addItem(item);

    }

    const cartItems = <ul className={classes['cart-items']}>{cartContext.items.map((item) => <CartItem key={item.id}
        name={item.name} price={item.price} amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartAddItemHandler.bind(null, item)} />)}</ul>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>

                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}

            </div>
        </Modal>
    )
}

export default Cart;