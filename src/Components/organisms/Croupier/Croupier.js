import React, { useEffect, useState } from 'react';
import pile from '../../../assets/images/pile.png';
import Image from '../../atoms/Image/Image';
import Hand from '../../molecules/Hand/Hand';
import Score from '../../molecules/Score/Score';

const Croupier = () => {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LINK}/${window.localStorage.deckID ? window.localStorage.deckID : 'new/shuffle/?deck_count=6'}`)
      .then((res) => res.json())
      .then((data) => {
        setDeck(data);
        if (!window.localStorage.deckID) {
          window.localStorage.setItem('deckID', data.deck_id);
        }
      });
  }, []);

  useEffect(() => {
    if (deck.deck_id) {
      fetch(`${process.env.REACT_APP_API_LINK}/${deck.deck_id}/draw/?count=2`)
        .then((res) => res.json())
        .then((data) => {
          setCards(data);
        })
        .catch((err) => console.log(err.message));
    }
  }, [deck]);

  return (
    <>
      {/* <Image url={pile} alt="pile of cards" size={[13]} /> */}
      {cards.success ? <Hand isCroupier cards={cards.cards} /> : 'Loading...'}
      <Score isCroupier />
    </>
  );
};

export default Croupier;
