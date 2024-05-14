//main_floor
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() { // 스크롤할때 이미지를 회전 시킨다.
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset / 36 + "deg)";
}

//main_menu
$(function () {
    $(".menu_slide .swiper-slide:nth-child(1)").mouseover(function () {
        $(".blur1").addClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(1)").mouseout(function () {
        $(".blur1").removeClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(2)").mouseover(function () {
        $(".blur2").addClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(2)").mouseout(function () {
        $(".blur2").removeClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(3)").mouseover(function () {
        $(".blur3").addClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(3)").mouseout(function () {
        $(".blur3").removeClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(4)").mouseover(function () {
        $(".blur4").addClass("blur_on");
    });
    $(".menu_slide .swiper-slide:nth-child(4)").mouseout(function () {
        $(".blur4").removeClass("blur_on");
    });
});