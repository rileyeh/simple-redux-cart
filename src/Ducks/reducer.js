const ADD_TO_CART = 'ADD_TO_CART'

const initialState = {
    cart: [],
    count: 0
}

export default function(state = initialState, action) {
    let { type, payload } = action
    
    switch(type) {
        case ADD_TO_CART: 
            return {
                ...state,
                cart: [...state.cart, payload.item],
                count: payload.num
            }
        default:
            return state
    }
}

export function addToCart(item, num) {
    return {
        type: ADD_TO_CART,
        payload: {item, num}
    }
}