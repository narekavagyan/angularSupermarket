function makeText(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    if (i % 5 === 0 && i !== 0) {
      result += ' ';
    }
  }
  return result;
}

const randomObject = i => {
  const letters = 'abcdefghigklmnopqrstuvwxyz';
  const minPriceOld = 1500;
  const maxPriceOld = 2500;
  const minPriceNew = 500;
  const maxPriceNew = 1400;
  const minCount = 20;
  const maxCount = 35;
  const rNum1 = Math.floor(Math.random() * 26);
  const rNum2 = Math.floor(Math.random() * 26);
  const rNum3 = Math.floor(Math.random() * 26);
  const rNum4 = Math.floor(Math.random() * 26);
  const rNum5 = Math.floor(Math.random() * 26);
  const rPrice1 = Math.floor(
    Math.random() * (maxPriceOld - minPriceOld) + minPriceOld
  );
  const rPrice2 = Math.floor(
    Math.random() * (maxPriceNew - minPriceNew) + minPriceNew
  );
  const rCount = Math.floor(Math.random() * (maxCount - minCount) + minCount);

  return {
    name:
      letters[rNum1] +
      letters[rNum2] +
      letters[rNum3] +
      letters[rNum4] +
      letters[rNum5],
    oldPrice: rPrice1,
    newPrice: rPrice2,
    count: rCount,
    countity: 1,
    text: makeText(65),
    date: new Date().getTime() + rPrice1,
    id: i,
    feedbacks: []
  };
};

const generateRandomObjects = () => {
  const arr = [];
  for (let i = 0; i < 35; i++) {
    arr.push(randomObject(i));
  }
  return arr;
};

export default generateRandomObjects;
