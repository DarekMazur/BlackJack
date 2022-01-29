export const getYear = () => {
  const date = new Date();
  const year = date.getFullYear();

  return year;
};

export const cardValue = (value, score) => {
  if (value === 'JACK' || value === 'QUEEN' || value === 'KING') {
    return 10;
  } else if (value === 'ACE') {
    return score < 12 ? 10 : 1;
  } else {
    return Number(value);
  }
};
