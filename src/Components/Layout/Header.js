import React from "react";

import classes from './header.module.css';
import restaurant from '../../Sources/restar.jpeg'

const Headers = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={restaurant} alt="restaurantImage" />

            </div>

        </React.Fragment>
    )
}

export default Headers;