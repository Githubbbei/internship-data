$(document).ready(function() {	

	$.ajax({
			url:"/internship/admin/searchallwtgqy",
			data:{},
			success:function(response){
				var dater=response.list;
				for (i = 0;i < dater.length;i ++){
					var date = dater[i];
					$("#searchwtgqy").append(
							"<tr>" +
							"<td>"+date.qid+"</td>"+
							"<td>"+date.gsmc+"</td>"+
							"<td>"+date.city+"</td>"+
							"<td>"+
								"<button type='button' class='btn btn-xs btn-success'>通过</button>"+
								"<button type='button' class='btn btn-xs btn-danger' style='margin-left:10px;'>不通过</button>"+
							"</td>"+
						"</tr>"
							);
					
				}
			}
		});
	
	$('#searchwtgqy').on('click', '.btn-success', function(event) {
		var qid =  $(this).parents("tr").children("td").eq(0).text();
		var state = $('.btn-success').text();
		
		$.ajax({
			url: "/internship/admin/updatestate",
			data: {
				"qid":qid,
				"state":state 
			},
			success:function(response){
				if (response.result == true) {
					alert("审核通过");
				}
				
				
				
			}
		});
	
	});
	
	$('#searchwtgqy').on('click', '.btn-danger', function(event) {
		var qid =  $(this).parents("tr").children("td").eq(0).text();
		var state = $('.btn-danger').text();
		alert(state);
		$.ajax({
			url: "/internship/admin/updatestate",
			data: {
				"qid":qid,
				"state":state 
			},
			success:function(response){
				alert("审核不通过");
				
			}
		});
	
	});
});