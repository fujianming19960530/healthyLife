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

}
