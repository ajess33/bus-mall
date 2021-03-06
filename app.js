// the first thing evaluated in sum(sum(a, b), c) are the aruguments and the sum function itself

/* eslint-disable no-unused-vars */
// Define a totalPageClicks variable to keep track of total selections (25)
var totalPageClicks = 25;
var pageCounter = document.getElementById('votes-counter');

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

var bagImg = new Product('img/bag.jpg', 'Bag');
var bananaImg = new Product('img/banana.jpg', 'Banana');
var bathroomImg = new Product('img/bathroom.jpg', 'Bathroom');
var bootsImg = new Product('img/boots.jpg', 'Boots');
var breakfastImg = new Product('img/breakfast.jpg', 'Breakfast');
var bubblegumImg = new Product('img/bubblegum.jpg', 'Bubblegum');
var chairImg = new Product('img/chair.jpg', 'Chair');
var cthulhuImg = new Product('img/cthulhu.jpg', 'Cthulhu');
var dogDuckImg = new Product('img/dog-duck.jpg', 'Dog');
var dragonImg = new Product('img/dragon.jpg', 'Dragon');
var penImg = new Product('img/pen.jpg', 'Pen');
var petSweepImg = new Product('img/pet-sweep.jpg', 'Pet');
var scissorsImg = new Product('img/scissors.jpg', 'Scissors');
var sharkImg = new Product('img/shark.jpg', 'Shark');
var sweepImg = new Product('img/sweep.png', 'Sweep');
var tauntaunImg = new Product('img/tauntaun.jpg', 'Tauntaun');
var unicornImg = new Product('img/unicorn.jpg', 'Unicorn');
var usbImg = new Product('img/usb.gif', 'Usb');
var waterCanImage = new Product('img/water-can.jpg', 'Watercan');
var wineImg = new Product('img/wine-glass.jpg', 'Wine');

// Define displayRandomProduct
var imagesWrapper = document.getElementById('img-wrap');
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

function getRandomIndex() {
  var random1 = Math.floor(Math.random() * 20);
  var random2 = Math.floor(Math.random() * 20);
  var random3 = Math.floor(Math.random() * 20);

  while (random1 === random2 || random2 === random3 || random1 === random3) {
    random1 = Math.floor(Math.random() * 20);
    random2 = Math.floor(Math.random() * 20);
    random3 = Math.floor(Math.random() * 20);
  }
  var randomArray = [random1, random2, random3];

  return randomArray;
}

// Define displayResults function
function displayResults() {
  var resultsWrap = document.getElementById('results');
  var banner = document.getElementById('banner');
  resultsWrap.classList.remove('ghost');
  imagesWrapper.className = 'ghost';
  banner.className = 'ghost';

  // gather data and labels for chart
  var labelArray = [];
  var clicksArray = [];
  var viewsArray = [];

  if (!localStorage.getItem('clicks')) {
    for (var i = 0; i < Product.all.length; i++) {
      viewsArray.push(Product.all[i].totalViews);
      labelArray.push(Product.all[i].name);
      clicksArray.push(Product.all[i].totalClicks);
    }
    localStorage.setItem('labels', JSON.stringify(labelArray));
    localStorage.setItem('clicks', JSON.stringify(clicksArray));
    localStorage.setItem('views', JSON.stringify(viewsArray));
  } else {
    labelArray = JSON.parse(localStorage.getItem('labels'));
    clicksArray = JSON.parse(localStorage.getItem('clicks'));
    viewsArray = JSON.parse(localStorage.getItem('views'));
  }

  var canvas = document.getElementById('results-chart').getContext('2d');
  Chart.defaults.global.defaultFontColor = '#eee';

  var chart = new Chart(canvas, {
    type: 'bar',

    data: {
      labels: labelArray,
      datasets: [
        {
          label: 'Total Votes',
          backgroundColor: 'rgb(0, 210, 170)',
          data: clicksArray
        },
        {
          label: 'Total Views',
          backgroundColor: '#CA5188',
          data: viewsArray
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: '# of Votes',
              fontColor: 'rgb(0, 210, 170)'
            }
          }
        ]
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
        }
      }
    }
  });
  renderTopImages();
}
// Define handleClicks function that takes in an event
function handleClick(e) {
  totalPageClicks--;
  pageCounter.textContent = totalPageClicks;

  if (totalPageClicks === 0) {
    localStorage.setItem('completed', JSON.stringify(true));
    displayResults();
    renderTopImages();
    elImgOne.style.pointerEvents = 'none';
    elImgTwo.style.pointerEvents = 'none';
    elImgThree.style.pointerEvents = 'none';
  }

  var imgClicked = e.target.attributes[0].nodeValue;

  Product.all.forEach(function(image) {
    if (imgClicked === image.name) {
      image.totalClicks++;
    }
  });
  displayRandomProducts();
}

// add click event listener to products to calls handleClick
elImgOne.addEventListener('click', handleClick);
elImgTwo.addEventListener('click', handleClick);
elImgThree.addEventListener('click', handleClick);

// display top 3 images
function renderTopImages() {
  var fav1 = document.getElementById('fav1');
  var fav2 = document.getElementById('fav2');
  var fav3 = document.getElementById('fav3');
  var fav1Name = document.getElementById('fav1Name');
  var fav2Name = document.getElementById('fav2Name');
  var fav3Name = document.getElementById('fav3Name');

  var productsArr = [];
  Product.all.forEach(function(image) {
    productsArr.push(image);
  });
  productsArr.sort(function(a, b) {
    return b.totalClicks - a.totalClicks;
  });
  var topProductsArr = productsArr.slice(0, 3);
  // set localStorage for top 3 products
  localStorage.setItem('topProducts', JSON.stringify(topProductsArr));

  var localTopThree = JSON.parse(localStorage.getItem('topProducts'));

  fav1.src = localTopThree[0].imagePath;
  fav1Name.textContent = localTopThree[0].name;
  fav2.src = localTopThree[1].imagePath;
  fav2Name.textContent = localTopThree[1].name;

  fav3.src = localTopThree[2].imagePath;
  fav3Name.textContent = localTopThree[2].name;
}

function checkStorage() {
  var alreadyCompleted = JSON.parse(localStorage.getItem('completed'));
  if (alreadyCompleted) {
    displayResults();
  } else {
    displayRandomProducts();
  }
}
checkStorage();
