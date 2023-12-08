
import { Route, Routes } from 'react-router-dom';
import './App.css';

import React from 'react';
import Home from './component/Home';
import Description from './component/Description';
import ListFilm from './component/Listefilm';



function App() {
 
 

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/description/:id' element={<Description></Description>}></Route>
      </Routes> 
      
    </div>

  );
}

export default App;
