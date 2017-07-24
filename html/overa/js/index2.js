$(function(){
	
	$(".hou").tap(function(){
			window.location = "index1.html";
		})
	$(".pull>input").tap(function(){
		if($(".radio").attr("checked")){
			window.location = "index4.html";
		}
	})
	$(".pull").tap(function(){
			window.location = "index4.html";
		})
	
})
