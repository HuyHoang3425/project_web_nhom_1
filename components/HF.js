import { Header } from './Header.js';
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
//scroll
let zero = 0;
const header = document.querySelector("header");

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
