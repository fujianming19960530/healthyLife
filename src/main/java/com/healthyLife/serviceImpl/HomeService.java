package com.healthyLife.serviceImpl;

import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.mapper.UserMapper;
import com.healthyLife.service.HomeServiceInterface;
import com.healthyLife.util.CacheManagerImpl;
import com.healthyLife.util.EntityCache;
import com.healthyLife.util.ICacheManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class HomeService implements HomeServiceInterface{

    @Autowired
    private UserMapper userMapper;

    @Override
    public ResponseResult userLogin(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        //组装用户请求信息
        Map<String,String> userInfo = new HashMap<>();
        userInfo.put("account",map.get("account"));
        //根据用户编号查询数据库用户信息（单个用户）
        Map<String,Object> responseMap = userMapper.queryOneUserInfoByCondition(userInfo);
        //未查询到用户
        if(responseMap == null){
            //用户名或密码错误
            result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_004.getCode());
            return result;
        }else {
            //用户存在，匹配用户密码
            if(!map.get("password").equals(responseMap.get("password"))){
                //密码不匹配
                result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_004.getCode());
                return result;
            }else {
                //用户存在，密码匹配成功，判断权限，00为普通用户，01为管理员，02为超级管理员
                if(("00").equals(responseMap.get("role_level"))){
                    result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_1000.getCode());
                }if(("01").equals(responseMap.get("role_level"))){
                    result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_2000.getCode());
                }if(("02").equals(responseMap.get("role_level"))){
                    result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_3000.getCode());
                }
                //登录成功保存用户信息在缓存
                CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
                cacheManagerImpl.putCache("userInfo",responseMap,7200000);

                return result;
            }
        }
    }
}
