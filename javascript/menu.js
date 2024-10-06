document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.getElementById("dropdown-btn");
    var dropdownContent = document.getElementById("dropdown-content");

    dropdownBtn.addEventListener("mouseover", function() {
        dropdownContent.classList.toggle("show");
    });

    dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest("#dropdown-btn") && !event.target.closest("#dropdown-content")) {
            dropdownContent.classList.remove("show");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollToPosts = document.querySelector('.button-1');
    var posts = document.querySelector('.allposts');

    scrollToPosts.addEventListener('click', function() {
       
        if (window.innerWidth <= 1024) {
            var littlePosts = document.querySelector('.allposts');
            littlePosts.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            posts.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollToProjects = document.querySelector('.button-2');
    var projects = document.querySelector('.split-container');

    scrollToProjects.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
            var leftBox = document.querySelector('.left-box');
            leftBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            projects.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var scrollToMap = document.querySelector('.button-3');
    var map = document.querySelector('#map');

    scrollToMap.addEventListener('click', function() {
       
        map.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
