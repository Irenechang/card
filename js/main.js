$(function() {
    $('.main__cover__bg').addClass('is_hide');

    $('.carousel').carousel({
        keyboard: true,
    });
    $(".carousel-control-prev").click(function(){
    	$(".carousel").carousel("prev");
	});
    $(".carousel-control-next").click(function(){
    	$(".carousel").carousel("next");
	});
});
