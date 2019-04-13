package com.healthyLife.mapper;

/**
 *
 * 对用户（客户，管理员）操作的mapper
 *
 */

import java.util.List;
import java.util.Map;

public interface UserMapper {
    /**
     * 查询单个用户信息
     * @param map
     * @return
     */
    Map<String,Object> queryOneUserInfoByCondition(Map<String,String> map);

    /**
     * 查询多个用户信息
     * @param map
     * @return
     */
    List<Map<String,Object>> queryListUserInfoByCondition(Map<String,String> map);

    /**
     * 查询单个管理员信息
     * @param map
     * @return
     */
    Map<String,Object> queryOneAdminInfoByCondition(Map<String,String> map);

    /**
     * 查询全部的用户通知信息
     * @param map
     * @return
     */
    List<Map<String,Object>> queryUserNotice(Map<String,String> map);

    /**
     * 查询拾卡信息
     * @param map account :拾卡人学号 user_name：姓名
     * @return
     */
    List<Map<String,Object>> queryPickUpCardUserInfoByCondition(Map<String,String> map);
}