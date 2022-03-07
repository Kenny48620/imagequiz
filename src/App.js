
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/Menu.js';

import { useState } from 'react';

function App() {
  const [customer, setCustomer] = useState(undefined);

  let customerLoggedInHandler = (customerEmail) => {
    setCustomer(customerEmail);
  }

  return (


    <BrowserRouter>

      <Container fluid>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login customerLoggedIn={customerLoggedInHandler} />} />
          
        </Routes>
      </Container>
   </BrowserRouter>
  );
}

export default App;
