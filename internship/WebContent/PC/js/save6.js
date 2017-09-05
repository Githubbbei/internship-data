$(document).ready(function() {
	$("#save6").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱
//				alert(response.result);
				var jxsj = $("#jxsj").val(); //(获奖)时间	
				var jxmc = $("#jxmc").val(); //奖项名称
				$.ajax({
					url: "/internship/resume/resumepartsix",
					data: {
						"rid": rid,
						"jxsj": jxsj,
						"jxmc": jxmc
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