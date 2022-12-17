import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Sidebar/Navigation/Home/Home";
import Search from './Components/Sidebar/Navigation/Search/Search';
import Library from './Components/Sidebar/Navigation/Library/Library';
import MySettings from './Components/Sidebar/Navigation/Home/MySettings/MySettings';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
    <Sidebar/>
      <header className="App-header">
      <a className='bg'></a>
      <a className='gradient'></a>
        <Routes>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Library' element={<Library/>}/>
            <Route path='/MySettings' element={<MySettings/>}/>
        </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
