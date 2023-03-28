import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SignleNews from './SignleNews'

export default function Category() {
  const category = useLoaderData()
  console.log(category)
  return (
    <div className='row row-cols-1 g-3'>
     {
      category?.map(c=><SignleNews category={c} key={c?._id}></SignleNews>)
     }
    </div>
  )
}
