const images = ['/images/stars1.jpg', '/images/stars2.jpg', '/images/stars3.jpg', '/images/stars4.jpg', '/images/stars5.jpg'];
let index = 0;

function changeImage() {
    const slideshow = document.getElementById('slideshow');
    const slideshowBack = document.getElementById('slideshow-back');

    const nextIndex = (index + 1) % images.length;

    slideshowBack.src = images[nextIndex];
    slideshowBack.style.opacity = 1;

    setTimeout(() => {
        slideshow.style.opacity = 1;

        setTimeout(() => {
            slideshow.src = images[nextIndex];
            slideshow.style.opacity = 1;
            slideshowBack.style.opacity = 0;
            index = nextIndex;
        }, 1000);
    }, 1000);
}

window.onload = () => {
    setInterval(changeImage, 5500);
};
