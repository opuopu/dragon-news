import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Left() {
  const [category,setcatogery] = useState([])
  useEffect(()=>{
 fetch('http://localhost:3000/category')
 .then(res=>res.json())
 .then(data =>setcatogery(data))
  },[])
  return (
    <div>
      <h5>categorys</h5>
   <div className='d-flex flex-column'>
   {
 category?.map(c=>(
  <Link to={`/category/${c?.id}`} className=' py-2' key={c?.id}>{c?.name}</Link>
 ))
      }
   </div>
    </div>
  )
}
