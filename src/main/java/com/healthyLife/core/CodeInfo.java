package com.healthyLife.core;

import org.apache.commons.lang.StringUtils;

import java.io.Serializable;
import java.util.regex.Matcher;

/**
 * 核心代码，封装的前台返回参数
 *
 * 注意：不允许修改；
 *
 * @author jianming.fu
 */

@SuppressWarnings("serial")
public class CodeInfo implements Serializable {
    private String code;
    private String message;
    private String desc;

    public CodeInfo(){

    }

    public CodeInfo(String code, String message, String desc){
        this.code = code;
        this.message = message;
        this.desc = desc;
    }

    public String getCode(){
        return code;
    }

    public void setCode(String code){
        this.code = code;
    }

    public String getMessage(){
        return message;
    }

    public void setMessage(String message){
        this.message = message;
    }

    public String getDesc(){
        return desc;
    }

    public void setDesc(String desc){
        this.desc = desc;
    }

    public CodeInfo replaceMessage(String regex, String replacement){
        if(StringUtils.isNotBlank(message)){
            if(replacement != null){
                //特殊字符进行处理
                replacement = Matcher.quoteReplacement(replacement);
            }
            else{
                replacement = "null";
            }

            String _message = message.replaceAll("\\$\\{" + regex + "\\}", replacement);
            return new CodeInfo(code, _message, desc);
        }

        return this;
    }

    public CodeInfo replaceMessage(String regex, Throwable e){
        if(StringUtils.isNotBlank(message)){
            String replacement = e.getMessage();
            if(StringUtils.isBlank(replacement) && e instanceof NullPointerException){
                replacement = "NullPointerException";
            }
            replacement = replacement == null ? "null" : replacement;

            if(replacement != null){
                //特殊字符进行处理
                replacement = Matcher.quoteReplacement(replacement);
            }

            String _message = message.replaceAll("\\$\\{" + regex + "\\}", replacement);
            return new CodeInfo(code, _message, desc);
        }

        return this;
    }

    public CodeInfo replaceDesc(String regex, String replacement){
        if(StringUtils.isNotBlank(desc)){
            if(replacement != null){
                //特殊字符进行处理
                replacement = Matcher.quoteReplacement(replacement);
            }

            String _desc = desc.replaceAll("\\$\\{" + regex + "\\}", replacement);
            return new CodeInfo(code, message, _desc);
        }

        return this;
    }
}
