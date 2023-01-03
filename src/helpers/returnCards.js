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
import LursaBetor from "../assets/lursaBetor.webp";
import Winn from "../assets/winn.webp";


const cards = [
  {
    id: 1,
    name: "Armus",
    quote: "I killed her... because I wanted to. It amused me.",
    image: Armus,
  },
  {
    id: 2,
    name: "Brunt",
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
    name: "The Crystalline Entity",
    quote: "...",
    image: CrystallineEntity,
  },
  {
    id: 5,
    name: "Dukat",
    quote: "I'm a much more complicated man than you give me credit for.",
    image: Dukat,
  },
  {
    id: 6,
    name: "Eddington",
    quote: "All right, Javert. I'll give you what you want: me!" ,
    image: Eddington,
  },
  {
    id: 7,
    name: "Khan Noonien Singh",
    quote: "For hate's sake, I spit my last breath at thee!",
    image: Khan,
  },
  {
    id: 8,
    name: "Lore",
    quote: "Often Wrong's got a broken heart. Can't even tell his boys apart!",
    image: Lore,
  },
  {
    id: 9,
    name: "Mirror Kirk",
    quote: "Whatever your game is, I'll play it.",
    image: MirrorKirk,
  },
  {
    id: 10,
    name: "James Moriarty (hologram)",
    quote: "Now, dear lady, will that be one lump or two? ",
    image: Moriarty,
  },
  {
    id: 11,
    name: "James Pressman",
    quote: "I'll bet you never thought you'd see me again!",
    image: Pressman,
  },
  {
    id: 12,
    name: "Q",
    quote: "Picard never hit me!",
    image: QImage,
  },
  {
    id: 13,
    name: "The Borg Queen",
    quote: "I am the beginning, the end, the one who is many.",
    image: Queen,
  },
  {
    id: 14,
    name: "Tomalak",
    quote: "You doubt my good faith?",
    image: Tomalak,
  },
  {
    id: 15,
    name: "Tribbles",
    quote: "*tribble noises*",
    image: Tribbles,
  },
  {
    id: 16,
    name: "V'ger",
    quote: "...",
    image: Vger,
  },
  {
    id: 17,
    name: "Weyoun",
    quote: "Why be a god if there's no one to worship you?",
    image: Weyoun,
  },
  {
    id: 18,
    name: "The Whale Probe",
    quote: "...",
    image: WhaleProbe,
  },
  {
    id: 19,
    name: "Lursa and B'Etor",
    quote: "I hope for your sake you were initiating a mating ritual.",
    image: LursaBetor,
  },
  {
    id: 20,
    name: "Winn Adami",
    quote: "Their love is strong. So is their wrath.",
    image: Winn,
  }
];

const returnCards = (level) => {
  let numberOfCards = level + 3;
  const cardsToReturn = [];
  for (let i = 0; i < numberOfCards; i++) {
    cardsToReturn.push(cards[i]);
  }
  return cardsToReturn;
};

export default returnCards;
