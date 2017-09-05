package controller;

//import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import com.jfinal.core.Controller;
import com.jfinal.plugin.activerecord.Record;
//import com.jfinal.plugin.redis.Cache;
//import com.jfinal.plugin.redis.Redis;

import config.Factory;
import dao.LoginDao;


public class InternLoginController extends Controller{
	private LoginDao logindao = (LoginDao) Factory.getBean("LoginDao");
	public void Loguser() {
		String email = getPara("email");
		String password= getPara("password");
		System.out.println(email);
	
		List<Record> list = logindao.Login(email,password);
		if (list.isEmpty()) {
			setAttr("result",true);//是空，即用户名、密码错误
			System.out.println("是空"); 
			renderJson();
		} else {
			setAttr("result",false);//不是空，即用户名密码正确			
			System.out.println("不是空"); 
			renderJson();
			setSessionAttr("sid", email);
			//getSession().setAttribute("rid",email);
			System.out.println("session:"+email);
		    String sessionuser=getSessionAttr("sid");
		    System.out.println("输出sid:"+sessionuser);
		}	
		
	}
	
//首页检查session	
	public void Index() {		
		String sessionuser=getSessionAttr("sid");	
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
		String sessionuser=getSessionAttr("sid");	
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
		String sessionuser=getSessionAttr("sid");		
		if (sessionuser==null) {
			setAttr("result",false);//是空，未取到session
			renderJson();
		} else {	
			removeSessionAttr("sid");
			setAttr("result",true);//不是空，取到session
			renderJson();
		}			
	}	
/*	
	public void Logcheck() {

		String email = getPara("email");	
		List<Record> list = logindao.Check(email);
		if (list.isEmpty()) {
			setAttr("result",true);//是空，即user表中还不存在该用户，可以注册
			renderJson();
		} else {
			setAttr("result",false);//不是空，即user表中存在该用户，可直接登录
			renderJson();
		}	
		
	}	
	*/
	/*public void register() {  
		String email = getPara("email");
		String password = getPara("password");		
		logindao.insertUser(email,password);//将用户名、密码写入user表
		//logindao.insertResumeid(id);//将ID写入resume表
		setAttr("result", true);
		renderJson();
	}*/
	
}
