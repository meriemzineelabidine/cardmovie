
import '../App.css';
import AjoutMovie from './AjoutMovie';

import Footer from './Footer';

import ListFilm from './Listefilm';
import MovieCard from './MovieCard';
import Nav from './Nav';
import { useState } from 'react';
import React from 'react';
import ReactStars from "react-rating-stars-component";
const Home = () => {
    const [lists,setlists] = useState(ListFilm)
    function AddFilm(ff){
    setlists([...lists,ff])
    }
    const [valinput, setvalinput] = useState("")
  return (
    <div>
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
  )
}

export default Home
