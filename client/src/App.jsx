import './scss/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'

import ProductPage from './views/ProductPage';
import HomePage from './views/HomePage';

function App() {
  return (
    <Router>
        <div className='d-flex flex-column site-container'>
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>Amazona</Navbar.Brand>
                </LinkContainer>
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
