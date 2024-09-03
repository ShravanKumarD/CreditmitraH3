import React, { useEffect, useState } from "react";
import "./datatable.css";
import Footer from "./../../Components/Footer/Footer";
import axios from 'axios';
let temp;
const FetchPanData = ({panNumber }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!panNumber || panNumber.length !== 10) return;
    const fetchData = async () => {
      try {
          const response = await axios.post(
              'https://ind.thomas.hyperverge.co/v1/fetchPANDetailed',
              {
                  pan: panNumber,
                  standardiseResponse: true
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'appId': '7gpr0g',
                      'appKey': 'soo4p3e30akh2e8t779m',
                      'transactionId': Math.floor(1000 + Math.random() * 9000).toString()
                  }
              }
          );
          
          // Assuming the API response structure
          const result = response.data;
          temp = result.result.data;
          setData(temp);
          console.log(temp, data.panData, 'result.data');
      } catch (error) {
          if (error.response) {
              // Handle errors from the server
              setError(error.response.data.message || error.message);
          } else if (error.request) {
              // Handle errors where no response was received
              setError('No response received from the API');
          } else {
              // Handle other errors
              setError(error.message);
          }
      } finally {
          setLoading(false);
      }
  };

    fetchData();
  }, []);
  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  //   if (!data || !data.panData) {
  //     return <div className="error">No data available</div>;
  //   }

  return (
    <div className="pan-table-container">
    <table className="data-table">
      <thead>
        <tr>    
          <th>Sl. No.</th>
          <th>Date of Birth</th>
          {/* <th>Aadhaar Linked</th> */}
          <th>Email</th>
          <th>Address</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Masked Aadhaar Number</th>
          <th>Middle Name</th>
          <th>Name</th>
          <th>PAN</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{color: "white"}}>1</td>
          <td style={{color: "white"}}>{data.panData.dateOfBirth || "N/A"}</td>
          {/* <td style={{color: "white"}}>{toString(data.panData.aadhaarLinked) || "N/A"}</td> */}
          <td style={{color: "white"}}>{data.panData.email || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.address.city || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.firstName || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.lastName || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.gender || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.maskedAadhaarNumber || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.middleName || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.name || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.pan || "N/A"}</td>
          <td style={{color: "white"}}>{data.panData.phone || "N/A"}</td>
        </tr>
      </tbody>
    </table>
    {/* <Footer/> */}
  </div>
  
  );
};

export default FetchPanData;
