import { useState } from "react";

const initialState = {
    cart: [],
    total: 0
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        console.log('payload',payload)
        setState({
            ...state,
            cart: [...state.cart, payload],
            total: state.total + payload.price
        });
       // console.log('state2',state)
    }

    return {
        state,
        addToCart
    } 

}

export default useInitialState;