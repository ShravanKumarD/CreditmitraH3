import React, { useState } from 'react';
import * as XLSX from 'xlsx';

// Helper function to convert a string to camelCase
const toCamelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, '');
};

export default function Tudf() {
  const [excelData, setExcelData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // Convert sheet data into JSON (using the first row as headers)
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Clean up keys in each object
      const cleanedData = jsonData.map((row) => {
        const cleanedRow = {};
        Object.keys(row).forEach((key) => {
          // Convert keys to camelCase and remove extra spaces
          const cleanedKey = toCamelCase(key.trim());
          cleanedRow[cleanedKey] = row[key];
        });
        return cleanedRow;
      });

      console.log(cleanedData, "cleanedData");
      setExcelData(cleanedData);
    };

    reader.readAsArrayBuffer(file);
  };
  const consumerName = (name) => {
    const maxLength = 26;
    const formatNamePart = (part) => (part ? `${part.length.toString().padStart(2, '0')}${part}` : '');
  
    if (name.length > maxLength) {
      const splitIndex = name.lastIndexOf(' ', maxLength);
      
      const firstPart = splitIndex > -1 ? name.slice(0, splitIndex) : name.slice(0, maxLength);
      let remainingName = splitIndex > -1 ? name.slice(splitIndex + 1) : name.slice(maxLength);
      const secondPart = remainingName.slice(0, maxLength);
      remainingName = remainingName.slice(maxLength);
      const thirdPart = remainingName.slice(0, maxLength);
      remainingName = remainingName.slice(maxLength);
      const fourthPart = remainingName.slice(0, maxLength);
      remainingName = remainingName.slice(maxLength);
      const fifthPart = remainingName.slice(0, maxLength);
      return `01${formatNamePart(firstPart)}02${formatNamePart(secondPart)}03${formatNamePart(thirdPart)}04${formatNamePart(fourthPart)}05${formatNamePart(fifthPart)}`;
    } else {
      return `${name.length.toString().padStart(2, '0')}${name}`;
    }
  };
  

  const consumerAddress = (address) => {
    const maxLength = 40;
    const formatAddressPart = (part) => (part ? `${part.length.toString().padStart(2, '0')}${part}` : '');
  
    if (address.length > maxLength) {
      const splitIndex = address.lastIndexOf(' ', maxLength);
      
      const firstPart = splitIndex > -1 ? address.slice(0, splitIndex) : address.slice(0, maxLength);
      let remainingAddress = splitIndex > -1 ? address.slice(splitIndex + 1) : address.slice(maxLength);
      const secondPart = remainingAddress.slice(0, maxLength);
      remainingAddress = remainingAddress.slice(maxLength);
      const thirdPart = remainingAddress.slice(0, maxLength);
      remainingAddress = remainingAddress.slice(maxLength);
      const fourthPart = remainingAddress.slice(0, maxLength);
      remainingAddress = remainingAddress.slice(maxLength);
      const fifthPart = remainingAddress.slice(0, maxLength);
  

      return `01${formatAddressPart(firstPart)}02${formatAddressPart(secondPart)}03${formatAddressPart(thirdPart)}04${formatAddressPart(fourthPart)}05${formatAddressPart(fifthPart)}`;
    } else {
     
      return `${address.length.toString().padStart(2, '0')}${address}`;
    }
  };
  
  

  // const handleTxtDownload = () => {
  //   if (!excelData) return;
  
  //   // Define the fixed header (without dynamic content)
  //   const fixedHeader = `TUDF12007FP05839                    AGFI              ${excelData[0].dateReported}                              L00000                                                PN03N0101`;
  
  //   // Process each row to create content
  //   const txtContent = excelData.map((row) => {
  //     const consumerNameValue = row.consumerName ? consumerName(row.consumerName) : '';
  //     const consumerAddressValue = row.address1 ? consumerAddress(row.address1) : '';
  //     const memberName = '0204AGFI';
  //     const accNumber = row['curr/NewAccountNo'];
  //     const dateOpened = row['dateOpened/Disbursed'];
  //     const approvedAmount = row["highCredit/SanctionedAmt"];
  //     const currentBal = row.currentBalance;
  //     const emi = row.eMIAmount;
  
  //     // Build the record line for each record
  //     const recordLine = `${consumerNameValue}0708${row.dateOfBirth.toString().length}${row.dateOfBirth}0801${row.gender}03I010102010210${row.incomeTaxIDNumber}PT03T010110${row["telephoneNo.Mobile"]}030201PA03A0101${consumerAddressValue}0602${row.stateCode1}0706${row.pINCode1}080202TL04T0010110007FP05839${memberName}03${accNumber.length}${accNumber}040269050110808${dateOpened.length}${dateOpened}0908${row.dateOfLastPayment?.length}${row.dateOfLastPayment}${row.dateClosed ? `1008${row.dateClosed}` : ``}1108${row.dateReported}12${approvedAmount.toString().length}${approvedAmount}13${currentBal.toString().length}${currentBal}${row.amtOverdue ? `14${row.amtOverdue.toString().length}${row.amtOverdue}` : ``}${row.noOfDaysPastDue ? `${row.noOfDaysPastDue.toString().length}${row.noOfDaysPastDue}` : ``}26020140${emi.toString().length}${emi}ES02**`;
  
  //     return `                              ${recordLine}`;
  //   }) // Join all records with newlines
  
  //   // Combine the fixed header and the content
  //   const fullContent = fixedHeader + txtContent;
  
  //   // Create the Blob and download the file
  //   const blob = new Blob([fullContent], { type: 'text/plain' });
  //   const url = URL.createObjectURL(blob);
  
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'output.txt';
  //   document.body.appendChild(link);
  //   link.click();
  
  //   // Clean up
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(url);
  // };
  const handleTxtDownload = () => {
    if (!excelData) return;
  
    // Define the fixed header (without dynamic content)
    const fixedHeader = `TUDF12007FP05839                    AGFI              ${excelData[0].dateReported}                              L00000`
  
    // Process each row to create content
    const txtContent = excelData.map((row) => {
      const consumerNameValue = row.consumerName ? consumerName(row.consumerName) : '';
      const consumerAddressValue = row.address1 ? consumerAddress(row.address1) : '';
      const memberName = '0204AGFI';
      const accNumber = row['curr/NewAccountNo'];
      const dateOpened = row['dateOpened/Disbursed'];
      const approvedAmount = row["highCredit/SanctionedAmt"];
      const currentBal = row.currentBalance;
      const emi = row.eMIAmount;
  

      const recordLine = `PN03N0101${consumerNameValue}0708${row.dateOfBirth.toString().length}${row.dateOfBirth}0801${row.gender}03I010102010210${row.incomeTaxIDNumber}PT03T010110${row["telephoneNo.Mobile"]}030201PA03A0101${consumerAddressValue}0602${row.stateCode1}0706${row.pINCode1}080202TL04T0010110007FP05839${memberName}03${accNumber.length}${accNumber}040269050110808${dateOpened.length}${dateOpened}0908${row.dateOfLastPayment?.length}${row.dateOfLastPayment}${row.dateClosed ? `1008${row.dateClosed}` : ``}1108${row.dateReported}12${approvedAmount.toString().length}${approvedAmount}13${currentBal.toString().length}${currentBal}${row.amtOverdue ? `14${row.amtOverdue.toString().length}${row.amtOverdue}` : ``}${row.noOfDaysPastDue ? `${row.noOfDaysPastDue.toString().length}${row.noOfDaysPastDue}` : ``}26020140${emi.toString().length}${emi}ES02**`
  
      return `${recordLine}`;
    }).join('')
  let x = 'RLTR';
    // const fullContent = fixedHeader + txtContent + x;
    const fullContent = `${fixedHeader}${txtContent}${x}`;

    const blob = new Blob([fullContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'output.txt';
    document.body.appendChild(link);
    link.click();
  
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  

  return (
    <div>
      <h1>Excel to TXT Converter</h1>
      <div className="d-flex justify-content-center">
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        {excelData && (
          <button onClick={handleTxtDownload}>Download as TXT</button>
        )}
      </div>
    </div>
  );
}


