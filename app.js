// Define a totalPageClicks variable to keep track of total selections (25)
var totalPageClicks = 0;

// Define allProducts array
Product.all = [];

// Define Product constructor
function Product(path, name) {
  this.totalClicks = 0;
  this.totalViews = 0;
  this.imagePath = path;
  this.name = name;

  // Define various products to be constructed and add to allProducts array
  Product.all.push(this);
}

var bagImg = new Product('img/bag.jpg', 'bag');
var bananaImg = new Product('img/banana.jpg', 'banana');
var bathroomImg = new Product('img/bathroom.jpg', 'bathroomImg');
var bootsImg = new Product('img/boots.jpg', 'boots');
var breakfastImg = new Product('img/breakfast.jpg', 'breakfast');
var bubblegumImg = new Product('img/bubblegum.jpg', 'bubblegum');
var chairImg = new Product('img/chair.jpg', 'chair');
var cthulhuImg = new Product('img/cthulhu.jpg', 'cthulhu');
var dogDuckImg = new Product('img/dog-duck.jpg', 'dog');
var dragonImg = new Product('img/dragon.jpg', 'dragon');
var penImg = new Product('img/pen.jpg', 'pen');
var petSweepImg = new Product('img/pet-sweep.jpg', 'pet');
var scissorsImg = new Product('img/scissors.jpg', 'scissors');
var sharkImg = new Product('img/shark.jpg', 'shark');
var sweepImg = new Product('img/sweep.png', 'sweep');
var tauntaunImg = new Product('img/tauntaun.jpg', 'tauntaun');
var unicornImg = new Product('img/unicorn.jpg', 'unicorn');
var usbImg = new Product('img/usb.gif', 'usb');
var waterCanImage = new Product('img/water-can.jpg', 'watercan');
var wineImg = new Product('img/wine-glass.jpg', 'wine');

// Define displayRandomProduct
var elImgOne = document.getElementById('image-one');
var elImgTwo = document.getElementById('image-two');
var elImgThree = document.getElementById('image-three');

function displayRandomProducts() {
  var random = getRandomIndex();

  elImgOne.src = Product.all[random[0]].imagePath;
  elImgOne.setAttribute('data-name', Product.all[random[0]].name);
  Product.all[random[0]].totalViews += 1;

  elImgTwo.src = Product.all[random[1]].imagePath;
  elImgTwo.setAttribute('data-name', Product.all[random[1]].name);
  Product.all[random[1]].totalViews += 1;

  elImgThree.src = Product.all[random[2]].imagePath;
  elImgThree.setAttribute('data-name', Product.all[random[2]].name);
  Product.all[random[2]].totalViews += 1;
}
displayRandomProducts();

//! Check for duplicates

function getRandomIndex() {
  var random1 = Math.floor(Math.random() * 20);
  var random2 = Math.floor(Math.random() * 20);
  var random3 = Math.floor(Math.random() * 20);

  // why doesn't this work?
  while (random1 === random2 || random2 === random3) {
    getRandomIndex();
    break;
  }

  return [random1, random2, random3];
}

// *Define displayResults function
// - calculate clicks to view ratio
// - get elements from DOM
// - set text content of elements to results of your calc

var resultsList = document.getElementById('results-list');

function displayResults() {
  var imageNumber = 1;
  Product.all.forEach(function(image) {
    var imageCount = document.createElement('li');
    imageCount.textContent = `Image ${imageNumber} times clicked: ${
      image.totalClicks
    }`;

    resultsList.appendChild(imageCount);
  });
}

// *Define handleClicks function that takes in an event
// - increment totalPageClicks
// - increment totalClicks on product that was clicked
// - check if totalPageClicks > 25
// - display results
// - else if totalPageClicks != 25
// - call displayRandomProduct

function handleClick(e) {
  totalPageClicks++;
  if (totalPageClicks === 25) {
    displayResults();
  }

  var imgClicked = e.target.attributes[0].nodeValue;

  Product.all.forEach(function(image) {
    if (imgClicked === image.name) {
      image.totalClicks++;
      console.log(image);
    }
  });
  displayRandomProducts();
}

// add click event listener to products to calls handleClick
elImgOne.addEventListener('click', handleClick);
elImgTwo.addEventListener('click', handleClick);
elImgThree.addEventListener('click', handleClick);
