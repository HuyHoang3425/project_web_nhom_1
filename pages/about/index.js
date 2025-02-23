// script-content-belive
function changeTab(button, tabId) {
  const buttons = document.querySelectorAll(".tabs button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  button.classList.add("active");
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => (content.style.display = "none"));

  const activeContent = document.getElementById(tabId);
  activeContent.style.display = "block";
}
//script-picture-belive
function changePicture(button, picID) {
  const buttonspic = document.querySelectorAll(".button-picture button");
  buttonspic.forEach((btn) => btn.classList.remove("active"));

  button.classList.add("active");
  const contentspic = document.querySelectorAll(".tab-picture");
  contentspic.forEach((content) => (content.style.display = "none"));

  const activeContent = document.getElementById(picID);
  activeContent.style.display = "block";
}

const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
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
      numberRun(
        number,
        [99, 28, 96, 78][index],
        [50, 100, 50, 50][index],
        index
      );
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

// chuyen dong animation cho phan partners
document.addEventListener("DOMContentLoaded", function () {
  const partners = document.querySelector(".partners");
  const logos = document.querySelectorAll(
    ".logo-partners .private-logo-partners"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add("visible");
            }, index * 300); // Điều chỉnh độ trễ nếu cần
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(partners);
});
