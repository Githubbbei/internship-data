$(document).ready(function() {
	$("#save2").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
//				alert(response.result);
				var qwyx = $("#qwyx").val(); //期望月薪
				var workcity = $("#workcity").val(); //工作地点
				var worktype = $("#worktype").val(); //职位类型
				var rid = response.result; //ID  邮箱
				var workhy = $("#workhy").val(); //所属行业
				var qzgzlx = $("#qzgzlx").val(); //工作类型
				var dgsj = $("#dgsj").val(); //到岗时间	   	   
				if (rid && qwyx && workcity && worktype && workhy && qzgzlx && dgsj != null) {
//					alert("123");
					$.ajax({
						url: "/internship/resume/resumeparttwo",
						data: {
							"qwyx": qwyx,
							"workcity": workcity,
							"worktype": worktype,
							"rid": rid,
							"workhy": workhy,
							"qzgzlx": qzgzlx,
							"dgsj": dgsj
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
				$(this).parent().css('display', 'none');
			}
		});


	});
});