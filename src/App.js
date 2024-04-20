import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import ResponsibleLending from './Pages/ResponsibleLending/ResponsibleLending';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home routePath="/"/>} />
          <Route path="/products" element={<Products routePath="/products"/>} />
          <Route path='/responsibleLending' element={<ResponsibleLending routePath="/responsibleLending"/>} />
          <Route path='/contact' element={<Contact routePath="/contact" />} /> 
          <Route path='/about' element={<AboutUs routePath="/about" />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
