package dao;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class LoginDao {

	public List<Record> Login(String email,String password){
	//	System.out.println(id);
		System.out.println("email1111:"+email);
		String sql="SELECT * FROM internregister WHERE email=? and password=?";
		System.out.println("email111:"+email);
		List<Record> list=Db.find(sql,email,password);		
		return list;
	}
	
	public List<Record> Login1(String email,String password){
			System.out.println("email1111:"+email);
			String sql="SELECT * FROM qyregister WHERE email=? and password=?";
			System.out.println("email111:"+email);
			List<Record> list=Db.find(sql,email,password);		
			return list;
		}

}
