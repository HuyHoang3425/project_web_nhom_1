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
if (pageId === 'rent') {
    content.innerHTML = "Product";
} else if (pageId === 'locations') {
    content.innerHTML = "Locations";
} else if (pageId === 'goldRewards') {
    content.innerHTML = "Gold Rewards";
} else if (pageId === 'about') {
    content.innerHTML = "About";
}
