package dao;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class PositionDao {
	public Record searchqyresume(String qid){
		String sql="select qid,gsmc,zyyw from qyresume where qid=?";
			Record list=Db.findFirst(sql,qid);
			return list;	
	}
	
	public Record searchstate(String qid){
		String sql="select * from qyresume where qid=?";
			Record list=Db.findFirst(sql,qid);
			return list;	
	}
	
	public Record searchposition(String id){
		String sql="select zw from position where id=?";
			Record list=Db.findFirst(sql,id);
			return list;	
	}
	
	public void insert(String id,String rid,String zw){
		StringBuffer sql=new StringBuffer();
		   sql.append("insert into apply(id,rid,zw) ");//最后必须加空格
		   sql.append("values(?,?,?)");
		   Db.update(sql.toString(),id,rid,zw);
	}
}
