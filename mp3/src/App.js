import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Sidebar/Navigation/Home/Home";
import Search from './Components/Sidebar/Navigation/Search/Search';
import Library from './Components/Sidebar/Navigation/Library/Library';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
    <Sidebar/>
      <header className="App-header">
            <Route path='./Search/Search' element={<Search/>}/>
            <Route path='./Home/Home' element={<Home/>}/>
            <Route path='./Library/Library' element={<Library/>}/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
