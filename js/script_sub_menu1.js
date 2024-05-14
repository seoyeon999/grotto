$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스(클릭한 li만 붙음. 내가 클릭한 부분에 들어갈 스타일을 따로 붙여준다.) 붙임
        $(".tab_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("span").attr("data");
        /*내가 방금 클릭한 li안에 있는 span태그의 data부분 안에 들어있는 id이름을 가져오는 것.*/
        $(activeTab).fadeIn();
        /*위에서 가져온 아이디 이름에 해당하는 대상만 보이게 한다.(activeTab대신 해당id가 대입됨.) 여기서 fadeIn대신에 show를 쓰면 번쩍번쩍한 느낌을 없앨 수 있다.*/
        return false;
    });

});