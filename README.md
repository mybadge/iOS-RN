# iOS-RN
##练习RN

###先初始化环境

	react-native init iOS-RN
	
	npm i react-navigation --save
	
	react-native link  
	

####react-native link  这个需要操作一下，因为安装的这个库，是Facebook和开源人士共同开发的，内部使用的是原生的UINavigationController，所以需要native应用也编译一下，如果用的pod,需要pod install 一下

下面我试用了一下 WebView

	react-native-webview
	react-native link  
	
Native项目在重新跑一下。