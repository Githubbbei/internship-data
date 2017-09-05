$(document).ready(function() {

	$.ajax({
		url:"/internship/resume/searchall",
		data:{},
		success:function(date){
		var dater=date.resumeinfo;
		$("#username").text(dater.username);
		$("#birthday").text(dater.birthday);
		$("#phone").text(dater.phone);
		$("#useremail").text(dater.rid);
		$("#sex").text(dater.sex);
		$("#gznf").text(dater.gznf);
		$("#qzzt").text(dater.qzzt);
		$("#jzd").text(dater.jzd);
		$("#qwyx").text(dater.qwyx);
		$("#workcity").text(dater.workcity);
		$("#worktype").text(dater.worktype);
		$("#workhy").text(dater.workhy);
		$("#qzgzlx").text(dater.qzgzlx);		
		$("#dgsj").text(dater.dgsj);
		$("#worktime").text(dater.worktime);
		$("#workcompany").text(dater.workcompany);
		$("#workzw").text(dater.workzw);
		$("#guimo").text(dater.guimo);
		$("#gsxz").text(dater.gsxz);
		$("#jygzlx").text(dater.jygzlx);		
		$("#gzms").text(dater.gzms);
		$("#xmsj").text(dater.xmsj);
		$("#xmmc").text(dater.xmmc);
		$("#xmms").text(dater.xmms);
		$("#zzms").text(dater.zzms);
		$("#jysj").text(dater.jysj);
		$("#byxx").text(dater.byxx);
		$("#zy").text(dater.zy);		
		$("#xw").text(dater.dgsj);
		$("#sxkc").text(dater.sxkc);
		$("#jxsj").text(dater.jxsj);
		$("#jxmc").text(dater.jxmc);
		$("#jntc").text(dater.jntc);
		$("#zwcd").text(dater.zwcd);
		$("#zt").text(dater.zt);
		$("#ztms").text(dater.ztms);
		$("#picture").css("background-image",dater.picture);
		$("#selfassess").text(dater.selfassess);
		$(".hd_r1").click(function() {
			layer.open({
				type: 2,
				title: '基本信息',
				// skin: 'save.css', //样式类名
				closeBtn: 1, //显示关闭按钮
				anim: 2,
				shadeClose: true, //开启遮罩关闭
				area: ['600px', '550px'],
				content: 'save1.html',
				success:function(layero,index){
					
					var body = layer.getChildFrame('body',index);
					body.contents().find("#username").val(dater.username);
					body.contents().find("#birthday").val(dater.birthday);
					body.contents().find("#phone").val(dater.phone);
					body.contents().find("#useremail").val(dater.rid);
					body.contents().find("#sex").val(dater.sex);
					body.contents().find("#gznf").val(dater.gznf);
					body.contents().find("#qzzt").val(dater.qzzt);
					body.contents().find("#jzd").val(dater.jzd);
				}
			
			});
			
		});
		
		}
		});
	
	$(".hd_r2").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['600px', '550px'],
			content: 'save2.html',
		});
	});

	$(".hd_r3").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['650px', '550px'],
			content: 'save3.html',
		});
	});

	$(".hd_r4").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['650px', '550px'],
			content: 'save4.html',
		});
	});

	$(".hd_r5").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['650px', '550px'],
			content: 'save5.html',
		});
	});

	$(".hd_r6").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['650px', '550px'],
			content: 'save6.html',
		});
	});

	$(".hd_r7").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['650px', '550px'],
			content: 'save7.html',
		});
	});

	$(".hd_r8").click(function() {
		layer.open({
			type: 2,
			title: '基本信息',
			// skin: 'save.css', //样式类名
			closeBtn: 1, //显示关闭按钮
			anim: 2,
			shadeClose: true, //开启遮罩关闭
			area: ['650px', '550px'],
			content: 'save8.html',
		});
	});
	
});