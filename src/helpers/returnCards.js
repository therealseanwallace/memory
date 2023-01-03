import Armus from '../assets/armus.webp';
import Brunt from '../assets/brunt.webp';
import Chang from '../assets/chang.webp';
import CrystallineEntity from '../assets/crystallineEntity.webp';

const cards = [
  {
    id: 1,
    name: 'Armus',
    quote: "I killed her... because I wanted to. It amused me.",
    image: Armus,
  },
  {
    id: 2,
    name: 'Liquidator Brunt',
    quote: "Your mother... is wearing clothes.",
    image: Brunt,
  },
  {
    id: 3,
    name: "General Chang",
    quote: "Cry 'Havoc!', and let slip the dogs of war.",
    image: Chang,
  },
  {
    id: 4,
    name: 'The Crystalline Entity',
    quote: "...",
    image: CrystallineEntity,
  },
]

const returnCards = (level) => {
  let numberOfCards = level + 3;
  const cardsToReturn = [];
  for (let i = 0; i < numberOfCards; i++) {
    cardsToReturn.push(cards[i]);
  }
  return cardsToReturn;
}

export default returnCards;