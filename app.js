// Define a totalPageClicks variable to keep track of total selections (25)
var totalPageClicks = 0;

// Define allProducts array
Product.all = [];

// Define Product constructor
function Product(path) {
  this.totalClicks = 0;
  this.totalViews = 0;
  this.imagePath = path;

  // Define various products to be constructed and add to allProducts array
  Product.all.push(this);
}

var bagImg = new Product('img/bag.jpg');
var bananaImg = new Product('img/banana.jpg');
var bathroomImg = new Product('img/bathroom.jpg');
var bootsImg = new Product('img/boots.jpg');
var breakfastImg = new Product('img/breakfast.jpg');
var bubblegumImg = new Product('img/bubblegum.jpg');
var chairImg = new Product('img/chair.jpg');
var cthulhuImg = new Product('img/cthulhu.jpg');
var dogDuckImg = new Product('img/dog-duck.jpg');
var dragonImg = new Product('img/dragon.jpg');
var penImg = new Product('img/pen.jpg');
var petSweepImg = new Product('img/pet-sweep.jpg');
var scissorsImg = new Product('img/scissors.jpg');
var sharkImg = new Product('img/shark.jpg');
var sweepImg = new Product('img/sweep.png');
var tauntaunImg = new Product('img/tauntaun.jpg');
var unicornImg = new Product('img/unicorn.jpg');
var usbImg = new Product('img/usb.gif');
var waterCanImage = new Product('img/water-can.jpg');
var wineImg = new Product('img/wine-glass.jpg');

// Define displayRandomProduct
var elImgOne = document.getElementById('image-one');
var elImgTwo = document.getElementById('image-two');
var elImgThree = document.getElementById('image-three');

function displayRandomProducts() {
  var index = getRandomIndex();
  elImgOne.src = Product.all[index[0]].imagePath;
  Product.all[index[0]].totalViews += 1;
  elImgTwo.src = Product.all[index[1]].imagePath;
  Product.all[index[1]].totalViews += 1;
  elImgThree.src = Product.all[getRandomIndex()[2]].imagePath;
  Product.all[index[2]].totalViews += 1;
}
displayRandomProducts();

//! Check for duplicates
function getRandomIndex() {
  var indexArr = [];
  for (var i = 0; i < 3; i++) {
    indexArr.push(Math.floor(Math.random() * 20));
  }
  return indexArr;
}

// *Define displayResults function
// - calculate clicks to view ratio
// - get elements from DOM
// - set text content of elements to results of your calc

// *Define handleClicks function that takes in an event
// - increment totalPageClicks
// - increment totalClicks on product that was clicked
// - check if totalPageClicks > 25
// - display results
// - else if totalPageClicks != 25
// - call displayRandomProduct

// - add click event listener to products to calls handleClick

// for (var i = 0; i < 3; i++) {
//   index = Math.floor(Math.random() * 20);
//   for (var j = 0; j < indexArr.length; j++) {
//     if (index === indexArr[j]) {
//       index = Math.floor(Math.random() * 20);
//       indexArr.push(index);
//     } else {
//       indexArr.push(index);
//     }
//   }
// }
// return indexArr;
