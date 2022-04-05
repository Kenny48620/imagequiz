
import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import Test from './components/Test';

import { useState  } from 'react';



function App() {
  const [customer, setCustomer] = useState(undefined);

  let customerLoggedInHandler = (customerEmail) => {
    setCustomer(customerEmail);
  }


  return (
    

    <HashRouter>

      <Container fluid>
        <Row>
          <Col>
            <Menu customer={customer} />
          </Col>
        </Row>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login customerLoggedIn={customerLoggedInHandler}/>} />
          <Route exact path='/quiz/:id' element={<Quiz />} />
          <Route exact path='/test' element={<Test />} />
        </Routes>
      </Container>
   </HashRouter>
  );
}

export default App;
