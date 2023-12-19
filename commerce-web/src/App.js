import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1>Nunes Sports - Produtos</h1>

      <BrowserRouter>
      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/produtos">Cadastro de Produtos</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/produtos" element={<Products/>}></Route>
        <Route path="/sobre" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
