package controller;

import java.util.HashMap;
import java.util.List;
import com.jfinal.core.Controller;
import com.jfinal.plugin.redis.Cache;
import com.jfinal.plugin.redis.Redis;
import com.jfinal.plugin.activerecord.Record;
import config.Factory;
import dao.EmailDao;
import dao.InternDao;

public class InternController extends Controller {
	private EmailDao EmailDao=(EmailDao) Factory.getBean("EmailDao");
	private InternDao InternDao=(InternDao) Factory.getBean("InternDao");

	public void checkEmail(){
			System.out.println("checkEmail");
			String email = getPara("email");		
			List<Record> list = EmailDao.searchEmail(email);//从数据库查找email			
			if(list.isEmpty()){
				setAttr("result", true);
				System.out.println("checkEmailtrue");
				renderJson();
			}else{
				setAttr("result", false);
				System.out.println("checkEmailfalse");
				renderJson();
			}
		}
	
  public void register(){
	   
	   
	  String email=getPara("email");
	  String password=getPara("password");
	  System.out.println("register:"+email+","+password);
	  InternDao.insert(email,password);
	  
	  setAttr("result",true);
	  renderJson();
  }
  
  public void registerresume(){
	   
	   
	  String email=getPara("email");
	  System.out.println("register:"+email);
	  InternDao.insert1(email);
	  
	  setAttr("result",true);
	  renderJson();
  }
 
}

