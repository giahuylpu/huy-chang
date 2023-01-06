// Get the slideshow element
var slideshow = document.getElementById("slideshow");

// Get the images
var images = slideshow.getElementsByTagName("img");

// Get the current image
var current = 0;

// Set the first image
images[current].style.display = "block";

// Start the slideshow
setInterval(next, 3000);

// Go to the next image
function next() {
  // Hide the current image
  images[current].style.display = "none";

  // Increment the current image
  current = (current + 1) % images.length;

  // Show the current image
  images[current].style.display = "block";
}
