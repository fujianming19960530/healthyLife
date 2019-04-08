package com.healthyLife.core;



/**
 * 核心代码，封装的前台返回参数
 *
 * 注意：不允许修改
 *
 * @author jianming.fu
 */
@SuppressWarnings("serial")
public class CodeException extends RuntimeException {
    protected String code;

    public CodeException() {

    }

    public CodeException(String code, String message) {
        super(message);
        this.code = code;
    }

    public CodeException(CodeInfo codeInfo) {
        super(codeInfo.getMessage());
        this.code = codeInfo.getCode();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

}
