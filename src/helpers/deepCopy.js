const deepCopy = (object) => {
  const objectAsString = JSON.stringify(object);
  const objectAsObject = JSON.parse(objectAsString);
  return objectAsObject;
}

export default deepCopy;