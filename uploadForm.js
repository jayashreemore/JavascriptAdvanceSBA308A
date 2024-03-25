import { uploadCatImage } from './api.js';

document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    console.log(file)
    if (!file) return;
    try {
        const formData = new FormData();
        console.log(formData)
        formData.append('file', file);
        console.log(formData)
        const response = await uploadCatImage(formData);
        console.log('Uploaded cat image:', response);
        alert("Cat file is uploaded to sytem.")
    } catch (error) {
        console.error(error);
    }
});
