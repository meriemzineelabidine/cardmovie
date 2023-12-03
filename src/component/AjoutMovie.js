
import React from "react"
import { useState } from "react"

function AjoutMovie({fct}){
    const [newmovie, setNewmovie] = useState({title:"",img:"",description:"",url:"",rating:""})
    return(
        <div className="contenu">
        
                  <input type="text" placeholder="title" onChange={(e)=>setNewmovie({...newmovie,title:e.target.value})}></input>
                  <input type="text" placeholder="img"onChange={(e)=>setNewmovie({...newmovie,img:e.target.value})} ></input>
                  <input type="text" placeholder="description"onChange={(e)=>setNewmovie({...newmovie,description:e.target.value})} ></input>
                  <input type="text" placeholder="url"onChange={(e)=>setNewmovie({...newmovie,url:e.target.value})}></input>
                  <input type="text" placeholder="rating" onChange={(e)=>setNewmovie({...newmovie,rating:e.target.value})}></input>
                  <button onClick={()=>{fct(newmovie)}}>Add Movie</button>
                
             
        </div>
    )
}
export default AjoutMovie;