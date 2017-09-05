$(document).ready(function() {
	$("#save1").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
//				alert(response.result);
				var username = $("#username").val(); //姓名
				var birthday = $("#birthday").val(); //出生日期
				var phone = $("#phone").val(); //电话
				var rid = response.result; //ID  邮箱
				var sex = $("input[type='radio']:checked").val(); //性别
				var gznf = $("#gznf").val(); //开始工作年份
				var qzzt = $("#qzzt").val(); //求职状态
				var jzd = $("#jzd").val(); //求职状态	   	   
				var picture = $("#picture").css('backgroundImage'); //照片
				if (rid && username && birthday && phone && sex && gznf && qzzt != null) {
//					alert("123");
					$.ajax({
						url: "/internship/resume/resumepartone",
						data: {
							"username": username,
							"birthday": birthday,
							"phone": phone,
							"rid": rid,
							"sex": sex,
							"gznf": gznf,
							"qzzt": qzzt,
							"jzd": jzd,
							"picture": picture
						},
						success: function(response) {
							var state = response.result;
							if (state == true) {
								alert("信息已保存！");
								
							} else {
								alert("信息填写不完全！");
							}
						}

					});
				} else {
					alert("信息填写不完全！");
				}
			}
		});
		parent.location.reload();
	});
	
	
	$(".cancel1").click(function(){
		
		var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
		 parent.layer.close(index);
		
	});
});