var swiper = new Swiper('.home-slider', {
    // Optional parameters
    spaceBetween:20,
    centeredSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop:true,
  
  });
  var swiper = new Swiper('.review-slider', {
    // Optional parameters
    spaceBetween:20,
    centeredSlides:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
  
  });