/**
	支持按渠道下载
**/	
	// var apkURL = "http://cdnfile.itis6am.com/qcrl.apk"; 
    
	var channel = "";
        
	function getURLParameters(key){
	    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
	}

     channel = getURLParameters("channel");
     if(channel == null) {
     	channel = "";
     }   
     if(channel != null && channel.length > 0 ) {
         // apkURL = "http://hlj-app.b0.upaiyun.com/zmw/upload/android-package/app/" + channel + "/helijia.apk";
         apkURL = "http://cdnfile.itis6am.com/"+channel+"/qcrl.apk"
     }else{
 		 apkURL = "http://cdnfile.itis6am.com/qcrl.apk"
 	}