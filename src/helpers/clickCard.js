function clickCard(e) {
  console.log('clickCard! e.target is: ', e.target);
  console.log('e.target.dataset.id is: ', e.target.dataset.id);
  console.log('this is: ', this);
}

export default clickCard;