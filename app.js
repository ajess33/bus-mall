/*

*Define Product constructor
- declare totalClicks property
- declare totalViews property
- declare imagePath property

*Define allProducts array

*Define various products to be constructed and add to allProducts array

*Define displayRandomProduct
- select 3 random products from all products array
- increment total views for each random image selected
- check for duplicates
- get image elements from DOM
- set image elements src to the Product's imagePath property

*Define a totalPageClicks variable to keep track of total selections (25)

*Define displayResults function
- calculate clicks to view ratio
- get elements from DOM
- set text content of elements to results of your calc

*Define handleClicks function that takes in an event
- increment totalPageClicks
- increment totalClicks on product that was clicked
- check if totalPageClicks > 25
  - display results
- else if totalPageClicks != 25
  - call displayRandomProduct

- add click event listener to products to calls handleClick

*/
