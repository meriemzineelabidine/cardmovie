
import './App.css';
import AjoutMovie from './component/AjoutMovie';

import Footer from './component/Footer';

import ListFilm from './component/Listefilm';
import MovieCard from './component/MovieCard';
import Nav from './component/Nav';
import { useState } from 'react';
import React from 'react';
import ReactStars from "react-rating-stars-component";



function App() {
 const [lists,setlists] = useState(ListFilm)
 function AddFilm(ff){
 setlists([...lists,ff])
 }
 const [valinput, setvalinput] = useState("")
  return (
    <div className="App">
      <div className='navbar'>
      <Nav />
      <div>
            <input type="text" placeholder="Search"onChange={(e)=>setvalinput(e.target.value)} ></input>
   
        </div>
      </div>
     
      <div>
        <AjoutMovie fct={AddFilm}/>
      </div>
  
      <div className='film'>
      {lists.filter((e)=> (e.title.toLowerCase()).includes(valinput.toLowerCase())||e.rating.includes(valinput)).map((el)=><MovieCard data={el} />)}
     
      </div>
      <div >
        <Footer />
   
      </div>
      
    </div>

  );
}

export default App;
