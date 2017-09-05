package dao;

import java.util.List;

import com.jfinal.plugin.activerecord.Db;
import com.jfinal.plugin.activerecord.Record;

public class ResumeDao {

	public void insertResumepartone(String username,String birthday,
			String phone,String sex,String gznf,String qzzt,String picture,
			String jzd,String rid){
		    StringBuffer sql = new StringBuffer();		
    sql.append("UPDATE RESUME SET username=?,birthday=?,phone=?,sex=?,gznf=?,qzzt=?,picture=?,jzd=? WHERE rid=?");	
    Db.update(sql.toString(),username,birthday,phone,sex,gznf,qzzt,picture,jzd,rid);
	}	
	
	public void insertResumeparttwo(String qwyx,String workcity,String worktype,String workhy,String qzgzlx,String dgsj,String rid){
	StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET qwyx=?,workcity=?,worktype=?,workhy=?,qzgzlx=?,dgsj=? WHERE rid=?");	
    Db.update(sql.toString(),qwyx,workcity,worktype,workhy,qzgzlx,dgsj,rid);
	}	
	
	public void insertResumepartthree(String worktime,String workcompany,String workzw,String guimo,String gsxz,String jygzlx,String gzms,String rid){
	StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET worktime=?,workcompany=?,workzw=?,guimo=?,gsxz=?,jygzlx=?,gzms=? WHERE rid=?");	
    Db.update(sql.toString(),worktime,workcompany,workzw,guimo,gsxz,jygzlx,gzms,rid);
	}
	
	public void insertResumepartfour(String xmsj,String xmmc,String xmms,String zzms,String rid){
		StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET xmsj=?,xmmc=?,xmms=?,zzms=? WHERE rid=?");	
    Db.update(sql.toString(),xmsj,xmmc,xmms,zzms,rid);
	}
	
	public void insertResumepartfive(String jysj,String byxx,String zy,String xw,String sxkc,String rid){
		StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET jysj=?,byxx=?,zy=?,xw=?,sxkc=? WHERE rid=?");	
    Db.update(sql.toString(),jysj,byxx,zy,xw,sxkc,rid);
	}
	public void insertResumepartsix(String jxsj,String jxmc,String rid){
		StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET jxsj=?,jxmc=? WHERE rid=?");	
    Db.update(sql.toString(),jxsj,jxmc,rid);
	}
	public void insertResumepartseven(String jntc,String zwcd,String rid){
		StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET jntc=?,zwcd=? WHERE rid=?");	
    Db.update(sql.toString(),jntc,zwcd,rid);
	}
	public void insertResumeparteight(String zt,String ztms,String selfassess,String rid){
		StringBuffer sql = new StringBuffer();
    sql.append("UPDATE RESUME SET zt=?,ztms=?,selfassess=? WHERE rid=?");	
    Db.update(sql.toString(),zt,ztms,selfassess,rid);
	}
	public void insertResumepartnine(String gsmc,String city,String zyyw,String phone,String qid){
	StringBuffer sql = new StringBuffer();
    sql.append("UPDATE qyresume SET gsmc=?,city=?,zyyw=?,phone=? WHERE qid=?");	
    Db.update(sql.toString(),gsmc,city,zyyw,phone,qid);
	}
	
	public void insertResumeposition(String qid,String gsmc,String zyyw,String time,String zw,String xz,String xlyq,String ts,String city,String yq){
		StringBuffer sql = new StringBuffer();
	    sql.append("insert into position (qid,gsmc,zyyw,time,zw,xz,xlyq,ts,city,yq) value (?,?,?,?,?,?,?,?,?,?)");	
	    Db.update(sql.toString(),qid,gsmc,zyyw,time,zw,xz,xlyq,ts,city,yq);
		}
	public void uppdatetResumeposition(String id,String time,String zw,String xz,String xlyq,String ts,String city,String yq){
		StringBuffer sql = new StringBuffer();
	    sql.append("UPDATE position SET time=?,zw=?,xz=?,xlyq=?,ts=?,city=? WHERE id=?");	
	    Db.update(sql.toString(),time,zw,xz,xlyq,ts,city,id);
		}
	
	//根据ID搜索简历信息，实现简历预览		
	public Record search(String rid){
		String sql="select * from resume where rid=?";
			Record list=Db.findFirst(sql,rid);
			return list;	
		 }
	
	public List<Record> searchresume(String rid){
		String sql="select * from resume where rid=?";
		List<Record> list=Db.find(sql,rid);
			return list;	
		 }
	
	public Record search1(String qid){
		String sql="select * from qyresume where qid=?";
			Record list=Db.findFirst(sql,qid);
			return list;	
		 }
	
	public List<Record> search2(String qid){
		String sql="select * from position where qid=?";
		List<Record> list=Db.find(sql,qid);
			return list;	
		 }

	
	public List<Record> search3(String id){
		String sql="select id,gsmc,zyyw,time,zw,xz,xlyq,ts,city,qid,yq from position where id=?";
		List<Record> list=Db.find(sql,id);
		System.out.println("aaa");
			return list;	
		 }
	
	public  void  deletesearch3(String id){
		String sql="delete position where id=?";
		Db.update(sql.toString(),id);
		System.out.println("aaa");	
		 }
	
	
	public List<Record> search4(){
		String sql="select * from position";
		List<Record> list=Db.find(sql);
			return list;	
		 }
	
	public List<Record> search5(){
		String sql="select * from apply";
		List<Record> list=Db.find(sql);
			return list;	
		 }

	
}
