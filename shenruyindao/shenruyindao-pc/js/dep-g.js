$(function(){
	
	$('.dep-nav li').click(function(){
		    var $this = $(this);
		    itemIndex = $this.index();
		    $this.addClass('dep-nav-qh').siblings('li').removeClass('dep-nav-qh');
		    $('.dep-g-content .dep-d-bli').eq(itemIndex).show().animate({'opacity':1},300).siblings('.dep-g-content .dep-d-bli').hide().animate({'opacity':0},300);
		});
	
	
	//步骤1
	var bannerSlider = new Slider($('#dep-d-d1'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.dep-g-qhbtn'),
		activeControllerCls: 'dep-g-cur'
	});
	$('.dep-prev a').click(function() {
		bannerSlider.prev()
	});
	$('.dep-next a').click(function() {
		bannerSlider.next()
	});
	
	//步骤2
	var bannerSlider2 = new Slider($('#dep-d-d2'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.dep-g-qhbtn2'),
		activeControllerCls: 'dep-g-cur'
	});
	$('.dep-prev2 a').click(function() {
		bannerSlider2.prev()
	});
	$('.dep-next2 a').click(function() {
		bannerSlider2.next()
	});
	
	//步骤3
	var bannerSlider3 = new Slider($('#dep-d-d3'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.dep-g-qhbtn3'),
		activeControllerCls: 'dep-g-cur'
	});
	$('.dep-prev3 a').click(function() {
		bannerSlider3.prev()
	});
	$('.dep-next3 a').click(function() {
		bannerSlider3.next()
	});
	//步骤4
	var bannerSlider4 = new Slider($('#dep-d-d4'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.dep-g-qhbtn4'),
		activeControllerCls: 'dep-g-cur'
	});
	$('.dep-prev4 a').click(function() {
		bannerSlider4.prev()
	});
	$('.dep-next4 a').click(function() {
		bannerSlider4.next()
	});
	//步骤5
	var bannerSlider5 = new Slider($('#dep-d-d5'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.dep-g-qhbtn5'),
		activeControllerCls: 'dep-g-cur'
	});
	$('.dep-prev5 a').click(function() {
		bannerSlider5.prev()
	});
	$('.dep-next5 a').click(function() {
		bannerSlider5.next()
	});
	//步骤5
	var bannerSlider6 = new Slider($('#dep-d-d6'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.dep-g-qhbtn6'),
		activeControllerCls: 'dep-g-cur'
	});
	$('.dep-prev6 a').click(function() {
		bannerSlider6.prev()
	});
	$('.dep-next6 a').click(function() {
		bannerSlider6.next()
	});
	//弹窗切换
	$(".r-n-next a").click(function(){ nextscroll() });
	function nextscroll(){
			var vcon = $(".r-n-cont ");
			var offset = ($(".r-n-cont li").width())*-1;			
			vcon.stop().animate({left:offset},"slow",function(){
				 var firstItem = $(".r-n-cont ul li").first();
				 vcon.find("ul").append(firstItem);
				 $(this).css("left","0px");			
			});  		
	};
	$(".r-n-prev a").click(function(){
			var vcon = $(".r-n-cont ");
			var offset = ($(".r-n-cont li").width()*-1);
			var lastItem = $(".r-n-cont ul li").last();
			vcon.find("ul").prepend(lastItem);
			vcon.css("left",offset);
			vcon.animate({left:"0px"},"slow",function(){
			})
	});
	
	$(".close-btn").click(function(){
		$('.box').removeClass('real-nameo');
	})
	$(".real-name-btn").click(function(){
		$('.box').addClass('real-nameo');
	})
	
	$(".pay-bk-lbtn").click(function(){
		$('.box').addClass('pay-bk-listo');
	})
	$(".ppb-ddclosebtn").click(function(){
		$('.box').removeClass('pay-bk-listo');
	})
	
	
})	