const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const getCurrentTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes; // the hour '0' should be '12'

  return {
    hours,
    minutes,
    ampm,
  };
};

export const getStockDate = (stockDate) => {
  const stockdate = new Date(stockDate); // Wednesday, June 15th, 2023
  return `${days[stockdate.getDay()]}, ${
    months[stockdate.getMonth()]
  } ${stockdate.getDate()}th, ${stockdate.getFullYear()}`;
};
