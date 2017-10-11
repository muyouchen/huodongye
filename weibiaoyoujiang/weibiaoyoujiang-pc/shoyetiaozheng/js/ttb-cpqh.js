$(function(){
	$(".pro-info").click(function(){
		if($(".pro-info").hasClass('ppb-bqh')){
			$('.pro-inf').show();
			$('.pro-int').hide();
			$('.com-pro').hide();
			$('.pro-into').removeClass('ppb-bqh');
			$('.com-proo').removeClass('ppb-bqh')
		}else{
			
			$(".pro-info").addClass('ppb-bqh')
			$('.pro-inf').show();
			$('.pro-int').hide();
			$('.com-pro').hide();
			$('.pro-into').removeClass('ppb-bqh');
			$('.com-proo').removeClass('ppb-bqh')
		}	
	})
	
	$(".pro-into").click(function(){
		if($(".pro-into").hasClass('ppb-bqh')){
			$('.pro-int').show();
			$('.pro-inf').hide();
			$('.com-pro').hide();
			$('.pro-info').removeClass('ppb-bqh');
			$('.com-proo').removeClass('ppb-bqh')
		}else{
			
			$(".pro-into").addClass('ppb-bqh')
			$('.pro-int').show();
			$('.pro-inf').hide();
			$('.com-pro').hide();
			$('.pro-info').removeClass('ppb-bqh');
			$('.com-proo').removeClass('ppb-bqh')
		}	
	})
	
	$(".com-proo").click(function(){
		if($(".com-proo").hasClass('ppb-bqh')){
			$('.com-pro').show();
			$('.pro-inf').hide();
			$('.pro-int').hide();
			$('.pro-info').removeClass('ppb-bqh');
			$('.pro-into').removeClass('ppb-bqh')
		}else{
			
			$(".com-proo").addClass('ppb-bqh')
			$('.com-pro').show();
			$('.pro-inf').hide();
			$('.pro-int').hide();
			$('.pro-info').removeClass('ppb-bqh');
			$('.pro-into').removeClass('ppb-bqh')
		}	
	})
	
	//弹窗
		
	$('.ttb-tr-btn1').click(function (){
		$(".box").addClass('inv-reso');
	});
	
	
	$('.ttb-ddclosebtn').click(function (){
			$(".box").removeClass('inv-reso');
		});
		
	$('.ttb-ddclosebtn').click(function (){
			$(".inv-res").removeClass('inv-resellout');
		});	

})