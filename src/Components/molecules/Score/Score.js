import React from 'react';
import Results from './Results/Results';
import { ScoreWrapper } from './Score.styles';

const Score = ({ score, isTurn, isCroupier }) => {
  return (
    <ScoreWrapper>
      <h3>{isCroupier ? "Casino's " : 'Your '}score</h3>
      <p>{isTurn ? <Results score={score} /> : 'waiting...'}</p>
    </ScoreWrapper>
  );
};

export default Score;
