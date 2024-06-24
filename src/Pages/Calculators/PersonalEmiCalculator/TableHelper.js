import React, { useState } from "react";
import "./tableHelper.css";

function TableHelper({ principal, roiAnnualyPercent, tenureMonthly }) {
  const roiMonthly = roiAnnualyPercent / (12 * 100);

  const emi =
    (principal * roiMonthly) / (1 - Math.pow(1 + roiMonthly, -tenureMonthly));

  const dateRightNow = new Date().toLocaleString();

  function calculateBalances(principal, roiMonthly, tenureMonthly, emi) {
    let balances = [];
    for (let month = 1; month <= tenureMonthly; month++) {
      let openingBalance =
        month === 1 ? principal : balances[month - 2].closingBalance;
      let interest = openingBalance * roiMonthly;
      let principalComponent = emi - interest;
      let closingBalance = openingBalance - principalComponent;

      balances.push({
        month,
        openingBalance,
        interest,
        principalComponent,
        closingBalance,
      });
    }
    return balances;
  }

  const balances = calculateBalances(principal, roiMonthly, tenureMonthly, emi);

  console.log(balances);
  console.log(balances[0]);

  const [displayLimit, setDisplayLimit] = useState(6);

  const viewMore = () => {
    setDisplayLimit(balances.length);
  };

  return (
    <div>
      <h1 className="emi-table-title">EMI Schedule</h1>
      <div className="emi-table-container">
        <table className="emi-table">
          <thead>
            <tr>
              <th className="emi-table-th">Month</th>
              <th className="emi-table-th">Opening Balance</th>
              <th className="emi-table-th">Principal</th>
              <th className="emi-table-th">Interest</th>
              <th className="emi-table-th emi-table-td-closing">
                Closing Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {balances.slice(0, displayLimit).map((balance, index) => (
              <tr key={index}>
                <td className="emi-table-td">{balance.month}</td>
                <td className="emi-table-td">
                  {Number(balance.openingBalance).toFixed(0)}
                </td>
                <td className="emi-table-td">
                  {Number(balance.principalComponent).toFixed(0)}
                </td>
                <td className="emi-table-td">
                  {Number(balance.interest).toFixed(0)}
                </td>
                <td className="emi-table-td emi-table-td-closing">
                  {Number(balance.closingBalance).toFixed(0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {displayLimit < balances.length && (
        <div className="view-more-container">
          <button onClick={viewMore} className="view-more">
            View More
          </button>
        </div>
      )}
      <br />
    </div>
  );
}

export default TableHelper;
