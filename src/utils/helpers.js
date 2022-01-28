export const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};

export const cardValue = (value) => {
  if (value === 'JACK' || value === 'QUEEN' || value === 'KING') {
    return 11;
  } else {
    return Number(value);
  }
};
