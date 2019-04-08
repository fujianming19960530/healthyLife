package com.healthyLife.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * 有关于用户的service
 */

@Service
public interface UserService {

	//测试数据交互
	//List<Map<String,Object>> testService(Map<String,String> map);

	//删除用户信息
	//int deleteUser(Integer id);

	/**
	 * 处理用户登录逻辑
	 * @param map
	 * @return
	 * 返回0：用户密码错误或者用户不存在
	 * 返回1：普通用户
	 * 返回2：管理员
	 * 返回3：账户异常
	 */
	//Map<String,String> user_login(Map<String,String> map);



}
