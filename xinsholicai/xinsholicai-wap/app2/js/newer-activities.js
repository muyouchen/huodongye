$(function(){

	//步骤1
	var bannerSlider1 = new Slider($('#qh-content1'), {
		time: 5000,
		delay: 400,
		event: 'click',
		auto: false,
		mode: 'fade',
		controller: $('.qhbtn'),
		activeControllerCls: 'qh-cur'
	});
	$('.dep-prev1 a').click(function() {
		bannerSlider1.prev()
	});
	$('.dep-next1 a').click(function() {
		bannerSlider1.next()
	});
	
	
	
	
	
	
})	