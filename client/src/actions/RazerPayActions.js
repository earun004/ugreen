import * as api from "../api";

export const payment = (amount) => async (dispatch) => {
  const paymentMoney = await api.payments(amount);
};
