import { Header } from './header.js';
import { Footer } from './Footer.js';
import { css } from './css.js';


//add header
document.body.insertAdjacentHTML('afterbegin', Header);
//add footer
document.body.insertAdjacentHTML('beforeend', Footer);
//css
const style = document.createElement("style");
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
} else if (pageId === 'contact') {
  title.innerHTML = "Contact"
  content.innerHTML = "Contact";
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
const body = document.body;
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);
//bar 
const closeBar = document.querySelector(".close-bar");
const bar = document.querySelector(".bar");
const btnBar = document.querySelector("header .btn-i i");
btnBar.onclick = function()
{
  bar.classList.add("active");
  closeBar.classList.add("show-screen");
  body.classList.add("hidden");
  overlay.style.display = "block";
}
closeBar.onclick = ()=>{
  bar.classList.remove("active");
  closeBar.classList.remove("show-screen");
  body.classList.remove("hidden");
  overlay.style.display = "none";
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
      bar.classList.remove("active");
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
// const chat = document.querySelector(".chat");
// const cmt = document.querySelector(".chat .cmt");
// const cls = document.querySelector(".chat .cls");
// const message = document.querySelector(".message");
// chat.addEventListener("click",function()
// {
//   if (cmt.style.display === 'block') {
//     cmt.style.display = 'none';  
//     cls.style.display = 'block';
//     message.classList.add("show-screen");
//   } else {
//     cmt.style.display = 'block'; 
//     cls.style.display = 'none';  
//     message.classList.remove("show-screen");
//   }
// })

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
//     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//     (function(){
//     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//     s1.async=true;
//     s1.src='https://embed.tawk.to/67bad85d7ee229190f9ac09c/1ikotqc0e';
//     s1.charset='UTF-8';
//     s1.setAttribute('crossorigin','*');
//     s0.parentNode.insertBefore(s1,s0);
//     })();
// </script>
// <!--End of Tawk.to Script-->
// Tạo phần tử script để nhúng mã Tawk.to vào trang
var tawkScript = document.createElement('script');
tawkScript.type = 'text/javascript';
tawkScript.innerHTML = `
 var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/67bad85d7ee229190f9ac09c/1ikotqc0e';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
`
document.body.insertBefore(tawkScript, document.body.firstChild);
