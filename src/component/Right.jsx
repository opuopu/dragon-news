import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useAuth from '../context/Useauth';
export default function () {
  const {user,signInWithGoogle} = useAuth()
 
  return (
    <div>
          <ButtonGroup vertical>
      <Button onClick={()=>signInWithGoogle()}>Login in with google</Button>
      <Button className='bg-dark mt-1'>Login with github</Button>
      </ButtonGroup>
    </div>
  )
}
