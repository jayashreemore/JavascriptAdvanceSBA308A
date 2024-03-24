import { updateCatImage } from './api.js';

document.getElementById('updateForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  // Get input values
  const imageId = document.getElementById('imageId').value;
  const imageUrl = document.getElementById('imageUrl').value;

  // Call updateCatImage function
  try {
    const response = await updateCatImage(imageId, imageUrl);
    displayResult(response);
  } catch (error) {
    displayResult({ error: error.message });
  }
  
});

function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (result.success) {
    resultDiv.innerText = 'Cat image updated successfully!';
  } else {
    resultDiv.innerText = 'Error: ' + result.error;
  }
}
