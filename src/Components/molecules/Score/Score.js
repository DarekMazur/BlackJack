import React from 'react';
import { ScoreWrapper } from './Score.styles';

const Score = ({ score, isTurn }) => {
  return (
    <ScoreWrapper>
      <h3>Score</h3>
      <p>{isTurn ? score : 'waiting...'}</p>
    </ScoreWrapper>
  );
};

export default Score;
