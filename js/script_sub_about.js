//maincolor
$(function () {

    var winW = $(".mainviewcont").outerWidth(),
        target = $('.main_visual .visual'),
        target2 = $('.main_visual .visual_view'),
        textBox = target.find('.text_wrap'),
        length = 4,//박스 갯수
        idx = 0,
        css = [],
        ease = "easeInOutQuint",
        time = 1000;

    target2.find('.viewbg_wrap').each(function (e) {
        css.push({ 'width': 100 / length + '%', 'left': e * (100 / length) + '%', 'left2': -e * 100 + '%' });
        $(this).css({ 'width': css[e].width, 'left': css[e].left })
            .find('.viewbg').css({ 'width': winW, 'left': css[e].left2 });
    });

    target.find('>h1').on("mouseenter", function () {
        idx = $(this).index();
        $(this).addClass('on').siblings().addClass('off');
        $('.main_visual .visual_view .viewbg_wrap').eq(idx).addClass('hover')
            .stop().animate({ 'left': '0', 'width': '100%' }, time, ease)
            .find('.viewbg').stop().animate({ 'left': 0 }, time, ease);
    });

    target.find('>h1').on("mouseleave", function () {
        idx = $(this).index();
        $(this).removeClass('on').siblings().removeClass('off');
        $('.main_visual .visual_view .viewbg_wrap').eq(idx).removeClass('hover').stop().css({ 'width': css[idx].width, 'left': css[idx].left })
            .find('.viewbg').stop().css({ 'left': css[idx].left2 });
    });
    $(".visual .cc1").mouseover(function () {
        $("#change_box").css("background-color", "#FFF9EF");
    });
    $(".visual .cc2").mouseover(function () {
        $("#change_box").css("background-color", "#BAD6EB");
    });
    $(".visual .cc3").mouseover(function () {
        $("#change_box").css("background-color", "#6F96D1");
    });
    $(".visual .cc4").mouseover(function () {
        $("#change_box").css("background-color", "#091F5B");
    });
});




//subcolor
$(function () {

    var winW = $(".mainviewcont").outerWidth(),
        target = $('.main_visual_2 .visual'),
        target2 = $('.main_visual_2 .visual_view'),
        textBox = target.find('.text_wrap'),
        length = 3,//박스 갯수
        idx = 0,
        css = [],
        ease = "easeInOutQuint",
        time = 1000;

    target2.find('.viewbg_wrap').each(function (e) {
        css.push({ 'width': 100 / length + '%', 'left': e * (100 / length) + '%', 'left2': -e * 100 + '%' });
        $(this).css({ 'width': css[e].width, 'left': css[e].left })
            .find('.viewbg').css({ 'width': winW, 'left': css[e].left2 });
    });

    target.find('>h1').on("mouseenter", function () {
        idx = $(this).index();
        $(this).addClass('on').siblings().addClass('off');
        $('.main_visual_2 .visual_view .viewbg_wrap').eq(idx).addClass('hover')
            .stop().animate({ 'left': '0', 'width': '100%' }, time, ease)
            .find('.viewbg').stop().animate({ 'left': 0 }, time, ease);
    });

    target.find('>h1').on("mouseleave", function () {
        idx = $(this).index();
        $(this).removeClass('on').siblings().removeClass('off');
        $('.main_visual_2 .visual_view .viewbg_wrap').eq(idx).removeClass('hover').stop().css({ 'width': css[idx].width, 'left': css[idx].left })
            .find('.viewbg').stop().css({ 'left': css[idx].left2 });
    });

    $(".visual .cc5").mouseover(function () {
        $("#change_box").css("background-color", "#FEE5AC");
    });
    $(".visual .cc6").mouseover(function () {
        $("#change_box").css("background-color", "#F2CB9B");
    });
    $(".visual .cc7").mouseover(function () {
        $("#change_box").css("background-color", "#C3D59F");
    });


});