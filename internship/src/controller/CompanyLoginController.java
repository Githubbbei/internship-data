package controller;

import java.util.List;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;

import config.Factory;
import dao.LoginDao;

public class CompanyLoginController extends Controller{
	private LoginDao logindao = (LoginDao) Factory.getBean("LoginDao");
	public void Loguser() {
		String email = getPara("email");
		String password= getPara("password");
		System.out.println(email);
	
		List<Record> list = logindao.Login1(email,password);
		if (list.isEmpty()) {
			setAttr("result",true);//是空，即用户名、密码错误
			System.out.println("是空"); 
			renderJson();
		} else {
			setAttr("result",false);//不是空，即用户名密码正确			
			System.out.println("不是空"); 
			renderJson();
			setSessionAttr("qid", email);
			//getSession().setAttribute("rid",email);
			System.out.println("session:"+email);
		    String sessionuser=getSessionAttr("qid");
		    System.out.println("输出sid:"+sessionuser);
		}	
		
	}
	
//首页检查session	
	public void Index() {		
		String sessionuser=getSessionAttr("qid");	
		System.out.println("输出:"+sessionuser);
		if (sessionuser==null) {			
			setAttr("result",false);//是空，未取到session
			renderJson();
			System.out.println("sessionuser:"+sessionuser);
		} else {			
			setAttr("result",true);//不是空，取到session
			renderJson();
			System.out.println("sessionuser:"+sessionuser);
		}	
	}
	
	public void Index1() {		
		String sessionuser=getSessionAttr("qid");	
		System.out.println("输出:"+sessionuser);
		if (sessionuser==null) {			
			setAttr("result",false);//是空，未取到session
			renderJson();
			System.out.println("sessionuser:"+sessionuser);
		} else {			
			setAttr("result",sessionuser);//不是空，取到session
			renderJson();
			System.out.println("sessionuser:"+sessionuser);
		}	
	}
	
	public void Clearsession() {		
		String sessionuser=getSessionAttr("qid");		
		if (sessionuser==null) {
			setAttr("result",false);//是空，未取到session
			renderJson();
		} else {	
			removeSessionAttr("qid");
			setAttr("result",true);//不是空，取到session
			renderJson();
		}			
	}	

	
}
