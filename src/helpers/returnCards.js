import deepCopy from "./deepCopy";
import Armus from "../assets/armus.webp";
import Brunt from "../assets/brunt.webp";
import Chang from "../assets/chang.webp";
import CrystallineEntity from "../assets/crystallineEntity.webp";
import Dukat from "../assets/dukat.webp";
import Eddington from "../assets/eddington.webp";
import Khan from "../assets/khan.webp";
import Lore from "../assets/lore.webp";
import MirrorKirk from "../assets/mirrorKirk.webp";
import Moriarty from "../assets/moriarty.webp";
import Pressman from "../assets/pressman.webp";
import QImage from "../assets/qImage.jpeg";
import Queen from "../assets/queen.webp";
import Tomalak from "../assets/tomalak.webp";
import Tribbles from "../assets/tribbles.jpg";
import Vger from "../assets/vger.webp";
import Weyoun from "../assets/weyoun.webp";
import WhaleProbe from "../assets/whaleProbe.webp";
import LursaBetor from "../assets/lursaBetor.jpg";
import Winn from "../assets/winn.webp";

const cards = [
  {
    id: 1,
    image: Armus,
    clicked: false,
  },
  {
    id: 2,
    image: Brunt,
    clicked: false,
  },
  {
    id: 3,
    image: Chang,
    clicked: false,
  },
  {
    id: 4,
    image: CrystallineEntity,
    clicked: false,
  },
  {
    id: 5,
    image: Dukat,
    clicked: false,
  },
  {
    id: 6,
    image: Eddington,
    clicked: false,
  },
  {
    id: 7,
    image: Khan,
    clicked: false,
  },
  {
    id: 8,
    image: Lore,
    clicked: false,
  },
  {
    id: 9,
    image: MirrorKirk,
    clicked: false,
  },
  {
    id: 10,
    image: Moriarty,
    clicked: false,
  },
  {
    id: 11,
    image: Pressman,
    clicked: false,
  },
  {
    id: 12,
    image: QImage,
    clicked: false,
  },
  {
    id: 13,
    image: Queen,
    clicked: false,
  },
  {
    id: 14,
    image: Tomalak,
    clicked: false,
  },
  {
    id: 15,
    image: Tribbles,
    clicked: false,
  },
  {
    id: 16,
    image: Vger,
    clicked: false,
  },
  {
    id: 17,
    image: Weyoun,
    clicked: false,
  },
  {
    id: 18,
    image: WhaleProbe,
    clicked: false,
  },
  {
    id: 19,
    image: LursaBetor,
    clicked: false,
  },
  {
    id: 20,
    image: Winn,
    clicked: false,
  },
];

const returnUniqueCard = (resultsArray) => {
  if (!resultsArray) {
    resultsArray = [];
  }
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  const checkForMatch = resultsArray.find(obj => obj.id === card.id);
  if (checkForMatch) {
    return returnUniqueCard(resultsArray);
  }
  return deepCopy(card);
}

const returnCards = (level) => {
  let numberOfCards = level + 3;
  let resultsArray = [];
  for (let i = 0; i < numberOfCards; i++) {
    resultsArray.push(returnUniqueCard(resultsArray));
  }
  return resultsArray;

};


export default returnCards;

//cardsToReturn.push(deepCopy(cards[(Math.round(Math.random() * cards.length))]));
