$(document).ready(function() {
	$("#save3").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱
//				alert(response.result);
				var worktime = $("#worktime").val(); //(有工作经验的   开始工作)  时间
				var workcompany = $("#workcompany").val(); //(有工作经验的填写) 公司
				var workzw = $("#workzw").val(); //(有工作经验的填写)职位
				var guimo = $("#guimo").val(); //(有工作经验的填写)公司规模
				var gsxz = $("#gsxz").val(); //(有工作经验的填写)公司性质
				var jygzlx = $("#jygzlx").val(); //(有工作经验的填写)  工作类型
				var gzms = $("#gzms").val(); //(有工作经验的填写)工作描述

				$.ajax({
					url: "/internship/resume/resumepartthree",
					data: {
						"rid": rid,
						"worktime": worktime,
						"workcompany": workcompany,
						"workzw": workzw,
						"guimo": guimo,
						"gsxz": gsxz,
						"jygzlx": jygzlx,
						"gzms": gzms
					},
					success: function(response) {
						state = response.result;
						if (state == true) {
							alert("信息已保存！");
						} else {
							alert("信息填写不完全！");
						}
					}

				});

				$(this).parent().css('display', 'none');
			}
		});


	});
});