import React from "react";
import ListContainer from './components/ListContainer';
import "./App.css";
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ListContainer />
    </div>
  );
};

export default App;
