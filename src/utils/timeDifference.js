// Function to calculate the time a news item was published

export const calculateTimeDifference = (date) => {
  const newsDate = new Date(date);
  const currentDate = new Date();

  const timeDifference = Math.abs(currentDate - newsDate);

  const differenceInHours = Math.round(timeDifference / (1000 * 60 * 60));

  return `${differenceInHours} hour(s) ago`;
};
