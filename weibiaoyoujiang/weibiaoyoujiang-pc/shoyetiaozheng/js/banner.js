(function(){
//返回顶部
	$(window).scroll(function () {

		if ($(window).scrollTop()>1000) {	
			$('.r-f-topbtno').show();						
		}else{
			$('.r-f-topbtno').hide();
		}
		
	})





var bnwidth,bnul,bnli,bnlen,bnovlen,bnqhBtn,bncurrentIndex=0;
    bnwidth=$(document.body).width()
    bnqhBtn=$(".big-ban-point li");
    bnul=$("#big-banner");
    bnulc = $('#big-banner').children();
    bnlen=$("#big-banner .cell").length;
    bnli= $(".cell");
    bnli.css("width",bnwidth+"px");
    $(".banner").css("width",bnwidth+"px");
    bnul.css("width",bnwidth*bnlen+"px");
      
    function bnnextFun(bncurrentIndex){ 
		        bnul.animate({left:-bncurrentIndex*bnwidth+"px"})
		  }
    var curIndex = 0;
   	
   	function autoPlay() {
				
				bncurrentIndex=$(this).index();
				bnnextFun(curIndex);
			    curIndex++;
			    if(curIndex == bnlen){
			    	curIndex = 0;
			    }
			    $(".big-ban-point").find("li").removeClass().eq(curIndex-1).addClass("active");
			    }
   		var autotimeout = setInterval(function(){autoPlay()}, 3000);
   	
	
    	
  
    
    //判断小圆点
    var $bnbanner_out=$('#big-banner');
    var bnpic_count=$bnbanner_out.find('.con').length;    
    if(bnpic_count==1){
    	return false;
    }
    for(var i=0;i<bnpic_count;i++)
	{
		$(".big-ban-point").append('<li></li>');	
	}
	
	
	
	//默认显示第一个
	$(".big-ban-point").children()[0].className='active';	
	$('.big-ban-point li').each(function(){
		$(this).mouseover(function(){
			clearInterval(autotimeout);
			bncurrentIndex=$(this).index();
			bnnextFun(bncurrentIndex);    
			if(bncurrentIndex >= bnulc.length){
//	        	alert(bnulc.length);
	            bncurrentIndex = 0;
	        }
	        $(".big-ban-point").find("li").removeClass().eq(bncurrentIndex).addClass("active");
	        bncurrentIndex++;
		})
		
		$(this).mouseout(function(){
			autotimeout = setInterval(function(){autoPlay()}, 3000);
		})
		
	});

	//倒计时
	<!--倒计时-->

		$(function(){
		
			countDown("2017/01/15 10:00:00",null,"#actearly .hour","#actearly .minute","#actearly .second");			
		});

		function countDown(time,day_elem,hour_elem,minute_elem,second_elem){
			//if(typeof end_time == "string")
			var end_time = new Date(time).getTime(),//月份是实际月份-1
			//current_time = new Date().getTime(),
			sys_second = (end_time-new Date().getTime())/1000;
			var timer = setInterval(function(){
				if (sys_second > 0) {
					sys_second -= 1;
					var day = Math.floor((sys_second / 3600) / 24);
					var hour = Math.floor((sys_second / 3600) % 24);
					var minute = Math.floor((sys_second / 60) % 60);
					var second = Math.floor(sys_second % 60);
					day_elem && $(day_elem).text(day);//计算天
					$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
					$(minute_elem).text(minute<10?"0"+minute:minute);//计算分
					$(second_elem).text(second<10?"0"+second:second);// 计算秒
				} else { 
					clearInterval(timer);
				}
			}, 1000);
		}
	
	
	//二维码
	$('.r-f-qrbtn').mouseover(function () {
		$('.hover-qr').show();
		setTimeout(function () {
			$('.hover-qr').hide();		     
			}, 1500);
									
		
	})

	//走马灯文字
//	window.onload=function(){
//	  new Marquee(
//	    "scro-txt",  //容器ID<br />
//	    0,  //滚动方向(0向上 1向下 2向左 3向右)<br />
//	    1,  //滚动步长<br />
//	    200,  //滚动区域宽度<br />
//	    50,  //滚动区域高度<br />
//	    50,  //定时器 数值越小，滚动的速度越快(1000=1秒,建议不小于20)<br />
//	    2000,  //停顿时间(0为不停顿,1000=1秒)<br />
//	    1000,  //开始等待时间(0为不等待,1000=1秒)<br />
//	    50 //间歇滚动间距(可选)<br />
//	    );
//	  };
//	function Marquee(){
//	  this.ID=document.getElementById(arguments[0]);
//	  this.Direction=arguments[1];
//	  this.Step=arguments[2];
//	  this.Width=arguments[3];
//	  this.Height=arguments[4];
//	  this.Timer=arguments[5];
//	  this.WaitTime=arguments[6];
//	  this.StopTime=arguments[7];
//	  if(arguments[8]){this.ScrollStep=arguments[8];}else{this.ScrollStep=this.Direction>1?this.Width:this.Height;}
//	  this.CTL=this.StartID=this.Stop=this.MouseOver=0;
//	  this.ID.style.overflowX=this.ID.style.overflowY="hidden";
//	  this.ID.noWrap=true;
//	  this.ID.style.width=this.Width;
//	  this.ID.style.height=this.Height;
//	  this.ClientScroll=this.Direction>1?this.ID.scrollWidth:this.ID.scrollHeight;
//	  this.ID.innerHTML+=this.ID.innerHTML;
//	  this.Start(this,this.Timer,this.WaitTime,this.StopTime);
//	  }
//	Marquee.prototype.Start=function(msobj,timer,waittime,stoptime){
//	  msobj.StartID=function(){msobj.Scroll();}
//	  msobj.Continue=function(){
//	    if(msobj.MouseOver==1){setTimeout(msobj.Continue,waittime);}
//	    else{clearInterval(msobj.TimerID); msobj.CTL=msobj.Stop=0; msobj.TimerID=setInterval(msobj.StartID,timer);}
//	    }
//	  msobj.Pause=function(){msobj.Stop=1; clearInterval(msobj.TimerID); setTimeout(msobj.Continue,waittime);}
//	  msobj.Begin=function(){
//	    msobj.TimerID=setInterval(msobj.StartID,timer);
//	    msobj.ID.onmouseover=function(){msobj.MouseOver=1; clearInterval(msobj.TimerID);}
//	    msobj.ID.onmouseout=function(){msobj.MouseOver=0; if(msobj.Stop==0){clearInterval(msobj.TimerID); msobj.TimerID=setInterval(msobj.StartID,timer);}}
//	    }
//	  setTimeout(msobj.Begin,stoptime);
//	  }
//	Marquee.prototype.Scroll=function(){
//	  switch(this.Direction){
//	    case 0:
//	      this.CTL+=this.Step;
//	      if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollTop+=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
//	      else{if(this.ID.scrollTop>=this.ClientScroll) this.ID.scrollTop-=this.ClientScroll; this.ID.scrollTop+=this.Step;}
//	      break;
//	    case 1:
//	      this.CTL+=this.Step;
//	      if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollTop-=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
//	      else{if(this.ID.scrollTop<=0) this.ID.scrollTop+=this.ClientScroll; this.ID.scrollTop-=this.Step;}
//	      break;
//	    case 2:
//	      this.CTL+=this.Step;
//	      if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollLeft+=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
//	      else{if(this.ID.scrollLeft>=this.ClientScroll) this.ID.scrollLeft-=this.ClientScroll; this.ID.scrollLeft+=this.Step;}
//	      break;
//	    case 3:
//	      this.CTL+=this.Step;
//	      if(this.CTL>=this.ScrollStep&&this.WaitTime>0){this.ID.scrollLeft-=this.ScrollStep+this.Step-this.CTL; this.Pause(); return;}
//	      else{if(this.ID.scrollLeft<=0) this.ID.scrollLeft+=this.ClientScroll; this.ID.scrollLeft-=this.Step;}
//	      break;
//	    }
//	  }
	//滚动数字
	var options = {
	useEasing : true, 
	useGrouping : true, 
	separator : ',', 
	decimal : '.', 
	prefix : '', 
	suffix : '' 
	};
	var dd1=155;
	var dd2=1294;
	var dd3=169;
	var demo = new CountUp("tra-data", 0, dd1, 0, 2.5, options);
	var demo2 = new CountUp("user-earn-int", 0, dd2, 0, 2.5, options);
	var demo3 = new CountUp("cum-tra-time", 0,dd3 , 0, 2.5, options);
	
	demo.start();
	demo2.start();
	demo3.start();



										                    
    })();








