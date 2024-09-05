const backgroundImage = document.querySelector('.background-image');
const nasaImg = document.querySelector('.nasa-img');
const triggerHeight = 1250;
const parallaxTriggerHeight = 2899;

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    backgroundImage.style.transform = `translateY(-${scrollPosition * 0.5}px)`;

    if (scrollPosition > parallaxTriggerHeight) {
        nasaImg.style.transform = `translateY(-${(scrollPosition - parallaxTriggerHeight) * 0.5}px)`;
    }

    if (scrollPosition > triggerHeight) {
        backgroundImage.style.opacity = '0';
        nasaImg.style.opacity = '1';
    } else {
        backgroundImage.style.opacity = '0.9';
        nasaImg.style.opacity = '0';
    }
});
