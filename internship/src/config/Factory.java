package config;

import java.util.HashMap;

//import dao.ClassDao;
import dao.InternDao;
import dao.LoginDao;
import dao.PositionDao;
import dao.ResumeDao;
import dao.AdminDao;
import dao.EmailDao;

@SuppressWarnings("unchecked")
public class Factory {
	private static HashMap map=new HashMap();
	static{
		 map.put("InternDao",new InternDao());
		 map.put("EmailDao",new EmailDao());
		 map.put("LoginDao",new LoginDao());
		 map.put("ResumeDao",new ResumeDao());
		 map.put("PositionDao",new PositionDao());
		 map.put("AdminDao",new AdminDao());
	}
	public static Object getBean(String param){
		if(map.containsKey(param)){
			return map.get(param);
		}else {
			return null;
		}
	}

}
