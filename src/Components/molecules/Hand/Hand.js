import React from 'react';
import Image from '../../atoms/Title/Image/Image';
import deck from '../../../assets/deck.png';
import { StyledHand } from './Hand.styles';

const Hand = ({ isCroupier, cards }) => {
  return (
    <StyledHand>
      <Image url={'https://deckofcardsapi.com/static/img/JC.png'} alt="" size={[15]} />
      <Image url={isCroupier ? deck : 'https://deckofcardsapi.com/static/img/0C.png'} alt="" size={[15]} />
    </StyledHand>
  );
};

export default Hand;
