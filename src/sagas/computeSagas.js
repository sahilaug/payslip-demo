import { takeLatest, fork, all, put } from 'redux-saga/effects';
import { ComputeActions } from '../actions';

function* computePayslip(action) {
  const {
    firstName,
    lastName,
    annualSalary,
    startDate,
    superRate,
  } = action.payload;
  yield put(ComputeActions.computePayslipRequest());
  // Logic

  const payPeriod = startDate;
  const grossIncome = Math.round(annualSalary / 12);

  let tax = 0;
  if (annualSalary > 180000) {
    tax = (annualSalary - 180000) * 0.45 + 54232;
  } else if (annualSalary > 87000) {
    tax = (annualSalary - 87000) * 0.37 + 19822;
  } else if (annualSalary > 37000) {
    tax = (annualSalary - 37000) * 0.325 + 3572;
  } else if (annualSalary > 18200) {
    tax = (annualSalary - 18200) * 0.19 + 3572;
  }
  const incomeTax = Math.round(tax / 12);
  const netIncome = Math.round(grossIncome - incomeTax);
  const superannuation = Math.round(grossIncome * superRate / 100);

  yield put(
    ComputeActions.computePayslipSuccess({
      firstName,
      lastName,
      annualSalary,
      superRate,
      payPeriod,
      grossIncome,
      incomeTax,
      netIncome,
      superannuation,
    }),
  );
}

const computeSagas = function* computeSagas() {
  yield all([fork(takeLatest, ComputeActions.COMPUTE_PAYSLIP, computePayslip)]);
};

export { computeSagas };
