import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuth from '../../context/Useauth';
export default function (){
    const{user,createuser} = useAuth()
    const submitRegister =(event) =>{
        event.preventDefault(); 
        const name =  event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
   createuser(email,password)
   .then(result=>{
    
   })
    }
  return (
    <div>
    <Form onSubmit={submitRegister}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" name='name' />
        <Form.Text className="text-muted">
       name here
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
