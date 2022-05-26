import React, {useContext} from 'react'
import './scss/index.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import { Store } from './Store';

// Bootstrap

import Navbar from 'react-bootstrap/Navbar'
import NavDropDown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/esm/Badge';
import {LinkContainer} from 'react-router-bootstrap'

// Views

import ProductPage from './views/ProductPage';
import HomePage from './views/HomePage';
import Cart from './views/Cart';
import Signin from './views/Signin';
import Signup from './views/Signup';
import Shipping from './views/Shipping';
import Payment from './views/Payment';
import PlaceOrder from './views/PlaceOrder';
import Orders from './views/Orders';
import OrderHistory from './views/OrderHistory';
import Profile from './views/Profile';




function App() {

  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart, userInfo} = state


  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT'})
    localStorage.removeItem('userInfo')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }

  return (
    <Router>
        <div className='d-flex flex-column site-container'>
          <header>
            <ToastContainer position="bottom-center" limit={1}/>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <LinkContainer to="/" className="">
                  <Navbar.Brand>Amazona</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100 justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  { userInfo ? 
                    (<NavDropDown title={userInfo.name}>
                      <LinkContainer to="/profile">
                        <NavDropDown.Item>User Profile</NavDropDown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropDown.Item>Order History</NavDropDown.Item>
                      </LinkContainer>
                      <NavDropDown.Divider/>
                      <Link
                          className='dropdown-item'
                          to="#signout"
                          onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropDown>) 
                    : 
                    (<Link className="nav-link" to="/signin">Sign In</Link>)}
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <main>
            <Container className='mt-3'>
              <Routes>
                  <Route path="/" element={<HomePage/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/signin" element={<Signin/>}/>
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/shipping" element={<Shipping/>}/>
                  <Route path="/payment" element={<Payment/>}/>
                  <Route path="/placeorder" element={<PlaceOrder/>}/>
                  <Route path="/order/:id" element={<Orders/>}/>
                  <Route path="/orderhistory" element={<OrderHistory/>}/>
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
