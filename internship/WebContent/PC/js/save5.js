$(document).ready(function() {
	$("#save5").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱
//				alert(response.result);
				var jysj = $("#jysj").val(); //(教育)时间
				var byxx = $("#byxx").val(); //毕业学校
				var zy = $("#zy").val(); //专业
				var xw = $("#xw").val(); //学位
				var sxkc = $("#sxkc").val(); //所学课程
				$.ajax({
					url: "/internship/resume/resumepartfive",
					data: {
						"rid": rid,
						"jysj": jysj,
						"byxx": byxx,
						"zy": zy,
						"xw": xw,
						"sxkc": sxkc
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
