import React from 'react';
import { cards } from '../../../assets/data/cards';
import pile from '../../../assets/pile.png';
import Image from '../../atoms/Title/Image/Image';
import Hand from '../../molecules/Hand/Hand';

const Croupier = () => {
  return (
    <>
      <Image url={pile} alt="pile of cards" size={[13]} />
      <Hand isCroupier cards={cards.cards} />
    </>
  );
};

export default Croupier;
