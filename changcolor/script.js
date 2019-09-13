// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

function changeColor(picker) {
  // Set the fill style
  overlay.style.fill = picker.toHEXString();
}

// Thats it!

// BONUS

// This function simulates background-size: cover for the SVG inside its parent div, so it would likely be helpful for people migrating from using images to using an SVG locked onto with a photo.

// Reference the SVG
const svg = document.getElementById("product-svg");

// Reference the image
const img = document.getElementById("background-image");

// Place the SVG inside a parent div, reference it
const container = document.getElementById("container");

// (On resize)
window.onresize = () => simulateCover(container, svg, img, 640, 1136);

// (On load)
simulateCover(container, svg, img, 640, 1136);

// Pass the parent div, and the SVG (child)
// Pass the image
// x and y are the native dimensions of the image (1920, 1280 in our example)
function simulateCover(parent, child, image, x, y) {
  console.log(parent.getBoundingClientRect());
  let { width, height } = parent.getBoundingClientRect();
  let yPercentage = x / y;
  let xPercentage = y / x;

  

  if (width < height * yPercentage) {
    child.style.width = height * yPercentage + "px";
    child.style.height = height + "px";
    
    image.style.width = height * yPercentage + "px";
    image.style.height = height + "px";

  } else {
    child.style.width = width + "px";
    child.style.height = width * xPercentage + "px";
    
    image.style.width = width + "px";
    image.style.height = width * xPercentage + "px";
    
    
  }
}