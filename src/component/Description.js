
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ListFilm from './Listefilm'
import Footer from './Footer'

const Description = () => {
  
var id = useParams()
const navigate=useNavigate()

 
   const [moviechoisi, setmoviechoisi] = useState("")
   const [list, setlist] = useState(ListFilm)

   useEffect(()=> {list.map((el)=>(el.id==id.id)?setmoviechoisi(el):null)},[])
  
  return (
    <div >
      <div className='bg'></div>
    <div className='moviechoisi'>
      <p>{moviechoisi.description}</p>
     <Link  to={moviechoisi.url}>{moviechoisi.url}</Link>
     <button className='btn'onClick={()=>navigate('/')}>Retour</button>
   <div className='desc'><Footer></Footer></div> 
    </div>
    </div>
  )
}

export default Description
