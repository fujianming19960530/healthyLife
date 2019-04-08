package com.healthyLife.util;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import java.io.UnsupportedEncodingException;

/**
 * 字符串加密解密工具类
 */
public class Base64Code {
    //对字符串加密
    public String encoder(String str){
        byte[] key_byte = null;
        try {
            key_byte = str.getBytes("utf-8");
        }catch (UnsupportedEncodingException e){
            e.printStackTrace();
        }
        String key = new BASE64Encoder().encode(key_byte);
        return key;
    }

    //对字符串解密
    public String decoder(String str){
        byte[] result_byte = null;
        String result = "";
        BASE64Decoder decoder = new BASE64Decoder();
        try {
            result_byte = decoder.decodeBuffer(str);
            result = new String(result_byte, "utf-8");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
