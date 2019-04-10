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
}