/**
 * di 더보기 접기 구현
 * @param {} event 
 */
//현재 화면에 보이는 웹 브라우저 페이지 크기
window.onresize = function(event) {
    let innerWidth = window.innerWidth;
    if(innerWidth<768) {
        fn_screenMax768();
    } else{
        fn_screenMin768();
    }
}


/**
 * load는 돔트리,리소스까지 로드되고 실행
 * DOMContentLoaded는 돔트리만 로드되고 실행
 */

//768px 이하 width로 로드되었을때 보여지는 특허&인증 카드갯수
window.addEventListener('DOMContentLoaded', function(){
    let innerWidth = window.innerWidth;
    if(innerWidth<768) {
        fn_screenMax768();
    } else{
        fn_screenMin768();
    }
});

function fn_screenMin768() {
    $('.certifi_container>.certifi_grid').show();
    $('.certifi_container>.certifi_front').show();
};

function fn_screenMax768() {
    let btn = document.getElementById('more_btn');
    btn.value='더보기';
    $('.certifi_container>.certifi_grid').slice(6,9).hide();
    $('.certifi_container>.certifi_front').slice(6,9).hide();
}

function changeText() {
    let btn = document.getElementById('more_btn');
    let runData = 1
    if(btn.value === '더보기') {
        btn.value = '접기';
        runData = 0;
    } else {
        btn.value = '더보기';
        runData = 1;
    }
    fn_more_less(runData)
}

function fn_more_less(data) {
    if(data !== 1) {
        $(".certifi_img_wrap").css({"height":"auto"});
        $(".certifi_container").css({"height":"auto"});
        $(".certifi_container>.certifi_grid").css({"height":"330px"});
        $(".certifi_container>.certifi_front").css({"height":"330px"});
        $('.certifi_container>.certifi_grid').slice(6,9).fadeIn(600);
        $('.certifi_container>.certifi_front').slice(6,9).fadeIn(600);
    } else {
        $('.certifi_container>.certifi_grid').slice(6,9).fadeOut(300);
        $('.certifi_container>.certifi_front').slice(6,9).fadeOut(300);
    }
}
