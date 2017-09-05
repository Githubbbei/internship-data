package controller;

import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

import config.Factory;
import dao.AdminDao;

public class AdminController extends Controller {
	private AdminDao AdminDao=(AdminDao) Factory.getBean("AdminDao");
	
	//搜索未通过企业
	public void searchallwtgqy(){
		  List <Record> list = AdminDao.searchwtgqy();
		  setAttr("list",list);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
	}
	
	//搜索对应qid的数据
	public void searchstate(){
		  String qid=getPara("qid");
		  List <Record> list = AdminDao.searchall(qid);
		  setAttr("list",list);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
	}
	
	//修改state
	public void updatestate(){
		  String qid=getPara("qid");
		  String state=getPara("state");
		  AdminDao.insertstate(qid,state);
		  System.out.println(qid +","+ state);
		  setAttr("result", true);
		  renderJson();//报数据以JSON格式返回给浏览器				  	  				  	  
	}

}
