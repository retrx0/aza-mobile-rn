export const numberWithCommas = (number: number | string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const transfromDataString = (dataString: string) => {
  const newDate = new Date(dataString);
  return `${newDate.toDateString()} ${newDate.getUTCHours()}:${newDate.getMinutes()}`;
};
