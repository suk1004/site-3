$(document).ready(function(){

  $("#main").css({"opacity":"0"})
  $("#main").animate({"opacity":"1"},1500);

  /* 스크롤이벤트 */
  $(window).scroll(function(){

    $(".area").each(function(){

      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window >= bottom_of_object-20){
        $(this).animate({"opacity":"1","margin-bottom":"0px"},1000);
      }
    });
  });

  /* 이미지 슬라이드 */
  let soldidx1 = 0;
  let sidx1 = 0;
  let simg_h1 = $(".imgBox1 img").height();

  $(".img_btn1 ul li").click(function(){

    sidx1 = $(this).index();
    smove1 = -(simg_h1*sidx1);

    $(".imgBox1").animate({top:smove1},600);
    $(".img_btn1 ul li").eq(soldidx1).removeClass("activeup");
    $(".img_btn1 ul li").eq(sidx1).addClass("activeup");
    soldidx1 = sidx1;
    return false;
  });

  let soldidx2 = 0;
  let sidx2 = 0;
  let simg_h2 = $(".imgBox2 img").height();

  $(".img_btn2 ul li").click(function(){

    sidx2 = $(this).index();
    smove2 = -(simg_h2*sidx2);

    $(".imgBox2").animate({top:smove2},600);
    $(".img_btn2 ul li").eq(soldidx2).removeClass("activeup");
    $(".img_btn2 ul li").eq(sidx2).addClass("activeup");
    soldidx2 = sidx2;
    return false;
  });

  let soldidx3 = 0;
  let sidx3 = 0;
  let simg_h3 = $(".imgBox3 img").height();

  $(".img_btn3 ul li").click(function(){

    sidx3 = $(this).index();
    smove3 = -(simg_h3*sidx3);

    $(".imgBox3").animate({top:smove3},600);
    $(".img_btn3 ul li").eq(soldidx3).removeClass("activeup");
    $(".img_btn3 ul li").eq(sidx3).addClass("activeup");
    soldidx3 = sidx3;
    return false;
  });


});