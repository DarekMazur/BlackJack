import React from 'react';

const Results = ({ score }) => {
  const Comment = (score) => {
    if (score > 21) {
      return (
        <p>
          {score} <span>lose</span>
        </p>
      );
    }
  };

  return (
    <>
      {Comment(score)}
      {/* <span>waiting...</span>
      <span>win</span>
      <span>BLACKJACK!</span> */}
    </>
  );
};

export default Results;
