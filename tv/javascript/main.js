//var widgetAPI = new Common.API.Widget();
//var tvKey = new Common.API.TVKeyValue();

var Main = 
{
	UP : 0,
    DOWN : 1,
    
	LEFT : 2,
	RIGHT : 3,
	ENTER : 4, 
	GRIDVIEW : 5,
	LISTVIEW : 6,
	SEARCHVIEW : 7,
	RED : 8,
	GREEN : 9,
	YELLOW : 10,
	
	view : 0,
	level : 0,
	previousLevel : 0,
	level0Count : 6,
	level0Selected : 0,
	gridCount : 9,
	listCount : 8,
	level1Selected : 0,
	level2Selected : 0,
	level3Selected : 0,
	level4Selected : 0,
	previousSelected : 0,
	
	itemCount : 8,

	LEFT_SECTION : 0,
	RIGHT_SECTION : 1,
	LOGIN_SECTION : 2,
	pageID : 1,		//0 - Left Section, 1 - Right Section
	pageSection : 0,

	SCENE_MAIN	: 0,
	SCENE_LOGIN	: 1,
	pageScene : 0,

	currentLevelItemIndex : 0,
	currentItemIndex : 0,
	
	isVideoMode : false,
	isDescriptionShown : false,
	isCommentShown : false,
	isshowNotePage : false,

	NAVI_FEATURE : 0,
	NAVI_NEWS : 1,
	NAVI_CHANNEL : 2,
	NAVI_BOOKMARK : 3,
	NAVI_COLLECTION : 4,
	NAVI_MENU : 5,
	NAVI_PROGRAMME : 6,
	NAVI_EPISODE : 7,
	NAVI_PLAY : 8,
	NAVI_STOP : 9,
	NAVI_COMMENTS : 10,
	NAVI_LEFTSECTION : 11,
	NAVI_ABOUTMAJI : 12,
	NAVI_COLLECTION2 : 13,
	NAVI_COLLECTION2_NO_INFO : 14,
	
	scrollingYOffset : 50,
	scrollingTitleYOffset : 10,
	scrollingTotalHeight : 0,
	scrollingTotalYOffset : 0,
	
	navi_html : [ ],
	navi_html_logout : [ ],

	channelReturnItemIndex : 0,
	currentItemRowOnShow : 0,
	scrollPageScript : "",
    scrollPageStartIndex : 0,
	scrollPageEndIndex : 8,
	username : "",
	pwd : "",
	isReturn : false,
	isUpBtnVisible: false,
	isDownBtnVisible: false,
	mouseSelected: -1,
	mouseLeftSelected:-1
	
}

Main.mouseonHandler = function(){
	if(this.isVideoMode){
		Display.showMenubar();
APICALL
	}
	Display.mouseTimer();
}
Main.mouseOffHandler = function(){
	if(this.isVideoMode){
		Display.hideMenuBar();
	}

}
Main.hideMouse = function(){
	console.log("hideMouse");
	window.NetCastMouseOff(3)
}
Main.onLoad = function()
{
	
	if(window.name == "") {
		window.name = "false";
	}
	else if(window.name == "true") {
		Display.showStatus("歡迎，您已成功登入！");
	}
	else {
		if(window.name == "false") {
			
		}
		else {
			var tmpWindowName = window.name.replace("true|","");
			this.username = tmpWindowName.replace(/\|(.)*/,"");
			this.pwd = tmpWindowName.replace(/(.)*\|{1}/,"");
			window.name = "true";
			console.log('window name: ' + window.name + " username: " + this.username + " pwd " + this.pwd);
			Display.showStatus("歡迎，您已成功登入！");
		}

	}


	this.showScreen();
	//if(this.pageID == Main.SCENE_MAIN) {
		Audio.init();

		document.getElementById('mainNavItem0').className='mainNav selected';
		document.getElementById('mainNavItemText0').className='mainNavText selected';


		this.initMenuScript();

		this.switchMenuBar(Main.NAVI_LEFTSECTION);
		this.APICall(0, this.level0Selected, false);
		window.NetCastMouseOff(1);
		//Display.mouseTimer();

};
Main.timerFinishCallback = function() {
	//document.getElementById("noti_wrapper").style.zIndex=0;
	

	if(Display.isStatusShown) {
		Display.hideStatus();
		if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "true") {
			Main.APICall(this.level0Selected, 0, false);
		}
		else if(Display.getStatusMessage() == "登出成功。") {
			Main.APICall(this.level0Selected, 0, false);
		}
//		else if(keyCode == VK_BACK) {
//			//widgetAPI.blockNavigation(event);
//		}
	}
	
	Display.isStatusShown = false;
}
Main.onUnload = function()
{
	// To enable the key event processing
	document.getElementById("anchor").focus();
	// Set Default key handler function
	//widgetAPI.sendReadyEvent();
	Player.deinit();
}

Main.initMenuScript = function() {
	this.navi_html[0] = 	document.getElementById("navi_feature").innerHTML;
	this.navi_html[1] = 	document.getElementById("navi_news").innerHTML;
	this.navi_html[2] = 	document.getElementById("navi_channel").innerHTML;
	this.navi_html[3] = 	document.getElementById("navi_bookmark").innerHTML;
	this.navi_html[4] = 	document.getElementById("navi_collection").innerHTML;
	this.navi_html[5] = 	document.getElementById("navi_left_section").innerHTML;
	this.navi_html[6] = 	document.getElementById("navi_programme").innerHTML;
	this.navi_html[7] = 	document.getElementById("navi_episode").innerHTML;
	this.navi_html[8] = 	document.getElementById("video_panel_play").innerHTML;
	this.navi_html[9] = 	document.getElementById("video_panel_stop").innerHTML;
	this.navi_html[10] = 	document.getElementById("navi_comments").innerHTML;
	this.navi_html[11] = 	document.getElementById("navi_leftsection").innerHTML;
	this.navi_html[13] = 	document.getElementById("navi_collection2").innerHTML;
	
	this.navi_html_logout[0] = 	document.getElementById("navi_feature_logout").innerHTML;
	this.navi_html_logout[1] = 	document.getElementById("navi_news_logout").innerHTML;
	this.navi_html_logout[2] = 	document.getElementById("navi_channel_logout").innerHTML;
	this.navi_html_logout[3] = 	document.getElementById("navi_bookmark_logout").innerHTML;
	this.navi_html_logout[4] = 	document.getElementById("navi_collection_logout").innerHTML;
	this.navi_html_logout[5] = 	document.getElementById("navi_left_section_logout").innerHTML;
	this.navi_html_logout[6] = 	document.getElementById("navi_programme_logout").innerHTML;
	this.navi_html_logout[7] = 	document.getElementById("navi_episode_logout").innerHTML;
	this.navi_html_logout[8] = 	document.getElementById("video_panel_play_logout").innerHTML;
	this.navi_html_logout[9] = 	document.getElementById("video_panel_stop_logout").innerHTML;
	this.navi_html_logout[10] =  document.getElementById("navi_comments").innerHTML;
	this.navi_html_logout[11] = document.getElementById("navi_leftsection_logout").innerHTML; 
	this.navi_html_logout[13] = document.getElementById("navi_collection2_logout").innerHTML;
}
function setInnerHtml(elementId, html) {
	var e = document.getElementById(elementId);
	//if(e != null) {
		e.innerHTML = html;
	//}
}
Main.switchMenuBar = function(type) {

/*
	widgetAPI.putInnerHTML(document.getElementById("navi_feature"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_news"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_channel"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_bookmark"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_collection"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_left_section"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_programme"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_episode"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_feature_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_news_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_channel_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_bookmark_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_collection_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_left_section_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_programme_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_episode_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("video_panel_play"), "");
	widgetAPI.putInnerHTML(document.getElementById("video_panel_stop"), "");
	widgetAPI.putInnerHTML(document.getElementById("video_panel_play_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("video_panel_stop_logout"), "");
	widgetAPI.putInnerHTML(document.getElementById("navi_comments"), "");
	*/
	
	//widgetAPI.putInnerHTML(document.getElementById("navi"), "");
	//setInnerHtml(document.getElementById("navi"), "");
	document.getElementById("navi").innerHTML = "";
	
	if(window.name == "false") {
		switch(type)
		{	
			case Main.NAVI_LEFTSECTION :
				document.getElementById('navi').innerHTML = '<div id="navi_leftsection">\n' + this.navi_html[Main.NAVI_LEFTSECTION] + '</div>\n';
				//alert("Main.NAVI_LEFTSECTION2: " + window.name);
				break;
			case Main.NAVI_FEATURE :
				document.getElementById('navi').innerHTML = '<div id="navi_feature">\n' + this.navi_html[Main.NAVI_FEATURE] + '</div>\n';
				break;
			case Main.NAVI_NEWS :
				//document.getElementById('navi_news').innerHTML = this.navi_html[Main.NAVI_NEWS];
				document.getElementById('navi').innerHTML = '<div id="navi_news">\n' + this.navi_html[Main.NAVI_NEWS] + '</div>\n';
				break;
			case Main.NAVI_CHANNEL :
				//document.getElementById('navi_channel').innerHTML = this.navi_html[Main.NAVI_CHANNEL];
				document.getElementById('navi').innerHTML = '<div id="navi_channel">\n' + this.navi_html[Main.NAVI_CHANNEL] + '</div>\n';
				break;
			case Main.NAVI_BOOKMARK :
				//alert("book");
				//document.getElementById('navi_bookmark').innerHTML = this.navi_html[Main.NAVI_BOOKMARK];
				document.getElementById('navi').innerHTML = '<div id="navi_bookmark">\n' + this.navi_html[Main.NAVI_BOOKMARK] + '</div>\n';
				break;
			case Main.NAVI_COLLECTION :
				//document.getElementById('navi_collection').innerHTML = this.navi_html[Main.NAVI_COLLECTION];
				document.getElementById('navi').innerHTML = '<div id="navi_collection">\n' + this.navi_html[Main.NAVI_COLLECTION] + '</div>\n';
				break;
			case Main.NAVI_MENU :
				//document.getElementById('navi_left_section').innerHTML = this.navi_html[Main.NAVI_MENU];
				document.getElementById('navi').innerHTML = '<div id="navi_left_section">\n' + this.navi_html[Main.NAVI_MENU] + '</div>\n';
				break;
			case Main.NAVI_PROGRAMME :
				//document.getElementById('navi_programme').innerHTML = this.navi_html[Main.NAVI_PROGRAMME];
				document.getElementById('navi').innerHTML = '<div id="navi_programme">\n' + this.navi_html[Main.NAVI_PROGRAMME] + '</div>\n';
				break;
			case Main.NAVI_EPISODE :
				//document.getElementById('navi_episode').innerHTML = this.navi_html[Main.NAVI_EPISODE];
				document.getElementById('navi').innerHTML = '<div id="navi_episode">\n' + this.navi_html[Main.NAVI_EPISODE] + '</div>\n';
				break;
			case Main.NAVI_PLAY :
				//document.getElementById('video_panel_play').innerHTML = this.navi_html[Main.NAVI_PLAY];
				document.getElementById('navi').innerHTML = '<div id="video_panel_play">\n' + this.navi_html[Main.NAVI_PLAY] + '</div>\n';
				break;
			case Main.NAVI_STOP :
				//document.getElementById('video_panel_stop').innerHTML = this.navi_html[Main.NAVI_STOP];
				document.getElementById('navi').innerHTML = '<div id="video_panel_stop">\n' + this.navi_html[Main.NAVI_STOP] + '</div>\n';
				break;
			case Main.NAVI_COMMENTS :
				//document.getElementById('navi_comments').innerHTML = this.navi_html[Main.NAVI_COMMENTS];
				document.getElementById('navi').innerHTML = '<div id="navi_comments">\n' + this.navi_html[Main.NAVI_COMMENTS] + '</div>\n';
				break;
			case Main.NAVI_COLLECTION2 :
				//document.getElementById('navi_comments').innerHTML = this.navi_html[Main.NAVI_COMMENTS];
				document.getElementById('navi').innerHTML = '<div id="navi_collection2">\n' + this.navi_html[Main.NAVI_COLLECTION2] + '</div>\n';
				break;
			case Main.NAVI_COLLECTION2_NO_INFO :
				//document.getElementById('navi_comments').innerHTML = this.navi_html[Main.NAVI_COMMENTS];
				document.getElementById('navi').innerHTML = '<div id="navi_collection2">\n' + this.navi_html_logout[Main.NAVI_COMMENTS] + '</div>\n';
				break;
			default :
				break;
		}
	}
	else {
	//alert("logouttttttttttttttttttttttttttt");
		switch(type)
		{
			case Main.NAVI_LEFTSECTION :
				document.getElementById('navi').innerHTML = '<div id="navi_leftsection">\n' + this.navi_html_logout[Main.NAVI_LEFTSECTION] + '</div>\n';
				//alert("Main.NAVI_LEFTSECTION1: " + window.name);
				break;
			case Main.NAVI_FEATURE :
				//document.getElementById('navi_feature_logout').innerHTML = this.navi_html_logout[Main.NAVI_FEATURE];
				document.getElementById('navi').innerHTML = '<div id="navi_feature_logout">\n' + this.navi_html_logout[Main.NAVI_FEATURE] + '</div>\n';
				break;
			case Main.NAVI_NEWS :
				//document.getElementById('navi_news_logout').innerHTML = this.navi_html_logout[Main.NAVI_NEWS];
				document.getElementById('navi').innerHTML = '<div id="navi_news_logout">\n' + this.navi_html_logout[Main.NAVI_NEWS] + '</div>\n';
				break;
			case Main.NAVI_CHANNEL :
				//document.getElementById('navi_channel_logout').innerHTML = this.navi_html_logout[Main.NAVI_CHANNEL];
				document.getElementById('navi').innerHTML = '<div id="navi_channel_logout">\n' + this.navi_html_logout[Main.NAVI_CHANNEL] + '</div>\n';
				break;
			case Main.NAVI_BOOKMARK :
				//alert("book");
				//document.getElementById('navi_bookmark_logout').innerHTML = this.navi_html_logout[Main.NAVI_BOOKMARK];
				document.getElementById('navi').innerHTML = '<div id="navi_bookmark_logout">\n' + this.navi_html_logout[Main.NAVI_BOOKMARK] + '</div>\n';
				break;
			case Main.NAVI_COLLECTION :
				//document.getElementById('navi_collection_logout').innerHTML = this.navi_html_logout[Main.NAVI_COLLECTION];
				document.getElementById('navi').innerHTML = '<div id="navi_collection_logout">\n' + this.navi_html_logout[Main.NAVI_COLLECTION] + '</div>\n';
				break;
			case Main.NAVI_MENU :
				//document.getElementById('navi_left_section_logout').innerHTML = this.navi_html_logout[Main.NAVI_MENU];
				document.getElementById('navi').innerHTML = '<div id="navi_left_section_logout">\n' + this.navi_html_logout[Main.NAVI_MENU] + '</div>\n';
				break;
			case Main.NAVI_PROGRAMME :
				//document.getElementById('navi_programme_logout').innerHTML = this.navi_html_logout[Main.NAVI_PROGRAMME];
				document.getElementById('navi').innerHTML = '<div id="navi_programme_logout">\n' + this.navi_html_logout[Main.NAVI_PROGRAMME] + '</div>\n';
				break;
			case Main.NAVI_EPISODE :
				//document.getElementById('navi_episode_logout').innerHTML = this.navi_html_logout[Main.NAVI_EPISODE];
				document.getElementById('navi').innerHTML = '<div id="navi_episode_logout">\n' + this.navi_html_logout[Main.NAVI_EPISODE] + '</div>\n';
				break;
			case Main.NAVI_PLAY :
				//document.getElementById('video_panel_play_logout').innerHTML = this.navi_html_logout[Main.NAVI_PLAY];
				document.getElementById('navi').innerHTML = '<div id="video_panel_play_logout">\n' + this.navi_html_logout[Main.NAVI_PLAY] + '</div>\n';
				break;
			case Main.NAVI_STOP :
				//document.getElementById('video_panel_stop_logout').innerHTML = this.navi_html_logout[Main.NAVI_STOP];
				document.getElementById('navi').innerHTML = '<div id="video_panel_stop_logout">\n' + this.navi_html_logout[Main.NAVI_STOP] + '</div>\n';
				break;
			case Main.NAVI_COMMENTS :
				//document.getElementById('navi_comments').innerHTML = this.navi_html[Main.NAVI_COMMENTS];
				document.getElementById('navi').innerHTML = '<div id="navi_comments">\n' + this.navi_html_logout[Main.NAVI_COMMENTS] + '</div>\n';
				break;
			case Main.NAVI_COLLECTION2 :
				//document.getElementById('navi_comments').innerHTML = this.navi_html[Main.NAVI_COMMENTS];
				document.getElementById('navi').innerHTML = '<div id="navi_collection2_logout">\n' + this.navi_html_logout[Main.NAVI_COLLECTION2] + '</div>\n';
				console.log("Main.NAVI_COLLECTION2"+window.name);
				break;
			case Main.NAVI_COLLECTION2_NO_INFO :
				//document.getElementById('navi_comments').innerHTML = this.navi_html[Main.NAVI_COMMENTS];
				document.getElementById('navi').innerHTML = '<div id="navi_collection2">\n' + this.navi_html_logout[Main.NAVI_COMMENTS] + '</div>\n';
				break;
			default :
				break;
		}
	}
	console.log('NAVI_type: ' + type);
}

Main.dispatchNaviBarIndex = function() {
	switch(this.level0Selected)
	{
		case 0 :
			return Main.NAVI_FEATURE;
			break;
		case 1 :
			return Main.NAVI_NEWS;
			break;
		case 2 :
			if(this.level == 0) return Main.NAVI_CHANNEL;
			else if(this.level == 1) return Main.NAVI_PROGRAMME;
			else if(this.level == 2) return Main.NAVI_EPISODE;
			break;
		case 3 :
			return Main.NAVI_COLLECTION;
			break;
		case 4 :
			return Main.NAVI_BOOKMARK;
			break;
		case 5 :
			return Main.NAVI_ABOUTMAJI;
			break;
		default :
			return NAVI_MENU;
			break;
	}		
}

//			Main.setPageTitle(Data.getChannelTitleList()[Main.level1Selected]  + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getProgrammeTitleList()[Main.level2Selected] + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getEpisodeTitleList()[0]);

Main.showDescription = function(title, content) {
	this.isDescriptionShown = true;
	document.getElementById("des_wrapper").style.visibility = "visible";
	document.getElementById("des_title").innerHTML = "簡介";
	document.getElementById("des_subtitle").innerHTML = title;
	if(content == null || content == "") {
		document.getElementById("des_content").innerHTML = "沒有簡介";	
	}
	else {
		//alert("CONTENT: "+ content);
		document.getElementById("des_content").innerHTML = content;	
	}
	//Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
	this.switchMenuBar(Main.NAVI_COMMENTS);
}

Main.hideDescription = function() {
	this.isDescriptionShown = false;
	document.getElementById("des_wrapper").style.visibility = "hidden";
	//Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
	this.switchMenuBar(this.dispatchNaviBarIndex());
}

Main.getCommentsAPI = function(refID) {
	//refID = parseInt(refID) + 1;
	commentURL='http://api.majitv.com/api/getComments.ashx?refid=' + refID + "&type=Episode";
	//alert("CommentURL: " + commentURL)	;
	Server.dataReceivedCallback = function()
	{
		//alert("commebntsssssssssss");
		Main.showCommentPage();
	}
	//alert("commentURL link: " + commentURL);
	Main.switchMenuBar(Main.NAVI_COMMENTS);	
	Server.url=commentURL;
	Server.parseType="GetComments";
	Server.fetchJSON(); // Request video information from server 
}

Main.dispatchComments = function() {
	var index = this.dispatchNaviBarIndex();
	switch(index)
	{
		case Main.NAVI_FEATURE :
			//Main.setPageTitle(Data.PAGE_TITLE_FEATURES);
			Main.getCommentsAPI(Data.getFeatureIDList()[Main.level1Selected]);
			break;
		case Main.NAVI_NEWS :
			Main.getCommentsAPI(Data.getNewsIDList()[Main.level1Selected]);
			break;
		case Main.NAVI_CHANNEL :
			break;
		case Main.NAVI_PROGRAMME :
			break;
		case Main.NAVI_EPISODE :
			Main.getCommentsAPI(Data.getEpisodeIDList()[Main.level3Selected]);
			break;
		case Main.NAVI_BOOKMARK :
			Main.getCommentsAPI(Data.getCollectionIDList()[Main.level3Selected]);
			break;
		case Main.NAVI_COLLECTION :
			Main.getCommentsAPI(Data.getCollectionIDList()[Main.level3Selected]);
			break;
		default :
			break;
	}
}


Main.scrollingHandler = function(direction) {

	//alert("scroll offset: " + this.scrollingTotalYOffset + "total height: " + this.scrollingTotalHeight);
	if(this.scrollingTotalHeight > 400) {
		if(direction == Main.UP) {
			if(this.scrollingTotalYOffset + 20 > 0) {
				return;
			}
			this.scrollingYOffset += 20;
			this.scrollingTitleYOffset += 20;
			this.scrollingTotalYOffset += 20;
		}
		else if(direction == Main.DOWN) {
			if(this.scrollingTotalHeight + this.scrollingTotalYOffset < 0) {
				return;
			}
			this.scrollingYOffset -= 20;
			this.scrollingTitleYOffset -= 20;
			this.scrollingTotalYOffset -= 20;
		}
		
		document.getElementById("comment_title").style.top = this.scrollingTitleYOffset;
		for(var i = 0; i < Data.getCommentUserIDList().length; i++) { 
			document.getElementById("comment_item" + i).style.top = this.scrollingYOffset;
		}
	}
}

Main.hideCommentPage = function() {
	document.getElementById("comment_wrapper").style.visibility = "hidden";
	this.scrollingYOffset = 50;
	this.scrollingTitleYOffset = 10;
	this.isCommentShown = false;
	this.scrollingTotalHeight = 0;
}

Main.showCommentPage = function() {
	document.getElementById("comment_wrapper").style.visibility = "visible";
	//document.getElementById("comment_wrapper").focus();
	var content;
	var name;
	var date;
	var commentScript = "";
	var commentItemHeight = 22;
	var lineNumList = [];
	var lineContentList = [];
	var lineCount = 26;
	var contentHeight = 0;
	var userYOffset = 20;
	//var commentList = 
	
	commentScript = "<div id=\"comment_title\" class=\"comment_title\">觀看評論</div>\n"
	
	if(Data.getCommentUserIDList().length == 0) {
		content = "沒有評論";
		commentScript += "<div id=\"comment_item0\" class=\"comment_item empty\"><div id=\"comment_content0\" class=\"comment_content_text\">" + content + "</div></div>";
		document.getElementById("comment_wrapper").innerHTML = commentScript;
	}
	else {
		for(var i = 0; i < Data.getCommentUserIDList().length; i++) {
		//<div id="comment_item2" class="comment_item">
		//document.getElementById("comment_item" + i).innerHTML = "kljads ak djsf asdfkl jak sdj fka";
			//content = this.testingComments[i];
			content = Data.getCommentContentList()[i];
			name = Data.getCommentUserList()[i];
			date = Data.getCommentDateList()[i];
			
			lineContentList[i] = content;
			lineNumList[i] = content.length / lineCount + 1;
			
			commentScript += "<div id=\"comment_item" + i + "\" class=\"comment_item\"><div id=\"comment_content" + i + "\" class=\"comment_content_text\">" + content + "</div><div id=\"comment_user" + i + "\" class=\"comment_user_text\">" + name + "</div><div id=\"comment_date" + i + "\" class=\"comment_date_text\">" + date + "</div></div>\n";
			
		}
		
		document.getElementById("comment_wrapper").innerHTML = commentScript;
		//document.getElementById("comment_title" + i).style.top = 10;
		for(var i = 0; i < Data.getCommentUserIDList().length; i++) {
					
			contentHeight = commentItemHeight * lineNumList[i];
			document.getElementById("comment_user" + i).style.top = contentHeight + userYOffset;
			document.getElementById("comment_date" + i).style.top = contentHeight + userYOffset;
			document.getElementById("comment_item" + i).style.height = contentHeight + 20 + userYOffset;
			document.getElementById("comment_content" + i).style.height = contentHeight + userYOffset;
			
			this.scrollingTotalHeight += parseInt(document.getElementById("comment_item" + i).style.height) + 15;
		}
	}
	
	this.isCommentShown = true;
	//alert("content height: " + this.scrollingTotalHeight);
	//document.getElementById("comment_wrapper").focus();
}

Main.dispatchDescription = function() {
	var index = this.dispatchNaviBarIndex();
	switch(index)
	{
		case Main.NAVI_FEATURE :
			//Main.setPageTitle(Data.PAGE_TITLE_FEATURES);
			Main.showDescription(Data.getFeatureTitleList()[Main.level1Selected], Data.getFeatureDescList()[Main.level1Selected]);
			break;
		case Main.NAVI_NEWS :
			Main.showDescription(Data.getNewsTitleList()[Main.level1Selected], Data.getNewsDescList()[Main.level1Selected]);
			break;
		case Main.NAVI_CHANNEL :
			Main.showDescription(Data.getChannelTitleList()[Main.level1Selected], Data.getChannelDescList()[Main.level1Selected]);
			break;
		case Main.NAVI_PROGRAMME :
			Main.showDescription(Data.getProgrammeTitleList()[Main.level2Selected], Data.getProgrammeDescList()[Main.level2Selected]);
			break;
		case Main.NAVI_EPISODE :
			Main.showDescription(Data.getEpisodeTitleList()[Main.level3Selected], Data.getEpisodeDescList()[Main.level3Selected]);
			break;
		case Main.NAVI_BOOKMARK :
			Main.showDescription(Data.getCollectionTitleList()[Main.level1Selected], Data.getCollectionNoteList()[Main.level1Selected]);
			break;
		case Main.NAVI_COLLECTION :
			Main.showDescription(Data.getCollectionTitleList()[Main.level1Selected], Data.getCollectionNoteList()[Main.level1Selected]);
			break;
		default :
			break;
	}
	//Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
}

Main.dispatchTitleBarTitle = function(index) {
	switch(index)
	{
		case Main.NAVI_FEATURE :
			Main.setPageTitle(Data.PAGE_TITLE_FEATURES);
			break;
		case Main.NAVI_NEWS :
			Main.setPageTitle(Data.PAGE_TITLE_NEWS);
			break;
		case Main.NAVI_CHANNEL :
			Main.setPageTitle(Data.PAGE_TITLE_CHANNELS2);
			break;
		case Main.NAVI_PROGRAMME :
			Main.setPageTitle(Data.getChannelTitleList()[Main.level1Selected]  + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getProgrammeTitleList()[Main.level2Selected]);
			break;
		case Main.NAVI_EPISODE :
		//console.log("Main.NAVI_PROGRAMME selected: " + Main.level2Selected);
			Main.setPageTitle(Data.getChannelTitleList()[Main.level1Selected]  + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getProgrammeTitleList()[Main.level2Selected] + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getEpisodeTitleList()[Main.level3Selected]);
			break;
		case Main.NAVI_BOOKMARK :
			Main.setPageTitle(Data.PAGE_TITLE_BOOKMARKS);
			break;
		case Main.NAVI_COLLECTION :
			Main.setPageTitle(Data.PAGE_TITLE_COLLECTIONS);
			break;
		default :
			break;
	}

}

Main.hideScreenWithMenuBar = function() {
	//document.getElementById("screen_wrapper").style.backgroundImage = "";
	document.getElementById("screen_wrapper").style.visibility = "hidden";
//	document.getElementById("logo_wrapper").style.visibility = 'hidden';
//	document.getElementById("mainNav_wrapper").style.visibility = 'hidden';
//	document.getElementById("gridView_wrapper").style.visibility = 'hidden';
//	document.getElementById("shadow").className="";
	
	this.removeEmptyViewItems();
	
	/*
	<div id="gridViewUpBtn" class="gridViewUpBtn"></div>
	<div id="gridViewDownBtn" class="gridViewDownBtn"></div>
	<div class="gridViewTitleBar">
	<div id="gridViewTitleText" class="gridViewTitleText"></div>
	</div>
	*/
	
	console.log('this.isUpBtnVisible: ' + this.isUpBtnVisible + 'this.isDownBtnVisible' + this.isDownBtnVisible);
	
	if(document.getElementById("gridViewUpBtn").style.visibility == "hidden") {
		this.isUpBtnVisible = false;
	}
	else {
		this.isUpBtnVisible = true;
	}
	
	if(document.getElementById("gridViewDownBtn").style.visibility == "hidden") {
		this.isDownBtnVisible = false;
	}
	else {
		this.isDownBtnVisible = true;
	}
	
	console.log('this.isUpBtnVisible: ' + this.isUpBtnVisible + 'this.isDownBtnVisible' + this.isDownBtnVisible);
	
	document.getElementById("gridViewUpBtn").style.visibility = "hidden";
	document.getElementById("gridViewDownBtn").style.visibility = "hidden";
}

Main.showScreen = function() {
	//document.getElementById("screen_wrapper").style.backgroundImage = "url('../assets/bg.png')";
	/*
	document.getElementById("logo_wrapper").style.visibility = 'visible';
	document.getElementById("mainNav_wrapper").style.visibility = 'visible';
	document.getElementById("gridView_wrapper").style.visibility = 'visible';
	document.getElementById("shadow").className="shadow mainNav";
	*/
	document.getElementById("screen_wrapper").style.visibility = "visible";
	this.showViewItemsAfterMovie();
	
	console.log('this.isUpBtnVisible: ' + this.isUpBtnVisible + 'this.isDownBtnVisible' + this.isDownBtnVisible);
	
	if(this.isUpBtnVisible) {
		document.getElementById("gridViewUpBtn").style.visibility = "visible";
	}
	else {
		document.getElementById("gridViewUpBtn").style.visibility = "hidden";
	}
	
	if(this.isDownBtnVisible) {
		document.getElementById("gridViewDownBtn").style.visibility = "visible";
	}
	else {
		document.getElementById("gridViewDownBtn").style.visibility = "hidden";
	}
	
	/*
	document.getElementById("gridViewUpBtn").style.visibility = "visible";
	document.getElementById("gridViewDownBtn").style.visibility = "visible";
	*/
}

/*
Main.resetGridViewItems = function() 
{
	//this.resetGridIndices();
	for(var i = 0; i < this.itemCount; i++) {
		document.getElementById("gridViewItemImg"+i).src="";
		document.getElementById('gridViewItem'+i).className='gridViewItem';
		document.getElementById('gridViewItemText'+i).className='gridViewText';
	}
}
*/

Main.resetGridViewItems = function() 
{
	//this.resetGridIndices();
	
	
	var tmpItemArr = document.getElementsByName("gridViewItem");
	var tmpItemImgArr = document.getElementsByName("gridViewItemImg");
	var tmpItemImgHighlightArr = document.getElementsByName("gridViewItemHighlight");
	var tmpItemTextArr = document.getElementsByName("gridViewItemText");
	var tmpItem = null;
	
	for(var i = 0; i < tmpItemArr.length; i++) {
	
		tmpItem = tmpItemArr[i];
		tmpItem.setAttribute("class", "gridViewItem");
		
		tmpItem = tmpItemImgArr[i];
		tmpItem.setAttribute("src", "");
		
		tmpItem = tmpItemImgHighlightArr[i];
		tmpItem.setAttribute("class", "gridViewItemHighlight");
		
		tmpItem = tmpItemTextArr[i];
		tmpItem.setAttribute("class", "gridViewText");

	}
	
}


Main.resetGridIndices = function() {
	this.previousSelected = 0;
	this.level1Selected = 0;
	this.level2Selected = 0;
	this.level3Selected = 0;
}


/*
Main.removeEmptyViewItems = function()
{
	console.log("removeEmptyViewItems is running");
	items = document.getElementsByName("gridViewItem");
	console.log("gridViewitems count: " + items.length);
	for(var i = 0; i < items.length; i++) {
	
		if(document.getElementById("gridViewItemImg"+i)) {
			document.getElementById("gridViewItemImg"+i).src="";
			document.getElementById('gridViewItemImg'+i).style.visibility = 'hidden'; 
			document.getElementById('gridViewItemText'+i).style.visibility = 'hidden'; 
		}
	}
}
*/

Main.showViewItemsAfterMovie = function()
{

	var tmpItemArr = document.getElementsByName("gridViewItem");
	var tmpItemImgArr = document.getElementsByName("gridViewItemImg");
	var tmpItemImgHighlightArr = document.getElementsByName("gridViewItemHighlight");
	var tmpItemTextArr = document.getElementsByName("gridViewItemText");
	var tmpItem = null;
	
	for(var i = 0; i < tmpItemArr.length; i++) {
	
		tmpItem = tmpItemArr[i];
		tmpItem.style.visibility = 'visible';
		
		
		tmpItem = tmpItemImgArr[i];
		//tmpItem.setAttribute("src", "");
		tmpItem.style.visibility = 'visible';
		
		tmpItem = tmpItemImgHighlightArr[i];
		tmpItem.style.visibility = 'visible';
		
		tmpItem = tmpItemTextArr[i];
		tmpItem.style.visibility = 'visible';
		
		//alert('node attribute: ' + tmpItem.nodeValue);
		
	}
	
}

Main.removeEmptyViewItems = function()
{

	var tmpItemArr = document.getElementsByName("gridViewItem");
	var tmpItemImgArr = document.getElementsByName("gridViewItemImg");
	var tmpItemImgHighlightArr = document.getElementsByName("gridViewItemHighlight");
	var tmpItemTextArr = document.getElementsByName("gridViewItemText");
	var tmpItem = null;
	
	for(var i = 0; i < tmpItemArr.length; i++) {
	
		tmpItem = tmpItemArr[i];
		tmpItem.style.visibility = 'hidden';
		
		
		tmpItem = tmpItemImgArr[i];
		//tmpItem.setAttribute("src", "");
		tmpItem.style.visibility = 'hidden';
		
		tmpItem = tmpItemImgHighlightArr[i];
		tmpItem.style.visibility = 'hidden';
		
		tmpItem = tmpItemTextArr[i];
		tmpItem.style.visibility = 'hidden';
		
		//alert('node attribute: ' + tmpItem.nodeValue);
		
		
		/*
		document.getElementById("gridViewItemImg"+i).src="";
		document.getElementById('gridViewItem'+i).className='gridViewItem';
		document.getElementById('gridViewItemHighlight'+i).className='gridViewItemHighlight';
		document.getElementById('gridViewItemText'+i).className='gridViewText';
		*/

	}
	
	if(document.getElementById("gridViewUpBtn").style.visibility == "hidden") {
		this.isUpBtnVisible = false;
	}
	else {
		this.isUpBtnVisible = true;
	}
	
	if(document.getElementById("gridViewDownBtn").style.visibility == "hidden") {
		this.isDownBtnVisible = false;
	}
	else {
		this.isDownBtnVisible = true;
	}
	
	
	document.getElementById("gridViewUpBtn").style.visibility = "hidden";
	document.getElementById("gridViewDownBtn").style.visibility = "hidden";
	
/*
	items = document.getElementsByName("gridViewItem");
	for(var i = 0; i < items.length; i++) {
		if(document.getElementById("gridViewItemImg"+i)) {
			document.getElementById("gridViewItemImg"+i).src="";
			document.getElementById('gridViewItemImg'+i).style.visibility = 'hidden'; 
			document.getElementById('gridViewItemText'+i).style.visibility = 'hidden'; 
			document.getElementById('gridViewItemHighlight'+i).style.visibility = 'hidden'; 
		}
	}
	*/
}

Main.changeNavBarLoginBtn = function(flag)
{
}

Main.scrollBarHandler = function(count)
{
	/*
	console.log('scrollBarHandler');
	if(count <= 8) {
		document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'hidden'; 
	}
	else if(this.currentItemRowOnShow == 0) {
		document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'visible'; 
	}
	else if(this.currentItemRowOnShow == Math.floor(Main.itemCount/4) - 2) {
		document.getElementById('gridViewUpBtn').style.visibility = 'visible'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'hidden'; 
	}
	else {
		document.getElementById('gridViewUpBtn').style.visibility = 'visible'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'visible'; 
	}
	*/
}

Main.LoginAPI = function(name, password) 
{

	//var LoginURL='http://api.majitv.com/api/login.ashx?user=' + name + '&pwd=' + password;
	var LoginURL = 'http://api.majitv.com/api/member_tv/logout.ashx';

	Server.dataReceivedCallback = function()
	{
		//alert("login callback");
		Main.APICall(0, this.level0Selected, false);	
	}
	Server.url=LoginURL;
	Server.parseType="Login";
	Server.fetchJSON(); // Request video information from server 


	//Login.login(name, password);
}

Main.LogoutAPI = function() 
{
	var LogoutURL='http://api.majitv.com/api/member_tv/logout.ashx';
	
	Server.dataReceivedCallback = function()
	{
		window.name = "false";
		Display.showStatus("登出成功。");
		//alert("logout callback");
		//Data.unloadCollectionSet();
		document.getElementById('pageInfo_text').innerHTML = "";
		document.getElementById('pageInfo_text2').innerHTML = "";
		Data.unloadCollectionSet();
		if(this.level0Selected%2==1)
			document.getElementById('mainNavItem'+Main.level0Selected).className='mainNav alt';
		else
			document.getElementById('mainNavItem'+Main.level0Selected).className='mainNav';
			
		document.getElementById('mainNavItemText'+Main.level0Selected).className='mainNavText';
		Main.level0Selected = 0;
		document.getElementById('mainNavItem'+Main.level0Selected).className='mainNav selected';
		document.getElementById('mainNavItemText'+Main.level0Selected).className='mainNavText selected';
		
		
		Main.switchMenuBar(Main.NAVI_FEATURE);		
		Main.removeEmptyViewItems();
		Main.resetGridIndices();
		Main.resetGridViewItems();
		
	}
	Server.url=LogoutURL;
	Server.parseType="Logout";
	Server.fetchJSON(); // Request video information from server 


	//Login.login(name, password);
}
function logoutandin(){
	if(!this.isDescriptionShown&&!this.isCommentShown&&!this.isshowNotePage)
	{
		if(window.name != "true") {
			//window.location = 'login.html?'+window.location.search;
			location.href = 'sign-in/pages/keyboard_basic.html';
		}
		else {
		
			Main.LogoutAPI();
			Main.APICall(this.level0Selected, 0);
			
		}
	}
	
}
Main.mousedispatchTitleBarTitle = function(index) {
	switch(index)
	{
		case Main.NAVI_FEATURE :
			Main.setPageTitle(Data.PAGE_TITLE_FEATURES);
			break;
		case Main.NAVI_NEWS :
			Main.setPageTitle(Data.PAGE_TITLE_NEWS);
			break;
		case Main.NAVI_CHANNEL :
			Main.setPageTitle(Data.PAGE_TITLE_CHANNELS2);
			break;
		case Main.NAVI_PROGRAMME :
			Main.setPageTitle(Data.getChannelTitleList()[Main.level1Selected]  + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getProgrammeTitleList()[Main.mouseSelected]);
			break;
		case Main.NAVI_EPISODE :
		console.log(" Level 2 !!! Main.NAVI_PROGRAMME selected: " + Main.level2Selected);
			Main.setPageTitle(Data.getChannelTitleList()[Main.level1Selected]  + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getProgrammeTitleList()[Main.level2Selected] + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getEpisodeTitleList()[Main.mouseSelected]);
			break;
		case Main.NAVI_BOOKMARK :
			Main.setPageTitle(Data.PAGE_TITLE_BOOKMARKS);
			break;
		case Main.NAVI_COLLECTION :
			Main.setPageTitle(Data.PAGE_TITLE_COLLECTIONS);
			break;
		default :
			break;
	}

}
function mouseGetComments(){
	console.log("mouseGetComments");
	Main.dispatchComments();
	
}
function mouseGetDesc(){
	console.log("mouseGetComments");
	Main.dispatchDescription();
	
}
function FeatureShowNotePage(){
	console.log("FeatureShowNotePage");
	Server.dataReceivedCallback = function()
	{
		//Display.showStatus('這部影片已從"我的資訊"中刪除');
		//Display.StatusTimer();
		//Main.APICall(this.level0Selected, 0);
		//Main.APICall(this.level0Selected, 0, false);
		Main.showNotePage();
		
	}
	Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getFeatureIDList()[Main.mouseSelected]);
	Server.parseType="SingleEpisode";
	Server.fetchJSON(); // Request video information from server 
}
function EpisodeShowNotePage(){
	console.log("EpisodeShowNotePage");
	Server.dataReceivedCallback = function()
	{
		//Display.showStatus('這部影片已從"我的資訊"中刪除');
		//Display.StatusTimer();
		//Main.APICall(this.level0Selected, 0);
		//Main.APICall(this.level0Selected, 0, false);
		Main.showNotePage();
		
	}
	//Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getFeatureIDList()[Main.mouseSelected]);
	Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getEpisodeIDList()[Main.mouseSelected]);
	Server.parseType="SingleEpisode";
	Server.fetchJSON(); // Request video information from server 
}

function EpsoideShowNotePage(){
	console.log("EpsoideShowNotePage");
	Server.dataReceivedCallback = function()
	{
		//alert("currentEpisodeDetails"+Data.currentEpisodeDetails['Notes']);
		Main.showNotePage();
		
	}
	Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getEpisodeIDList()[Main.mouseSelected]);
	Server.parseType="SingleEpisode";
	Server.fetchJSON(); // Request video information from server
	//this.switchMenuBar(Main.NAVI_COLLECTION2);
	//alert("MAJI行");
	//if()
	//this.switchMenuBar(Main.NAVI_COLLECTION2);
	if(this.containNote){
		this.switchMenuBar(Main.NAVI_COLLECTION2);
		console.log("contain");
	}else{
		this.switchMenuBar(Main.NAVI_COLLECTION2_NO_INFO);
		console.log("Not contain");
	}
	
}

function mouseDelCollect(){
	console.log("mouseDelCollect");
		Server.dataReceivedCallback = function()
		{
			Display.showStatus('這部影片已從"我的資訊"中刪除');
			Main.APICall(3, 0);
		}
		Server.url='http://api.majitv.com/api/member_tv/removeMyCollection.ashx?id=' + (Data.getCollectionEpIDList())[Main.mouseSelected] + "&usr=" + Main.username +"&pwd=" + Main.pwd;
		Server.parseType="RemoveMyCollection";
		Server.fetchJSON(); // Request video information from server 	
	
}

function mouseDelVideo(){
	console.log("mouseDelVideo");
	Server.dataReceivedCallback = function()
	{
		Display.showStatus('這部影片已從"我的影片"中刪除');
		Main.APICall(4, 0);
	}
	Server.url='http://api.majitv.com/api/member_tv/removeMyVideo.ashx?id=' + (Data.getCollectionEpIDList())[Main.mouseSelected] + "&usr=" + Main.username + "&pwd=" + Main.pwd;
	Server.parseType="RemoveMyBookmarks";
	Server.fetchJSON(); // Request video information from server
	
}
function dispatchMoveOverItem(index){
	console.log("MouseOver");
	if(Main.pageSection != Main.RIGHT_SECTION){
		Main.switchMenuBar(Main.dispatchNaviBarIndex());
	}
	
	Main.pageSection = Main.RIGHT_SECTION;

	if(Main.mouseSelected != index){
		Main.mouseSelected = index;
		if(Main.mouseSelected != -1){
			document.getElementById('gridViewItem'+Main.mouseSelected).className='gridViewItem ';
			document.getElementById('gridViewItemText'+Main.mouseSelected).className='gridViewText';
			if(Main.level == 0){
				console.log("Level 1!!!!!!!!!!!!!!");
			document.getElementById('gridViewItem'+Main.level1Selected).className='gridViewItem ';
			document.getElementById('gridViewItemText'+Main.level1Selected).className='gridViewText';
			Main.level1Selected = index;
			console.log("Main.level1Selected: " + Main.level1Selected);
			}else if(Main.level == 1){
				console.log("Level 2!!!!!!!!!!!!!!");
				document.getElementById('gridViewItem'+Main.level2Selected).className='gridViewItem ';
				document.getElementById('gridViewItemText'+Main.level2Selected).className='gridViewText';
				Main.level2Selected = index;
				console.log("Main.level2Selected: " + Main.level2Selected);
				console.log("Main.level1Selected: " + Main.level1Selected);
			}else if(Main.level == 2){
				console.log("Level 3!!!!!!!!!!!!!!");
				document.getElementById('gridViewItem'+Main.level3Selected).className='gridViewItem ';
				document.getElementById('gridViewItemText'+Main.level3Selected).className='gridViewText';
				Main.level3Selected = index;
			}
		}
	}
	document.getElementById('gridViewItem'+index).className='gridViewItem selected';
	document.getElementById('gridViewItemText'+index).className='gridViewText selected';
	Main.mousedispatchTitleBarTitle(Main.dispatchNaviBarIndex());

	
}
function dispatchMouseKeyOnItemView(index){
	Main.pageSection = Main.RIGHT_SECTION;
	
	console.log("Level: " + Main.level);

	if(!Main.isDescriptionShown &&
	   !Main.isCommentShown &&
	   !Main.isshowNotePage) {
		if(Main.level==0){
			
			if(Main.level0Selected ==1){
					
					Main.showDescription(Data.getNewsTitleList()[index], Data.getNewsDescList()[index]);
				}
				else {
					
					Main.level1Selected = index;
					Main.mouseSelected = 0;

					Main.Level1Move(Main.ENTER);
					
				}
			}
			else if(Main.level==1) {

				Main.mouseSelected = 0;
				Main.level2Selected = index;
				Main.Level2Move(Main.ENTER);
			}
			else if(Main.level==2) {

				Main.level3Selected = index;
				Main.Level3Move(Main.ENTER);
			}
		}
		else{
			Main.switchMenuBar(Main.dispatchNaviBarIndex()); 
			Main.hideNotePage();
			Main.hideCommentPage();
			Main.hideDescription();
	
		}
	

	
	//document.getElementById('mainNavItemText'+index).className='mainNavText selected_alt';
	document.getElementById('gridViewItem'+index).className='gridViewItem selected';
	document.getElementById('gridViewItemText'+index).className='gridViewText selected';
	Main.mousedispatchTitleBarTitle(Main.dispatchNaviBarIndex());
	
}


function APICALL(index){

	if(!Main.isDescriptionShown &&
	   !Main.isCommentShown &&
	   !Main.isshowNotePage){
	   
	for(var i = 0; i < 6; i++) {
		document.getElementById('mainNavItem' + i).className='mainNav';
		document.getElementById('mainNavItemText' + i).className='mainNavText';
	}
	
		document.getElementById("pageInfo_text").innerHTML = "";
		document.getElementById("pageInfo_text2").innerHTML = "";
		Main.level0Selected = index;
		document.getElementById('mainNavItem' + index).className='mainNav selected';
		document.getElementById('mainNavItemText' + index).className='mainNavText selected';
		Main.level = 0 ;
		Main.APICall(index,0,false);
		
	}
}
Main.onMouseOverLeft = function(index){
if(!Main.isDescriptionShown &&
	   !Main.isCommentShown &&
	   !Main.isshowNotePage){
	   Main.pageSection = Main.LEFT_SECTION;
	   Main.switchMenuBar(Main.NAVI_LEFTSECTION);
	   for(var i = 0; i < 6; i++) {
		document.getElementById('mainNavItem' + i).className='mainNav';
		}
		
		//Main.level0Selected = index;
		document.getElementById('mainNavItem' + index).className='mainNav selected';
		//document.getElementById('mainNavItemText' + index).className='mainNavText selected';
		//Main.level = 0 ;
		Main.mouseLeftSelected = index;
		console.log("Main.level0Selected: " + Main.level0Selected);
	}

}
Main.onMouseOut =function(index){

		Main.mouseSelected = index;
		if(Main.mouseSelected != -1){
			document.getElementById('gridViewItem'+Main.mouseSelected).className='gridViewItem ';
			document.getElementById('gridViewItemText'+Main.mouseSelected).className='gridViewText';
			if(Main.level == 0){
				console.log("Level 1!!!!!!!!!!!!!!");
			document.getElementById('gridViewItem'+Main.level1Selected).className='gridViewItem ';
			document.getElementById('gridViewItemText'+Main.level1Selected).className='gridViewText';
			Main.level1Selected = index;
			console.log("onMouseOut Main.level1Selected: " + Main.level1Selected);
			}else if(Main.level == 1){
				console.log("Level 2!!!!!!!!!!!!!!");
				document.getElementById('gridViewItem'+Main.level2Selected).className='gridViewItem ';
				document.getElementById('gridViewItemText'+Main.level2Selected).className='gridViewText';
				Main.level2Selected = index;
				console.log("onMouseOut Main.level3Selected: " + Main.level1Selected);
			}else if(Main.level == 2){
				console.log("Level 3!!!!!!!!!!!!!!");
				document.getElementById('gridViewItem'+Main.level3Selected).className='gridViewItem ';
				document.getElementById('gridViewItemText'+Main.level3Selected).className='gridViewText';
				Main.level3Selected = index;
			}
		}

}
Main.APICall = function(selected, itemSelected, isReturn)
{
	this.isReturn = isReturn;
	console.log("APICall");
	this.mouseSelected = 0;
	for(var i = 0; i < 6; i++) {
		document.getElementById('mainNavItem' + i).className='mainNav';
		document.getElementById('mainNavItemText'+i).className='mainNavText';
		}
		document.getElementById('mainNavItem' + selected).className='mainNav selected';
		document.getElementById('mainNavItemText'+selected).className='mainNavText selected';
	if(selected==0){
		this.level = 0;
		Server.dataReceivedCallback = function()
		{
			//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
			Main.itemCount = Data.getFeatureIDList().length;
			//Main.scrollBarHandler(Main.itemCount);
			//alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
			
			Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList());
			Main.scrollBarHandler(Main.itemCount);
			Main.setPageTitle(Data.PAGE_TITLE_FEATURES);
			
			
		}
		Server.url="http://api.majitv.com/api/getFeatures.ashx?hq=true";
		Server.parseType="FeatureList";
		Server.fetchJSON(); /* Request video information from server */
		this.removeEmptyViewItems();
		this.setPageTitle(Data.PAGE_TITLE_FEATURES);
		this.switchMenuBar(Main.NAVI_LEFTSECTION);
	}
	else if(selected==1){
		this.level = 0;
		Server.dataReceivedCallback = function()
		{
			Main.itemCount = Data.getNewsIDList().length;
			//Main.scrollBarHandler(Main.itemCount);
			//alert("Am i in this section?");
			Display.setGridList( Data.getNewsTitleList(), Data.getNewsImgURLList());
			Main.scrollBarHandler(Main.itemCount);
			Main.setPageTitle(Data.PAGE_TITLE_NEWS);
			
		}
		Server.url="http://api.majitv.com/api/getNewsList.ashx?hq=true";
		Server.parseType="NewsList";
		Server.fetchJSON(); /* Request video information from server */
		this.removeEmptyViewItems();
		this.setPageTitle(Data.PAGE_TITLE_NEWS);
		this.switchMenuBar(Main.NAVI_NEWS);
	}
	else if(selected==2){
		Main.mouseSelected = -1;
		if(this.level == 0) {
			Server.dataReceivedCallback = function()
			{
				//alert("Display.seADSFASDFAFD");
				//console.log("Check where am i!!!!");
				
				Main.itemCount = Data.getChannelIDList().length;
				//Main.scrollBarHandler(Main.itemCount);
				Display.setGridList( Data.getChannelTitleList(), Data.getChannelImgURLList());
				Main.scrollBarHandler(Main.itemCount);
				Main.setPageTitle(Data.PAGE_TITLE_CHANNELS2);
				
				//alert("itemSelected aaaaaa: " + Main.channelReturnItemIndex);
				if(Main.isReturn && Main.pageSection == Main.RIGHT_SECTION) {
					document.getElementById('gridViewItem'+Main.channelReturnItemIndex).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+Main.channelReturnItemIndex).className='gridViewText selected';
				}
			}
			Server.url="http://api.majitv.com/api/getChannels.ashx?hq=true";
			Server.parseType="ChannelList";
			Server.fetchJSON(); /* Request video information from server */
			this.removeEmptyViewItems();
			this.setPageTitle(Data.PAGE_TITLE_CHANNELS2);
			this.switchMenuBar(Main.NAVI_CHANNEL);
			if(isReturn && Main.pageSection == Main.LEFT_SECTION) {
				this.level1Selected = 0;
			}
		}
		else if(this.level == 1) {
			Server.dataReceivedCallback = function()
			{	
				
				//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
				//Main.itemCount = Data.getFeatureIDList().length;
				//alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
				Main.itemCount = Data.getProgrammeTitleList().length;
				//Main.scrollBarHandler(Main.itemCount);
				Display.setGridList( Data.getProgrammeTitleList(), Data.getProgrammeImgURLList());
				Main.scrollBarHandler(Main.itemCount);
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
				if(Main.isReturn && Main.pageSection == Main.RIGHT_SECTION) {
					document.getElementById('gridViewItem'+Main.channelReturnItemIndex).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+Main.channelReturnItemIndex).className='gridViewText selected';
				}
				
			}
			Server.url="http://api.majitv.com/api/getPrograms.ashx?hq=true&cid=" + (Data.getChannelIDList()[itemSelected]);
			Server.parseType="ProgrammeList";
			Server.fetchJSON(); // Request video information from server 	
			this.removeEmptyViewItems();
			//this.removeEmptyViewItems();
			//this.setPageTitle(Data.PAGE_TITLE_PROGRAMMES);
			this.dispatchTitleBarTitle(this.dispatchNaviBarIndex());
			this.switchMenuBar(Main.NAVI_PROGRAMME);
			if(isReturn && Main.pageSection == Main.LEFT_SECTION) {
				this.level2Selected = 0;
			}
		}
		else if(this.level == 2) {
			Server.dataReceivedCallback = function()
			{
				//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
				//Main.itemCount = Data.getFeatureIDList().length;
				//alert("itemCount: " + Main.itemCount + " getEpisodeTitleList: " + Data.getEpisodeTitleList().length);
				Main.itemCount = Data.getEpisodeTitleList().length;
				//Main.scrollBarHandler(Main.itemCount);
				Display.setGridList( Data.getEpisodeTitleList(), Data.getEpisodeImgURLList());
				Main.scrollBarHandler(Main.itemCount);
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
				if(Main.isReturn && Main.pageSection == Main.RIGHT_SECTION) {
					document.getElementById('gridViewItem'+Main.channelReturnItemIndex).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+Main.channelReturnItemIndex).className='gridViewText selected';
				}
				
			}
			Server.url="http://api.majitv.com/api/getEpisodes.ashx?hq=true&pid=" + (Data.getProgrammeIDList()[itemSelected]);
			Server.parseType="EpisodeList";
			Server.fetchJSON(); // Request video information from server 	
			this.removeEmptyViewItems();
			//this.setPageTitle(Data.PAGE_TITLE_EPISODES);
			this.dispatchTitleBarTitle(this.dispatchNaviBarIndex());
			this.switchMenuBar(Main.NAVI_EPISODE);
			if(isReturn && Main.pageSection == Main.LEFT_SECTION) {
				this.level3Selected = 0;
			}
		}
	}
	else if(selected==3){
		this.level = 0;
		//Data.unloadCollectionSet();
		
		if(window.name == "true") {
			Server.dataReceivedCallback = function()
			{
				
				Main.dispatchLevelItemIndex(1);
				//document.getElementById('gridViewItem'+Main.currentLevelItemIndex).className='gridViewItem';
				//document.getElementById('gridViewItemText'+Main.currentLevelItemIndex).className='gridViewText';
				
				Main.itemCount = Data.getCollectionIDList().length;
				//Main.scrollBarHandler(Main.itemCount);
				Display.setGridList( Data.getCollectionTitleList(), Data.getCollectionImgURLList());
				Main.scrollBarHandler(Main.itemCount);
				Main.level1Selected = 0;
				if(Main.itemCount != 0 && Main.pageSection == Main.RIGHT_SECTION) { 
					Main.level1Selected = 0;
					document.getElementById('gridViewItem'+Main.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+Main.level1Selected).className='gridViewText selected';
					//document.getElementById('mainNavItemText'+Main.level1Selected).className='mainNavText selected_alt';
				}
				else if(Main.itemCount == 0) {
					Main.pageSection = Main.LEFT_SECTION;
					document.getElementById('mainNavItemText'+Main.level0Selected).className='mainNavText selected';
					document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
				}
				
				Main.setPageTitle(Data.PAGE_TITLE_COLLECTIONS);
				//Display.setGridList( Data.getCollectionTitleList(), Data.getCollectionImgURLList());
				//Main.setPageTitle(Data.PAGE_TITLE_COLLECTIONS);
				//document.getElementById('gridViewItem'+itemSelected).className='gridViewItem selected';
				//document.getElementById('gridViewItemText'+itemSelected).className='gridViewText selected';
			}
			
			Server.url="http://api.majitv.com/api/member_tv/getMyCollection.ashx?media=hd&usr=" + Main.username +"&pwd="+Main.pwd +"&hq=true";
			console.log("URL: "+Server.url);
			//alert("Yes: " + Server.url);
			Server.parseType="MyCollectionList";
			Server.fetchJSON(); /* Request video information from server */
			console.log("GectMyCollection Downnnnnnn")
			
		}
		else if(window.name == "false") {
			document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS2;
			document.getElementById('pageInfo_text2').innerHTML = "";
			this.switchMenuBar(Main.NAVI_LEFTSECTION);
		}
		this.removeEmptyViewItems();
		Main.setPageTitle(Data.PAGE_TITLE_COLLECTIONS);
		//this.switchMenuBar(Main.NAVI_COLLECTION);
	}
	else if(selected==4){
		this.level = 0;
		if(window.name == "true") {
			Server.dataReceivedCallback = function()
			{
				Main.dispatchLevelItemIndex(1);
				//document.getElementById('gridViewItem'+Main.currentLevelItemIndex).className='gridViewItem';
				//document.getElementById('gridViewItemText'+Main.currentLevelItemIndex).className='gridViewText';
				
				Main.itemCount = Data.getCollectionIDList().length;
				//Main.scrollBarHandler(Main.itemCount);
				//alert("count::" + Main.itemCount);
				Display.setGridList( Data.getCollectionTitleList(), Data.getCollectionImgURLList());
				Main.scrollBarHandler(Main.itemCount);
				if(Main.itemCount != 0 && Main.pageSection == Main.RIGHT_SECTION) { 
					Main.level1Selected = 0;
					document.getElementById('gridViewItem'+Main.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+Main.level1Selected).className='gridViewText selected';
					//document.getElementById('mainNavItemText'+Main.level1Selected).className='mainNavText selected_alt';
				}
				else if(Main.itemCount == 0) {
					Main.pageSection = Main.LEFT_SECTION;
					document.getElementById('mainNavItemText'+Main.level0Selected).className='mainNavText selected';
					document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
				}
				
				//Display.setGridList( Data.getCollectionTitleList(), Data.getCollectionImgURLList());
				Main.setPageTitle(Data.PAGE_TITLE_BOOKMARKS);
			}
			Server.url="http://api.majitv.com/api/member_tv/getMyVideos.ashx?media=hd&usr=" + Main.username +"&pwd="+Main.pwd +"&hq=true";
			Server.parseType="MyBookmarkds";
			Server.fetchJSON(); /* Request video information from server */
		}
		else if(window.name == "false") {
			document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS3;
			document.getElementById('pageInfo_text2').innerHTML = "";
			this.switchMenuBar(Main.NAVI_LEFTSECTION);
		}
		this.removeEmptyViewItems();
		this.setPageTitle(Data.PAGE_TITLE_BOOKMARKS);
		//this.switchMenuBar(Main.NAVI_BOOKMARK);
	}
	else if(selected==5){
		console.log('selected==5:');
		Server.dataReceivedCallback = function()
		{
			//console.log('AAAAAA: ' + Data.aboutUsList);
			document.getElementById('pageInfo_text2').innerHTML = Data.aboutUsList;
			//document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
			//alert(document.getElementById('pageInfo_text').innerHTML);
			console.log('Done: '+ Data.aboutUsList);
		}
		this.level = 0;
		this.removeEmptyViewItems();
		Server.url="http://api.majitv.com/api/getAbout.ashx";
		Server.parseType="GetAbout";
		Server.fetchJSON(); /* Request video information from server */
		this.setPageTitle(Data.PAGE_TITLE_ABOUTMAJI);
	}

}


Main.Level1APICall = function(selected)
{
/*
	if(this.level0Selected == 0) {
		Server.dataReceivedCallback = function()
		{
			alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
			Main.itemCount = Data.getFeatureIDList().length;
			alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
			Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList());
		}
		Server.url="http://api.majitv.com/api/getEpisode.ashx?media=hd&eid=" + ;
		Server.parseType="FeatureList";
		Server.fetchJSON(); // Request video information from server 
	}
*/	

/*
	alert("selected index: " + selected);
	if(selected==0){
		Server.dataReceivedCallback = function()
		{
			alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
			Main.itemCount = Data.getFeatureIDList().length;
			alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
			Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList());
		}
		Server.url="http://api.majitv.com/api/getFeatures.ashx?hq=true";
		Server.parseType="FeatureList";
		Server.fetchJSON(); // Request video information from server 
	}
	else if(selected==1){
		Server.dataReceivedCallback = function()
		{
			alert("Display.seADSFASDFAFD");
			Main.itemCount = Data.getChannelIDList().length;
			Display.setGridList( Data.getChannelTitleList(), Data.getChannelImgURLList());
		}
		Server.url="http://api.majitv.com/api/getChannels.ashx?hq=true";
		Server.parseType="ChannelList";
		Server.fetchJSON(); // Request video information from server 
	}
	else if(selected==2){
		Server.dataReceivedCallback = function()
		{
			Main.itemCount = Data.getNewsIDList().length;
			Display.setGridList( Data.getNewsTitleList(), Data.getNewsImgURLList());
		}
		Server.url="http://api.majitv.com/api/getNewsList.ashx?hq=true";
		Server.parseType="NewsList";
		Server.fetchJSON(); // Request video information from server 
	}
	*/
}


Main.Level0Move = function(move)
{
	//alert("Level 0 move");
	switch(move)
	{
		case Main.UP :
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected > 0){

					this.previousSelected = 0;
					this.level1Selected = 0;
					this.level2Selected = 0;
					this.level3Selected = 0;
					this.resetGridViewItems();
					
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected--;
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					
					if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
					}
					
					if(this.isDescriptionShown) {
						this.hideDescription();
					}
					
					this.APICall(this.level0Selected, this.level1Selected, false);
					this.switchMenuBar(Main.NAVI_LEFTSECTION);
				}
			}
			else {
			
				if(this.level1Selected >= 4) {
					Display.scrollItemPage(Main.UP, this.level1Selected);
					this.scrollBarHandler(Main.itemCount);
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
					this.level1Selected -= 4;
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
				}
				
				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
			}
			
			break;
		case Main.DOWN :
			
			if(this.pageSection == Main.LEFT_SECTION) {

				if(this.level0Selected < this.level0Count-1){	
					this.previousSelected = 0;
					this.level1Selected = 0;
					this.level2Selected = 0;
					this.level3Selected = 0;
					this.resetGridViewItems();
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected++;
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					
					//this.APICall(this.level0Selected, this.level1Selected);
					if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
					}
					this.APICall(this.level0Selected, this.level1Selected, false);
					this.switchMenuBar(Main.NAVI_LEFTSECTION);
				}
			}
			else {
				if(this.level1Selected + 4 < Main.itemCount) {
					Display.scrollItemPage(Main.DOWN, this.level1Selected);
					this.scrollBarHandler(Main.itemCount);
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
					this.level1Selected += 4;
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
					
					if(this.isDescriptionShown) {
						this.dispatchDescription();
					}
				}

			}
			break;
		case Main.RIGHT :
			console.log(" level 0 Right");
			if(this.level1Selected < Main.itemCount - 1) {
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
				this.level1Selected++;
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
				Main.switchMenuBar(Main.NAVI_FEATURE);
			}
			break;
			
		case Main.LEFT :
			
			if(this.level1Selected > 0) {
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
				this.level1Selected--;
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
				
				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
			}
			break;
	}
}

Main.Level1Move = function(move)
{	
	//alert("Level 1 move");
	console.log("Level 1 move");
	switch(move)
	{
	/*
		case Main.LEFT :
			document.getElementById("gridView_wrapper").style.opacity = '0.0';
			document.getElementById("listView_wrapper").style.opacity = '0.0';
			document.getElementById("searchView_wrapper").style.opacity = '0.0';
			this.level--;
			break;
	*/
	
		case Main.RIGHT :
			console.log(" Level1 Move");
			if(this.level1Selected < Main.itemCount - 1) {
				Display.scrollItemPage(Main.RIGHT, this.level1Selected);
				this.scrollBarHandler(Main.itemCount);
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
				this.level1Selected++;
				this.mouseSelected = this.level1Selected;
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
				
				
				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
			}
			console.log("dispatchNaviBarIndex"  + Main.dispatchNaviBarIndex())
			Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			//this.switchMenuBar(Main.NAVI_FEATURE);
			break;
			
		case Main.LEFT :
			console.log("Window.Name: " + window.name);
			if(this.level1Selected > 0) {
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
				this.level1Selected--;
				this.mouseSelected = this.level1Selected;
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
				

				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
//				if(this.level1Selected == 0 && window.name == 'false'){
//					console.log("level1Selected == 0 && window.name == 'false'");
//					//this.switchMenuBar(Main.NAVI_LEFTSECTION);
//				}
			}
			Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			break;
		case Main.UP :
			
			//alert("Main.LEFT_SECTION: " + Main.LEFT_SECTION);
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected > 0){
				this.previousSelected = 0;
				this.level1Selected = 0;
				this.level2Selected = 0;
				this.level3Selected = 0;
				for(var i = 0; i < 6; i++) {
					document.getElementById('mainNavItem' + i).className='mainNav';
				}
					this.resetGridViewItems();
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected--;
					
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					
					if(this.level0Selected == 3  && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS2;
						document.getElementById('pageInfo_text2').innerHTML = "";
					}
					else if( this.level0Selected == 4 && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS3;
						document.getElementById('pageInfo_text2').innerHTML = "";
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
						document.getElementById('pageInfo_text2').innerHTML = "";
						console.log("ELSSSSSE UP");
						}
					
					//alert("Main.level0Selected: " + Main.level0Selected);
					
					this.APICall(this.level0Selected, this.level1Selected, false);
					this.switchMenuBar(Main.NAVI_LEFTSECTION);
				}
			}
			else {
			
				if(this.level1Selected >= 4) {
					Display.scrollItemPage(Main.UP, this.level1Selected);
					this.scrollBarHandler(Main.itemCount);
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
					this.level1Selected -= 4;
					this.mouseSelected = this.level1Selected;
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
					
					if(this.isDescriptionShown) {
						this.dispatchDescription();
					}
				}
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			}
			break;
		case Main.DOWN :
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected < this.level0Count-1){	
				this.previousSelected = 0;
				this.level1Selected = 0;
				this.level2Selected = 0;
				this.level3Selected = 0;
					this.resetGridViewItems();
					for(var i = 0; i < 6; i++) {
					document.getElementById('mainNavItem' + i).className='mainNav';
				}
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected++;
					
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					
					if(this.level0Selected == 3 && window.name == "false") {
						
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS2;
						document.getElementById('pageInfo_text2').innerHTML = "";
						console.log("level0Selected == 3");
						
					}
					else if( this.level0Selected == 4 && window.name == "false") {
						
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS3;
						document.getElementById('pageInfo_text2').innerHTML = "";
						console.log("level0Selected == 4");
						
					}
					else {
						console.log("ELSSSSSE");
						document.getElementById('pageInfo_text').innerHTML = "";
						document.getElementById('pageInfo_text2').innerHTML = "";
					}
					
					this.APICall(this.level0Selected, this.level1Selected, false);
					this.switchMenuBar(Main.NAVI_LEFTSECTION);
					
					
				}
			}
			else {
			
				if(this.level1Selected + 4 < Main.itemCount) {
					Display.scrollItemPage(Main.DOWN, this.level1Selected);
					this.scrollBarHandler(Main.itemCount);
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
					this.level1Selected += 4;
					this.mouseSelected = this.level1Selected;
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
					
					if(this.isDescriptionShown) {
						this.dispatchDescription();
					}
				}
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			}
			break;
			
		case Main.BLUE :	
			if(this.level0Selected==0 && Main.pageSection != Main.LEFT_SECTION) {
				Server.dataReceivedCallback = function()
				{
					//Display.showStatus('這部影片已從"我的資訊"中刪除');
					//Display.StatusTimer();
					//Main.APICall(this.level0Selected, 0);
					//Main.APICall(this.level0Selected, 0, false);
					Main.showNotePage();
					
				}
				Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getFeatureIDList()[this.level1Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 

					//this.switchMenuBar(Main.NAVI_COLLECTION2);
				 //alert("I AM RIGHTTTTTTTT")
			}	
			else if(this.level0Selected==3) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已從"我的資訊"中刪除');
					Main.APICall(Main.level0Selected, 0);
				}
				Server.url='http://api.majitv.com/api/member_tv/removeMyCollection.ashx?id=' + (Data.getCollectionEpIDList())[this.level1Selected] + "&usr=" + this.username  + "&pwd=" +this.pwd;
				Server.parseType="RemoveMyCollection";
				Server.fetchJSON(); // Request video information from server 	
			}	
			else if(this.level0Selected==4) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已從"我的影片"中刪除');
					Main.APICall(Main.level0Selected, 0);
				}
				Server.url='http://api.majitv.com/api/member_tv/removeMyVideo.ashx?id=' + (Data.getCollectionEpIDList())[this.level1Selected] + "&usr=" + this.username  + "&pwd=" +this.pwd;
				Server.parseType="RemoveMyBookmarks";
				Server.fetchJSON(); // Request video information from server 	
			}	
			break;
		case Main.GREEN :
			
			if(this.level0Selected==0) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已被添加到"我的資訊"');
				}
				Server.url='http://api.majitv.com/api/member_tv/addMyCollection.ashx?group=0&id=' + (Data.getFeatureIDList())[this.level1Selected] + "&usr=" + this.username  + "&pwd=" +Main.pwd;
				Server.parseType="AddMyCollection";
				Server.fetchJSON(); // Request video information from server 	
			}	
			else if(this.level0Selected==1) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已被添加到"我的資訊"');
				}
				Server.url='http://api.majitv.com/api/member_tv/addMyCollection.ashx?group=0&id=' + (Data.getNewsIDList())[this.level1Selected] + "&usr=" + this.username  + "&pwd=" +Main.pwd;
				Server.parseType="AddMyCollection";
				Server.fetchJSON(); // Request video information from server 	
			}	
			
			/*
			else if(this.level0Selected==3) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('This video has been removed from 我的資訊');
					//Main.APICall(this.level0Selected, 0);
				}
				Server.url='http://api.majitv.com/api/member/removeMyCollection.ashx?id=' + (Data.getCollectionEpIDList())[this.level1Selected];
				Server.parseType="RemoveMyCollection";
				Server.fetchJSON(); // Request video information from server 	
			}	
			else if(this.level0Selected==4) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('This video has been removed from 我的影片');
					//Main.APICall(this.level0Selected, 0);
				}
				Server.url='http://api.majitv.com/api/member/removeMyVideo.ashx?id=' + (Data.getCollectionEpIDList())[this.level1Selected];
				Server.parseType="RemoveMyBookmarks";
				Server.fetchJSON(); // Request video information from server 	
			}	
			*/
			break;
			
		case Main.YELLOW :
			console.log("YELLOW");
			if(this.level0Selected==0) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已被添加到"我的影片"');
				}
				Server.url='http://api.majitv.com/api/member_tv/addMyVideo.ashx?id=' + (Data.getFeatureIDList())[this.level1Selected] + "&usr=" + this.username + "&pwd=" +Main.pwd;
				Server.parseType="AddMyBookmarks";
				Server.fetchJSON(); // Request video information from server
				
			}	
			else if(this.level0Selected==1) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已被添加到"我的影片"');
				}
				Server.url='http://api.majitv.com/api/member_tv/addMyVideo.ashx?id=' + (Data.getNewsIDList())[this.level1Selected] + "&usr=" + this.username + "&pwd=" +Main.pwd;
				Server.parseType="AddMyBookmarks";
				Server.fetchJSON(); // Request video information from server 	
				//this.removeEmptyViewItems();
			}	

			break;
		case Main.ENTER :
			if(this.level0Selected==0){
				Server.dataReceivedCallback = function()
				{
					//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
					//Main.itemCount = Data.getFeatureIDList().length;
					//alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
					//Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList());
					console.log("where am i 1");
					Main.removeEmptyViewItems();
					Display.hideStatus();
					Main.hideScreenWithMenuBar();
					//document.getElementById("screen_wrapper").style.visibility = 'hidden';
					
					var tmpArr = Data.getCurrentEpisodeDetails();
					Player.init(tmpArr['VideoUrl'], tmpArr['is3D']);
					
					//Player.setFullscreen();
					//Player.setVideoURL(tmpArr['VideoUrl']);
					Player.playVideo();
					window.NetCastMouseOff(3);
					Display.timeMsg();
					Main.level = 1;
				}
				
				Main.isVideoMode = true;
				Server.url="http://api.majitv.com/api/getEpisode.ashx?media=hd&eid=" + (Data.getFeatureIDList()[this.level1Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 
				Display.showStatus(Display.POPUP_TEXT_LOADING);
				console.log("URL: "+Server.url);
			}
			else if(this.level0Selected == 1){
				console.log("HelloWorld");
				if(!this.isDescriptionShown && Main.pageSection != Main.LEFT_SECTION) {
					this.dispatchDescription();
						//alert(this.level);
				}
				else {
					this.hideDescription();
				}
				
			}
			else if(this.level0Selected == 2) {
				Server.dataReceivedCallback = function()
				{
					//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
					//Main.itemCount = Data.getFeatureIDList().length;
					//alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
					
					//Main.setPageTitle(Data.PAGE_TITLE_CHANNELS2 + " : " + Data.getChannelTitleList()[Main.level1Selected]  + "   -   " + Data.PAGE_TITLE_PROGRAMMES + " : " + Data.getProgrammeTitleList()[0]);
					
					
					
					Main.itemCount = Data.getProgrammeTitleList().length;
					//Main.scrollBarHandler(Main.itemCount);
					Display.setGridList( Data.getProgrammeTitleList(), Data.getProgrammeImgURLList());
					Main.scrollBarHandler(Main.itemCount);
					Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
					this.level2Selected = 0;
					document.getElementById('gridViewItem0').className='gridViewItem selected';
					document.getElementById('gridViewItemText0').className='gridViewText selected';
					
					//Main.level1Selected = 0;
					
					/*
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
					Main.level1Selected = 0;
					document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText selected';
					*/
				}
				Server.url="http://api.majitv.com/api/getPrograms.ashx?hq=true&cid=" + (Data.getChannelIDList()[this.level1Selected]);
				Server.parseType="ProgrammeList";
				Server.fetchJSON(); // Request video information from server 	
				Main.removeEmptyViewItems();
				//this.setPageTitle(Data.PAGE_TITLE_PROGRAMMES);
				this.switchMenuBar(Main.NAVI_PROGRAMME);
				this.hideDescription();
				document.getElementById('gridViewItem'+this.level1Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level1Selected).className='gridViewText';
				//this.level1Selected = 0;
				this.level2Selected = 0;
				document.getElementById('gridViewItem0').className='gridViewItem selected';
				document.getElementById('gridViewItemText0').className='gridViewText selected';
				
				this.level++;
			}
			else if(this.level0Selected == 3) {
				
				Server.dataReceivedCallback = function()
				{
					Main.showNotePage();
				}
				Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getCollectionEpIDList()[this.level1Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 
				this.switchMenuBar(Main.NAVI_COMMENTS);
				//document.getElementById("screen_wrapper").style.visibility = 'hidden'; 
				//Display.showStatus(Display.POPUP_TEXT_LOADING);
				
			}
			else if(this.level0Selected == 4) {
			
			/*
				Main.isVideoMode = true;
				var tmpVideoLink = (Data.getCollectionVideoURLList())[this.level1Selected];
				//Display.showStatus(Display.POPUP_TEXT_LOADING);
				document.getElementById("screen_wrapper").style.visibility = 'hidden';
				Player.init(tmpVideoLink['VideoUrl'], tmpVideoLink['is3D']);
				Player.setFullscreen();
				
				//Player.setVideoURL(tmpVideoLink);
				Player.playVideo();
				*/
				Server.dataReceivedCallback = function()
				{
				/*
					Display.hideStatus();
					Main.hideScreenWithMenuBar();
					
					//document.getElementById("screen_wrapper").style.visibility = 'hidden';
					
					var tmpArr = Data.getCurrentEpisodeDetails();
					Player.init(tmpArr['VideoUrl'], tmpArr['is3D']);
					Player.setFullscreen();
					//Player.setVideoURL(tmpArr['VideoUrl']);
					Player.playVideo();
					Display.timeMsg();
					*/
					console.log("level0Selected == 2");
					Main.removeEmptyViewItems();
					document.getElementById("screen_wrapper").style.visibility = 'hidden';
					Display.hideStatus();
					var tmpArr = Data.getCurrentEpisodeDetails();
					Player.init(tmpArr['VideoUrl'], tmpArr['is3D']);
					//Player.setFullscreen();
					//Player.setVideoURL(tmpArr['VideoUrl']);
					Player.playVideo();
					window.NetCastMouseOff(3);
					Display.timeMsg
				}
				Main.isVideoMode = true;
				Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getCollectionEpIDList()[this.level1Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 	
				//document.getElementById("screen_wrapper").style.visibility = 'hidden'; 
				Display.showStatus(Display.POPUP_TEXT_LOADING);
				
			}
			
			break;
			
			
	}
}

Main.Level2Move = function(move)
{	
	//alert("Level 2 move");\
	
	console.log("Level2Move");
	switch(move)
	{
	/*
		case Main.LEFT :
			document.getElementById("gridView_wrapper").style.opacity = '0.0';
			document.getElementById("listView_wrapper").style.opacity = '0.0';
			document.getElementById("searchView_wrapper").style.opacity = '0.0';
			this.level--;
			break;
	*/
	
		case Main.RIGHT :
			if(this.level2Selected < Main.itemCount - 1) {
				Display.scrollItemPage(Main.RIGHT, this.level2Selected);
				this.scrollBarHandler(Main.itemCount);
				document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText';
				this.level2Selected++;
				document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText selected';
				
				if(this.isDescriptionShown) {
					//this.dispatchDescription();
				}
			}
			Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			break;
			
		case Main.LEFT :
			//alert("this.level2Selected: " + this.level2Selected);
			if(this.level2Selected > 0) {
				document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText';
				this.level2Selected--;
				document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText selected';
				if(this.isDescriptionShown) {
					//this.dispatchDescription();
				}
			}
			Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			break;
		case Main.UP :
			
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected > 0){
					this.resetGridViewItems();
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected--;
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
					}
					this.APICall(this.level0Selected, this.level2Selected, false);
				}
			}
			else {
				if(this.level2Selected >= 4) {
					Display.scrollItemPage(Main.UP, this.level2Selected);
					this.scrollBarHandler(Main.itemCount);
					document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText';
					this.level2Selected -= 4;
					document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText selected';
					
					if(this.isDescriptionShown) {
						//this.dispatchDescription();
					}
				}
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			}
			break;
		case Main.DOWN :
			
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected < this.level0Count-1){	
					this.resetGridViewItems();
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected++;
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
					}
					this.APICall(this.level0Selected, this.level2Selected, false);
				}
			}
			else {
				if(this.level2Selected + 4 < Main.itemCount) {
					Display.scrollItemPage(Main.DOWN, this.level2Selected);
					this.scrollBarHandler(Main.itemCount);
					document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText';
					this.level2Selected += 4;
					document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText selected';
					
					if(this.isDescriptionShown) {
						//this.dispatchDescription();
					}
				}
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			}
			break;
		case Main.ENTER :
			if(this.level0Selected==0){
			
				Server.dataReceivedCallback = function()
				{	
					console.log("level2");
					//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
					//Main.itemCount = Data.getFeatureIDList().length;
					console.log("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
					//Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList());
					Display.hideStatus();
					Main.removeEmptyViewItems();
					document.getElementById("screen_wrapper").style.visibility = 'hidden';
					
					var tmpArr = Data.getCurrentEpisodeDetails();
					Player.init(tmpArr['VideoUrl'], tmpArr['is3D']);
					
					//Player.setFullscreen();
					//Player.setVideoURL(tmpArr['VideoUrl']);
					Player.playVideo();
					window.NetCastMouseOff(3);
					Display.timeMsg
				}
				Main.isVideoMode = true;
				Server.url="http://api.majitv.com/api/getEpisode.ashx?media=hd&hq=true&eid=" + (Data.getFeatureIDList()[this.level2Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 	
				//document.getElementById("screen_wrapper").style.visibility = 'hidden'; 
				Display.showStatus(Display.POPUP_TEXT_LOADING);
				//this.level++;
			}
			else if(this.level0Selected == 2) {
				Server.dataReceivedCallback = function()
				{
					//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
					//Main.itemCount = Data.getFeatureIDList().length;
					//alert("itemCount: " + Main.itemCount + " getEpisodeTitleList: " + Data.getEpisodeTitleList().length);
					Main.itemCount = Data.getEpisodeTitleList().length;
					//Main.scrollBarHandler(Main.itemCount);
					//Main.setPageTitle(Data.getChannelTitleList()[Main.level1Selected]  + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getProgrammeTitleList()[Main.level2Selected] + "&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;" + Data.getEpisodeTitleList()[0]);
					
					
					//alert('scrollPageScript: ' + Main.scrollPageScript);
					
					Display.setGridList( Data.getEpisodeTitleList(), Data.getEpisodeImgURLList());
					Main.scrollBarHandler(Main.itemCount);
					Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
					
					
					Main.level3Selected = 0;
					document.getElementById('gridViewItem0').className='gridViewItem selected';
					document.getElementById('gridViewItemText0').className='gridViewText selected';
				}
				//alert("levellllllllllllllll 2: " + this.level2Selected);
				Server.url="http://api.majitv.com/api/getEpisodes.ashx?hq=true&pid=" + (Data.getProgrammeIDList()[this.level2Selected]);
				Server.parseType="EpisodeList";
				Server.fetchJSON(); // Request video information from server 	
				
				
				//this.setPageTitle(Data.PAGE_TITLE_EPISODES);
				
				this.hideDescription();
				document.getElementById('gridViewItem'+this.level2Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level2Selected).className='gridViewText';
				//this.level2Selected = 0;
				this.level3Selected = 0;
				document.getElementById('gridViewItem0').className='gridViewItem selected';
				document.getElementById('gridViewItemText0').className='gridViewText selected';
				this.switchMenuBar(Main.NAVI_EPISODE);
				this.level++;
				this.removeEmptyViewItems();
			}
			
			break;
			case Main.BLUE :
				if(this.level0Selected==2&& Main.pageSection != Main.LEFT_SECTION) {
					Server.dataReceivedCallback = function()
					{
						//alert("currentEpisodeDetails"+Data.currentEpisodeDetails['Notes']);
						Main.showNotePage();
						
					}
					Server.url="http://api.majitv.com/api/getEpisode.ashx?hq=true&media=hd&eid=" + (Data.getEpisodeIDList()[this.level3Selected]);
					Server.parseType="SingleEpisode";
					Server.fetchJSON(); // Request video information from server
					//this.switchMenuBar(Main.NAVI_COLLECTION2);
					//alert("MAJI行");
					//if()
					//this.switchMenuBar(Main.NAVI_COLLECTION2);
					if(this.containNote){
						this.switchMenuBar(Main.NAVI_COLLECTION2);
						console.log("contain");
					}else{
						this.switchMenuBar(Main.NAVI_COLLECTION2_NO_INFO);
						console.log("Not contain");
					}
				}	
				break;
	}
}

Main.Level3Move = function(move)
{
	//alert("Level 3 move");
//alert("move: " + move);
	switch(move)
	{
	/*
		case Main.LEFT :
			document.getElementById("gridView_wrapper").style.opacity = '0.0';
			document.getElementById("listView_wrapper").style.opacity = '0.0';
			document.getElementById("searchView_wrapper").style.opacity = '0.0';
			this.level--;
			break;
	*/
		case Main.RIGHT :
			if(this.level3Selected < Main.itemCount - 1) {
			
				Display.scrollItemPage(Main.RIGHT, this.level3Selected);
				this.scrollBarHandler(Main.itemCount);
				document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText';
				this.level3Selected++;
				this.mouseSelected = this.level3Selected;
				document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText selected';
				
				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
			}
			Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			break;
			
		case Main.LEFT :
			
			if(this.level3Selected > 0) {
						
				document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem';
				document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText';
				this.level3Selected--;
				this.mouseSelected = this.level3Selected;
				document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem selected';
				document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText selected';
				
				if(this.isDescriptionShown) {
					this.dispatchDescription();
				}
			}
			Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			break;
		case Main.UP :
			
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected > 0){
					this.previousSelected = 0;
					this.level1Selected = 0;
					this.level2Selected = 0;
					this.level3Selected = 0;
					this.resetGridViewItems();
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected--;
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
					}
					this.APICall(this.level0Selected, this.level3Selected, false);
				}	
			}
			else {
				if(this.level3Selected >= 4) {

					Display.scrollItemPage(Main.UP, this.level3Selected);
					this.scrollBarHandler(Main.itemCount);
				
					document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem';
					document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText';
					this.level3Selected -= 4;
					this.mouseSelected = this.level3Selected;
					document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText selected';
					
					if(this.isDescriptionShown) {
						this.dispatchDescription();
					}
				}
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			}
			break;
		case Main.DOWN :
			
			if(this.pageSection == Main.LEFT_SECTION) {
				if(this.level0Selected < this.level0Count-1){	
					this.previousSelected = 0;
					this.level1Selected = 0;
					this.level2Selected = 0;
					this.level3Selected = 0;
					this.resetGridViewItems();
					if(this.level0Selected%2==1)
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav alt';
					else
						document.getElementById('mainNavItem'+this.level0Selected).className='mainNav';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText';
					this.level0Selected++;
					document.getElementById('mainNavItem'+this.level0Selected).className='mainNav selected';
					document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
					if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "false") {
						document.getElementById('pageInfo_text').innerHTML = Data.TEXT_NO_ITEMS;
					}
					else {
						document.getElementById('pageInfo_text').innerHTML = "";
						document.getElementById('pageInfo_text2').innerHTML = "";
					}
					this.APICall(this.level0Selected, this.level3Selected, false);
					this.switchMenuBar(Main.NAVI_LEFTSECTION);
				}
			}
			else {
				
				if(this.level3Selected + 4 < Main.itemCount) {
					
					Display.scrollItemPage(Main.DOWN, this.level3Selected);
					//this.scrollBarHandler(Main.itemCount);
					//alert("level3Move");
					document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem';
					document.getElementById('gridViewItemHighlight'+this.level3Selected).className='gridViewItemHighlight';
					document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText';
					this.level3Selected += 4;
					this.mouseSelected = this.level3Selected;
					console.log(" Level3Selected: "+this.level3Selected);
					document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemHighlight'+this.level3Selected).className='gridViewItemHighlight selected';
					document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText selected';
	
					
					if(this.isDescriptionShown) {
						this.dispatchDescription();
					}
				}
				
				else if(this.level3Selected  < Main.itemCount - Main.itemCount%4){
					console.log(" Inside???");
					Display.scrollItemPage(Main.DOWN, this.level3Selected);
//					document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem';
//					document.getElementById('gridViewItemHighlight'+this.level3Selected).className='gridViewItemHighlight';
//					document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText';
					var Count = Main.itemCount -1;
					console.log(" Main.Count: "+Count);
					this.level3Selected =  Count;
					document.getElementById('gridViewItem'+this.level3Selected).className='gridViewItem selected';
					document.getElementById('gridViewItemHighlight'+this.level3Selected).className='gridViewItemHighlight selected';
					document.getElementById('gridViewItemText'+this.level3Selected).className='gridViewText selected';
				}
				
				Main.dispatchTitleBarTitle(Main.dispatchNaviBarIndex());
			}
			break;
		
		case Main.GREEN :
			
			if(this.level0Selected==2) {
				Server.dataReceivedCallback = function()
				{
					Display.showStatus('這部影片已被添加到"我的資訊"');
				}
				Server.url='http://api.majitv.com/api/member_tv/addMyCollection.ashx?group=0&id=' + (Data.getEpisodeIDList())[this.level3Selected] + "&usr=" + this.username +"&pwd=" + this.pwd;
				Server.parseType="AddMyCollection";
				Server.fetchJSON(); // Request video information from server 	
			}	

			break;
			
		case Main.YELLOW :
			if(this.level0Selected==2) {
				Server.dataReceivedCallback = function()
				{	
					console.log("Add Bookmark callback");
					Display.showStatus('這部影片已被添加到"我的影片"');
				}
				Server.url='http://api.majitv.com/api/member_tv/addMyVideo.ashx?id=' + (Data.getEpisodeIDList())[this.level3Selected] + "&usr=" + this.username +"&pwd=" + this.pwd;
				Server.parseType="AddMyBookmarks";
				Server.fetchJSON(); // Request video information from server
				console.log("Add Bookmark");
			}	
			break;			
		case Main.ENTER :
			if(this.level0Selected==0){
			
				Server.dataReceivedCallback = function()
				{
					//alert("Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList())");
					//Main.itemCount = Data.getFeatureIDList().length;
					//alert("itemCount: " + Main.itemCount + " featureList: " + Data.getFeatureIDList().length);
					//Display.setGridList( Data.getFeatureTitleList(), Data.getFeatureImgURLList());
					console.log("level0Selected==3");
					Display.hideStatus();
					Main.removeEmptyViewItems();
					document.getElementById("screen_wrapper").style.visibility = 'hidden';
					var tmpArr = Data.getCurrentEpisodeDetails();
					Player.init(tmpArr['VideoUrl'], tmpArr['is3D']);
					
					//Player.setFullscreen();
					//Player.setVideoURL(tmpArr['VideoUrl']);
					Player.playVideo();
					window.NetCastMouseOff(3);
					Display.timeMsg
					
				}
				Main.isVideoMode = true;
				Server.url="http://api.majitv.com/api/getEpisode.ashx?media=hd&eid=" + (Data.getFeatureIDList()[this.level3Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 	
				Display.showStatus(Display.POPUP_TEXT_LOADING);
				//this.level++;
			}
			else if(this.level0Selected == 2) {
			

				Server.dataReceivedCallback = function()
				{
					
					console.log("level0Selected == 2");
					Main.removeEmptyViewItems();
					document.getElementById("screen_wrapper").style.visibility = 'hidden';
					Display.hideStatus();
					var tmpArr = Data.getCurrentEpisodeDetails();
					Player.init(tmpArr['VideoUrl'], tmpArr['is3D']);
					//Player.setFullscreen();
					//Player.setVideoURL(tmpArr['VideoUrl']);
					Player.playVideo();
					window.NetCastMouseOff(3);
					Display.timeMsg

				}
				console.log("searching bug");
				this.isVideoMode = true;
				console.log("searching bug2");
				Server.url="http://api.majitv.com/api/getEpisode.ashx?media=hd&eid=" + (Data.getEpisodeIDList()[this.level3Selected]);
				Server.parseType="SingleEpisode";
				Server.fetchJSON(); // Request video information from server 
				console.log("searching bug3");
				Display.showStatus(Display.POPUP_TEXT_LOADING);
				console.log("searching bug end");
			}
			
			break;
	}
}

/*
Main.scrollItemPage = function(direction, currentItemIndex) {
	var selectedRow = Math.floor(currentItemIndex / 4);
    
    var gridViewArray = document.getElementsByName('gridViewItem');
    var htmlScript = "";
    document.getElementById('gridView_wrapper').innerHTML = Main.scrollPageScript;
    
    if(gridViewArray.length > 0 && gridViewArray.length < this.scrollPageEndIndex) {
        this.scrollPageEndIndex = gridViewArray.length - 1;
    }
    
	if(direction == Main.UP) {
		
		if(this.scrollPageStartIndex >= 4 && currentItemIndex - 4 < this.scrollPageStartIndex) {
			this.scrollPageStartIndex -= 4;
			this.scrollPageEndIndex -= 4;
		}
		
	}
	else if(direction == Main.DOWN) { 
		
		if(currentItemIndex + 4 >= this.scrollPageEndIndex) {
			this.scrollPageStartIndex += 4;
			this.scrollPageEndIndex += 4;
		}

	}
	else if(direction == Main.RIGHT) {
		
		if(currentItemIndex + 1 >= 8 && (currentItemIndex + 1) % 4 == 0) {
			this.scrollPageStartIndex += 4;
			this.scrollPageEndIndex += 4;
		}
		

	}
    
    var gridCount = 0;
    var gridViewItem = null;
    for(var i = this.scrollPageStartIndex; i < this.scrollPageEndIndex; i++) {
        //alert('i: ' + i);
        if(i == this.scrollPageStartIndex || i%4 == 0) {
            htmlScript += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem" style="margin-left:0px;">';
        }
        else {
            htmlScript += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem">\n';
        }
        gridViewItem = gridViewArray[i];
        htmlScript += gridViewItem.innerHTML;
        htmlScript += '</div>\n';
        gridCount++;
    }
        
    htmlScript += '<div id="gridViewUpBtn" class="gridViewUpBtn"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';		
    document.getElementById('gridView_wrapper').innerHTML = htmlScript;
    
    
}
*/
function mousehideNotePage(){
	if(Main.isshowNotePage){
		Main.hideNotePage();
	}
	else if(Main.isCommentShown){
		
		Main.hideCommentPage();
	}
	else if(Main.isDescriptionShown){
		Main.hideDescription();
		
	}
	Main.switchMenuBar(Main.dispatchNaviBarIndex());
}
Main.hideNotePage = function() {
	document.getElementById("collection_wrapper").style.visibility = "hidden";
	//this.scrollingYOffset = 50;
	//this.scrollingTitleYOffset = 10;
	this.isshowNotePage = false;
	this.scrollingTotalHeight = 0;
	
	this.scrollingYOffset = 0;
	this.scrollingTitleYOffset = 0;
	this.scrollingTotalYOffset = 0;
}
Main.showNotePage = function() {
	console.log(" showNotePage");
	this.scrollingYOffset = 0;
	this.scrollingTitleYOffset = 0;
	this.scrollingTotalYOffset = 0;
	console.log(" showNotePage 2");

	document.getElementById("collection_wrapper").style.visibility = "visible";
	//document.getElementById("comment_wrapper").focus();
	var notecontent;
	var notesScript;
	//var commentList = 
	notesScript = "<div id='collection_page'><div id=\"collection_title\" class=\"collection_title\" >觀看資訊</div>\n"
	console.log(" showNotePage 3");
	if(Data.currentEpisodeDetails['Notes'].length == 0) {
		notecontent = "沒有資訊";
		notesScript += "<div id=\"comment_item0\" class=\"comment_item empty\"><div id=\"comment_content0\" class=\"comment_content_text\">" + notecontent + "</div></div>";
		//document.getElementById("collection_wrapper").innerHTML = notesScript;
		this.containNote = false;

			//this.switchMenuBar(Main.NAVI_COLLECTION2_NO_INFO);
		
	}
	else {
			//notesScript  += "<div id=\"showNotePage\" class=\"note\">" + Data.currentEpisodeDetails['Notes'] + "</div>";
			//notesScript += Data.currentEpisodeDetails['Notes'];
			console.log("containNote"+window.name);
			this.containNote = true;
			
			
			notesScript += '<div id="showNotePage" style="text-align:center;top:0;height:auto;width:auto;margin-top:40px;">';
			var tmpHTML = Data.currentEpisodeDetails['Notes'].replace(/<p[^>]*>/g,"<br><br>");
			tmpHTML = tmpHTML.replace(/<\/p>/g,"");
			//tmpHTML = tmpHTML.replace(/height=\"270\"/g,"");
			notesScript += tmpHTML;
			notesScript += '</div></div>';
			
			
			//notesScript += '<div id="showNotePage"><br>&nbsp;<img src="http://api.majitv.com/assets/images/earth-day.jpg" width="70px" height="70px" alt="" /></br><br><strong><span style="font-size: medium; ">Love our World! Our Mother Planet!</span></strong></br></div>';
			
			//notesScript += '<br><img src="http://api.majitv.com/assets/images/tour.jpg" width="270" height="150" alt="" /></br><br><strong><span style="font-size: medium; ">Wanna go around the World!</span></strong></br><br><img src="http://api.majitv.com/assets/images/tour.jpg" width="270" height="150" alt="" /></br><br><strong><span style="font-size: medium; ">Wanna go around the World!</span></strong></br>';
			//notesScript += '<img src="http://api.majitv.com/assets/images/tour.jpg" width="270" height="150" alt="" /><img src="http://api.majitv.com/assets/images/tour.jpg" width="270" height="150" alt="" />';

			//notesScript += '<div id="collection_title" class="collection_title">觀看資訊</div><div id="showNotePage" class="note"><p>&nbsp;<img src="http://api.majitv.com/assets/images/earth-day.jpg" width="270" height="270" alt="" /></p></div><div><p><strong><span style="font-size: medium; ">Love our World! Our Mother Planet!</span></strong></p></div>';
			//alert('notesScript: '+notesScript);
	}
	document.getElementById("collection_wrapper").innerHTML = notesScript;
	this.isshowNotePage = true;
	
	if(this.containNote){
		this.switchMenuBar(Main.NAVI_COLLECTION2);
		console.log("contain");
	}else{
		this.switchMenuBar(Main.NAVI_COLLECTION2_NO_INFO);
		console.log("Not contain");
	}
	//document.getElementById("collection_page").style.top = "-20px";
	//document.getElementById("comment_wrapper").focus();
}

Main.scrollNotePage = function(direction) {
	
	if(Data.currentEpisodeDetails['Notes'].length == 0) {
		return;
	}
	//alert('script: ' + document.getElementById('collection_wrapper').innerHTML);
	//alert('collectionWrapper: ' + document.getElementById('collection_wrapper').offsetHeight + "page: " + document.getElementById('collection_page').offsetHeight);
	//alert("scroll offset: " + this.scrollingTotalYOffset + "total height: " + this.scrollingTotalHeight);
	//if(self.scrollingYOffset < document.getElementById('collection_page').offsetHeight) {
	//if(this.scrollingTotalHeight > 400) {
		if(direction == Main.UP) {
			if(this.scrollingTotalYOffset + 20 > 0) {
				return;
			}
			this.scrollingYOffset += 20;
			this.scrollingTitleYOffset += 20;
			this.scrollingTotalYOffset += 20;
		}
		else if(direction == Main.DOWN) {
		
			//alert("calulation: " + document.getElementById('showNotePage').offsetHeight + this.scrollingYOffset);
			if(parseInt(document.getElementById('showNotePage').offsetHeight) / 2 + this.scrollingYOffset < 0) {
				return;
			}
			
			this.scrollingYOffset -= 20;
			this.scrollingTitleYOffset -= 20;
			this.scrollingTotalYOffset -= 20;
		}
		
		//alert('alerttttttt: ' + this.scrollingYOffset);
		
	//}
	document.getElementById('collection_page').style.top = this.scrollingYOffset + 'px';
	
}
Main.dispatchLevelItemIndex = function(level) {
	if(level == 0) {
		this.currentLevelItemIndex = this.level0Selected;
	}
	else if(level == 1) {
		this.currentLevelItemIndex = this.level1Selected;
	}
	else if(level == 2) {
		this.currentLevelItemIndex =  this.level2Selected;
	}
	else if(level == 3) {
		this.currentLevelItemIndex = this.level3Selected;
	}
	else {
		this.currentLevelItemIndex = 4;
	}
	
	//alert("current index: " + this.currentLevelItemIndex + " level "  + this.level);
}

Main.setLevelItemIndex = function(level, itemSelected) {
	if(level == 0) {
		this.level0Selected = itemSelected;
	}
	else if(level == 1) {
		this.level1Selected = itemSelected;
	}
	else if(level == 2) {
		this.level2Selected = itemSelected;
	}
	else if(level == 3) {
		this.level3Selected = itemSelected
	}
	else {
		this.level4Selected = 4;
	}
	
	//alert("current index: " + currentLevelItemIndex);
}

Main.setPageTitle = function(title) {
	//widgetAPI.putInnerHTML(document.getElementById("gridViewTitleText"), title);
	//setInnerHtml(document.getElementById("gridViewTitleText"), title);
	document.getElementById("gridViewTitleText").innerHTML = title;
}

Main.resetMainPage = function() {
	this.level = 0;
	this.level0Selected = 0;
	this.level1Selected = 0;
	this.level2Selected = 0;
	this.level3Selected = 0;
}
Main.MainMouseOkKeyHandler = function()
{
	//console.log("OKOKOOK");
	if(this.pageSection == Main.RIGHT_SECTION) {
						if(this.level==0){
							this.Level1Move(Main.ENTER);
						}
						else if(this.level==1) {
							this.Level2Move(Main.ENTER);
						}
						else if(this.level==2) {
							this.Level3Move(Main.ENTER);
						}
					}
}
Main.mouseVideoYellowKey = function(){
	if(this.level == 1) {
				this.Level1Move(Main.YELLOW);
			}
		else if(this.level == 2) {
				this.Level3Move(Main.YELLOW);
			}
}
Main.quitApp = function(){
	console.log("Quit");
	
	Display.showStatus('quit App');
	window.NetCastBack();
	
}
Main.quitVideo = function(){
		//Display.showStatus('quitVideo');
		Main.showScreen();
		Player.stopVideo();
		Player.deinit();
		console.log("Player.getState() After :"+Player.getState());
		for(var i = 0; i < 6; i++) {
				document.getElementById('mainNavItem' + i).className='mainNav';
			}
		Main.switchMenuBar(Main.dispatchNaviBarIndex()); 
		Display.showMenubar();
		Main.isVideoMode = false;
		

}
Main.MainKeyHandler = function(event)
{	
	var keyCode = event.keyCode;
	//alert("status message: " + Display.getStatusMessage()+" keycode: "+keyCode);

	if(Display.isStatusShown) {
		Display.hideStatus();
		if((this.level0Selected == 3 || this.level0Selected == 4) && window.name == "true") {
			Main.APICall(this.level0Selected, 0, false);
		}
		else if(Display.getStatusMessage() == "登出成功。") {
			Main.APICall(this.level0Selected, 0, false);
		}
		else if(keyCode == VK_BACK) {
		}
		return;
		
	}


	//if(this.pageID == Main.SCENE_MAIN) {
	
		if(this.isVideoMode) {
			switch(keyCode)
			{
				case VK_STOP :
					document.getElementById("screen_wrapper").style.visibility = 'visible'; 
					Player.stopVideo();
					this.isVideoMode = false;
					break;
				case VK_PLAY :
					if(Player.getState() == Player.PAUSED) {
						Player.resumeVideo();
					}				
					break;
				case VK_BACK :
					//widgetAPI.blockNavigation(event);
					this.showScreen();
					//document.getElementById("screen_wrapper").style.visibility = 'visible'; 
//					if(Player.getState() != Player.STOPPED) {
//						console.log("Player.getState() :"+Player.getState());
						Player.stopVideo();
						Player.deinit();
						console.log("Player.getState() After :"+Player.getState());
						for(var i = 0; i < 6; i++) {
							document.getElementById('mainNavItem' + i).className='mainNav';
						}
//					}
						
						/*
					if(this.level0Selected == 0){
						this.APICall(this.level0Selected, this.level1Selected, false);
					}else if(this.level0Selected == 2 && this.level == 2){
						console.log(" HI");
						this.APICall(this.level0Selected, this.level2Selected, false);
					}else if(this.level0Selected == 4){
						this.APICall(this.level0Selected, this.level1Selected, false);

					}
					*/
					
					this.switchMenuBar(this.dispatchNaviBarIndex()); 
					Display.showMenubar();
					this.isVideoMode = false;
					
					
					break;
				case VK_PAUSE :
					Player.pauseVideo();
					
					break;

				case VK_FAST_FWD  :
					console.log("KEY_FF");
					Player.skipForwardVideo();
					Display.showMenubar();
					Display.timeMsg();
					break;
				case VK_REWIND :
					console.log("KEY_RW");
					Player.skipBackwardVideo();
					Display.showMenubar();
					Display.timeMsg();
					break;
				 case VK_YELLOW:
					if(this.level == 1) {
						this.Level1Move(Main.YELLOW);
					}
					else if(this.level == 2) {
						this.Level3Move(Main.YELLOW);
					}
					break;
				 case VK_UP :
						Display.showMenubar();
						Display.timeMsg();
						break;
					case VK_DOWN :
						Display.showMenubar();
						Display.timeMsg();
						break;
					case VK_LEFT :
						Display.showMenubar();
						Display.timeMsg();
						break;
					case VK_RIGHT :
						Display.showMenubar();
						Display.timeMsg();
						break;
					case VK_ENTER :
						Display.showMenubar();
						Display.timeMsg();
						
						break;
				default :				
					break;
			}
		}
		else if(this.isCommentShown) {
			switch(keyCode)
			{
				case VK_UP :
					this.scrollingHandler(Main.UP);
					break;
				case VK_DOWN :
					this.scrollingHandler(Main.DOWN);
					break;
				case VK_BACK:
					//widgetAPI.blockNavigation(event);
					
					this.switchMenuBar(this.dispatchNaviBarIndex()); 
					this.hideCommentPage();
					break;
				default :
					break;
			}
		}
		else if(this.isshowNotePage && this.isCommentShown == false) {
			switch(keyCode)
			{
				case VK_UP :
					
					this.scrollNotePage(Main.UP);
					break;
				case VK_DOWN :
					
					this.scrollNotePage(Main.DOWN);
					break;
				case VK_BACK:
					
					this.switchMenuBar(this.dispatchNaviBarIndex()); 
					this.hideNotePage();
					break;
				case VK_GREEN:
					
					if(this.containNote == true){
						if(this.level0Selected==0 && window.name == "true"){
							Server.dataReceivedCallback = function()
							{
								Display.showStatus('這部影片已被添加到"我的資訊"');(Data.getFeatureIDList()[this.level1Selected])
								Display.StatusTimer();
							}
							Server.url='http://api.majitv.com/api/member_tv/addMyCollection.ashx?group=0&id=' + (Data.getFeatureIDList()[this.level1Selected] + "&usr=" + this.username);
							Server.parseType="AddMyCollection";
							Server.fetchJSON(); // Request video information from server 
							console.log("add bookmark");
							
							}
						else if(this.level0Selected==2 && window.name == "true") {
							Server.dataReceivedCallback = function()
							{
								Display.showStatus('這部影片已被添加到"我的資訊"');
								Display.StatusTimer();
								
							}
							Server.url='http://api.majitv.com/api/member_tv/addMyCollection.ashx?group=0&id=' + (Data.getEpisodeIDList())[this.level3Selected] + "&usr=" + this.username;
							Server.parseType="AddMyCollection";
							Server.fetchJSON(); // Request video information from server 	
				}
			}
					break;
				default :
					break;
			}
		}
		else {
			switch(keyCode)
			{	
				case VK_LEFT :
					
					this.dispatchLevelItemIndex(this.level+1);
				
					if(this.currentLevelItemIndex % 4 == 0) {
						this.pageSection = Main.LEFT_SECTION;
						//this.currentItemIndex = this.currentLevelItemIndex;
						this.previousSelected = this.currentLevelItemIndex;
						//alert("currentLevelItemIndex: " + this.currentLevelItemIndex);
						document.getElementById('gridViewItem'+this.currentLevelItemIndex).className='gridViewItem';
						document.getElementById('gridViewItemText'+this.currentLevelItemIndex).className='gridViewText';
						document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected';
						
						Main.switchMenuBar(Main.NAVI_LEFTSECTION);
						if(Main.isDescriptionShown) {
							this.hideDescription();
						}
						break;
					}
					
					if(this.level==0){
						console.log(" Level1moveLEFT");
						this.Level1Move(Main.LEFT);
					}
					else if(this.level == 1) {
						console.log(" Level2moveLEFT");
						this.Level2Move(Main.LEFT);
					}
					else if(this.level == 2) {
						console.log(" Level3moveLEFT");
						this.Level3Move(Main.LEFT);
					}
					break;
				case VK_RIGHT :
					//alert("0 Right key level: " + this.level);
					console.log(" TRUE? " + window.name);
					
					console.log("level0 RIGHT?");
					this.dispatchLevelItemIndex(this.level+1);
					if(this.pageSection == Main.LEFT_SECTION) {
						if((this.level0Selected == 3 || this.level0Selected == 4) && Data.getCollectionIDList().length == 0) {
							return;
						}
						else if(this.level0Selected == 5){
							return;
						}
						else {
							//alert("1 Right key level: " + this.level);
							this.pageSection = Main.RIGHT_SECTION;
							this.currentLevelItemIndex = this.previousSelected;
							document.getElementById('gridViewItem'+this.currentLevelItemIndex).className='gridViewItem selected';
							document.getElementById('gridViewItemText'+this.currentLevelItemIndex).className='gridViewText selected';
							document.getElementById('mainNavItemText'+this.level0Selected).className='mainNavText selected_alt';
						}
						
						console.log("From Left to Right section");
						this.switchMenuBar(this.dispatchNaviBarIndex());
						break;
					}
					
				
					console.log("keypress on level: " + this.level);
					if(this.level==0){
						this.Level1Move(Main.RIGHT);
						//this.switchMenuBar(Main.NAVI_FEATURE);
					}
					else if(this.level == 1) {
						this.Level2Move(Main.RIGHT);
					}
					else if(this.level == 2) {
						this.Level3Move(Main.RIGHT);
					}
					break;
				case VK_UP :
					if(this.level==0){
						this.Level1Move(Main.UP);
					}
					else if(this.level==1){
						this.Level2Move(Main.UP);
					}
					else if(this.level==2){
						this.Level3Move(Main.UP);
					}
					
					break;
				case VK_DOWN :
					if(this.level==0){
						this.Level1Move(Main.DOWN);
					}
					else if(this.level==1){
						this.Level2Move(Main.DOWN);
					}
					else if(this.level==2){
						this.Level3Move(Main.DOWN);
					}
					
					break;
				case VK_ENTER :
					if(this.pageSection == Main.RIGHT_SECTION) {
						if(this.level==0){
							this.Level1Move(Main.ENTER);
						}
						else if(this.level==1) {
							this.Level2Move(Main.ENTER);
						}
						else if(this.level==2) {
							this.Level3Move(Main.ENTER);
						}
					}
					//alert("this.level Enter key: " + this.level + "section: " + this.pageSection);
					break;

				case VK_BACK :
					//widgetAPI.blockNavigation(event);
					//alert("RETURNNNN")
					if(this.pageSection == Main.LEFT_SECTION){
						console.log("level 0 left");
						//window.NetCastExit();
						window.NetCastBack();
					}
					else if(Main.isDescriptionShown) {
						this.hideDescription();
					}
					else if(this.level0Selected == 2) {
						if(this.level > 0) {
						
							
							
							this.resetGridViewItems();
							this.dispatchLevelItemIndex(this.level);
							this.channelReturnItemIndex = this.currentLevelItemIndex;
							
							this.level--;
							
							this.dispatchLevelItemIndex(this.level);
							this.APICall(this.level0Selected, this.currentLevelItemIndex, true);
							
							

						}
					}
					break;
					
				case VK_GREEN :
				/*
					if(this.level == 0) {
						this.Level1Move(Main.GREEN);
					}
					else if(this.level == 2) {
						this.Level3Move(Main.GREEN);
					}
				*/
					//alert("GREENNNNNNNNNNN")
					if(this.level0Selected !=1){
						if(!this.isDescriptionShown && !this.isCommentShown) {
							this.dispatchDescription();
						}
					else {
							this.hideDescription();
						}
					}
				

					break;
					
				 case VK_YELLOW:
				 /*
					if(this.level == 0) {
						this.Level1Move(Main.YELLOW);
					}
					else if(this.level == 2) {
						this.Level3Move(Main.YELLOW);
					}
				*/	
					if(this.level0Selected != 1 && !this.isDescriptionShown) {
						this.dispatchComments();
					}
					//this.showCommentPage();
				
					break;
					
				case VK_RED:
					logoutandin();
					break;
					
				
				case VK_BLUE:
					//this.dispatchComments();
					//this.showCommentPage();
					
					if(!this.isCommentShown &&!this.isDescriptionShown){
						if(this.level == 0) {
							this.Level1Move(Main.BLUE);
							}
						else if(this.level == 2) {
							this.Level2Move(Main.BLUE);
							}
					}
					break;
					
				default :
					
					break;
			}
		}
	//}
	
	/*
	else if(this.pageID == Main.SCENE_LOGIN) {
	alert("pageID == Main.SCENE_LOGIN");
		switch(keyCode)
		{
				case VK_LEFT :
					
					break;
				case VK_RIGHT :
			
					break;
				case VK_UP :
				
					
					break;
				case VK_DOWN :
				
					//document.getElementById('plainText').focus();
					break;
				case VK_ENTER :

					break;
				case VK_BACK :
					widgetAPI.blockNavigation(event);
					//window.location.href = 'index.html';
					window.location = 'index.html?'+window.location.search;
					break;
				default :
					break;
			
		}
	}
	*/
	function launchQMENU()
	{
		if(window.NetCastLaunchQMENU) {
		if(this.videoMode){
			window.NetCastLaunchQMENU(); 
		}
	}
}
}
