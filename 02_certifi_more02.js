
/*
자 여기서 문제3개
ⓐ 왜 more함수가 최초 1회만 실행이 되고 다음에 실행이 안되는 것일까~?
d이것먼저 답변달아보셔요~
코드 작성하는 것보다 더 중요합니댜
코드는 사실 금방 작성해요 다만 왜 안됫는지 아는게 더 중요해요~
또한 되는건 왜 되는지도 알아야 합니다 .그리고 코드 작성하기 전에 
종이에 내가 어떤 기능을 할건데 그 기능에 대한 플로우를 그려보고 나서 키보드에 손데는 거에요
예를 들어 
버튼 이벤트시 -> 나머지 기능들이 보여야함 -> 맥시멈 몇까지 보이고 다시 가리기
- 인라인이벤트로 작성 onclick 
- show ,hide 로 판별 또는 display none, block 으로 attr 이용하여 판별
- 화면 변화 이벤트가 일어날때마다 실행이 되어야 함 -> 어떤 함수들이 있을까?
해보시겠어요~?어떻게할까요~? 코드만 쳐드릴까요~? 아님 해보실래요~?
공부해보게뜸 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
생신입이 안적고 상상코딩으로 코드 부터 작성하면 시건방져보여요  그리고 업무 효율도 개판나구요
내가 뭘할지부터 파악하고 필요한 자원들을 파악하는게 먼저입니다.
ⓑ ready가 어디에 있어야 하는 걸까~?
->.certifi_container?ㄴㄴ 최상단이죠 
왜 저깃어야 하는지 알아오시고 
ⓒ 왜 more 함수가 실행이 안되는 것일까~? 
=>내가 작성한 코드에서 답을 찾아봐바
*/

/**
 * ready
 */
// document.addEventListener("DOMContentLoaded", function(){
//      fn_screen_change();
// })
/**
 * 화면변화시 이벤트 실행
 */
// function fn_screen_change(){
//     //늘어난 div에 대한 visible 판별값
//     let grid_diplay_chk = $('.certifi_container>.certifi_grid').is(':visible');
//     console.log('grid_diplay_chk : ',grid_diplay_chk)
//     //브라우저 넓이
//     var outerWidth = window.outerWidth;
//     //브라워저 높이 
//     var outerHeight = window.outerHeight;
//     if(outerWidth=='768px'){
//         if(!!grid_diplay_chk) {
//             console.log('111111111111')
//             $(".certifi_img_wrap").css({"height":"1000px"})
//             $(".certifi_container>.certifi_grid").css({"height":"330px"})
//             $(".certifi_container>.certifi_front").css({"height":"330px"})
            
//         } else if(!grid_diplay_chk) {
//             console.log('222222222222222')
//             $(".certifi").css({"height":"1524px"})
//             $(".certifi_img_wrap").css({"height":"1524px"})
//             $(".certifi_container").css({"height":"1524px"})
//             $(".certifi_container>.certifi_grid").css({"height":"504px"})
//             $(".certifi_container>.certifi_front").css({"height":"504px"})
//         }
//     }else{

//     }
// }
/**
 * explain: 더보기 버튼
 * @'returns 상태값 변경
 */
// function more(){
//     var outerHeight = window.outerHeight;
//     if(outerHeight>'768'){
//         return;
//     }
//     $('.certifi_container>.certifi_grid').slice(6,9).show();
//     $('.certifi_container>.certifi_front').slice(6,9).show();
    
// }

// window.onresize=function(){
//     fn_screen_change();
// }
//차이점 보이시나요~?코드가 한눈에 들어오지않나여~?


if(matchMedia("screen and (max-width: 768px)").matches) {
    $(document).ready(function(){
        $('.certifi_container>.certifi_grid').hide();
        $('.certifi_container>.certifi_front').hide();
        $('.certifi_container>.certifi_grid').slice(0,6).show();
        $('.certifi_container>.certifi_front').slice(0,6).show();
    })

    function more(){
        $('.certifi_container>.certifi_grid').slice(6,9).show();
        $('.certifi_container>.certifi_front').slice(6,9).show();
    }
} else {}

let grid_diplay_chk = $('.certifi_container>.certifi_grid').is(':visible');
console.log('grid_diplay_chk : ',grid_diplay_chk)
if(!!grid_diplay_chk) {
    // console.log('111111111111')
    $(".certifi_img_wrap").css({"height":"auto"})
    $(".certifi_container").css({"height":"auto"})
    $(".certifi_container>.certifi_grid").css({"height":"330px"})
    $(".certifi_container>.certifi_front").css({"height":"330px"})
} else if(!grid_diplay_chk) {
    // console.log('222222222222222')
    $(".certifi_img_wrap").css({"height":"auto"})    
    $(".certifi_container").css({"height":"auto"})
    $(".btn").css({"margin-top":"30px"})
}
