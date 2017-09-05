package dao;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class InternDao {
	
	
	public void insert(String email,String password){
		StringBuffer sql=new StringBuffer();
		   sql.append("insert into internregister(email,password) ");//最后必须加空格
		   sql.append("values(?,?)");
		   Db.update(sql.toString(),email,password);
	}
	
	public void insert1(String email){
		StringBuffer sql=new StringBuffer();
		   sql.append("insert into resume(rid) ");//最后必须加空格
		   sql.append("values(?)");
		   Db.update(sql.toString(),email);
	}
	
	public void insert2(String email,String password){
		StringBuffer sql=new StringBuffer();
		   sql.append("insert into qyregister(email,password) ");//最后必须加空格
		   sql.append("values(?,?)");
		   Db.update(sql.toString(),email,password);
	}
	
	public void insert3(String email,String state){
		StringBuffer sql=new StringBuffer();
		   sql.append("insert into qyresume(qid,state) ");//最后必须加空格
		   sql.append("values(?,?)");
		   Db.update(sql.toString(),email,state);
	}

}
