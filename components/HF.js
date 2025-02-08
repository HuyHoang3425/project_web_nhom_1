import { Header } from './header.js';
import { Footer } from './Footer.js';
import { css } from './css.js';


//add header
document.body.insertAdjacentHTML('afterbegin', Header);
//add footer
document.body.insertAdjacentHTML('beforeend', Footer);
//css
const style = document.createElement("style");
console.log(style);
style.innerHTML = css;
document.head.appendChild(style);
//sửa content theo page
const pageId = document.body.id;
const content = document.querySelector(".icon .content");
const title = document.querySelector(".section-1 .title");
if (pageId === 'rent') {
    title.innerHTML = "Rent"
    content.innerHTML = "Product";
} else if (pageId === 'locations') {
    title.innerHTML = "Locations"
    content.innerHTML = "Locations";
} else if (pageId === 'goldRewards') {
    title.innerHTML = "Gold Rewards"
    content.innerHTML = "Gold Rewards";
} else if (pageId === 'about') {
    title.innerHTML = "About"
    content.innerHTML = "About";
}

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
  bar.classList.remove("bar-animation-out");
  bar.classList.add("show-screen");
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
      bar.classList.remove("show-screen");
      closeBar.classList.remove("show-screen");
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

//chat
const chat = document.querySelector(".chat");
const cmt = document.querySelector(".chat .cmt");
const cls = document.querySelector(".chat .cls");
const message = document.querySelector(".message");
chat.addEventListener("click",function()
{
  if (cmt.style.display === 'block') {
    cmt.style.display = 'none';  
    cls.style.display = 'block';
    message.classList.add("show-screen");
  } else {
    cmt.style.display = 'block'; 
    cls.style.display = 'none';  
    message.classList.remove("show-screen");
  }
})