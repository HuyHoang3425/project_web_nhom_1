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

//scroll

// button-option
const bgd1 = document.querySelector(".section-1 .background-1");
const bgd2 = document.querySelector(".section-1 .background-2");
const btnUp = document.querySelector(".section-1 .btn-up");
const btnDown = document.querySelector(".section-1 .btn-down");
btnDown.addEventListener("click",function()
{
  bgd1.classList.remove("show");
  bgd2.classList.add("show");
})
btnUp.addEventListener("click",function()
{
  bgd2.classList.remove("show");
  bgd1.classList.add("show");
})
const dot_section_1 = document.querySelectorAll(".section-1 .option-btn button .dot")
dot_section_1.forEach(item =>{
  item.addEventListener("click", function() {
    if (item.classList.contains("dotScale")) {
      item.classList.add("dotScale");  // Thêm nếu chưa có
    } else {
      item.classList.remove("dotScale");  // Xóa nếu đã có
    }
  });
})






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



