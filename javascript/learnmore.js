document.addEventListener('DOMContentLoaded', function() {
    var scrollToContactButton = document.querySelector('.scroll-to-contact');
    var contactBox = document.querySelector('.allposts');

    scrollToContactButton.addEventListener('click', function() {
       
        if (window.innerWidth <= 1024) {
            var littleContactBox = document.querySelector('.allposts');
            littleContactBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            contactBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
    });
});