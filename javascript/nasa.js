document.addEventListener('DOMContentLoaded', function() {
    const nasaSection = document.querySelector('.nasa');
    const triggerHeight = 2645;
    const offset = 200;
    const maxOpacity = 0.5;

    function checkVisibility() {
        const scrollPosition = window.scrollY;
        const opacity = Math.min((scrollPosition - (triggerHeight - offset)) / offset, maxOpacity);

        nasaSection.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
