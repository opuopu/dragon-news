import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Left from '../component/Left';
import Right from '../component/Right';

export default function Main() {
  return (
    <div>
        <Header></Header>
       <Container>
       <Row>
            <Col lg={2}>
        <Left></Left>
            </Col>
            <Col lg={7}>
            <Outlet></Outlet>
            </Col>
            <Col lg={3}>
          <Right></Right>
            </Col>
        </Row>
       </Container>
    </div>
  )
}
