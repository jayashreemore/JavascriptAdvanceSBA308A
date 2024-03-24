document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallerystatic');


    // Fetch cat images from Cat API
    fetch('https://api.thecatapi.com/v1/images/search?limit=5&size=med')
        .then(response => response.json())
        .then(data => {
            let counter = 0; // Counter to track the number of iterations
            data.forEach(cat => {
                if (counter < 5) {
                    const img = document.createElement('img');
                    img.src = cat.url;
                    img.classList.add('gallery-img');
                    gallery.appendChild(img);
                    counter++; // Increment counter
                } else {
                    return; // Break out of the loop
                }
            });
        })
        .catch(error => console.error('Error fetching cat images:', error));
});