//header
$(document).ready(function () {
  var jbOffset = $('#nav').offset();
  /*선택자는 본인 구조에 맞게 수정*/
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {//여기 지정된 길이 이후부터 적용됩니다
      $('header').addClass("header_scroll");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
    else {
      $('header').removeClass("header_scroll");
      /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
    }
  });
});

//sub_menu
$(function () {
  //.gnb>li에 마우스를 올리면, .sub전체와 .sub_bg가 슬라이드 다운되며 내려온다.
  //header에서 마우스가 나갈 때 .sub전체와 .sub_bg가 슬라이드 업된다.
  $(".gnb>li").mouseover(function () {
    $(".sub").stop().slideDown(300);
    $("header").css({ "height": "240px" });
    //$(this).children(".submenu_img").addClass(".submenu_hover");
  });
  $("header").mouseleave(function () {
    $(".sub").stop().slideUp(100);
    $("header").css({ "height": "86px" });
    //$(".submenu_img").removeClass(".submenu_hover");
  });
});


//footer
$(function () {
  $(".join_img").mouseover(function () {
    $(".join_enter").addClass("join_ani_add");
  });
  $(".join_img").mouseleave(function () {
    $(".join_enter").removeClass("join_ani_add");
  });
});

//popup_log
console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add('slide-up')
    } else {
      signupBtn.parentNode.classList.add('slide-up')
      parent.classList.remove('slide-up')
    }
  });
});

signupBtn.addEventListener('click', (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add('slide-up')
    } else {
      loginBtn.parentNode.parentNode.classList.add('slide-up')
      parent.classList.remove('slide-up')
    }
  });
});

$(function () {
  $(".popup_log_btn").click(function () {
    $("#popup_log").fadeIn();
  });
  $(".popup_close").click(function () {
    $("#popup_log").fadeOut();
  });
});