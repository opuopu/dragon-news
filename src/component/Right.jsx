import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export default function () {
  return (
    <div>
          <ButtonGroup vertical>
      <Button>Login in with google</Button>
      <Button className='bg-dark mt-1'>Login with github</Button>
      </ButtonGroup>
    </div>
  )
}
