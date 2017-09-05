package config;

import java.util.Date;


import java.util.Timer;

import com.alibaba.druid.wall.WallConfig;
import com.alibaba.druid.wall.WallFilter;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.plugin.redis.RedisPlugin;
import com.jfinal.render.ViewType;

import controller.AdminController;
import controller.CompanyController;
import controller.CompanyLoginController;
import controller.InternController;
import controller.InternLoginController;
import controller.PositionController;
import controller.ResumeController;


public class SystemConfig extends JFinalConfig{

	@Override
	public void configConstant(Constants constants) {
		// TODO Auto-generated method stub
		constants.setDevMode(true);
		constants.setViewType(ViewType.JSP);
	}

	@Override
	public void configHandler(Handlers arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configInterceptor(Interceptors arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configPlugin(Plugins plugins) {
		
		
		DruidPlugin druidPlugin=new DruidPlugin("jdbc:mysql://localhost:3306/intern","root","123456");
		WallFilter wall = new WallFilter();
		WallConfig config = new WallConfig();
		config.setStrictSyntaxCheck(false); // 关闭druid的SQL解析功能，这个功能会导致全局主键的失效
		wall.setConfig(config);
		druidPlugin.addFilter(wall);

		
		
		// TODO Auto-generated method stub
		
		druidPlugin.setDriverClass("com.mysql.jdbc.Driver");
		druidPlugin.setInitialSize(5);//最小连接数
		druidPlugin.setMaxActive(20);
		druidPlugin.setTestOnBorrow(true);
		druidPlugin.setValidationQuery("select 1");
		plugins.add(druidPlugin);    //把连接池加到JFinal 
		//配置持久层技术,用于执行SQL
		ActiveRecordPlugin recordPlugin=new ActiveRecordPlugin(druidPlugin);
		plugins.add(recordPlugin);
		
		//RedisPlugin redisplugin=new RedisPlugin("enroll","localhost","123456");
		//plugins.add(redisplugin);  //把Redis插件添加到JFinal框架
	}

	@Override
	public void configRoute(Routes routes) {
		// TODO Auto-generated method stub
		routes.add("/intern",InternController.class);
		routes.add("/internlogin",InternLoginController.class);
		routes.add("/companylogin",CompanyLoginController.class);
		routes.add("/resume",ResumeController.class);
		routes.add("/company",CompanyController.class);
		routes.add("/position",PositionController.class);
		routes.add("/admin",AdminController.class);
		}
   //@Override
    /*public void afterJFinalStart() {
	Timer timer=new Timer();
	//启动定时器
	//timer.schedule(new RedisTask(), new Date("2016/1/12 02:00:00"));
	//timer.schedule(new WriteExcel(), new Date("2016/1/12 18:55:00"));
    timer.scheduleAtFixedRate(new RedisTask(), new Date("2017/4/19 12:40:00"), 24*3600*1000);
    timer.scheduleAtFixedRate(new WriteExcel(), new Date("2017/4/19 12:22:00"), 24*3600*1000);
    
    }*/
}
