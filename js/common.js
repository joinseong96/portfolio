var className = "scroll";
var scrollTrigger = 50;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

$(window).on('scroll', function () {
 
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();
 
    if (pos2 > $('#main').offset().top){
        posActive('main');
    }
    if (pos2 > $('#about').offset().top){
        posActive('about');
    }
    if (pos2 > $('#portfolio').offset().top){
        posActive('portfolio');
    }
    if (pos2 > $('#contact').offset().top || pos + $(window).height() === $(document).height()){
        posActive('contact');
    }
  });
  function posActive(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[href="#' + anchor + '"]').addClass('active');
  }
// ? header scroll fixed

function scrollDisable() {
  $("html, body").addClass("hidden");
}

// 스크롤 풀기
function scrollAble() {
  $("html, body").removeClass("hidden");
}

// 햄버거 버튼 클릭 시 메뉴 토글
$(function(){
  $('.menu_btn').click(function(){
    $(this).toggleClass('active');
    $(this).siblings('.nav_filter').toggleClass('active');
    $(this).siblings('.nav_filter').children('nav').toggleClass('active');

    if ($(".menu_btn").hasClass("active")) {
      scrollDisable();
    } else {
      scrollAble();
    }
  });

  $('.nav_bg').click(function(){
    $('.nav_filter').removeClass('active')
    $('nav').removeClass('active')
    $('.menu_btn').removeClass('active');
    scrollAble();
  });

  $(window).on("resize", function () {
    ww = $(window).width();
    if (ww < 769 || ww >= 769) {
      location.reload();
    }
  });
})