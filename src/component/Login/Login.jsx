import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../context/Useauth';
export default function (){
    const {user,signinuser,setloading} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from  = location?.state?.from?.pathname || '/'



    const submitLogin =(event)=>{
       
        event.preventDefault(); 
         const email = event.target.email.value
         const password = event.target.password.value
         signinuser(email,password)
         .then(result=>{
          if(user?.emailVerified){
            navigate(from,{replace:true})
          }
          else{
            console.log('not verified')
          }

         })
         .catch(()=>{

         })
         .finally(()=>{
                setloading(false)
         })
    }
  return (
    <div>
        <Form onSubmit={submitLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
