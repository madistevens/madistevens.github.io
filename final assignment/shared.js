// enable fullscreen for gallery images
// this allows users to click on an image and view it in fullscreen mode
// resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-grid img'); // select all images in the gallery grid
    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (image.requestFullscreen) {
                image.requestFullscreen(); // enable fullscreen mode for the clicked image
            }
        });
    });
});

// copy email to clipboard
// this allows users to copy the email address to their clipboard by clicking the email icon
// resource: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
document.getElementById('copy-email').addEventListener('click', (event) => {
    event.preventDefault(); // prevent the default link behavior
    const email = event.target.closest('a').getAttribute('data-email'); // get the email address from the data attribute
    navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard: ' + email); // notify the user that the email was copied
    });
});