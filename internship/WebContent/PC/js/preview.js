$(function(){
	$.ajax({
		url:"/51job/resume/searchall",
		data:{},
		success:function(date){
		var dater=date.resumeinfo;
//Preview Part1
        $("#username").append("<p class='name'>"+dater.username+"</p>"); 
        $("#sex").append("<p>"+dater.sex+"</p>");  
        $("#phone").append("<p>"+dater.phone+"</p>");  
        $("#id").append("<p>"+dater.rid+"</p>");  
        $("#qzzt").append("<p>"+dater.qzzt+"</p>");  
        $("#jzd").append("<p>"+dater.jzd+"</p>");  
        $("#gznf").append("<p>"+dater.gznf+"</p>"); 
        $("#picture").css("background-image",dater.picture);
		//var userphoto=getElementById("picture");		 
		//userphoto.style.backgroundImage = dater.picture;           
//Preview Part2        
        $("#zy").append("<p>"+dater.zy+"</p>");
        $("#byxx").append("<p>"+dater.byxx+"</p>");
        $("#xw").append("<p>"+dater.xw+"</p>");
        
     if(dater.workcompany == null){
    	 $("#jobtitle").empty();
    	 $("#workzw").empty();
    	 $("#workcompany").empty();
    	 $("#Tworkzw").empty();
    	 $("#Tworkcompany").empty();    	 
     } else{
    	 $("#workzw").append("<p>"+dater.workzw+"</p>");
         $("#workcompany").append("<p>"+dater.workcompany+"</p>");
     }        
//Preview Part3      
     $("#qwyx").append("<p>"+dater.qwyx+"</p>");
     $("#workcity").append("<p>"+dater.workcity+"</p>");
     $("#worktype").append("<p>"+dater.worktype+"</p>");      
     $("#workhy").append("<p>"+dater.workhy+"</p>");
     $("#dgsj").append("<p>"+dater.dgsj+"</p>");
     $("#qzgzlx").append("<p>"+dater.qzgzlx+"</p>");
     if(dater.selfassess == null){
    	 $("#selfassess").empty();
    	 $("#Tselfassess").empty();   	 
     } else{
    	 $("#selfassess").append("<p>"+dater.selfassess+"</p>");
     }     
//Preview Part4
     if(dater.workcompany == null){
    	 $("#experience").remove(); 
     } else{
    	 $("#worktime").append("<p>"+dater.worktime+"</p>");
    	 $("#workzw4").append("<p>"+dater.workzw+"</p>");
    	 $("#jygzlx").append("<p>"+dater.jygzlx+"</p>");
    	 $("#workcompany4").append("<p>"+dater.workcompany+"</p>");
    	 $("#guimo").append("<p>"+dater.guimo+"</p>");
    	 $("#gsxz").append("<p>"+dater.gsxz+"</p>");
    	 $("#gzms").append("<p>"+dater.gzms+"</p>");
     } 
//Preview Part5   
     if(dater.xmsj == null){
    	 $("#schoolexperience").remove(); 
     } else{
    	 $("#xmsj").append("<p>"+dater.xmsj+"</p>");
    	 $("#xmmc").append("<p>"+dater.xmmc+"</p>");
    	 $("#xmms").append("<p>"+dater.xmms+"</p>"); 
    	 
     } 
     if(dater.zzms == null){
    	 $("#Tzzms").empty(); 
    	 $("#zzms").empty(); 
     } else{
    	 $("#zzms").append("<p>"+dater.zzms+"</p>");
     }      
//Preview Part6   
    	 $("#jysj").append("<p>"+dater.jysj+"</p>");
    	 $("#byxx6").append("<p>"+dater.byxx+"</p>");
    	 $("#xw6").append("<p>"+dater.xw+"</p>"); 
    	 $("#zy6").append("<p>"+dater.zy+"</p>"); 

     if(dater.sxkc == null){
    	 $("#Tsxkc").empty(); 
    	 $("#sxkc").empty(); 
     } else{
    	 $("#sxkc").append("<p>"+dater.sxkc+"</p>");
     }     
//Preview Part7    
     if(dater.jxsj == null){
        $("#award").remove();
     } else{
    	 $("#jxsj").append("<p>"+dater.jxsj+"</p>");
    	 $("#jxmc").append("<p>"+dater.jxmc+"</p>");
     }     
//Preview Part8    
	 $("#jntc").append("<p>"+dater.jntc+"</p>");
	 $("#zwcd").append("<p>"+dater.zwcd+"</p>");     
//Preview Part9
     if(dater.zt == null){
         $("#additioninfo").remove();
         $("#jninfo").css("border-bottom","0px");
      } else{
     	 $("#zt").append("<p>"+dater.zt+"</p>");
     	 $("#ztms").append("<p>"+dater.ztms+"</p>");
      } 
     
	 }
		
	});		
});











/*			
var resumeinfo=[
date.username,date.birthday,date.phone,date.sex,
date.gznf,date.qzzt,date.picture,date.jzd,
date.qwxy,date.workcity,date.worktype,date.workhy,
date.qzgzlx,date.dgsj,date.selfassess,date.worktime,
date.workcompany,date.workzw,date.guimo,date.gsxz,
date.jygzlx,date.gzms,date.xmsj,date.xmmc,date.xmms,
date.zzms,date.jysj,date.byxx,date.zy,
date.xw,date.sxkc,date.jxsj,date.jxmc,
date.jntc,date.zwcd,date.zt,date.ztms];

alert(resumeinfo[0]);

	
$("#one").append("<img src='../images/"+web.picture+"'/>"
+"<div class='digital'>"
+"<p><b>"+web.cname+"</b></p><p class='yinc'>"+ web.content+"</p>"
+"<span class='span1'>￥"+web.price+"</span><span class='span2'>"+web.mumber+"人在学</span>"
+"</div>"
);		
*/