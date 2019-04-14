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

}
