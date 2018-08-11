import React from 'react';
import { connect } from 'react-redux';
import { PayslipForm } from '../components';
import { ComputeActions } from '../actions';
import { history } from '../utils/history';

class Home extends React.PureComponent {
  componentDidMount() {
    this.props.computePayslipReset();
  }

  componentDidUpdate() {
    if (this.props.computePayslipRequestStatus === 'success') {
      history.push('/results');
    }
  }

  render() {
    return (
      <div className="uk-container uk-margin-top">
        <h1>Enter details to generate the Payslip</h1>
        <hr />
        <div className="uk-width-1-2@s">
          <PayslipForm
            onSubmit={this.props.computePayslip}
            requestStatus={this.props.computePayslipRequestStatus}
            submitError={this.props.computePayslipError}
          />
        </div>
        <hr />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    computePayslipRequestStatus: state.compute.computePayslipRequestStatus,
  };
}

Home = connect(mapStateToProps, { ...ComputeActions })(Home);

export { Home };
