import React, { useRef, useState } from 'react';

import classes from './mealItemForm.module.css'

import Input from '../../UI/Input';

const MealItemForm = (props) => {

    const inputAmountEntered = useRef() //Instead refs we use usestate and do two way binding ie passing value and seting it to '' again in input 
    const [amountIsVAlid, setAmountIsValid] = useState(true)
    const formSubmitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = inputAmountEntered.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 0 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.addToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input ref={inputAmountEntered} label="Amount" input={{

                id: `Amount"${props.id}`,
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',


            }} />



            {!amountIsVAlid && <p>Please Enter a valid Amount (1-5)</p>}
            <button type='submit'>+ Add</button>

        </form>
    )

}

export default MealItemForm;