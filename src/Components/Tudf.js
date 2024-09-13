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
console.log(workbook,'firstSheetName')
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
      setExcelData(cleanedData);
    };

    reader.readAsArrayBuffer(file);
  };

  const consumerName = (name) => {
    if (name.length > 26) {
      const splitIndex = name.lastIndexOf(' ', 26);
      const firstPart = splitIndex > -1 ? name.slice(0, splitIndex) : name.slice(0, 26);
      const secondPart = splitIndex > -1 ? name.slice(splitIndex + 1) : name.slice(26);
      return `${firstPart.length}${firstPart}${secondPart ? secondPart.length : ''}${secondPart || ''}`;
    } else {
      return `${name.length}${name}`;
    }
  };

  const consumerAddress = (address) => {
    if (address.length > 40) {
      const splitIndex = address.lastIndexOf(' ', 40);
      const firstPart = splitIndex > -1 ? address.slice(0, splitIndex) : address.slice(0, 40);
      const secondPart = splitIndex > -1 ? address.slice(splitIndex + 1) : address.slice(40);
      return `${firstPart.length}${firstPart}${secondPart ? secondPart.length :``}${secondPart ||``}`;
    } else {
      return `${address.length}${address}`;
    }
  };

  const handleTxtDownload = () => {
    if (!excelData) return;

    const firstRow = excelData[0];
    const consumerNameValue = firstRow.consumerName ? consumerName(firstRow.consumerName) : '';
    const consumerAddressValue = firstRow.address1 ? consumerAddress(firstRow.address1):'';
    const memberName = '0204AGFI';
    const accNumber = firstRow['curr/NewAccountNo'];
    const dateOpened=firstRow['dateOpened/Disbursed'];
    const approvedAmount=firstRow["highCredit/SanctionedAmt"];
    const currentBal = firstRow.currentBalance;
    const emi = firstRow.eMIAmount
    const fixedFirstLine = `TUDF12007FP05839                    AGFI              ${firstRow.dateReported}                              L00000                                                PN03N0101${consumerNameValue}0708${firstRow.dateOfBirth.length}${firstRow.dateOfBirth}0801${firstRow.gender}03I010102010210${firstRow.incomeTaxIDNumber}PT03T010110${firstRow["telephoneNo.Mobile"]}030201PA03A0101${consumerAddressValue}0602${firstRow.stateCode1}0706${firstRow.pINCode1}080202TL04T0010110007FP05839${memberName}03${accNumber.length}${accNumber}040269050110808${dateOpened.length}${dateOpened}0908${firstRow.dateOfLastPayment?.length}${firstRow.dateOfLastPayment}${firstRow.dateClosed?1008``(firstRow.dateClosed):``}1108${firstRow.dateReported}12${approvedAmount.toString().length}${approvedAmount}13${currentBal.toString().length}${currentBal}${firstRow.amtOverdue?`14${firstRow.amtOverdue.length}${firstRow.amtOverdue}`:``}${firstRow.noOfDaysPastDue?`${firstRow.noOfDaysPastDue.length}${firstRow.noOfDaysPastDue}`:``}26020140${emi.toString().length}${emi}ES02**`;

    const txtContent = [fixedFirstLine].join('\n')
    //   .concat(excelData.map((row) => JSON.stringify(row))) 
    //   .join('\n');

    const blob = new Blob([txtContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'TUDFoutput.txt';
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



// for multiple records

// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// // Helper function to convert a string to camelCase
// const toCamelCase = (str) => {
//   return str
//     .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
//       index === 0 ? match.toLowerCase() : match.toUpperCase()
//     )
//     .replace(/\s+/g, '');
// };

// export default function Tudf() {
//   const [excelData, setExcelData] = useState(null);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const data = new Uint8Array(e.target.result);
//       const workbook = XLSX.read(data, { type: 'array' });
//       const firstSheetName = workbook.SheetNames[0];
//       const worksheet = workbook.Sheets[firstSheetName];

//       // Convert sheet data into JSON (using the first row as headers)
//       const jsonData = XLSX.utils.sheet_to_json(worksheet);

//       // Clean up keys in each object
//       const cleanedData = jsonData.map((row) => {
//         const cleanedRow = {};
//         Object.keys(row).forEach((key) => {
//           // Convert keys to camelCase and remove extra spaces
//           const cleanedKey = toCamelCase(key.trim());
//           cleanedRow[cleanedKey] = row[key];
//         });
//         return cleanedRow;
//       });

//       console.log(cleanedData, "cleanedData");
//       setExcelData(cleanedData);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   const consumerName = (name) => {
//     if (name.length > 26) {
//       const splitIndex = name.lastIndexOf(' ', 26);
//       const firstPart = splitIndex > -1 ? name.slice(0, splitIndex) : name.slice(0, 26);
//       const secondPart = splitIndex > -1 ? name.slice(splitIndex + 1) : name.slice(26);
//       return `${firstPart.length}${firstPart}${secondPart ? secondPart.length : ''}${secondPart || ''}`;
//     } else {
//       return `${name.length}${name}`;
//     }
//   };

//   const consumerAddress = (address) => {
//     if (address.length > 40) {
//       const splitIndex = address.lastIndexOf(' ', 40);
//       const firstPart = splitIndex > -1 ? address.slice(0, splitIndex) : address.slice(0, 40);
//       const secondPart = splitIndex > -1 ? address.slice(splitIndex + 1) : address.slice(40);
//       return `${firstPart.length}${firstPart}${secondPart ? secondPart.length : ''}${secondPart || ''}`;
//     } else {
//       return `${address.length}${address}`;
//     }
//   };

//   const handleTxtDownload = () => {
//     if (!excelData) return;

//     const txtContent = excelData.map((row) => {
//       const consumerNameValue = row.consumerName ? consumerName(row.consumerName) : '';
//       const consumerAddressValue = row.address1 ? consumerAddress(row.address1) : '';
//       const memberName = '0204AGFI';
//       const accNumber = row['curr/NewAccountNo'];
//       const dateOpened = row['dateOpened/Disbursed'];
//       const approvedAmount = row["highCredit/SanctionedAmt"];
//       const currentBal = row.currentBalance;
//       const emi = row.eMIAmount;

//       // Build the fixed line for each record, and concatenate all records into a single line
//       return `TUDF12007FP05839                    AGFI              ${row.dateReported}                              L00000                                                PN03N0101${consumerNameValue}0708${row.dateOfBirth.length}${row.dateOfBirth}0801${row.gender}03I010102010210${row.incomeTaxIDNumber}PT03T010110${row["telephoneNo.Mobile"]}030201PA03A0101${consumerAddressValue}0602${row.stateCode1}0706${row.pINCode1}080202TL04T0010110007FP05839${memberName}03${accNumber.length}${accNumber}040269050110808${dateOpened.length}${dateOpened}0908${row.dateOfLastPayment?.length}${row.dateOfLastPayment}${row.dateClosed ? `1008${row.dateClosed}` : ``}1108${row.dateReported}12${approvedAmount.toString().length}${approvedAmount}13${currentBal.toString().length}${currentBal}${row.amtOverdue ? `14${row.amtOverdue.toString().length}${row.amtOverdue}` : ``}${row.noOfDaysPastDue ? `${row.noOfDaysPastDue.toString().length}${row.noOfDaysPastDue}` : ``}26020140${emi.toString().length}${emi}ES02**`;
//     }).join('\n'); // This will join all the records into a single block, separated by new lines.

//     const blob = new Blob([txtContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'output.txt';
//     document.body.appendChild(link);
//     link.click();

//     // Clean up
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <h1>Excel to TXT Converter</h1>
//       <div className="d-flex justify-content-center">
//         <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
//         {excelData && (
//           <button onClick={handleTxtDownload}>Download as TXT</button>
//         )}
//       </div>
//     </div>
//   );
// }
