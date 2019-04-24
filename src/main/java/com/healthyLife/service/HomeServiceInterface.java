package com.healthyLife.service;


import com.healthyLife.core.ResponseResult;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 *
 * 处理前端服务请求接口
 *
 */
@Service
public interface HomeServiceInterface {

    /**
     * 用户登录
     * @return
     */
    ResponseResult userLogin(Map<String,String> map);

    /**
     * 查询全部的通知信息
     * @param map
     * @return
     */
    ResponseResult userNoticeShow(Map<String,String> map);

    /**
     * 查询拾卡信息
     * @param map account :拾卡人学号 user_name：姓名
     * @return
     */
    ResponseResult queryPickUpCardUserInfoByCondition(Map<String,String> map);

    /**
     * 查询失卡信息
     * @param map
     * @return
     */
    ResponseResult queryLoseCardUserInfoByCondition(Map<String,String> map);

    /**
     * 用户注册
     * @param map
     * @return
     */
    ResponseResult Registertion(Map<String,Object> map);

    /**
     * 查询用户交易信息
     * @param map
     * @return
     */
    ResponseResult queryFinance(Map<String,String> map);

    /**
     * 查询用户出入记录
     * @param map
     * @return
     */
     ResponseResult queryAccess(Map<String,String> map);

    /**
     * 修改通知信息
     * @param map
     * @return
     */
    ResponseResult updateNotice(Map<String,String> map);

    /**
     * 删除通知信息
     * @param map
     * @return
     */
    Integer delNotices(Map<String,String> map);

    /**
     * 查询全部的用户信息
     * @param map
     * @return
     */
    ResponseResult queryUserInfo(Map<String,String> map);

    /**
     * 新增通知
     * @param map
     * @return
     */
    Integer insertNotice(Map<String,String> map);

    /**
     * 修改用户信息
     * @param map
     * @return
     */
    Integer updateUser(Map<String,String> map);

    /**
     * 删除用户
     * @param map
     * @return
     */
    Integer delUser(Map<String,String> map);

    /**
     * 更新admin密码
     * @param map
     * @return
     */
    ResponseResult updateAdminPwd(Map<String,String> map);
}
