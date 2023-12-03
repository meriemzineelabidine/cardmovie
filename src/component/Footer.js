import React from 'react'
import { useState } from 'react'

const Footer = (props) => {
  const [reaction, setreaction] = useState({
    nblike:props.nblike,like:props.like
  })
  const{like,nblike}=reaction
 
 
  return (
   <div className='footer'>
  <div className='sous-footer'>
  
  <div> Created by Netflex on 01/12/23</div>
   <div> Copyright © 2023 . All rights reserved</div>
  
  
  </div>
   </div>
  )
}

export default Footer
