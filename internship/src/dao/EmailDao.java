package dao;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class EmailDao {
	
	public List<Record> searchEmail(String email){
		   String sql="select * from internregister where email=?";
		   List<Record> list=Db.find(sql,email);
	       return list;
	   }
	
	public List<Record> searchCompanyEmail(String email){
		   String sql="select * from qyregister where email=?";
		   List<Record> list=Db.find(sql,email);
	       return list;
	   }

}


