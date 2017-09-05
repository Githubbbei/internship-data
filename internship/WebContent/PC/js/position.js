$(document).ready(function() {

	$.ajax({
		url: "/internship/resume/searchall4",
		data: {},
		success: function(response) {
			var dater = response.list;
			for (i = 0; i < dater.length; i++) {
				var date = dater[i];

				$(".widget-job-list").append(
					"<article class='widget item'>" +
					"<div style='display:none'>" +
					"<span class='id'>" + date.id + "</span>" +
					"</div>" +
					"<div class='right company'>" +
					"<a href='#' class='avatar'>" +
					"<img src='images/company_4.png' alt=''>" +
					"</a>" +
					"<span class='title'>" +
					"<a href='#'>" + date.gsmc + "</a>" +
					"</span>" +
					"<div class='block'>" +
					"<span class='left'>" + date.zyyw + "</span>" +
					"</div>" +
					"</div>" +
					"<div class='info'>" +
					"<div class='major'>" +
					"<a href='#' class='left'>" + date.zw + "</a>" +
					"<time class='left'>" + date.time + "</time>" +
					"<div class='right icontext'>" +
					"<i class='txt'>" + date.city + "</i>" +
					"</div>" +
					"</div>" +
					"</div>" +
					"<div class='aide'>" +
					"<span class='color-red'>" + date.xz + "</span>" +
					"<span>" + date.xlyq + "</span>" +
					"<span>" + date.ts + "</span>" +
					"</div>" +
					"<a href='javascript:;' class='btn btn-cl1'>立即申请" +
					"</a>" +
					"</article>");

			}
		}
	});
	
	$('.widget-job-list').on('click', '.btn', function(event) {
		var id =  $(this).parents("article").children("div").eq(0).text();
		$.ajax({
			url: "/internship/internlogin/Index1",
			data: {},
			success: function(response) {
				var rid = response.result; //ID  邮箱			
				if (rid == false) {
					alert("请登录");
				}else{
					$.ajax({
						url: "/internship/position/searchid",
						data: {
							"id": id
						},
						success: function(response) {
							var date = response.resumeinfo;
							var zw = date.zw;
							$.ajax({
								url: "/internship/position/insertapply",
								data: {
									"id": id,
									"rid": rid,
									"zw": zw
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
						}
					});
					
					
				}
			}
		});
		$.ajax({
			url: "/internship/resume/searchall3",
			data: {
				"id":id 
			},
			success:function(response){
				var dater=response.list;
				for (i = 0;i < dater.length;i ++){				
					var date = dater[i];
					layer.open({
						type: 2,
						title: '基本信息',
						// skin: 'save.css', //样式类名
						closeBtn: 1, //显示关闭按钮
						anim: 2,
						shadeClose: true, //开启遮罩关闭
						area: ['600px', '550px'],
						content: 'xgzw.html',
						success:function(layero,index){
							
							var body = layer.getChildFrame('body',index);
							body.contents().find("#zwid").val(date.id);
							body.contents().find("#zw").val(date.zw);
							body.contents().find("#xz").val(date.xz);
							body.contents().find("#xlyq").val(date.xlyq);
							body.contents().find("#ts").val(date.ts);
							body.contents().find("#city").val(date.city);
							body.contents().find("#yq").val(date.yq);
							
							
						}
					});
				}
			}
		});
		
		
		
		
		
	});


	function showDate() {
		// 创建一个日期对象，默认当前系统时间（客户端时间）
		var d = new Date();
		var y = d.getFullYear();
		var m = d.getMonth() + 1;
		var dd = d.getDate();
		var dateStr = y + '-' + m + '-' + dd;
		// 获得div对象
		var time = document.getElementById('time');
		// 设置div的内容
		time.innerHTML = dateStr;
	}
	showDate();


	$("#save10").click(function() {
		$.ajax({
			url: "/internship/companylogin/Index1",
			data: {},
			success: function(response) {
				var qid = response.result; //ID  邮箱
				$.ajax({
					url: "/internship/position/search",
					data: {
						"qid": qid
					},
					success: function(date) {
						var dater = date.resumeinfo;
						var qid = dater.qid;
						var gsmc = dater.gsmc;
						var zyyw = dater.zyyw;
						var time = $("#time").text();
						var zw = $("#zw").val(); //
						var xz = $("#xz").val(); //
						var xlyq = $("#xlyq").val(); //
						var ts = $("#ts").val(); //
						var city = $("#city").val();
						var yq = $("#yq").val();
						$.ajax({
							url: "/internship/resume/companyposition",
							data: {
								"qid": qid,
								"gsmc": gsmc,
								"zyyw": zyyw,
								"time": time,
								"zw": zw,
								"xz": xz,
								"xlyq": xlyq,
								"ts": ts,
								"city": city,
								"yq": yq
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
					}
				});
			}
		});


	});



});