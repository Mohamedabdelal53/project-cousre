/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const list=document.querySelector("ul");
const section = Array.from(document.querySelectorAll("section"))
function createlist(){
    for(sec of section){
        li=document.createElement("li")
        li.innerHTML=`<li><a href="${sec.id}" data-nav="${sec.id}" class="menu__link" >${sec.dataset.nav}</a>></li>`
        list.appendChild(li);
    }
}
createlist();
// styling for actve state
window.onscroll=function() {
    document.querySelectorAll("section").forEach(function (active){
        if(
            active.getBoundingClientRect().top>=-400 &&
            active.getBoundingClientRect().top<=150
        ){
            active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        };
    })
}
// when the client click on any section in nav menu scroll to the section of it
list.addEventListener("click",(tosec)=>{
    tosec.preventDefault();
    if(tosec.target.dataset.nav){
        document.getElementById(`${tosec.target.dataset.nav}`).scrollIntoView({behavior:"smooth"});
        setTimeout(()=>{
            location.hash=`${tosec.target.dataset.nav}`
        },170);
    }
});