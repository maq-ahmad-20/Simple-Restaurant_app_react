import React, { useContext } from 'react';
import classes from './mealitem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/Cart-context';
const MealItems = (props) => {

    const cartContext = useContext(CartContext)

    const price = `RS ${props.price.toFixed(2)}`;

    const addTocartHandler = (amount) => {

        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })

    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>

            </div>
            <div>
                <MealItemForm id={props.id} addToCart={addTocartHandler} />
            </div>
        </li>
    )

}

export default MealItems;