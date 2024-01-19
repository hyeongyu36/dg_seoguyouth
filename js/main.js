$(function(){
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;

    },3000)

   

})
// $(function(){
//     let currentIndex = 0;   //현재 이미지
//     $(".sliderWrap").append($(".slider").first().clone(true));  //첫번째 이미지를 복사, 마지막에 추가

//     setInterval(function(){     //3초에 한번씩 실행
//         currentIndex++;     //현재 이미지를 1씩 증가
//         $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600); //이미지 애니메이션

//         if(currentIndex == 3){  //마지막 이미지일때
//             setTimeout(function(){  
//                 $(".sliderWrap").animate({marginLeft: 0}, 0);   //애니메이션을 정지
//                 currentIndex = 0;   //현재이미지 초기화
//             }, 700);
//         }
//     }, 3000);
// });