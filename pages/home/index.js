//slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // breakpoints:{
    //     0:{
    //         slidesPerView: 1
    //     },
    //     768:{
    //         slidesPerView: 1
    //     },
    //     0:{
    //         slidesPerView: 1
    //     }
    // }
  });
  //slider