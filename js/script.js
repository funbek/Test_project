$(document).ready(function(){
	var a = $( document ).height();
	$('.navigation').height(a);

	// width of browser
	$(window).resize(displayDimensions);
	displayDimensions();
	function displayDimensions(){
		var wraper_width = $("#wraper").width();
		var nav_width = $(".navigation").width();
		if (wraper_width > 1060){
			$(".all-width").width(wraper_width-52);
			$(".all-width .wraper-block").css({
				right: 25
			});
		}
		else{
			$(".all-width").width(958);
			$(".all-width .wraper-block").css({
				right: 0
			});
		}
	};

	// change lang
	$(".chose-lang").click(function(){
		$(".chose-lang>div").slideToggle(200).addClass('open');
	});

	// menu icon change color active
	$('.navigation ul li a').click(function(){
		$(".navigation ul li a").removeClass("active");
		$(this).addClass("active");
	})

	// open/close menu block
	$(".navigation .menu-button").click(function(){
		$(this).toggleClass("open");
		if($(this).hasClass("open")){
			$(".navigation").animate({
				width: 280
				}, 500);
			$(".text-menu").show(500);
		}
		else{
			$(".navigation").animate({
				width: 50
				}, 500);
			$(".text-menu").hide(500);
		}
	})

	//smooth scrolling 
    $('a[href^="#"].smooth').bind('click.smoothscroll',function (e) {
         e.preventDefault();
         
        var target = this.hash,
         $target = $(target);
         
        $('html, body').stop().animate({
             'scrollTop': $target.offset().top
             }, 500, 'swing', function () {
             window.location.hash = target;
         });
     });
})