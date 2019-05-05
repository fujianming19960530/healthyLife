package com.healthyLife.serviceImpl;

import com.healthyLife.core.Const;
import com.healthyLife.core.ResponseResult;
import com.healthyLife.mapper.UserMapper;
import com.healthyLife.service.HomeServiceInterface;
import com.healthyLife.util.CacheManagerImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class HomeService implements HomeServiceInterface {

    @Autowired
    private UserMapper userMapper;

    @Override
    public ResponseResult userLogin(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.login.LOGIN_MESSAGE_CODE_1000);
        //组装用户请求信息
        Map<String, String> userInfo = new HashMap<>();
        userInfo.put("account", map.get("account"));
        //根据用户编号查询数据库用户信息（单个用户）
        Map<String, Object> responseMap = userMapper.queryOneUserInfoByCondition(userInfo);
        if (responseMap == null) {
            //查询一下是否是管理员
            responseMap = userMapper.queryOneAdminInfoByCondition(userInfo);
        }
        //未查询到用户
        if (responseMap == null) {
            //用户名或密码错误(用户不存在)
            result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_004.getCode());
            return result;
        } else {
            //用户存在，匹配用户密码
            if (!map.get("password").equals(responseMap.get("password"))) {
                //密码不匹配
                result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_004.getCode());
                return result;
            } else {
                //用户存在，密码匹配成功，校验验证码是否正确
                CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
                String code = cacheManagerImpl.getCacheByKey("RANDOMCODEKEY").getDatas().toString();
                //验证码校验成功
                if (code.equals(map.get("code"))) {
                    //用户存在，密码匹配成功，判断权限，00为普通用户，01为管理员，02为超级管理员
                    if (("00").equals(responseMap.get("role_level"))) {
                        result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_1000.getCode());
                    }
                    if (("01").equals(responseMap.get("role_level"))) {
                        result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_2000.getCode());
                    }
                    if (("02").equals(responseMap.get("role_level"))) {
                        result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_3000.getCode());
                    }
                    //登录成功保存用户信息在缓存
                    cacheManagerImpl.putCache("userInfo", responseMap, 7200000);
                    return result;
                } else {
                    //验证码校验失败
                    result.setRes_code(Const.login.LOGIN_MESSAGE_CODE_005.getCode());
                    return result;
                }
            }
        }
    }

    /**
     * 查询全部的通知信息
     *
     * @param map
     * @return
     */
    @Override
    public ResponseResult userNoticeShow(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result.setResult(userMapper.queryUserNotice(map));
        return result;
    }

    @Override
    public ResponseResult queryPickUpCardUserInfoByCondition(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result.setResult(userMapper.queryPickUpCardUserInfoByCondition(map));
        return result;
    }

    @Override
    public ResponseResult queryLoseCardUserInfoByCondition(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result.setResult(userMapper.queryLoseCardUserInfoByCondition(map));
        return result;
    }

    @Override
    public ResponseResult Registertion(Map<String, Object> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        //设置初始权限和初始积分
        map.put("role_level", "00");
        Map<String, String> request = new HashMap<>();
        request.put("account", map.get("account").toString());
        //检查用户账号是否已使用
        Map<String, Object> userInfo = userMapper.queryOneUserInfoByCondition(request);
        if (userInfo == null) {
            map.put("card_id", map.get("account"));
            userMapper.InsertUserInfo(map);
            result.setRes_code(Const.CODE_INFO.CODE_0000.getCode());
            return result;
        } else {
            result.setRes_code(Const.CODE_INFO.CODE_0004.getCode());
            return result;
        }
    }

    @Override
    public ResponseResult queryFinance(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        Map<String, Object> responseMap = new HashMap<>();
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
        if (((HashMap) userInfo).get("role_level").toString().equals("00")) {
            map.put("card_id", ((HashMap) userInfo).get("card_id").toString());
            map.put("account", ((HashMap) userInfo).get("account").toString());
            responseMap.put("userInfo", userMapper.queryOneUserInfoByCondition(map));
        }
        responseMap.put("totalFinance", userMapper.queryFinance(map));
        if (userMapper.queryNumber(map) != null) {
            //01充值，00消费
            map.put("type", "01");
            responseMap.put("queryFinanceIn", userMapper.queryNumber(map).get("transaction_number"));
            map.put("type", "00");
            responseMap.put("queryFinanceOut", userMapper.queryNumber(map).get("transaction_number"));
        }
        result.setResult(responseMap);
        return result;
    }

    @Override
    public ResponseResult queryAccess(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        if (map.get("index").equals("index")) {
            CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
            Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
            map.put("card_id", ((HashMap) userInfo).get("card_id").toString());
        }
        result.setResult(userMapper.allAccess(map));
        return result;
    }

    @Override
    public ResponseResult updateNotice(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        userMapper.updateNotice(map);
        return result;
    }

    @Override
    public Integer delNotices(Map<String, String> map) {
        userMapper.delNotices(map);
        return 0;
    }

    @Override
    public ResponseResult queryUserInfo(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        result.setResult(userMapper.queryListUserInfoByCondition(map));
        return result;
    }

    @Override
    public Integer insertNotice(Map<String, String> map) {
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
        map.put("admin_name", ((HashMap) userInfo).get("sys_name").toString());
        userMapper.insertNotice(map);
        return 0;
    }

    @Override
    public Integer updateUser(Map<String, String> map) {
        userMapper.updateUser(map);
        return 0;
    }

    @Override
    public Integer delUser(Map<String, String> map) {
        userMapper.delUser(map);
        return 0;
    }

    @Override
    public ResponseResult updateAdminPwd(Map<String, String> map) {
        ResponseResult result = new ResponseResult(Const.CODE_INFO.CODE_0000);
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
        map.put("account", ((HashMap) userInfo).get("account").toString());
        Map<String, Object> adminInfo = userMapper.queryOneAdminInfoByCondition(map);
        if (adminInfo == null) {
            result.setRes_code(Const.CODE_INFO.CODE_0004.getCode());
            return result;
        }
        userMapper.updateAdminpwd(map);
        return result;
    }

    @Override
    public Map<String, String> querylogtime(Map<String, String> map) {
        return userMapper.querylogtime(map);
    }

    @Override
    public Integer updatelogtime(Map<String, String> map) {
        Map<String, String> maps = userMapper.querylogtime(map);
        int log = Integer.parseInt(maps.get("logtime").toString());
        String logs = (log + 1) + "";
        map.put("logtime", logs);
        userMapper.updatelogtime(map);
        return 0;
    }

    @Override
    public Integer insertPickCard(Map<String, String> map) {
        CacheManagerImpl cacheManagerImpl = new CacheManagerImpl();
        Object userInfo = cacheManagerImpl.getCacheDataByKey("userInfo");
        map.put("account", ((HashMap) userInfo).get("account").toString());
        map.put("username", ((HashMap) userInfo).get("user_name").toString());
        map.put("phone", ((HashMap) userInfo).get("telphone").toString());
        userMapper.insertPickCard(map);
        return null;
    }

    @Override
    public Integer insertLoseCard(Map<String, String> map) {
        return userMapper.insertLoseCard(map);
    }
}
