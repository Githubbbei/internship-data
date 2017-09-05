$(document).ready(function() {
	$("#save4").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱
//				alert(response.result);
				var xmsj = $("#xmsj").val(); //(校内项目或经验)时间
				var xmmc = $("#xmmc").val(); //(校内项目或经验)项目名称
				var xmms = $("#xmms").val(); //(校内项目或经验)项目描述
				var zzms = $("#zzms").val(); //(校内项目或经验)职责描述   
				$.ajax({
					url: "/internship/resume/resumepartfour",
					data: {
						"rid": rid,
						"xmsj": xmsj,
						"xmmc": xmmc,
						"xmms": xmms,
						"zzms": zzms
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
