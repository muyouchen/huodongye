$(window).scroll(function () {

if ($(window).scrollTop()>500) {
	
	
		$('.gd-pic1').addClass('gdam1');
			
		setTimeout(function () {		
			$('.gd-pic2').addClass('gdam2')
		}, 1500);	
}else{
		$('.gd-pic1').removeClass('gdam1');
		$('.gd-pic2').removeClass('gdam2')
}

if($(window).scrollTop()>1200){

	$('.gd-pic4').addClass('gdam3');
	setTimeout(function () {
		$('.gd-pic3').addClass('gdam2')
	}, 1500);
}else{
		$('.gd-pic4').removeClass('gdam3');
		$('.gd-pic3').removeClass('gdam2')
}


if($(window).scrollTop()>1700){

	$('.gd-pic5').addClass('gdam4');
	setTimeout(function () {
		$('.gd-pic6').addClass('gdam2')
	}, 1500);	
	
}else{
		$('.gd-pic5').removeClass('gdam4');
		$('.gd-pic6').removeClass('gdam2')
}


if($(window).scrollTop()>2700){

	$('.gd-pic7').addClass('gdam3');
	setTimeout(function () {
		$('.gd-pic8').addClass('gdam2')
	}, 1500);	
	
}else{
		$('.gd-pic7').removeClass('gdam3');
		$('.gd-pic8').removeClass('gdam2')
}

if($(window).scrollTop()>3200){

	$('.gd5').addClass('gdam5')
		
}


});