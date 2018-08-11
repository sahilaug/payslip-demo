import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Results extends React.PureComponent {
  render() {
    const { payslips } = this.props;
    return (
      <div className="uk-container uk-margin-top">
        <h1>Payslips</h1>
        <hr />
        <table className="uk-table uk-table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Annual Salary</th>
              <th>Super Rate</th>
              <th>Pay Period</th>
              <th>Gross Income</th>
              <th>Net Income</th>
              <th>Income Tax</th>
              <th>Superannuation</th>
            </tr>
          </thead>
          <tbody>
            {payslips &&
              payslips.map(p => (
                <tr>
                  <td>
                    {p.firstName} {p.lastName}
                  </td>
                  <td>{p.annualSalary}</td>
                  <td>{p.superRate} %</td>
                  <td>{p.payPeriod}</td>
                  <td>{p.grossIncome}</td>
                  <td>{p.netIncome}</td>
                  <td>{p.incomeTax}</td>
                  <td>{p.superannuation}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <br />
        <Link to="/" className="uk-button uk-button-primary">
          Calculate Again
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    payslips: state.compute.payslips,
  };
}

Results = connect(mapStateToProps, {})(Results);

export { Results };
