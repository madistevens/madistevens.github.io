let currentIndex = 0;

// wait for the dom to fully load before running the script
// resource: https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image'); // select all slider images
    const sliderImages = document.querySelector('.slider-images'); // select the slider container
    const prevButton = document.querySelector('.slider-button.prev'); // select the previous button
    const nextButton = document.querySelector('.slider-button.next'); // select the next button

    // update the slider position based on the current index
    // resource: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
    function updateSlider() {
        const offset = -currentIndex * images[0].clientWidth; // calculate the offset for the current image
        sliderImages.style.transform = `translateX(${offset}px)`; // move the slider to the correct position
    }

    // move to the next image when the next button is clicked
    // resource: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // loop back to the first image if at the end
        updateSlider();
    });

    // move to the previous image when the previous button is clicked
    // resource: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // loop back to the last image if at the beginning
        updateSlider();
    });

    // enable fullscreen mode when an image is clicked
    // resource: https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (image.requestFullscreen) {
                image.requestFullscreen();
            }
        });
    });

    // adjust the slider position when the window is resized
    // resource: https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
    window.addEventListener('resize', updateSlider);
});