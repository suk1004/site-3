$(document).ready(function(){

  $("#main").css({"opacity":"0"})
  $("#main").animate({"opacity":"1"},1500);

  $(window).scroll(function(){

    $(".area").each(function(){

      let bottom_of_object = $(this).offset().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if(bottom_of_window >= bottom_of_object-20){
        $(this).animate({"opacity":"1","margin-bottom":"0px"},1000);
      }
    });
  });

});