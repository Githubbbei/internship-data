$(document).ready(function(){
	
	$("#submit").click(function(){
		
		var email=$("#email").val();
		var password=$("#password").val();
		
		$.ajax({
			url:"/internship/intern/checkEmail",
				data:{
					"email" : email
				},
				success:function(response){
					var rsgetEmail=response.result;
					if (email == "admin" && password == "123456") {
						location.href = "../PC/adminqy.html";	
					}else if(rsgetEmail == "不存在"){
						alert("邮箱不存在！请先注册");						
					}else {
							$.ajax({
							  url:"/internship/internlogin/Loguser",
							  data:{
								"email":email,
								"password":password							
								},									
								success:function(response){	
									
									var stater=response.result;
									if(stater == true){
										alert("密码不正确");
										$("#password").val("");
										
									} else {
										location.href = "../PC/index.html";	
									}	
								}
							});	
					 }
				
					
				}				
					 			
		});
		
	});
});