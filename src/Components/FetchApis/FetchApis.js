import React, { useState } from 'react';
import FetchPanData from './FetchPanData';
import Footer from '../Footer/Footer';
import "./datatable.css";

function FetchApis() {
  const [panNumber, setPanNumber] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setPanNumber(e.target.value.toUpperCase());
  };

  const validatePanNumber = (pan) => {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panPattern.test(pan);
  };

  const handleSubmit = () => {
    if (validatePanNumber(panNumber)) {
      setError('');
      setSubmitted(true);
    } else {
      setError('Invalid PAN number');
      setSubmitted(false);
    }
  };

  return (
    <>
      <div className="pan-container">
        <h1>Pan Details</h1>
        <div className="pan-input-container">
          {/* Example PAN: CYFPM3067A */}
          <input
            className="form-control"
            type="text"
            value={panNumber}
            onChange={handleInputChange}
            placeholder="Enter PAN Number"
          />
          <button className='brand-primary' style={{margin:"20px"}} onClick={handleSubmit}>
            Fetch Data
          </button>
          {error && <div className="error">{error}</div>}
        </div>
        {submitted && <FetchPanData panNumber={panNumber} />}
      </div>
      <Footer />
    </>
  );
}

export default FetchApis;
