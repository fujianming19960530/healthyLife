package com.healthyLife.mapper;

/**
 *
 * 对用户（客户，管理员）操作的mapper
 *
 */

import javax.persistence.criteria.CriteriaBuilder;
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

    /**
     * 查询失卡信息
     * @param map account :拾卡人学号 user_name：姓名
     * @return
     */
    List<Map<String,Object>> queryLoseCardUserInfoByCondition(Map<String,String> map);

    /**
     * 插入用户信息
     * @param map
     * @return
     */
    Integer InsertUserInfo(Map<String,Object> map);

    /**
     * 查询交易金额
     * @param map
     * @return
     */
    Map<String,Object> queryNumber(Map<String,String> map);

    /**
     * 查询交易记录
     * @param map
     * @return
     */
    List<Map<String,Object>> queryFinance(Map<String,String> map);

    /**
     * 查询全部的出入信息
     * @param map
     * @return
     */
    List<Map<String,String>> allAccess(Map<String,String> map);

    /**
     * 修改通知信息
     * @param map
     * @return
     */
    Integer updateNotice(Map<String,String> map);

    /**
     * 删除通知信息
     * @param map
     * @return
     */
    Integer delNotices(Map<String,String> map);

    /**
     * 插入新的通知
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
     * 跟新admin密码
     * @param map
     * @return
     */
    Integer updateAdminpwd(Map<String,String> map);

    /**
     * 查询登录次数
     * @param map
     * @return
     */
    Map<String,String> querylogtime(Map<String,String> map);

    /**
     * 更新登录测试
     * @param map
     * @return
     */
    Integer updatelogtime(Map<String,String> map);

    /**
     * 新增拾卡信息
     * @param map
     * @return
     */
    Integer insertPickCard(Map<String,String> map);

    /**
     * 新增失卡信息
     * @param map
     * @return
     */
    Integer insertLoseCard(Map<String,String> map);
}