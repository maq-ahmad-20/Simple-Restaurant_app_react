import { useReducer } from "react"
import CartContext from "./Cart-context"


const defaultCartState = {
    items: [],
    totalAmount: 0

}

const cartReducer = (state, action) => {

    if (action.type === "ADD") {


        const updatedTotalAmount = state.totalAmount + (action.item.amount * action.item.price)
        const existingItemIndex = state.items.findIndex((item) => { return item.id === action.item.id })
        const existingItem = state.items[existingItemIndex];


        let updatedItems;
        if (existingItemIndex !== -1) {

            const updatedItem = { ...existingItem, amount: existingItem.amount + action.item.amount }

            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        } else {

            updatedItems = state.items.concat(action.item)
        }






        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === "REMOVE") {


        const existingCartItemIndex = state.items.findIndex((item) => { return item.id === action.id })
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - (existingItem.price)
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id)
        } else {

            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem

        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }


    }


    return defaultCartState
}

const CartProvider = (props) => {


    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCartHandler = (item) => {

        dispatchCartAction({ type: 'ADD', item: item })

    }

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler

    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider