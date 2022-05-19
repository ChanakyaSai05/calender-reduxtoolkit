import { createSlice } from "@reduxjs/toolkit";
import {
  selectedYear,
  selectedMonth,
  daysInMonth,
  monthDays,
} from "../utils/dateUtils";
import { getDay } from "../utils/calenderUtils";
const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`); //3
const endDay = daysInMonth(selectedYear, selectedMonth); //30
export const calenderSlice = createSlice({
  name: "user",
  initialState: {
    selectedYear,
    selectedMonth,
    startDay,
    endDay,
    days: getDay(startDay, endDay),
  },
  reducers: {
    CHANGE_MONTH: (state, action) => {
      const { selectedYear, selectedMonth } = action.payload;
      const startDay = monthDays(`${selectedMonth + 1}-01-${selectedYear}`);
      const endDay = daysInMonth(selectedYear, selectedMonth);
      const days = getDay(startDay, endDay);
      return { ...state, selectedMonth, selectedYear, days, startDay, endDay };
    },
  },
});
export const { CHANGE_MONTH } = calenderSlice.actions;
export const selectUser = (state) => state.user;
export default calenderSlice.reducer;
