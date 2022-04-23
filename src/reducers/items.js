import { ADD_ITEM } from "../actions"
import { REMOVE_ITEM } from "../actions"

export const items = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            debugger;
            return { ...state, items: [...state.items, action.payload] }
        case REMOVE_ITEM:
            return { ...state, items: state.items.filter(i => i.item !== action.payload) }
        default:
            return state
    }
}