import React from "react";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";

export default function FinanceManger(props) {
  return (
    <>
      <Header routePath={props.routePath} />
      <div className="JD-container">
        <h1 className="designation">Job profile: Finance Manager </h1>
        <div className="location">Location: Hyderabad </div>
        <h2>Job Brief</h2>
        <div className="head-line">
          We are a leading fintech company specialising in personal loans. Our
          mission is to provide accessible financial solutions to salaried
          individuals. In this role, you will be responsible for the overall
          financial management of the company. You will lead a team of financial
          professionals and oversee all aspects of the financial planning,
          budgeting, forecasting, and reporting processes. You will also be
          responsible for ensuring compliance with all relevant financial
          regulations.
        </div>
        <h2>Key Responsibilities</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Monitor the day-to-day financial operations within the company, such
            as payments, verification and accounting of invoices, and other
            transactions.
          </li>

          <li className="JobDescription">
            {" "}
            Preparation of MIS and financial data.
          </li>
          <li className="JobDescription">
            {" "}
            Establish and maintain financial policies, internal financial
            controls and procedures for the company.
          </li>
          <li className="JobDescription">
            {" "}
            Liaise with auditors to ensure appropriate monitoring of company
            finances is maintained.{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Candidate should have experience in GST filling.
          </li>
          <li className="JobDescription">
            {" "}
            Preparation of computation of Taxable Income and Filing of IT return
          </li>
        </ul>
        <h2>Requirements:</h2>
        <ul>
          <li className="JobDescription">
            {" "}
            Qualified CA with up to 3-6 years of experience from personal
            lending companies such as NBFCs or fintech platforms or banks.
          </li>
          <li className="JobDescription">
            Strong knowledge of NBFC accounting concepts & financial metrics.{" "}
          </li>
          <li className="JobDescription">
            {" "}
            Can independently lead monthly/annual book closure and statutory
            audits.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
