$(document).ready(function(){
	$(".register-btn").click(function(){
		
		var email=$("#email").val();
		var state=$(".state").text();
		var regEmail=new RegExp("^[A-Za-zd]+([-_.][A-Za-zd]+)*|[0-9]*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$");//邮箱
		var rsEmail=regEmail.test(email);
		if(rsEmail==false){
			$("#email").css("color","red");
			alert("邮箱格式填写错误");
		}else{
			$("#email").css("color","black");
		}
		
		var password=$("#password").val();
		var regPassword=new RegExp("^[0-9]{6,20}$");//字母，数字，下划线
		var rsPassword=regPassword.test(password);
		if(rsPassword==false){
			$("#password").css("color","red");
			alert("密码格式填写错误");
		}else{	
			$.ajax({
				url:"/internship/company/checkEmail",
					data:{
						"email" : email
					},
					success:function(response){
						var rsgetEmail = response.result;
						if(rsgetEmail == false){
							$("#email").css("color","red");
							alert("邮箱已存在！");
//							return;
						}
						else if(rsEmail && rsPassword){
							$.ajax({
								url:"/internship/company/register",
								data:{
									"email":email,
									"password":password							
								},									
								success:function(response){
//									alert(response.result);
									var getEmail=response.result;
									if(getEmail == true){
										$.ajax({
											url:"/internship/company/registerresume",
											data:{
												"email":email,
												"state":state
											},												
											success:function(response){
												location.href = ("../PC/companyLogin.html");
												alert("注册成功，请登录");
											}
										});
									}
								}									
							});
									
						}
					
						
					}	
						 			
			});
		}
		
		
	});
	
});