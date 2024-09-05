document.addEventListener('DOMContentLoaded', function() {
    const sentences = document.querySelectorAll('.sentence');
    const triggerHeight = 2855;
    const offset = 85;

    function checkVisibility() {
        const scrollPosition = window.scrollY;

        sentences.forEach((sentence, index) => {
            const sentenceHeight = sentence.offsetHeight;
            const sentenceOffset = (sentences.length - 1 - index) * offset;

            if (scrollPosition > triggerHeight - sentenceHeight - sentenceOffset) {
                sentence.classList.add('visible');
            } else {
                sentence.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
