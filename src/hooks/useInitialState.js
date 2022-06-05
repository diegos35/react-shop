import { useState } from "react";

const initialState = {
    cart: [],
    total: 0
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        console.log('payload',payload)
        if(!state.cart.includes(payload)){ //para que no se repitan los productos
            setState({
                ...state, //Manten la informacion
                cart: [...state.cart, payload],
                total: state.total + payload.price
            });
        }
        console.log('cart', state)
       // console.log('state2',state)
    }

    const removeFromCart = (payload) => {
        setState({
            ...state, //lo que este en estado mantelo
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    } 

}

export default useInitialState;