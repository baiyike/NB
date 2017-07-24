	//浏览器缩放时
	window.onresize=function(){
		change();	
	};
	
	change();
	function change(){
		var oFs=document.documentElement.clientWidth/(640/40);

		//设置根目录字体大小
		document.documentElement.style.fontSize=oFs+'px';	
	}
	
	
	$(function(){
		
		 
		 $(".liebiao1_p2").stop().click(function(){
		 	  $(".motai").css("display","block")
		 	  $(".zuixiamian").css("display","block")
		 	  $(".zuixiamian").stop().animate({bottom:'0px'})
		 })
		 
	
		 
		 $(".zuixiamian li").click(function(){
		 	 $(".motai").css("display","none")
		 	 $(".zuixiamian").css("display","none")
		 	 $(".zuixiamian").css("bottom","-5.7rem")
		 })
		
		
	})
	