import React, { useEffect, useState } from 'react';
import Hand from '../../molecules/Hand/Hand';

const Player = () => {
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
  return <>{cards.success ? <Hand cards={cards.cards} /> : 'Loading...'}</>;
};

export default Player;
