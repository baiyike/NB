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
		
		
		document.getElementById("ico").onclick=function(){
			var ico = document.getElementById("ico");
			var aa=ico.title;
			var ins = document.getElementById("in");
	        if(aa == "隐藏密码"){
	        	ico.title = "显示密码";
            	ins.type="text";
            	ico.style.color=" #F96840";
	        }else if(aa == "显示密码"){
	            ico.title = "隐藏密码";
	            ins.type="password";
	            ico.style.color=" #A7A7A7";
	        }
		}
		
	}
	