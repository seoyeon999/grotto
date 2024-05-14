//main_banner
var swiper = new Swiper(".mb", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
});

//floor
var swiper = new Swiper(".floor_slide", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//menu
var swiper = new Swiper(".menu_slide", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//instagram
const swiperSlides = document.querySelectorAll('.insta_slide');
//밑에 선택자 바꿔야하는지 여쭤보기1!!!~@@!#!@
swiperSlides.forEach(function (element, index) {
  element.classList.add("swiper-" + index);
  let swiper = new Swiper(".swiper-" + index, {
    autoplay: {
      delay: 1,
      // 슬라이드가 자동으로 전환되기까지의 시간 간격
      desableOnInteraction: false,
      // arrow나 pagination이용 후 자동 재생을 비활성화 할지의 여부            
    },
    speed: 8e3,
    // 슬라이드가 자동으로 전환되는 속도를 설정
    loop: true,
    // 슬라이드가 무한 순환
    slidesPerView: "auto",
    // 슬라이드가 표시되는 갯수를 설정
    freemode: true
    // 슬라이드가 자유롭게 스와이프 되도록 설정
  });
});



//sub_about
var swiper = new Swiper(".identity_img", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".identity_txt", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".custom-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      const fillPer = (current / total) * 100;
      const fillWidth = fillPer + '%;';
      return '0<span class="current">' + current + '</span><div class="progress__bar"><span class="progress__fill" style="width:' + fillWidth + '"></span></div><span>0' + total + '</span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});