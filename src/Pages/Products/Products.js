import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProductsHeroSection from './ProductsHeroSection';
import DescriptionSection from './DescriptionSection';
import StepsImg from "../../assets/images/Products_Page_Loan_steps.png";
import StepsImg2 from "../../assets/images/eligiblity.png";
import { Link } from 'react-router-dom';


function Products(props) {
    return (
        <>
        <Header routePath={props.routePath}/>
        <section>
            <div className='page-container products-page'>
                <ProductsHeroSection />
                <DescriptionSection heading="Get Personal Loan in Simple Steps" points={["Check eligibility", "Apply for Loan", "Get funds in bank A/C within minutes"]} img={StepsImg}/>
                <DescriptionSection heading="Eligibility Criteria" points={["Indian Citizen ", "Age Limit: 21- 55 Years", "Salaried Individual", "Monthly Income: >INR 15,000"]} img={StepsImg2}/>
                <div className='btn-container text-center'>
                    
                    <buttton className="btn brand-primary py-3 px-4"> <Link to="/home" style={{color:"#fff"}}>Apply Now</Link></buttton>
                    <h6 style={{color:"#fff",fontSize:"20px",fontFamily:"poppins", marginTop:"3rem"}}>
                    At CreditMitra, we believe that financial empowerment begins with rapid loan solutions that cater to individual needs swiftly. Our instant personal loans are designed to provide you with the financial flexibility and freedom in minutes that you need to achieve your goals, whatever they may be
                    </h6>
                </div>
            </div>
            <Footer/>
        </section>
    </>
    );
}

export default Products;