
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

//gallery script
const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -40,
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage2 = Math.max(Math.min(nextPercentage, 0), -100);

    track.dataset.percentage = nextPercentage2;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;

    for(const image of track.getElementsByClassName("image")){
        image.style.objectPosition = `${nextPercentage2+100} 50%`;
    }
}


//using https://www.youtube.com/watch?v=PkADl0HubMY&list=LL&index=149&ab_channel=Hyperplexed