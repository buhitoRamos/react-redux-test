import React from 'react';
import './App.css'
import AddCatsContainers from './containers/AddCatsContainers'
import CatsListContainers from './containers/CatsListContainers';
function App() {
  return (
      <div className="App">
        <AddCatsContainers/>
        <CatsListContainers/>
      </div>

  );
}

export default App;
