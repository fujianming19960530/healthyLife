package com.healthyLife.util;

import java.util.logging.Logger;

/**
 * 缓存监听失效工具类
 * @author jianming.fu 20190118
 */
public class CacheListener {
    Logger logger = Logger.getLogger("cacheLog");
    private CacheManagerImpl cacheManagerImpl;
    public CacheListener(CacheManagerImpl cacheManagerImpl) {
        this.cacheManagerImpl = cacheManagerImpl;
    }

    public void startListen() {
        new Thread(){
            public void run() {
                while (true) {
                    for(String key : cacheManagerImpl.getAllKeys()) {
                        if (cacheManagerImpl.isTimeOut(key)) {
                            cacheManagerImpl.clearByKey(key);
                            logger.info(key + "缓存被清除");
                        }
                    }
                }
            }
        }.start();
    }
}
