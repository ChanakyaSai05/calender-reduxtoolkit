export const getDay = (startDay, endDay) => {
  //3,31
  let day = [];
  for (let i = 0; i < startDay; i++) {
    day.push("");
  }
  for (let i = 1; i <= endDay; i++) {
    day.push(i);
  }
  return day;
  // ["","","",1,2,3...31]
};
