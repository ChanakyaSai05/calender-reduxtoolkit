export const selectedYear = new Date().getFullYear();
export const selectedMonth = new Date().getMonth(); //4 may
export const daysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};
export const monthDays = (date) => {
  return new Date(date).getDay();
};
