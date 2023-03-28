import { createBrowserRouter } from 'react-router-dom'
import Category from './component/category/Category'
import Home from './component/Home'
import News from './component/News/News'
import Main from './layout/Main'

export const router  = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home/>,
     loader:()=>fetch('http://localhost:3000/news')
    
    },
        {path:'/category/:id',element:<Category/>,
     loader:({params})=>  fetch(`http://localhost:3000/category/${params?.id}`)
    },
        {path:'/news/:id',element:<News/>,
     loader:({params})=>fetch(`http://localhost:3000/news/${params?.id}`)
    }
    ]}
])