document.addEventListener("DOMContentLoaded", function () {
  const section5 = document.querySelector("#section_5");
  const logos = document.querySelectorAll("#section_6 .wrp_logo");

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

  observer.observe(section5);
});
