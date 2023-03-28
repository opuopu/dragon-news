import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function News() {
  const news = useLoaderData()
  const {_id,title,total_view,author,image_url,details,category_id
  } = news
  const {name,published_date,img} = author
  console.log(news)
  return (
    <div className='border border-dark px-3 py-3'>
      <h1>News With Details</h1>
     <div className='d-flex align-items-center mb-2'>
         <div className='d-flex align-items-center justify-content-start'>
             <div className='w-25'>
             <img className='img-fluid w-25 author-img rounded' src={img} alt="" />
             </div>
             <p>{published_date}</p>
         </div>
         <div>
             <p>icons..</p>
         </div>
     </div>
    <div className=''>
    <img className='img-fluid mx-auto d-block' src={image_url} alt="" />
    </div>
    <div className="text-center">
    <h5 className='my-2 text-primary'>{title}</h5>
    <p className='text-secondary'></p>
     {details}
    </div>
 <Link to={`/category/${category_id
}`}>
 <button>go back</button>
 </Link>
 </div>
  )
}
