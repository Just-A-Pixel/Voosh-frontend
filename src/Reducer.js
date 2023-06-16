export const initialstate= {
    items: []
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const CLEAR = "CLEAR"

export const cartReducer = (state, action) => {
    switch(action.type) {
        case INCREMENT:
            console.log(action.payload.item)
            return { items: [ ...state.items, action.payload ]}
        case DECREMENT:
            return { items: [...state.items, action.payload ]}
        case CLEAR:
            return initialstate
        default:
            return state
    }
}