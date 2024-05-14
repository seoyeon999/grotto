//popup_info
$(function () {
    $(".menu_hover").click(function () {
        $(".popup_info").fadeIn();
    });
    $(".popup_close").click(function () {
        $(".popup_info").fadeOut();
    });
});