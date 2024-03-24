const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const API_URL = 'https://api.thecatapi.com/v1/images/upload';
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images';
const API_KEY = 'live_lHpY7IlL2oDToLXZEK9zuuwZxqeRVIHjYtzJmtt0ar8dyP04eADia6bBQsKhnPWH'; // Replace 'YOUR_API_KEY' with your actual API key
//const RESULTS_PER_PAGE = 10;
const API_URL_search = 'https://api.thecatapi.com/v1/images/search';
const RESULTS_PER_PAGE = 10;

// This function is for Search cat Gallary
document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (!searchTerm) {
        return;
    }
    const url = `${API_URL_search}?limit=${RESULTS_PER_PAGE}&q=${searchTerm}`;
    displayGallery(await fetchImages(url));

});

async function fetchImages(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function displayGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'Cat';
        gallery.appendChild(img);
    });
}


//This function is for fetch Ramdom cat on button click of fetch random cat
export async function fetchRandomCat() {
    try {
        const response = await fetch(`${API_URL_RANDOM}/search`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch random cat');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

//This function is for upload cat image when user click upload cat image. uploadform.js
export async function uploadCatImage(imageData) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'x-api-key': API_KEY
            },
            body: imageData,
        });
        if (!response.ok) {
            throw new Error('Failed to upload cat image');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

//This function is for update cat image - removed form code
export async function updateCatImage(imageId, file) {
    // const API_URL = 'https://api.thecatapi.com/v1/images';
    // const API_KEY = 'live_lHpY7IlL2oDToLXZEK9zuuwZxqeRVIHjYtzJmtt0ar8dyP04eADia6bBQsKhnPWH'; // Replace 'YOUR_API_KEY' with your actual API key

    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_URL_RANDOM}/${imageId}`, {
            method: 'PUT',
            headers: {
                'x-api-key': API_KEY,
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to update cat image');
        }

        return { success: true };
    } catch (error) {
        throw error;
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (result.success) {
        resultDiv.innerText = 'Cat image updated successfully!';
    } else {
        resultDiv.innerText = 'Error: ' + result.error;
    }
}
