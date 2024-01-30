$(function(){
    // 비주얼 슬라이드
    let currentIndex = 0;

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % 3;
        $(".slider").eq(currentIndex).fadeOut(1200);
        $(".slider").eq(nextIndex).fadeIn(1200);
        currentIndex = nextIndex;

    },3000)

//    let classbtn = $(".classbtn > li");
//    let classList = $(".classlist");
//    classList.hide().eq(0).show();

//    classbtn.click(function(){
//     const index = $(this).index();

//     $(this).addClass("active").siblings().removeClass("active");
//     classList.eq(index).show().siblings().hide();
//    })
// 강좌 탭
    $('.classbtn > li').on('click', function(){
        var classBtn = $(this);
        var idx = classBtn.index();
        var box = classBtn.closest('#class');
        box.find('.tab_content').removeClass('on');
        box.find('.classbtn > li').removeClass('on');
        classBtn.addClass('on');
        box.find('.tab_content:eq('+idx+')').addClass('on');
        return false
    })

    $("#information ul li").mouseover(function(){
      var element = $(this).find("a > span");
  element.css("display", "block");
    })
    $("#information ul li").mouseout(function(){
      var element = $(this).find("a > span");
      element.css("display", "none");
    })
    // 갤러리
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
})

$(document).ready(function() {
    $(".gnb").mouseover(function(){        
      $(this).find(".submenu").stop().slideDown();  
    });
  
    $(".gnb").mouseout(function(){
      $(this).find(".submenu").stop().slideUp();
    });
  });
  // 멀티미디어 리소스 로딩 완료 후 실행
  window.addEventListener("load", function() {
    // 토글메뉴 a태그 이벤트 막기
    $('.navbar_toggleBtn').on("click",function(e){
      e.preventDefault();
    });
    // 햄버거바 클릭하면 메뉴가 아래로 펼쳐짐
  const hambergerBar = document.querySelector(".hambar");
  const xmark = document.querySelector("#header-xmark");
  let gnb = document.querySelector(".gnb");

  hambergerBar.addEventListener("click", function() {
    gnb.classList.add("active");
    hambergerBar.style.display = "none";
    xmark.style.display = "block";
  });
  xmark.addEventListener("click", function() {
    gnb.classList.remove("active");
    hambergerBar.style.display = "block";
    xmark.style.display = "none";
  });
    });