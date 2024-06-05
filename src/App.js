
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
import GrievanceRedressal from './Pages/Policies/GrievanceRedressal';
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy';
import TermsAndConditions from './Pages/Policies/TermsAndConditions';
import FeaturedBlogs from './Pages/Blogs/FeaturedBlogs'
import EightTipsToImproveYourCibilScoreBlogPage from './Pages/Blogs/BlogPages/EightTipsToImproveYourCibilScore/EightTipsToImproveYourCibilScoreBlogPage'
import ImprovingCibilRocketScienceBlogPage from './Pages/Blogs/BlogPages/ImprovingCibilRocketScience/ImprovingCibilRocketScienceBlogPage'
import PersonalLoansVSCreditCardsBlogPage from './Pages/Blogs/BlogPages/PersonalLoansVSCreditCards/PersonalLoansVSCreditCardsBlogPage'
import InstantLoanWithLowCIBIL from './Pages/Blogs/BlogPages/InstantLoanWithLowCIBIL/InstantLoanWithLowCIBILBlogPage'
import AvoidMistakesApplyingPersonalLoans from './Pages/Blogs/BlogPages/AvoidMistakesApplyingPersonalLoans/AvoidMistakesApplyingPersonalLoansBlogPage'

import EmergencyLoan from './Pages/Products/VariousPersonalLoans/EmergencyLoan';
import InstantPersonalLoan from './Pages/Products/VariousPersonalLoans/InstantPersonalLoan';
import MedicalLoan from './Pages/Products/VariousPersonalLoans/MedicalLoan';
import PersonalLoanforSalaried from './Pages/Products/VariousPersonalLoans/PersonalLoanforSalaried';
import TravelLoan from './Pages/Products/VariousPersonalLoans/TravelLoan';
import WeddingLoan from './Pages/Products/VariousPersonalLoans/WeddingLoan';

import Calculator from './Pages/Calculators/PersonalEmiCalculator/Calculator';

import Sitemap from './Components/SEO/Sitemap';
import UnderstandingPersonalLoanRecovery from './Pages/Blogs/BlogPages/UnderstandingPersonalLoanRecovery/UnderstandingPersonalLoanRecovery';
import InstantPersonalsLoansAtHyd from "./Components/PersonalsLoansDropDown/InstantPersonalLoansAtHyd";
import InstantPersonalLoansAtBangalore from './Components/PersonalsLoansDropDown/InstantPersonalLoansAtBangalore';
import InstantPersonalLoansAtMumbai from './Components/PersonalsLoansDropDown/InstantPersonalLoansAtMumbai';
import WeAreHiring from './Pages/HiringPages/WeAreHiring';

import TawkMessengerThing from './Components/Chatbot/Chatbot';

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
          <Route path='/grievanceredressal' element={<GrievanceRedressal routePath="/grievanceredressal" />} /> 
          <Route path='/privacypolicy' element={<PrivacyPolicy routePath="/privacypolicy" />} /> 
          <Route path='/termsAndConditions' element={<TermsAndConditions routePath="/termsAndConditions" />} /> 
          <Route path="/blogs" element={<FeaturedBlogs routePath="/blogs"/>} />
          {/* routes to blogs */}
          <Route path="/blogs/8-tips-to-improve-your-cibil-score" element={< EightTipsToImproveYourCibilScoreBlogPage routePath="/blogs/8-tips-to-improve-your-cibil-score"/>} />
          <Route path="/blogs/improving-your-cibil-score-is-not-rocket-science" element={<ImprovingCibilRocketScienceBlogPage routePath="/blogs/improving-your-cibil-score-is-not-rocket-science"/>} />
          <Route path="/blogs/understanding-personal-loan-recovery" element={<UnderstandingPersonalLoanRecovery routePath="/blogs/understanding-personal-loan-recovery"/>}/>
          <Route path="/blogs/personal-loans-vs-credit-cards" element={<PersonalLoansVSCreditCardsBlogPage routePath="/blogs/personal-loans-vs-credit-cards"/>}/>
          <Route path="/blogs/how-to-get-an-instant-loans-with-low-cibil-score" element={<InstantLoanWithLowCIBIL routePath="/blogs/how-to-get-an-instant-loans-with-low-cibil-score"/>}/>
          <Route path="/blogs/avoid-these-mistakes-while-applying-for-personal-loans" element={<AvoidMistakesApplyingPersonalLoans routePath="/blogs/avoid-these-mistakes-while-applying-for-personal-loans"/>}/>


          {/* blogs end */}

          {/* product routes */}
          <Route path="/emergency-loan" element={<EmergencyLoan routePath="/emergency-loan"/>} />
          <Route path="/instant-personal-loan-online" element={<InstantPersonalLoan routePath="/instant-personal-loan-online"/>} />
          <Route path="/medical-loan" element={<MedicalLoan routePath="/medical-loan"/>} />
          <Route path="/personal-loan-for-salaried" element={<PersonalLoanforSalaried routePath="/personal-loan-for-salaried"/>} />
          <Route path="/travel-loan" element={<TravelLoan routePath="/travel-loan"/>} />
          <Route path="/marriage-loan" element={<WeddingLoan routePath="/marriage-loan"/>} />
                 
          {/* Calculator routes */}
          <Route path="calculator" element={<Calculator routePath="calculator"/>}/>

          {/* Sitemap Route */}
          <Route path="/sitemap.xml" element={<Sitemap />} />

          {/* Instant-Personals-Loans-dropdown in Footer */}
          <Route path="/instant-personal-loan-hyderabad" element={<InstantPersonalsLoansAtHyd routePath="/http://www.creditmitra.in/instant-personal-loan-hyderabad"/>}/>
         <Route path="/instant-personal-loan-Bangalore" element={<InstantPersonalLoansAtBangalore routePath="/instant-personal-loan-Bangalore"/>}/>
        <Route  path='/instant-personal-loan-mumbai' element={<InstantPersonalLoansAtMumbai routePath="/instant-personal-loan-mumbai"/>}/>
        <Route path="/we-are-hiring" element={<WeAreHiring routePath="we-are-hiring"/>}/>
      </Routes>
      </Wrapper>
    </BrowserRouter>
    <TawkMessengerThing />

    </div>
  );
}

export default App;
