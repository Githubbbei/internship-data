$(document).ready(function() {
	
	$.ajax({
		url: "/internship/companylogin/Index1",
		data: {},
		success: function(response) {
			var qid = response.result; //ID  邮箱
			$.ajax({
				url:"/internship/resume/searchall2",
				data:{
					"qid":qid
				},
				success:function(date){
					var dater=date.list;
					$("#gsmc").text(dater.gsmc);
					$("#city").text(dater.city);
					$("#zyyw").text(dater.zyyw);
					$("#phone").text(dater.phone);
					$("#email").text(qid);
				}
				});
		}
	});
	
	
	$(".edit").click(function() {
		layer.open({
			type: 2,
			title: '编辑企业信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['600px', '550px'],
			content: 'save9.html',
		});
	});
	
	$(".fb").click(function() {
		$.ajax({
			url: "/internship/companylogin/Index1",
			data: {},
			success: function(response) {
				var qid = response.result; //ID  邮箱
				alert(qid);
				$.ajax({
					url: "/internship/position/searchstate",
					data: {
						"qid":qid
					},
					success: function(response) {
						var dater=response.resumeinfo;
						var gsmc = dater.gsmc;
						var city = dater.city;
						var zyyw = dater.zyyw;
						var phone = dater.phone;
						var state = dater.state;
						if (gsmc == null || city == null || zyyw == null || phone == null){
							alert("请完善你的信息");
						} else if (state == "通过") {
							layer.open({
								type: 2,
								title: '发布职位',
								// skin: 'save.css', //样式类名
								closeBtn: 1, //显示关闭按钮
								anim: 2,
								shadeClose: true, //开启遮罩关闭
								area: ['600px', '550px'],
								content: 'fbzw.html',
							});
						} else {
							alert("等待审批");
						}
					}
				});
			}
		});
		
	});

	$(".updateposition").click(function() {
		location.href = "../PC/companyzwgl.html";
	});
	
	$(".apply").click(function() {
		location.href = "../PC/apply.html";
	});
	
	$(".btn-warning").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['600px', '550px'],
			content: '',
		});
	});
	
	
	$("#save9").click(function() {
		
		$.ajax({
			url: "/internship/companylogin/Index1",
			data: {},
			success: function(response) {
				var qid = response.result; //ID  邮箱
				var gsmc = $("#gsmc").val(); //公司名称
				var city = $("#city").val(); //城市
				var zyyw = $("#zyyw").val(); //主要业务
				var phone = $("#phone").val(); //主要业务
				$.ajax({
					url: "/internship/resume/resumepartnine",
					data: {
						"qid": qid,
						"gsmc": gsmc,
						"city": city,
						"zyyw":zyyw,
						"phone":phone
						
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

//$.ajax({
//url: "/internship/position/search",
//data: {},
//success: function(response) {}
//});
