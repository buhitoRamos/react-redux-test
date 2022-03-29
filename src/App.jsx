import React from 'react';
import AddCats from './components/AddCats'
import './App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CatsList from './components/CatsList';

const initialValue = { items: []}

const reducer = (state = initialValue, action) => {
  debugger
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload]}
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.item !== action.payload)}
    default:
      return state
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddCats></AddCats>
        <CatsList></CatsList>
      </div>
    </Provider>
  );
}

export default App;
