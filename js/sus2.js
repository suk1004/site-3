$(document).ready(function(){

  $("#main").css({"opacity":"0"})
  $("#main").animate({"opacity":"1"},1500);

  /* 스크롤이벤트 */
  $(".area").css({"opacity":0});

  $(window).scroll(function(){

    $(".area").each(function(){

      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window >= bottom_of_object-20){
        $(this).animate({"opacity":"1","margin-bottom":"0px"},1000);
      }
    });
  
  });

  /* 이미지 변경 */
  $(document).ready(function () {

    $(".content2 img").mouseenter(function(){
      $(".content2 img").css("opacity","0").stop().attr({"src":"image/sus2_con2_02.jpg"}).animate({opacity:"1"},800);
    });
    $(".content2 img").mouseleave(function(){
      $(".content2 img").css("opacity","0").stop().attr({"src":"image/sus2_con2_01.jpg"}).animate({opacity:"1"},800);
    });

    $(".content3 img").mouseenter(function(){
      $(".content3 img").css("opacity","0").stop().attr({"src":"image/sus2_con3_02.jpg"}).animate({opacity:"1"},800);
    });
    $(".content3 img").mouseleave(function(){
      $(".content3 img").css("opacity","0").stop().attr({"src":"image/sus2_con3_01.jpg"}).animate({opacity:"1"},800);
    });
  });


  /* 탭메뉴 */
  $(".tab li").click(function(){

    let num = $(this).index();
    let move = 70*num; // 70px씩 증가됨

    $(".tab-header .tab-highlight").animate({top:move});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    

    let result = $(this).attr("data-alt")
    $(".tab-contents div").removeClass("active");
    $("#"+result).addClass("active");

  });

});