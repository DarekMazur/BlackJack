import React, { useEffect, useState } from 'react';
import Image from '../../atoms/Title/Image/Image';
import Hand from '../../molecules/Hand/Hand';
import token from '../../../assets/images/token.png';
import redToken from '../../../assets/images/token_red.png';
import blueToken from '../../../assets/images/token_blue.png';
import { StackWrapper, Tokens } from '../../molecules/StackWrapper/StackWrapper.styles';
import Score from '../../molecules/Score/Score';
import { cardValue } from '../../../utils/helpers';

const Player = () => {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (cards) {
      cards.forEach((card) => setScore((prevState) => prevState + cardValue(card.value, card.value + score)));
    }
  }, [cards]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_LINK}/${window.localStorage.deckID ? window.localStorage.deckID : 'new/shuffle/?deck_count=6'}`)
      .then((res) => res.json())
      .then((data) => {
        setDeck(data);
        setRemaining(data.remaining);
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
          setCards(data.cards);
          setRemaining(data.remaining);
        })
        .catch((err) => console.log(err.message));
    }
  }, [deck]);

  const handleHit = () => {
    fetch(`${process.env.REACT_APP_API_LINK}/${deck.deck_id}/draw/?count=1`)
      .then((res) => res.json())
      .then((data) => {
        setScore(0);
        setRemaining(data.remaining);
        setCards((cards) => [...cards, ...data.cards]);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <StackWrapper>
        <Image url={token} alt="" size={[10]} />
        <div>
          <h3>Stack</h3>
          <p>150$</p>
        </div>
      </StackWrapper>
      <Score score={score} isTurn />
      {cards?.length !== 0 ? <Hand cards={cards} /> : 'Loading...'}

      <div>
        <button>Bet</button>
        <button isActive={score < 22} onClick={handleHit}>
          Hit
        </button>
        <button isActive={score < 22}>Stand</button>
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
