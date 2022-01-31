import React, { useEffect, useState } from 'react';
import Image from '../../atoms/Title/Image/Image';
import Hand from '../../molecules/Hand/Hand';
import token from '../../../assets/images/token.png';
import redToken from '../../../assets/images/token_red.png';
import blueToken from '../../../assets/images/token_blue.png';
import { StackWrapper, Tokens } from '../../molecules/StackWrapper/StackWrapper.styles';

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
  return (
    <>
      <StackWrapper>
        <Image url={token} alt="" size={[10]} />
        <div>
          <h3>Stack</h3>
          <p>150$</p>
        </div>
      </StackWrapper>
      <div>
        <h3>Score</h3>
        <p>14</p>
      </div>
      {cards.success ? <Hand cards={cards.cards} /> : 'Loading...'}
      <div>
        <button>Bet</button>
        <button>Hit</button>
        <button>Stand</button>
        <button>Double down</button>
        <button>Insurance</button>
      </div>
      <StackWrapper>
        <Tokens>
          <Image url={redToken} alt="" size={[10]} />
          <Image url={blueToken} alt="" size={[10]} />
        </Tokens>
        <div>
          <h3>Bankroll</h3>
          <p>500$</p>
        </div>
      </StackWrapper>
    </>
  );
};

export default Player;
