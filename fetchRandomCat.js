import { fetchRandomCat } from './api.js';

document.getElementById('fetchRandomCatBtn').addEventListener('click', async function () {
  try {
    const cat = await fetchRandomCat();
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = ''; // Clear previous images
    const catImage = document.createElement('img');
    catImage.classList.add('cat-image');
    catImage.src = cat[0].url;
    imageGrid.appendChild(catImage);
  } catch (error) {
    console.error(error);
  }
});
