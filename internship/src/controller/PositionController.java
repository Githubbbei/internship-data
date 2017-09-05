package controller;

import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

import config.Factory;
import dao.PositionDao;

public class PositionController extends Controller{
	private PositionDao PositionDao = (PositionDao) Factory.getBean("PositionDao");


	
		//根据email搜索企业信息		
		public void search(){ 
		  String qid = getPara("qid");
		  Record resumeinfo=PositionDao.searchqyresume(qid);
		  setAttr("resumeinfo",resumeinfo);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
		//根据email搜索企业申请信息		
		public void searchstate(){ 
		  String qid = getPara("qid");
		  Record resumeinfo=PositionDao.searchstate(qid);
		  setAttr("resumeinfo",resumeinfo);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
		//根据id搜索职位名称		
		public void searchid(){ 
		  String id = getPara("id");
		  Record resumeinfo=PositionDao.searchposition(id);
		  setAttr("resumeinfo",resumeinfo);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
		}
		
		//插入apply表
		  public void insertapply(){
			   
			  String id=getPara("id");
			  String rid=getPara("rid");
			  String zw=getPara("zw");
//			  System.out.println("register:"+email+","+password);
			  PositionDao.insert(id,rid,zw);
			  setAttr("result",true);
			  renderJson();
		  }

	
}

