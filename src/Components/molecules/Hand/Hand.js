import React from 'react';
import Image from '../../atoms/Title/Image/Image';
import deck from '../../../assets/images/deck.png';
import { StyledHand } from './Hand.styles';

const Hand = ({ isCroupier, cards, getScore }) => {
  return (
    <StyledHand>
      {cards.map((card, i) => (
        <React.Fragment key={i}>
          <Image
            url={isCroupier && i === 1 ? deck : card.images.png}
            alt={isCroupier && i === 1 ? 'card' : `${card.value} of ${card.suit}`}
            size={[13]}
          />
        </React.Fragment>
      ))}
    </StyledHand>
  );
};

export default Hand;
