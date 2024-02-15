$(document).ready(function(){

	window.addEventListener("wheel", function(e){
		e.preventDefault();
	},{passive : false});

	let page = 0;	
	let lastPage = $(".box").length;
	let hh = $("header").height();
  let wh = $(window).height() - hh;

	$("html").animate({scrollTop:0},10);

	$(window).on("wheel", function(e){

		if($("html").is(".animated")) return;

		if(e.originalEvent.deltaY > 0){
			if(page == lastPage-1) return;
			page++;
		}else if(e.originalEvent.deltaY < 0){
			if(page == 0) return;
			page--;
		}
		
		let posTop = page * wh;
		$("html").stop().animate({scrollTop : posTop},800);

	});

});

