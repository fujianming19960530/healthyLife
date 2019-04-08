package com.healthyLife.mapper;

/**
 *
 * 对用户（客户，管理员）操作的mapper
 *
 */

import java.util.List;
import java.util.Map;

public interface UserMapper {
    //删除用户信息
    /*int deleteByPrimaryKey(Integer id);*/


    /**
     *查询用户信息
     * @param map
     * 参数：根据数据库字段查询（都可以传）
     */
    //List<Map<String,Object>> queryUserByCondition(Map<String,String> map);

    /**
     *查询管理员信息
     * @param map
     * 参数：根据数据库字段查询（都可以传）
     */
    //List<Map<String,Object>> queryAdminByCondition(Map<String,String> map);

    /**
     * 查询封号信息表
     */
    //Map<String,Object> queryUserSuspend(Map<String,String> map);

    /**
     * 用户解封
     * @param mem_user_id
     * @return
     */
    //Integer unblockUser(String mem_user_id);


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
}