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

import Annorax from "../assets/annorax.webp";
import Culluh from "../assets/culluh.webp";
import Gorn from "../assets/gorn.webp";
import JackTheRipper from "../assets/jackTheRipper.webp";
import Kashyk from "../assets/kashyk.webp";
import Kruge from "../assets/kruge.jpg";
import Madred from "../assets/madred.webp";
import MirrorKira from "../assets/mirrorKira.webp";
import Mudd from "../assets/mudd.jpg";
import NeuralParasiste from "../assets/neuralParasite.webp";
import Parmen from "../assets/parmen.webp";
import Seska from "../assets/seska.webp";
import Soran from "../assets/soran.webp";
import Talosians from "../assets/talosians.webp";
import Thelev from "../assets/thelev.webp";
import Tholians from "../assets/tholians.webp";
import Vians from "../assets/vians.webp";
import Yarnek from "../assets/yarnek.webp";

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
  {
    id: 21,
    image: Annorax,
    clicked: false,
  },
  {
    id: 22,
    image: Culluh,
    clicked: false,
  },
  {
    id: 23,
    image: Gorn,
    clicked: false,
  },
  {
    id: 24,
    image: JackTheRipper,
    clicked: false,
  },
  {
    id: 25,
    image: Kashyk,
    clicked: false,
  },
  {
    id: 26,
    image: Kruge,
    clicked: false,
  },
  {
    id: 27,
    image: Madred,
    clicked: false,
  },
  {
    id: 28,
    image: MirrorKira,
    clicked: false,
  },
  {
    id: 29,
    image: Mudd,
    clicked: false,
  },
  {
    id: 30,
    image: NeuralParasiste,
    clicked: false,
  },
  {
    id: 31,
    image: Parmen,
    clicked: false,
  },
  {
    id: 32,
    image: Seska,
    clicked: false,
  },
  {
    id: 33,
    image: Soran,
    clicked: false,
  },
  {
    id: 34,
    image: Talosians,
    clicked: false,
  },
  {
    id: 35,
    image: Thelev,
    clicked: false,
  },
  {
    id: 36,
    image: Tholians,
    clicked: false,
  },
  {
    id: 37,
    image: Vians,
    clicked: false,
  },
  {
    id: 38,
    image: Yarnek,
    clicked: false,
  },
];

const returnUniqueCard = (resultsArray) => {
  if (!resultsArray) {
    resultsArray = [];
  }
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  const checkForMatch = resultsArray.find((obj) => obj.id === card.id);
  if (checkForMatch) {
    return returnUniqueCard(resultsArray);
  }
  return deepCopy(card);
};

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
