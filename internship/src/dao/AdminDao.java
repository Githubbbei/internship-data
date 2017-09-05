package dao;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

import config.Factory;

public class AdminDao {
	
	public List<Record> searchwtgqy(){
		String sql="select * from qyresume where state='未通过'";
		List<Record> list=Db.find(sql);
	       return list;	
		 }
	
	public List<Record> searchall(String qid){
		String sql="select * from qyresume where qid=?";
		List<Record> list=Db.find(sql,qid);
	       return list;	
		 }
	
	public void insertstate(String qid,String state){
		StringBuffer sql = new StringBuffer();
	    sql.append("UPDATE qyresume SET state=? WHERE qid=?");	
	    Db.update(sql.toString(),state,qid);
		 }
	
}
