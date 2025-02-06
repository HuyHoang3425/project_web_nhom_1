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
const playvideo = document.querySelector(".play-video");
const video = document.querySelector("#videoContainer .video");
playvideo.addEventListener("click",function()
{
  const url = "https://www.youtube.com/embed/fY85ck-pI5c";
  video.src = url;
  document.getElementById("videoContainer").style.display = "block";
});
function hideVideo() {
  video.src ="";
  document.getElementById("videoContainer").style.display = "none";
}

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
const img = document.querySelector(".slider img");
console.log(dots);
let active = 0;
let lenghtItem = item.length - 2;
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
  let imgWidth = img.clientWidth;
  list.style.left = `calc(-${checkLeft}px + (100% - ${imgWidth}px) / 2)`;




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

//number run 
// const number1 = document.querySelector(".section-8 ul li .number-1");
// const number2 = document.querySelector(".section-8 ul li .number-2");
// const number3 = document.querySelector(".section-8 ul li .number-3");
// const number4 = document.querySelector(".section-8 ul li .number-4");
// function numberRun(number,numberStop,time)
// {
//   let num = 1;
//   let interval = setInterval(()=>{
//     number.innerHTML = `${num}`;
//     if(num == numberStop){
//       clearInterval(interval);
//     }
//     num++;
//   },time);
// }
// numberRun(number1,145,10);
// numberRun(number2,10,100);
// numberRun(number3,27,50);
// numberRun(number4,38,50);


const number1 = document.querySelector(".section-8 ul li .number-1");
const number2 = document.querySelector(".section-8 ul li .number-2");
const number3 = document.querySelector(".section-8 ul li .number-3");
const number4 = document.querySelector(".section-8 ul li .number-4");

let hasRun = [false, false, false, false]; // Mảng lưu trạng thái đã chạy của các phần tử

// Hàm chạy số
function numberRun(number, numberStop, time, index) {
  let num = 1;
  let interval = setInterval(() => {
    number.innerHTML = `${num}`;
    if (num == numberStop) {
      clearInterval(interval);
    }
    num++;
  }, time);
  hasRun[index] = true; // Đánh dấu là đã chạy
}
// Kiểm tra khi nào phần tử cuộn vào cửa sổ
function checkScroll() {
  const elements = [number1, number2, number3, number4];
  elements.forEach((number, index) => {
    const rect = number.getBoundingClientRect(); // Lấy vị trí của phần tử
    const elementInView = rect.top < window.innerHeight && rect.bottom > 0; // Kiểm tra phần tử có trong viewport không

    // Nếu phần tử trong viewport và chưa chạy, bắt đầu chạy số
    if (elementInView && !hasRun[index]) {
      numberRun(number, [145, 10, 27, 38][index], [10, 100, 50, 50][index], index);
    }

    // Nếu phần tử ra khỏi viewport, reset lại để có thể chạy lại
    // if (!elementInView && hasRun[index]) {
    //   hasRun[index] = false; // Đặt lại trạng thái để có thể chạy lại khi cuộn lại
    // }
  });
}

// Gọi checkScroll khi cuộn trang
window.addEventListener("scroll", checkScroll);

// Kiểm tra ngay khi trang tải
checkScroll();



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

//slider section-10
const dots_10 = document.querySelectorAll(".section-10 .card-2 .dots li");
const item_10 = document.querySelectorAll(".section-10 .card-2 .item");

let i = 0;
let totalSlides = dots_10.length;
function updateSlider() {
  item_10.forEach(item=>{item.classList.remove("show-screen")});
  item_10[i].classList.add("show-screen");
  dots_10.forEach(item=>{item.classList.remove("show")});
  dots_10[i].classList.add("show");
}

function nextSlide() {
  i = (i + 1) % totalSlides;
  updateSlider();
}
let itemInterval ;
itemInterval = setInterval(()=>{
  nextSlide();
},4000);
dots_10.forEach((dot, index) => {
  dot.addEventListener("click", () => {
      clearInterval(itemInterval);
      i = index; 
      updateSlider();
      itemInterval = setInterval(nextSlide, 4000);
  });
});
