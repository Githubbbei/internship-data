package controller;

import java.util.HashMap;
import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
import com.jfinal.plugin.redis.Cache;
import com.jfinal.plugin.redis.Redis;

import config.Factory;
import dao.ResumeDao;

public class ResumeController extends Controller{
		private ResumeDao resumedao = (ResumeDao) Factory.getBean("ResumeDao");

		
		public void resumepartone() {  
			String rid = getSessionAttr("sid");    //邮箱  ID
			String username = getPara("username"); //用户名
			String birthday = getPara("birthday");//出生日期
			String phone = getPara("phone");   //手机
			String sex = getPara("sex");//性别
			String gznf = getPara("gznf");//开始工作年份
			String qzzt = getPara("qzzt");//求职状态
			String picture = getPara("picture");//照片
			String jzd = getPara("jzd");//居住地	
            resumedao.insertResumepartone(username,birthday,phone,sex,gznf,qzzt,picture,jzd,rid);				
			setAttr("result", true);
			renderJson();
		}
								
		public void resumeparttwo() {  
			String rid = getSessionAttr("sid");//邮箱  ID			
	     	String qwyx = getPara("qwyx");//期望月薪
			String workcity = getPara("workcity");//工作地点
			String worktype = getPara("worktype");//职位类型
			String workhy = getPara("workhy");//所属行业
			String qzgzlx = getPara("qzgzlx");// 求职（希望的）工作类型
			String dgsj = getPara("dgsj");//到岗时间
//								
	        resumedao.insertResumeparttwo(qwyx,workcity,worktype,workhy,qzgzlx,dgsj,rid);
			setAttr("result", true);
			renderJson();
		}
		
		public void resumepartthree() {  
			String rid = getSessionAttr("sid");          //邮箱  ID			
			String worktime = getPara("worktime");// (有工作经验的   开始工作)  时间
			String workcompany = getPara("workcompany");//(有工作经验的填写) 公司
			String workzw = getPara("workzw");//(有工作经验的填写)职位
			String guimo = getPara("guimo");//(有工作经验的填写)公司规模
			String gsxz = getPara("gsxz");//(有工作经验的填写)公司性质
			String jygzlx = getPara("jygzlx");//(有工作经验的填写)  工作类型
			String gzms = getPara("gzms");	//(有工作经验的填写)工作描述			
	        resumedao.insertResumepartthree(worktime,workcompany,workzw,guimo,gsxz,jygzlx,gzms,rid);
			setAttr("result", true);
			renderJson();
		}
		
		public void resumepartfour() {  
			String rid = getSessionAttr("sid");//邮箱  ID			
			String xmsj = getPara("xmsj");  //(校内项目或经验)时间
			String xmmc = getPara("xmmc");//(校内项目或经验)项目名称
			String xmms = getPara("xmms");//(校内项目或经验)项目描述
			String zzms = getPara("zzms");//(校内项目或经验)职责描述			
	        resumedao.insertResumepartfour(xmsj,xmmc,xmms,zzms,rid);
			setAttr("result", true);
			renderJson();
		}	
		
		public void resumepartfive() {  
			String rid = getSessionAttr("sid");//邮箱  ID			
			String jysj = getPara("jysj");//(教育)时间
			String byxx = getPara("byxx");//毕业学校
			String zy = getPara("zy");//专业
			String xw = getPara("xw");//学位
			String sxkc = getPara("sxkc");//所学课程			
	        resumedao.insertResumepartfive(jysj,byxx,zy,xw,sxkc,rid);
			setAttr("result", true);
			renderJson();
		}
		
		public void resumepartsix() {  
			String rid = getSessionAttr("sid");          //邮箱  ID			
			String jxsj = getPara("jxsj");//(获奖)时间								
			String jxmc = getPara("jxmc");//奖项名称			
	        resumedao.insertResumepartsix(jxsj,jxmc,rid);
			setAttr("result", true);
			renderJson();
		}
		
		public void resumepartseven() {  
			String rid = getSessionAttr("sid");          //邮箱  ID			
			String jntc = getPara("jntc");//技能/特长
			String zwcd = getPara("zwcd");//掌握程度			
	        resumedao.insertResumepartseven(jntc,zwcd,rid);
			setAttr("result", true);
			renderJson();
		}
		
		public void resumeparteight() {  
			String rid = getSessionAttr("sid");          //邮箱  ID			
			String zt = getPara("zt");//主题
			String ztms = getPara("ztms");//主题描述		
			String selfassess = getPara("selfassess");//自我评价	
	        resumedao.insertResumeparteight(zt,ztms,selfassess,rid);
			setAttr("result", true);
			renderJson();
		}
		
		public void resumepartnine() {  
			String qid = getSessionAttr("qid");          //邮箱  ID			
			String gsmc = getPara("gsmc");//公司名臣
			String city = getPara("city");//城市		
			String zyyw = getPara("zyyw");//主要业务
			String phone = getPara("phone");//电话
	        resumedao.insertResumepartnine(gsmc,city,zyyw,phone,qid);
			setAttr("result", true);
			renderJson();
		}
		
		public void companyposition() {
			String qid = getPara("qid");//
			String gsmc = getPara("gsmc");//	
			String zyyw = getPara("zyyw");//
			String time = getPara("time");//
			String zw = getPara("zw");//
			String xz = getPara("xz");//	
			String xlyq = getPara("xlyq");//
			String ts = getPara("ts");//
			String city = getPara("city");//
			String yq = getPara("yq");//
	        resumedao.insertResumeposition(qid,gsmc,zyyw,time,zw,xz,xlyq,ts,city,yq);
			setAttr("result", true);
			renderJson();
		}
		
		public void rcompanyposition() {
			String id = getPara("id");
			String time = getPara("time");//
			String zw = getPara("zw");//
			String xz = getPara("xz");//	
			String xlyq = getPara("xlyq");//
			String ts = getPara("ts");//
			String city = getPara("city");//
			String yq = getPara("yq");//
	        resumedao.uppdatetResumeposition(id,time,zw,xz,xlyq,ts,city,yq);
			setAttr("result", true);
			renderJson();
		}
		
		//根据ID搜索简历信息，实现简历预览		
		public void searchall(){
		  String rid = getSessionAttr("sid"); 
		  Record resumeinfo=resumedao.search(rid);
		  setAttr("resumeinfo",resumeinfo);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
	}	
		
		//根据ID搜索简历信息，实现简历预览		
			public void searchallresume(){
			  String rid = getPara("rid"); 
			  List <Record> list =resumedao.searchresume(rid);
			  setAttr("list",list);
			  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}	
		public void searchall1(){
			 String rid = getPara("rid"); 
			  List <Record> list = resumedao.searchresume(rid);
			  setAttr("list",list);
			  System.out.println(list);
			  renderJson();//报数据以JSON格式返回给浏览器					  	  				  	  
		}
		
		public void searchall2(){
			  String qid = getPara("qid"); 
			  List <Record> list = resumedao.search2(qid);
			  setAttr("list",list);
			  System.out.println(list);
			  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		//更新职位
		public void searchall3(){
			  String id = getPara("id"); 
			  List <Record> list = resumedao.search3(id);
			  setAttr("list",list);
			  System.out.println(list);
			  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
		//删除职位
		public void deletesearchall3(){
			  String id = getPara("id"); 
			  resumedao.deletesearch3(id);
			  setAttr("result",true);
			  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
		//更新职位
		public void searchall4(){
			  List <Record> list = resumedao.search4();
			  setAttr("list",list);
			  System.out.println(list);
			  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
		//搜索投递表
		public void searchall5(){
			  List <Record> list = resumedao.search5();
			  setAttr("list",list);
			  System.out.println(list);
			  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
}
