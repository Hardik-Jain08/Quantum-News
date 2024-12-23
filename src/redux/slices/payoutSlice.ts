import { createSlice } from "@reduxjs/toolkit";

const payoutSlice = createSlice({
  name: "payout",
  initialState: {
    rates: {} as Record<string, number>,
    totalPayout: 0,
  },
  reducers: {
    setRate(state, action: { payload: { author: string; rate: number } }) {
      state.rates[action.payload.author] = action.payload.rate;
    },
    calculateTotal(state) {
      state.totalPayout = Object.values(state.rates).reduce((sum, rate) => sum + rate, 0);
    },
  },
});

export const { setRate, calculateTotal } = payoutSlice.actions;
export default payoutSlice.reducer;
