import { ADD_ITEM, REMOVE_ITEM } from "../actions"

export const itemsReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, items: [...state.items, action.payload] }

        case REMOVE_ITEM:
            return { ...state, items: state.items.filter(i => i !== action.payload) }
            
        default:
            return state
    }
}