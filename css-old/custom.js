// add default fall back url to broken image link
// Select all images on the page
const images = document.getElementsByTagName('img');

// Define the placeholder URL
const placeholderUrl = 'https://placehold.co/600x400/black/grey?text=Replace+it+with+your+Image';

// Iterate over each image and set the onerror handler
for (let i = 0; i < images.length; i++) {
  images[i].onerror = function() {
    this.src = placeholderUrl;
  };
}