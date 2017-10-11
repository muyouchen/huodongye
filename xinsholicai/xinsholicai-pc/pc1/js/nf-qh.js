$(function(){
	/*======next======*/
	$(".next a").click(function(){ nextscroll() });
	function nextscroll(){
			var vcon = $(".n-f-cont ");
			var offset = ($(".n-f-cont li").width())*-1;			
			vcon.stop().animate({left:offset},"slow",function(){
				 var firstItem = $(".n-f-cont ul li").first();
				 vcon.find("ul").append(firstItem);
				 $(this).css("left","0px");
				 circle()				
			});  		
	};
	function circle(){		  
			var currentItem = $(".n-f-cont ul li").first();
			var currentIndex = currentItem.attr("index");
			$(".circle li").removeClass("circle-cur");
			$(".circle li").eq(currentIndex).addClass("circle-cur");			
	}
	//setInterval(nextscroll,2000)	 
	/*======prev======*/
	$(".prev a").click(function(){
			var vcon = $(".n-f-cont ");
			var offset = ($(".n-f-cont li").width()*-1);
			var lastItem = $(".n-f-cont ul li").last();
			vcon.find("ul").prepend(lastItem);
			vcon.css("left",offset);
			vcon.animate({left:"0px"},"slow",function(){
				 circle()
			})
	});
   /*======btn====circle======*/
	 var animateEnd = 1;
	$(".circle li").click(function(){
		  if(animateEnd==0){return;}		
		  $(this).addClass("circle-cur").siblings().removeClass("circle-cur");		
			var nextindex = ($(this).index())/2;
			var currentindex = $(".n-f-cont li").first().attr("index");
			var curr = $(".n-f-cont li").first().clone();
			if(nextindex > currentindex){
					for (var i = 0; i < nextindex - currentindex; i++) {						 
						 var firstItem = $(".n-f-cont li").first();
						 $(".n-f-cont ul").append(firstItem); 							
					}
					$(".n-f-cont ul").prepend(curr);
					var offset = ($(".n-f-cont li").width())*-1;
					if(animateEnd==1){
						animateEnd=0;	
						$(".n-f-cont").stop().animate({left:offset},"slow",function(){
								$(".n-f-cont ul li").first().remove();
								$(".n-f-cont").css("left","0px");
								animateEnd=1;
						}); 
					} 
			}else{
					var curt = $(".n-f-cont li").last().clone();
					for (var i = 0; i < currentindex - nextindex; i++) {
						 var lastItem = $(".n-f-cont li").last();
						 $(".n-f-cont ul").prepend(lastItem);
					}
					$(".n-f-cont ul").append(curt);
					var offset = ($(".n-f-cont li").width())*-1;
					$(".n-f-cont").css("left",offset);							
					  if(animateEnd==1){
							animateEnd=0;	
							$(".n-f-cont").stop().animate({left:"0px"},"slow",function(){							
								$(".n-f-cont ul li").last().remove();
									animateEnd=1;								  
							}); 
							} 					
				}
		});
 })
  
