package com.healthyLife.util;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;


/**
 * 文件上传工具类
 */
public class FileMax {
	public String oneFileUpload(MultipartFile newFile,String type,String name) throws IllegalStateException, IOException{
		if(newFile.isEmpty()){
			return null;
		}
		String path = "D:\\code\\web\\upload\\";
		String file_name =  newFile.getOriginalFilename();
		/*String newFileName = UUID.randomUUID().toString()+file_name.substring(file_name.lastIndexOf("."));*/
		String newFileName = name + file_name.substring(file_name.lastIndexOf("."));
		if("picture".equals(type)){
			newFileName = "picture\\" + newFileName;
		}
		if("video".equals(type)){
			newFileName = "video\\" + newFileName;
		}
		File uploadPic = new File(path+newFileName);
		newFile.transferTo(uploadPic);
		return newFileName;
	}
	
	public String deletFile(String oldFile,String type){
		if(oldFile!=null){
			String path = "D:\\code\\web\\upload\\";
			File rmfile = new File(path+type+"\\"+oldFile);
			if(rmfile.isFile()){
				rmfile.delete();
			}
		}
		return null;
	}
}
