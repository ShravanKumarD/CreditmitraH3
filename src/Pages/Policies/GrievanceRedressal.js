import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header/Header";
function GrievienceRedressal(props) {
  return (
    <>
       <Header routePath={props.routePath} />
       <div className="main" style={{color:"#fff",padding:"1rem"  }}>
       <h1 className="text-center">GRIEVANCE REDRESSAL POLICY OF CREDITMITRA</h1>

      <h2>PREAMBLE</h2>
      <p>
        CreditMitra or “We” or “Our” is a fin-tech lending platform
        (“Platform”). We are committed towards customer satisfaction and have
        put together the undermentioned customer Grievance Redressal Policy
        (“Policy”) for an effective resolution of all grievances/complaints
        received from our customers. We make sure that our customers feel secure
        and heard while using the Platform.
      </p>
      <p>
        We aim to resolve any complaint or grievance which may arise as a result
        of any gap in the promised and delivered services. This shall also apply
        to all queries and/or feedback received from our customers. We encourage
        our customers to provide feedback in respect of our services and aim to
        improve the quality of our products and services.
      </p>
      <p>
        The motive of this Policy is to reduce customer grievances through
        appropriate redressal mechanisms. We have put in place a very robust and
        customer-friendly structure to ensure that all your grievances are
        resolved in a timely and effective manner. This structure is approved by
        the Board of Directors.
      </p>

      <h2>GOVERNING PRINCIPLES</h2>
      <ol>
        <li>
          Treating the customer in a fair and respectful manner while redressing
          their grievances and queries.
        </li>
        <li>
          Making the process of grievance redressal for customers efficient and
          hassle-free.
        </li>
        <li>
          Timely resolution of all grievances is necessary for business growth
          and accordingly, complaints raised by customers shall be dealt with
          courtesy and resolved in a timely manner.
        </li>
        <li>
          Helping customers at all stages of grievance redressal and making them
          aware of their right(s) to approach the higher stage of grievance
          redressal.
        </li>
      </ol>

      <h2>CHANNELS FOR REGISTRATION OF COMPLAINTS</h2>
      <p>
        E-mail: customers can send an email for redressal of issues at the email
        id(s) as mentioned hereunder in this Policy.
      </p>

      <h2>POLICY REVISION</h2>
      <p>
        This Policy may be revised as and when there are any new changes
        required in handling complaints / grievances of the customer.
      </p>

      <h2>GRIEVANCE REDRESSAL PROCESS</h2>
      <p>
        To make the grievance redressal mechanism more meaningful and effective,
        Our management has laid down an escalation mechanism in compliance with
        various applicable regulations. The management will periodically review
        the effectiveness of grievance redressal mechanism escalation matrix. We
        have created the following escalation system for our customers:
      </p>

      <h2>Level 1</h2>
      <ul>
        <li>
          Customers can reach out to our Support Team at{" "}
          <a href="mailto:support@creditmitra.in">support@creditmitra.in</a> for
          any query regarding our services. Customers shall ensure that they
          quote their Loan ID number in every correspondence with Creditmitra
          regarding their grievances. Any complaint registered has to be
          acknowledged by the Support Team.
        </li>
        <li>
          CreditMitra is determined to provide the first response to the
          customer within 48 hours of the receipt of the complaint.
        </li>
        <li>
          CreditMitra aims to resolve all support-related complaints within 10
          business days (and 30 business days for cases involving fraud).
        </li>
        <li>
          The aforementioned timelines may change depending upon the nature and
          complexity of grievances.
        </li>
        <li>
          In case the customer is not satisfied with the redressal provided at
          Level 1, complaints can be escalated to Level 2.
        </li>
      </ul>

      <h2>Level 2</h2>
      <p>Grievance Officer</p>
      <ul>
        <li>
          Customers can reach out to the Grievance Redressal Officer at{" "}
          <a href="mailto:grievance@creditmitra.in">grievance@creditmitra.in</a>{" "}
          (“GRO”) for any grievance regarding our services or products.
        </li>
        <li>
          Working Hours: Monday-Friday (except public holidays), 9:30 am to 6:30
          pm
        </li>
        <li>
          CreditMitra’s GRO is determined to provide the first response to the
          customer within 24 hours of receiving the complaint.
        </li>
        <li>
          The GRO aims to resolve all grievances/complaints within 7 business
          days (and 30 business days in cases where retrieval of documents and
          old records is required).
        </li>
        <li>
          In case the customer is not satisfied with the redressal provided at
          Level 2, complaints can be escalated to Level 3.
        </li>
      </ul>

      <h2>Level 3</h2>
      <p>Grievance Nodal Officer</p>
      <ul>
        <li>
          Customers can reach out to the Grievance Nodal Officer at the
          below-mentioned contact details:
        </li>
        <li>Name: Murthy Balaji</li>
        <li>
          Email:{" "}
          <a href="mailto:grievance@creditmitra.in">grievance@creditmitra.in</a>
        </li>
        <li>
          Working Hours: Monday-Friday (except public holidays), 9:30 am to 6:30
          pm
        </li>
        <li>
          We are determined to provide the first response to the customer within
          24 hours of receiving the complaint.
        </li>
        <li>
          We aim to resolve all grievances/complaints within 7 business days.
        </li>
      </ul>
      <Footer />
    </div>
    </>
  );
}

export default GrievienceRedressal;
