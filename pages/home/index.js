const header = document.querySelector("header"); //header
//nav
//link
const links = document.querySelectorAll("header a");
const currentUrl = window.location.href;
links.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add("showafter");
  } else {
    link.classList.remove("showafter");
  }
});
//nav

//bar 
const closeBar = document.querySelector(".close-bar");
const bar = document.querySelector(".bar");
const btnBar = document.querySelector("header .btn-i i");
btnBar.onclick = function()
{
  bar.classList.add("show-screen");
  bar.classList.remove("bar-animation-out");
  bar.classList.add("bar-animation");
  closeBar.classList.add("show-screen");
}
closeBar.onclick = ()=>{
  bar.classList.add("bar-animation-out");
  closeBar.classList.remove("show-screen");
  bar.classList.remove("bar-animation");
  setTimeout(() =>{bar.classList.remove("show-screen")},1000);
};

//scroll
let zero = 0;
window.addEventListener("scroll", function () {
  let currentScrollTop = window.scrollY;
  const halfScreenHeight = window.innerHeight / 3;
  if (currentScrollTop > halfScreenHeight) {
    if (currentScrollTop > zero) {
      header.classList.remove("header-down");
      header.classList.add("header-up");
    } else if (currentScrollTop < zero) {
      header.classList.remove("header-up");
      header.classList.add("header-down");
    }
  } else {
    header.classList.remove("header-down");
    header.classList.remove("header-up");
  }

  zero = currentScrollTop;
});

//scroll

// button-option
const backgrounds = document.querySelectorAll(".section-1 .background");
const dotsi = document.querySelectorAll(".option-btn .dot");
const buttons = document.querySelectorAll(".option-btn button");
let currentIndex = 0;
let refreshBackground;


function changeBackground(index) {
  backgrounds.forEach((bg) => bg.classList.remove("show"));
  dotsi.forEach((dot) => dot.classList.remove("dotScale"));

  backgrounds[index].classList.add("show");
  dotsi[index].classList.add("dotScale");
}

function refresh() {
  clearInterval(refreshBackground); 
  refreshBackground = setInterval(() => {
    currentIndex = (currentIndex + 1) % backgrounds.length; 
    changeBackground(currentIndex);
  }, 5000); 
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentIndex = index; 
    changeBackground(index); 
    refresh(); 
  });
});
refresh();





// slider
const slider = document.querySelector(".slider");
const list = document.querySelector(".slider .list");
const item = document.querySelectorAll(".slider .list .item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dots li");
console.log(dots);
let active = 0;
let lenghtItem = item.length - 1;
next.addEventListener("click", function () {
  if (active + 1 > lenghtItem) {
    active = 0;
  }
  else {
    active++;
  }
  reloadSilde();
});
let refreshSilder = setInterval(() => { next.click() }, 3000);
function reloadSilde() {
  let checkLeft = item[active].offsetLeft;
  list.style.left = `calc(-${checkLeft}px + (100% - 1192px) / 2)`;




  const dot = document.querySelector(".dots li.active");
  dot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSilder);
  refreshSilder = setInterval(() => { next.click() }, 5000);
}
prev.addEventListener("click", function () {
  if (active - 1 < 0) {
    active = lenghtItem;
  }
  else {
    active--;
  }
  reloadSilde();
});

dots.forEach((item, index) => {
  item.addEventListener("click", function () {
    active = index;
    reloadSilde();
  })
})
// slider



