import { header } from "../../components/header.js"
import { headercss } from "../../components/Header-css.js";
import { Footer } from "../../components/Footer.js";


const Header = document.querySelector("header");
Header.innerHTML = header;
const style = document.createElement("style");
console.log(style);
style.innerHTML = headercss;
document.head.appendChild(style);
// const footer = document.querySelector("footer");
// footer.innerHTML = Footer;
