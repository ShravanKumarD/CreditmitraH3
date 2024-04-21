import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import ProductsHeroSection from './ProductsHeroSection';
import DescriptionSection from './DescriptionSection';
import StepsImg from "../../assets/images/Products_Page_Loan_steps.png";
import StepsImg2 from "../../assets/images/eligiblity.png";


function Products(props) {
    return (
        <>
        <Header routePath={props.routePath}/>
        <section>
            <div className='page-container products-page'>
                <ProductsHeroSection />
                <DescriptionSection heading="Get Personal Loan in Simple Steps" points={["Check eligibility", "Apply for Loan", "Get funds in bank A/C within minutes"]} img={StepsImg}/>
                <DescriptionSection heading="Eligibility Criteria" points={["Indian Citizen ", "Age Limit: 21- 55 Years", "Salaried Individual", "Monthly Income: >INR 15,000"]} img={StepsImg2}/>
            </div>
            <Footer/>
        </section>
    </>
    );
}

export default Products;