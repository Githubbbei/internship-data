$(document).ready(function() {
	$("#save8").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱
//				alert(response.result);
				var zt = $("#zt").val(); //主题
				var ztms = $("#ztms").val(); //主题描述
				var selfassess = $("#selfassess").val(); //自我评价
				$.ajax({
					url: "/internship/resume/resumeparteight",
					data: {
						"rid": rid,
						"zt": zt,
						"ztms": ztms,
						"selfassess":selfassess
						
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
