$(document).ready(function(){

	$.ajax({
		url : "/internship/internlogin/Index",
		data : {},
		success : function(response){
			state = response.result;
			if(state == true){
			$(".loguser").show();
		    $(".nav-user").hide();	
			}else{
			$(".loguser").hide();
			$(".nav-user").show();
			}
		}
	});		
	
	//退出登录    清除session
	$("#logout").click(function(){
		$.ajax({
			url : "/internship/internlogin/Clearsession",
			data : {},
			success : function(response){	
				state = response.result;
				if(state == true){
				$(".loguser").hide();
			    $(".nav-user").show();
			    	alert("已退出登录！");
				}else{
					alert("无法退出当前账号！");
				}
			}
	   });	
	});
	
	//点击用户图标进入简历中心
	$(".icon-user").click(function(){
		location.href="../PC/internresume.html";
	});	
	
	
});








