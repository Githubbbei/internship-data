$(document).ready(function() {
	$("#save7").click(function() {
		
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱
//				alert(response.result);
				var jntc = $("#jntc").val(); //技能/特长
				var zwcd = $("#zwcd").val(); //掌握程度
				$.ajax({
					url: "/internship/resume/resumepartseven",
					data: {
						"rid": rid,
						"jntc": jntc,
						"zwcd": zwcd
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
