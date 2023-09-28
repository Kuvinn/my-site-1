
let section = document.querySelectorAll('section'); //let section = all of document's elements that match the selector
let navLinks = document.querySelectorAll('header nav ul li a');//let navLinks = all of document's elements that match the selector

let currentSection = 'home'; //start off with home as the active
window.addEventListener('scroll', () => {   //as scroll
    section.forEach(section => {    //check each section
        if (window.scrollY >= section.offsetTop-300) {  //if the Y value of the scroll is greater than the top of the section top padding
            currentSection = section.id;    //that means we are in the current section, so grab the id
        };
        
    });

    navLinks.forEach(navLink => {  //for each navlink
        if (navLink.href.includes(currentSection)){    //if the href includes the section id
            console.log(navLink.href);
            document.querySelector('.active').classList.remove('active');   //remove the previous active tag
            navLink.classList.add('active');   //add it to current section
        };
    });
});
//using https://www.youtube.com/watch?v=nwCtWn-xFz0&t=1472s&ab_channel=ByteGrad's script for scrolling