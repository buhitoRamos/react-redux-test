import { createStore } from "redux";
import { items } from "../reducers/items";

const initialState = {
    items:[]
}
export const store = createStore(items, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())