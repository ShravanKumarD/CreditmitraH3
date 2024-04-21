
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import ResponsibleLending from './Pages/ResponsibleLending/ResponsibleLending';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurLendingPartners from './Pages/OurLendingPartners/OurLendingPartners';
import FAQ from './Pages/FAQ/FAQ';

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [window? window.location.href : null])
  return (
    <div className="App bg-dark">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home routePath="/"/>} />
          <Route path="/products" element={<Products routePath="/products"/>} />
          <Route path='/responsibleLending' element={<ResponsibleLending routePath="/responsibleLending"/>} />
          <Route path='/contact' element={<Contact routePath="/contact" />} /> 
          <Route path='/about' element={<AboutUs routePath="/about" />} /> 
          <Route path='/ourLendingPartners' element={<OurLendingPartners routePath="/ourLendingPartners" />} /> 
          <Route path='/faq' element={<FAQ routePath="/faq" />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
