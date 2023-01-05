function checkRoundComplete() {
  for (let i = 0; i < this.cards.length; i++) {
    const element = this.cards[i];
    if (!element.clicked) {
      return false;
    }
  }
  return true;
};

export default checkRoundComplete;