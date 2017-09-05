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
				success:function(response){
				var dater=response.list;
				for (i = 0;i < dater.length;i ++){
					var date = dater[i];
					
					$("#positiondate").append(
							"<tr>" +
							"<td style='display:none;'>"+date.id+"</td>"+
							"<td>"+date.zw+"</td>"+
							"<td>"+date.xz+"</td>"+
							"<td>"+date.city+"</td>"+
							"<td>"+
								"<button type='button' class='btn btn-xs btn-warning'>修改</button>"+
								"<button type='button' class='btn btn-xs btn-danger' style='margin-left:10px;'>删除</button>"+
							"</td>"+
						"</tr>"
							);
					
				}
				}
				});
		}
	});
	
	
	

	$('#positiondate').on('click', '.btn-warning', function(event) {
		var id =  $(this).parents("tr").children("td").eq(0).text();
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
	
//	$('#positiondate').on('click', '.btn-danger', function(event) {
//		alert("aaa");
//		var id =  $(this).parents("tr").children("td").eq(0).text();
//		alert(id);
//		$.ajax({
//			url: "/internship/resume/deletesearchall3",
//			data: {
//				"id":id 
//			},
//			success:function(response){
//				alert(response.result);
//				
//			}
//		});	
//		
//	});
	
	$.ajax({
		url:"/internship/resume/searchall5",
		data:{},
		success:function(response){
		var dater=response.list;
		for (i = 0;i < dater.length;i ++){
			var date = dater[i];
			
			$("#applydate").append(
					"<tr>" +
					"<td style='display:none;'>"+date.id+"</td>"+
					"<td>"+date.rid+"</td>"+
					"<td>"+date.zw+"</td>"+
					"<td>"+
						"<button type='button' class='btn btn-xs btn-warning'>查看</button>"+
						"<button type='button' class='btn btn-xs btn-danger' style='margin-left:10px;'>删除</button>"+
					"</td>"+
				"</tr>"
					);
			
		}
		}
		});
	

	$('#applydate').on('click', '.btn-warning', function(event) {
		var rid =  $(this).parents("tr").children("td").eq(1).text();
		$.ajax({
			url: "/internship/resume/searchallresume",
			data: {
				"rid":rid 
			},
			success:function(response){
				alert('sss');
				var dater=response.list;
				for (i = 0;i < dater.length;i ++){				
					var date = dater[i];
					alert(date.username);
					layer.open({
						type: 2,
						title: '简历信息',
						// skin: 'save.css', //样式类名
						closeBtn: 1, //显示关闭按钮
						anim: 2,
						shadeClose: true, //开启遮罩关闭
						area: ['800px', '650px'],
						content: 'applyresume.html',
						success:function(layero,index){
							
							var body = layer.getChildFrame('body',index);
							body.contents().find("#username").text(date.username);
							body.contents().find("#birthday").text(date.birthday);
							body.contents().find("#phone").text(date.phone);
							body.contents().find("#useremail").text(date.useremail);
							body.contents().find("#sex").text(date.sex);
							body.contents().find("#gznf").text(date.gznf);
							body.contents().find("#qzzt").text(date.qzzt);
							body.contents().find("#jzd").text(date.jzd);
						
							
							
						}
					});
				}
			}
		});
		
		
		
		
		
	});
	
	$("#save11").click(function() {
		
		var id = $("#zwid").val();
		var time = $("#time").text();
		var zw = $("#zw").val(); //
		var xz = $("#xz").val(); //
		var xlyq = $("#xlyq").val(); //
		var ts = $("#ts").val(); //
		var city = $("#city").val();
		var yq = $("#yq").val();
		$.ajax({
			url: "/internship/resume/rcompanyposition",
			data: {
				"id":id,
				"time": time,
				"zw": zw,
				"xz":xz,
				"xlyq": xlyq,
				"ts": ts,
				"city":city,
				"yq":yq
			},
			success:function(response){
				state = response.result;
				if (state == true) {
					alert("信息已保存！");
				} else {
					alert("信息填写不完全！");
				}
			}
		});
//		$.ajax({
//			url: "/internship/companylogin/Index1",
//			data: {},
//			success: function(response) {
//				var qid = response.result; //ID  邮箱
//				$.ajax({
//					url: "/internship/position/search",
//					data: {
//						"qid": qid
//					},
//					success:function(date){
//						var dater = date.resumeinfo;
//						var qid = dater.qid;
//						var gsmc = dater.gsmc;
//						var zyyw = dater.zyyw;
//						var time = $("#time").text();
//						var zw = $("#zw").val(); //
//						var xz = $("#xz").val(); //
//						var xlyq = $("#xlyq").val(); //
//						var ts = $("#ts").val(); //
//						var city = $("#city").val();
//						var yq = $("#yq").val();
//						$.ajax({
//							url: "/internship/resume/rcompanyposition",
//							data: {
//								"qid": qid,
//								"gsmc": gsmc,
//								"zyyw":zyyw,
//								"time": time,
//								"zw": zw,
//								"xz":xz,
//								"xlyq": xlyq,
//								"ts": ts,
//								"city":city,
//								"yq":yq
//							},
//							success:function(response){
//								state = response.result;
//								if (state == true) {
//									alert("信息已保存！");
//								} else {
//									alert("信息填写不完全！");
//								}
//							}
//						});
//					}
//				});
////				alert(response.result);
//				
//
//				$(this).parent().css('display', 'none');
//			}
//		});


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
		

	
	$.ajax({
		url:"/internship/resume/searchall1",
		data:{},
		success:function(date){
		var dater=date.resumeinfo;
		$("#gsmc").text(dater.gsmc);
		$("#city").text(dater.city);
		$("#zyyw").text(dater.zyyw);
		$("#phone").text(dater.phone);
		$("#email").text(dater.qid);
		}
		});
});
});
