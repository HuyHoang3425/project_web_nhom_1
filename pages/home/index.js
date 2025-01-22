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
let refreshSilder = setInterval(()=>{next.click()},3000);
function reloadSilde() {
  let checkLeft = item[active].offsetLeft ;
  list.style.left = `calc(-${checkLeft}px + (100% - 1192px) / 2)`;




  const dot = document.querySelector(".dots li.active");
  dot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSilder);
  refreshSilder = setInterval(()=>{next.click()},5000);
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



