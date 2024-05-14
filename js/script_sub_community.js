//popup_bookclub
$(function () {
    $(".bookclub").click(function () {
        $(".popup_bookclub").fadeIn();
    });
    $(".popup_bookclub .popup_close").click(function () {
        $(".popup_bookclub").fadeOut();
    });
});

//reservation 아코디언
$(function () {
    $(".reserve_plus> ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
    });
    $(".reserve_plus> ul> li").click(function () {
        $(this).toggleClass("turn");

        // if ($(this).hasClass("turn") === true) {
        //     $(this).siblings().removeClass("turn");

        // }

    });
});


//book_curation popup
$(function () {
    $("#book_curation .curation_img_box").click(function () {
        $(this).siblings(".curation_info_container").fadeIn();
    });
    $("#book_curation ul> li .popup_close").click(function () {
        $(this).parent(".curation_info_container").fadeOut();
    });
    //경고창
    $(".popup_btn").mouseup(function () {
        alert("북클럽그로토에 가입하시려면 로그인해야 합니다.")
        $("#popup_log").fadeIn();
    });
});

