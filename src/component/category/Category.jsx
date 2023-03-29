import React from 'react'
import { useLoaderData } from 'react-router-dom'
import useAuth from '../../context/Useauth'
import SignleNews from './SignleNews'

export default function Category() {
  const {user,loading} = useAuth()
  const category = useLoaderData()
  console.log(category)
  let notfound;
  if(!category){
        notfound ='not found'
  }
  return (
    <div className='row row-cols-1 g-3'>
        {
          loading && <h5>loading.......</h5>
        }
     {
      category?.map(c=><SignleNews category={c} key={c?._id}></SignleNews>)
     }
    </div>
  )
}
