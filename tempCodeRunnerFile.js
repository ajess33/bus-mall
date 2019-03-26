function getRandomIndex() {
  var indexArr = [];
  var index;
  // var index = Math.floor(Math.random() * 20);
  for (var i = 0; i < 3; i++) {
    index = Math.floor(Math.random() * 20);
    for (var j = 0; j < indexArr.length; j++) {
      if (index === indexArr[j]) {
        index = Math.floor(Math.random() * 20);
        indexArr.push(index);
      } else {
        indexArr.push(index);
      }
    }
  }
  return indexArr;
}

console.log(getRandomIndex());