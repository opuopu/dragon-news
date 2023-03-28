import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SignleNews from './category/SignleNews'

export default function Home() {
  const data = useLoaderData()
  
  return (
    <div>
   {
    data?.map(c=><SignleNews category={c} key={c?._id}></SignleNews>)
   }
    </div>
  )
}
