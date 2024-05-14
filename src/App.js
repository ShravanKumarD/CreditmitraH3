
import React , {useEffect}from 'react';
import { BrowserRouter, Route, Routes, useLocation  } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import ResponsibleLending from './Pages/ResponsibleLending/ResponsibleLending';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurLendingPartners from './Pages/OurLendingPartners/OurLendingPartners';
import FAQ from './Pages/FAQ/FAQ';
import GrievienceRedressal from './Pages/Policies/GrievienceRedressal';
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy';
import TermsAndConditions from './Pages/Policies/TermsAndConditions';
import FeaturedBlogs from './Pages/Blogs/FeaturedBlogs'
import InstantLoanWithCibilBlogPage from './Pages/Blogs/BlogPages/InstantLoanWithCibil/InstantLoanWithCibilBlogPage'
import ImprovingCibilRocketScienceBlogPage from './Pages/Blogs/BlogPages/ImprovingCibilRocketScience/ImprovingCibilRocketScienceBlogPage'

import EmergencyLoan from './Pages/Products/VariousPersonalLoans/EmergencyLoan';
import InstantPersonalLoan from './Pages/Products/VariousPersonalLoans/InstantPersonalLoan';
import MedicalLoan from './Pages/Products/VariousPersonalLoans/MedicalLoan';
import PersonalLoanforSalaried from './Pages/Products/VariousPersonalLoans/PersonalLoanforSalaried';
import TravelLoan from './Pages/Products/VariousPersonalLoans/TravelLoan';
import WeddingLoan from './Pages/Products/VariousPersonalLoans/WeddingLoan';

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation()
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0)
      
    }, [location.pathname])
    return children
  }
  return (
    <div className="App bg-dark">
      <BrowserRouter>
      <Wrapper>
      <Routes>
          <Route path="/" element={<Home routePath="/"/>} />
          <Route path="/products" element={<Products routePath="/products"/>} />
          <Route path='/responsibleLending' element={<ResponsibleLending routePath="/responsibleLending"/>} />
          <Route path='/contact' element={<Contact routePath="/contact" />} /> 
          <Route path='/about' element={<AboutUs routePath="/about" />} /> 
          <Route path='/ourLendingPartners' element={<OurLendingPartners routePath="/ourLendingPartners" />} /> 
          <Route path='/faq' element={<FAQ routePath="/faq" />} /> 
          <Route path='/grievienceredressal' element={<GrievienceRedressal routePath="/grievienceredressal" />} /> 
          <Route path='/privacypolicy' element={<PrivacyPolicy routePath="/privacypolicy" />} /> 
          <Route path='/termsAndConditions' element={<TermsAndConditions routePath="/termsAndConditions" />} /> 
          <Route path="/blogs" element={<FeaturedBlogs routePath="/blogs"/>} />
          {/* routes to blogs */}
          <Route path="/blogs/8-tips-to-improve-your-cibil-score" element={<InstantLoanWithCibilBlogPage routePath="/blogs/8-tips-to-improve-your-cibil-score"/>} />
          <Route path="/blogs/improving-your-cibil-score-is-not-rocket-science" element={<ImprovingCibilRocketScienceBlogPage routePath="/blogs/improving-your-cibil-score-is-not-rocket-science"/>} />
          {/* 8-tips-to-improve-your-cibil-score */}

          {/* product routes */}
          <Route path="/EmergencyLoan" element={<EmergencyLoan routePath="/EmergencyLoan"/>} />
          <Route path="/InstantPersonalLoan" element={<InstantPersonalLoan routePath="/InstantPersonalLoan"/>} />
          <Route path="/MedicalLoan" element={<MedicalLoan routePath="/MedicalLoan"/>} />
          <Route path="/PersonalLoanforSalaried" element={<PersonalLoanforSalaried routePath="/PersonalLoanforSalaried"/>} />
          <Route path="/TravelLoan" element={<TravelLoan routePath="/TravelLoan"/>} />
          <Route path="/WeddingLoan" element={<WeddingLoan routePath="/WeddingLoan"/>} />
                 
      </Routes>
      </Wrapper>
    </BrowserRouter>

    </div>
  );
}

export default App;
