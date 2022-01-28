import React from 'react';
import pile from '../../../assets/pile.png';
import Image from '../../atoms/Title/Image/Image';
import Hand from '../../molecules/Hand/Hand';

const Croupier = () => {
  return (
    <>
      <Image url={pile} alt="pile of cards" size={[15]} />
      <Hand isCroupier />
    </>
  );
};

export default Croupier;
