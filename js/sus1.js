$(document).ready(function(){

  
  $("#main").css({"opacity":"0"})
  $("#main").animate({"opacity":"1"},1500);

  /* 스크롤이벤트 */
  $(".area").css({"opacity":0});

  $(window).scroll(function(){

    $(".area").each(function(){

      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window > bottom_of_object){
        $(this).animate({"opacity":"1","margin-bottom":"0px"},1000);
      }
    });
  
  });

  /* 이미지 변경 */
  $(document).ready(function () {

    $(".content2 img").mouseenter(function(){
      $(".content2 img").css("opacity","0").stop().attr({"src":"image/sus1_con2_02.jpg"}).animate({opacity:"1"},800);
    });
    $(".content2 img").mouseleave(function(){
      $(".content2 img").css("opacity","0").stop().attr({"src":"image/sus1_con2_01.jpg"}).animate({opacity:"1"},800);
    });

    $(".content3 img").mouseenter(function(){
      $(".content3 img").css("opacity","0").stop().attr({"src":"image/sus1_con3_02.jpg"}).animate({opacity:"1"},800);
    });
    $(".content3 img").mouseleave(function(){
      $(".content3 img").css("opacity","0").stop().attr({"src":"image/sus1_con3_01.jpg"}).animate({opacity:"1"},800);
    });
  });

  /* 배너 */
  let soldidx = 0;
  let sidx = 0;
  let simg_w = $("#largeImg img").width();

  $(".thumbs a").click(function(){

    sidx = $(this).index();
    smove = -(simg_w*sidx); 
    
    $(".slide_img #largeImg").animate({"left":smove},600);
    $(".thumbs a").eq(soldidx).removeClass("on");
    $(".thumbs a").eq(sidx).addClass("on");
    $(".imgText li").eq(soldidx).stop().animate({"left":"-1000px"},600);
    $(".imgText li").eq(sidx).animate({"left":"120px"},600);
    soldidx = sidx;
    return false;
  });

});