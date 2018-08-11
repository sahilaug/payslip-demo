import ip from 'icepick';
import { ComputeActions } from '../actions';

const initialState = {
  payslips: [],
  computePayslipRequestStatus: null,
};

const computeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ComputeActions.COMPUTE_PAYSLIP_REQUEST:
      state = ip.setIn(state, ['computePayslipRequestStatus'], 'requesting');
      return state;
    case ComputeActions.COMPUTE_PAYSLIP_SUCCESS: {
      state = ip.setIn(state, ['computePayslipRequestStatus'], 'success');
      state = ip.setIn(
        state,
        ['payslips'],
        ip.push(state.payslips, action.payload),
      );
      return state;
    }
    case ComputeActions.COMPUTE_PAYSLIP_RESET: {
      return ip.setIn(state, ['computePayslipRequestStatus'], null);
    }
    default:
      return state;
  }
};

export { computeReducer };
