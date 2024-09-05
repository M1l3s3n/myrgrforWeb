document.addEventListener('DOMContentLoaded', function() {
    var scrollToContactButton = document.querySelector('.scroll-to-contact');
    var contactBox = document.querySelector('.posts');

    scrollToContactButton.addEventListener('click', function() {
       
        if (window.innerWidth <= 767) {
            var littleContactBox = document.querySelector('.posts');
            littleContactBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            contactBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
    });
});

