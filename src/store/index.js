import { createStore } from "redux";
import { itemsReducer } from "../reducers/items";

const initialState = {
    items:[]
}
export const store = createStore(itemsReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())