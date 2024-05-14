//sub_floor_intro
$(document).ready(function () {
    var jbOffset = $('#nav').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 300) {//여기 지정된 길이 이후부터 적용됩니다
            $('.highlight').addClass("highlight_on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('.highlight').removeClass("highlight_on");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });
});


//sub_floor_information
$(document).ready(function () {
    // 클래스가 "counter"인 모든 요소를 선택합니다.
    const $counters = $(".counter");

    // 노출 비율(%)과 애니메이션 속도(ms)을 설정합니다.
    const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
    const duration = 2000; // ex) 1000 = 1초

    // 숫자에 쉼표를 추가할지 여부를 설정합니다.
    const addCommas = true; // ex) true = 1,000 / false = 1000

    // 숫자를 업데이트하고 애니메이션하는 함수 정의
    function updateCounter($el, start, end) {
        let startTime;
        function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            const current = Math.round(start + progress * (end - start));
            const formattedNumber = addCommas ? current.toLocaleString() : current;
            $el.text(formattedNumber);

            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                $el.text(addCommas ? end.toLocaleString() : end);
            }
        }
        requestAnimationFrame(animateCounter);
    }

    // 윈도우의 스크롤 이벤트를 모니터링합니다.
    $(window).on('scroll', function () {
        // 각 "counter" 요소에 대해 반복합니다.
        $counters.each(function () {
            const $el = $(this);
            // 요소가 아직 스크롤되지 않았다면 처리합니다.
            if (!$el.data('scrolled')) {
                // 요소의 위치 정보를 가져옵니다.
                const rect = $el[0].getBoundingClientRect();
                const winHeight = window.innerHeight;
                const contentHeight = rect.bottom - rect.top;

                // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
                if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                    const start = parseInt($el.data("start"));
                    const end = parseInt($el.data("end"));
                    // 숫자를 업데이트하고 애니메이션을 시작합니다.
                    updateCounter($el, start, end);
                    $el.data('scrolled', true);
                }
            }
        });
    }).scroll();
});
