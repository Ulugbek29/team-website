const navList = document.querySelector(".nav__list");
const togglerMenu = document.querySelector(".toggler");
const exitBtn = document.querySelector(".exit__btn");
const navLink = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");

togglerMenu.addEventListener("click", () => {
  navList.classList.add("active");
  overlay.classList.add("active");
});

exitBtn.addEventListener("click", () => {
  navList.classList.remove("active");
  overlay.classList.remove("active");
});

navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navList.classList.remove("active");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  navList.classList.remove("active");
  overlay.classList.remove("active");
});


// Hide Navbar while scrolling 

const navBar = document.querySelector(".header__nav")
let lastScrollY = window.scrollY;


window.addEventListener("scroll", ()=> {
    if(lastScrollY < window.scrollY) {
        navBar.classList.add("active")
    }
    else {
        navBar.classList.remove("active")
    }
    
    if(window.scrollY <= 50) {
        navBar.classList.remove("hide")
    }else {
        navBar.classList.add("hide")
    }
    
    
    lastScrollY = window.scrollY;
    console.log(lastScrollY)
})

