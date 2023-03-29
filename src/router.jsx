import { createBrowserRouter } from 'react-router-dom'
import Category from './component/category/Category'
import Home from './component/Home'
import Login from './component/Login/Login'
import PrivateRoute from './component/Login/PrivateRoute'
import Register from './component/Login/Register'
import News from './component/News/News'
import Main from './layout/Main'

export const router  = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home/>,
     loader:()=>fetch('http://localhost:3000/news')
    
    },
        {path:'/category/:id',element:<PrivateRoute><Category/></PrivateRoute>,
     loader:({params})=>  fetch(`http://localhost:3000/category/${params?.id}`)
    },
        {path:'/news/:id',element: <PrivateRoute><News/></PrivateRoute>,
     loader:({params})=>fetch(`http://localhost:3000/news/${params?.id}`)
    },
    {path:'/login',element:<Login></Login>},
    {path:'/register',element:<Register></Register>}
    ]}
])