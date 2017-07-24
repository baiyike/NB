	//浏览器缩放时
	window.onresize=function(){
		change();	
	};	
	change();
	function change(){
		var oFs=document.documentElement.clientWidth/(320/10);

		//设置根目录字体大小
		document.documentElement.style.fontSize=oFs+'px';	
	}
	
	window.onload=function(){
		//倒计时
		var send = document.getElementById('send');
		send.onclick=function(){
			// 定义变量用来显示计时
		  var num = 60;
		  var timer = setInterval(function(){
			  	num--;
			    if(num==0){
			  	  clearInterval(timer);
			  	  send.removeAttribute('disabled');
			  	  send.value='发送验证码';
			  	}else{
			  		send.setAttribute("disabled", true);  
			  		send.value=num;
			  	}
		  },1000);
		}
	}
	
	
	
