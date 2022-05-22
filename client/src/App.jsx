import './scss/index.scss'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Product from './components/Product';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
        <div>
          <header>
            <Link to="/">Amazona</Link>
          </header>
          <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product/:slug" element={<Product/>}/>
            </Routes>
          </main>
        </div>
    </Router>
  );
}

export default App;
