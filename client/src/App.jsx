import React, {useContext} from 'react'
import './scss/index.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/esm/Badge';
import {LinkContainer} from 'react-router-bootstrap'

import { Store } from './Store';

import ProductPage from './views/ProductPage';
import HomePage from './views/HomePage';




function App() {

  const {state} = useContext(Store)
  const {cart} = state

  return (
    <Router>
        <div className='d-flex flex-column site-container'>
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>Amazona</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </Nav>
              </Container>
            </Navbar>
          </header>
          <main>
            <Container className='mt-3'>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/product/:slug" element={<ProductPage/>}/>
              </Routes>
            </Container>
          </main>
          <footer >
            <p className='text-center'>&copy; 2022 All Rights Reserved | For Demo Purposes Only</p>
          </footer>
        </div>
    </Router>
  );
}

export default App;
