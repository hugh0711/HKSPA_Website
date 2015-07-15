var Server =
{
    /* Callback function to be set by client */
    dataReceivedCallback : null,
    XHRObj : null,
	url : null,
	parseType : null
}

Server.init = function()
{			
    var success = true;

    if (this.XHRObj)
    {
        this.XHRObj.destroy();  // Save memory
        this.XHRObj = null;
    }
    
    return success;
}

Server.fetchJSON = function()
{
    if (this.XHRObj == null)
    {
        this.XHRObj = new XMLHttpRequest();
    }
    
    if (this.XHRObj)
    {
        this.XHRObj.onreadystatechange = function()
            {
                if (Server.XHRObj.readyState == 4)
                {
                	console.log("status: " + Server.XHRObj.status + "Server.parseType: " + Server.parseType);
				    if (Server.XHRObj.status != (200))
					{
						//Display.status("XML Server Error " + Server.XHRObj.status);
						Display.showStatus("XML Server Error " + Server.XHRObj.status);
					}
					else
					{
						//console.log("cookie" + document.cookie);
						//alert(Server.XHRObj.responseText);
						var xmlElement = JSON.parse( Server.XHRObj.responseText );
						if(Server.parseType=="PlayerList")
							Server.createPlayerList(xmlElement);
						else if(Server.parseType=="NewReleaseList")
							Server.createNewReleaseList(xmlElement);
						else if(Server.parseType=="PlaylistList")
							Server.createPlaylistList(xmlElement);
						else if(Server.parseType=="FeatureList") {
							Server.createFeatureList(xmlElement);
						}
						else if(Server.parseType=="ChannelList") {
							Server.createChannelList(xmlElement);
						}
						else if(Server.parseType=="ProgrammeList") {
							Server.createProgrammelList(xmlElement);
						}
						else if(Server.parseType=="NewsList") {
							Server.createNewslList(xmlElement);
						}
						else if(Server.parseType=="SingleEpisode") {
							Server.createCurrentEpisode(xmlElement);
						}
						else if(Server.parseType=="EpisodeList") {
							Server.createEpisodeList(xmlElement);
						}
						else if(Server.parseType=="MyCollectionList") {
							
							Server.createMyCollectionList(xmlElement);
							console.log("xmlElement2"+xmlElement);
						}
						else if(Server.parseType=="MyBookmarkds") {
							Server.createMyCollectionList(xmlElement);
						}
						else if(Server.parseType=="Login") {
							Server.handleLogin(xmlElement);
						}
						else if(Server.parseType=="Logout") {
							Server.handleLogout(xmlElement);
						}
						else if(Server.parseType=="AddMyCollection") {
							Server.addMyCollection(xmlElement);
						}
						else if(Server.parseType=="AddMyBookmarks") {
							Server.addMyBookmark(xmlElement);
						}
						else if(Server.parseType=="RemoveMyCollection") {
							Server.removeMyCollection(xmlElement);
						}
						else if(Server.parseType=="RemoveMyBookmarks") {
							Server.removeMyBookmark(xmlElement);
						}
						else if(Server.parseType=="GetComments") {
							Server.fetchComments(xmlElement);
						}
						else if(Server.parseType=="GetAbout") {
							Server.fetchAbout(xmlElement);
						}
					}
				}
            }
        this.XHRObj.open("GET", this.url, true);
		this.XHRObj.setRequestHeader('Origin', 'api.majitv.com');
		this.XHRObj.send(null);
     }
    else
    {
       // alert("Failed to create XHR");
    }
}


Server.handleLogin = function(xmlElement)
{
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}
}

Server.handleLogout = function(xmlElement)
{
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}
}

Server.removeMyCollection = function(xmlElement)
{
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}
}

Server.removeMyBookmark = function(xmlElement)
{
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}
}

Server.addMyCollection = function(xmlElement)
{
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}
}

Server.addMyBookmark = function(xmlElement)
{
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}
}

Server.fetchComments = function(xmlElement)
{
	var commentUserList = [ ];
	var commentUserIDList = [ ];
	var commentDateList = [ ];
	var commentContentList = [ ];

	

	for(var i = 0; i < xmlElement.length; i++) {
		
		commentUserList[i] = xmlElement[i]["Name"]? xmlElement[i]["Name"].toString() : "";
		commentUserIDList[i] = xmlElement[i]["UserID"]? xmlElement[i]["UserID"].toString() : "";
		commentDateList[i] = xmlElement[i]["CommentDate"]? xmlElement[i]["CommentDate"].toString() : "";
		commentContentList[i] = xmlElement[i]["Comment"]? xmlElement[i]["Comment"].toString() : "";
		//commentContentList[i] = xmlElement[i]["Comment"]? xmlElement[i]["Comment"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
		
	}


/*
	for(var i = 0; i < this.testingComments.length; i++) {
		commentUserList[i] = "Ken Wong";
		commentUserIDList[i] = "Ken Wong";
		commentDateList[i] = "12-12-12";
		commentContentList[i] = this.testingComments[i].replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "");
	}
*/

	Data.setCommentUserList(commentUserList);
	Data.setCommentUserIDList(commentUserIDList);
	Data.setCommentDateList(commentDateList);
	Data.setCommentContentList(commentContentList);	

	
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}	
}
Server.fetchAbout = function(xmlElement)
{
	var About = "";
	//console.log(About);
	About =  xmlElement["Content"]? xmlElement["Content"].toString().replace(/<[^>]+>/ig,"")+"": "";
	//alert(About);
	Data.setAboutList(About);

		

	
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}	
}
Server.createEpisodeList = function(xmlElement)
{
	var episodeIDList = [ ];
	var episodeTitleList = [ ];
	var episodeDescList = [ ];
	var episodeImgURLList = [ ];
	
	for(var i = 0; i < xmlElement.length; i++) {
		
		episodeIDList[i] = xmlElement[i]["ID"]? xmlElement[i]["ID"].toString() : "";
		episodeTitleList[i] = xmlElement[i]["Title"]? xmlElement[i]["Title"].toString() : "";
		//episodeDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
		episodeDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString() : "";
		episodeImgURLList[i] = xmlElement[i]["ImageUrl"]? xmlElement[i]["ImageUrl"].toString() : "";
		
		//alert("newsImgURLList:" + newsImgURLList[i]);
	}

	Data.setEpisodeIDList(episodeIDList);
	Data.setEpisodeTitleList(episodeTitleList);
	Data.setEpisodeDescList(episodeDescList);
	Data.setEpisodeImgURLList(episodeImgURLList);	

	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}	
}

Server.createMyCollectionList = function(xmlElement)
{
	
	var collectionIDList = [ ];
	var collectionEpIDList = [ ];
	var collectionTitleList = [ ];
	var collectionNoteList = [ ];
	var collectionVideoURLList = [ ];
	var collectionImgURLList = [ ];
	

	for(var i = 0; i < xmlElement.length; i++) {
		console.log("What am i doing");
		collectionIDList[i] = xmlElement[i]["ID"]? xmlElement[i]["ID"].toString() : "";
		collectionEpIDList[i] = xmlElement[i]["EpisodeID"]? xmlElement[i]["EpisodeID"].toString() : "";
		collectionTitleList[i] = xmlElement[i]["EpisodeName"]? xmlElement[i]["EpisodeName"].toString() : "";
		collectionNoteList[i] = xmlElement[i]["Notes"]? xmlElement[i]["Notes"].toString() : "";
		collectionVideoURLList[i] = xmlElement[i]["VideoUrl"]? xmlElement[i]["VideoUrl"].toString() : "";
		collectionImgURLList[i] = xmlElement[i]["PreviewUrl"]? xmlElement[i]["PreviewUrl"].toString() : "";
		console.log("What am i doing 2");
		
	}
	console.log("What am i doing 3");
	Data.setCollectionIDList(collectionIDList);
	Data.setCollectionEpIDList(collectionEpIDList);
	Data.setCollectionTitleList(collectionTitleList);
	Data.setCollectionNoteList(collectionNoteList);	
	Data.setCollectionVideoURLList(collectionVideoURLList);
	Data.setCollectionImgURLList(collectionImgURLList)
	console.log("What am i doing 4");
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    // Notify all data is received and stored 
	}	

/*
	var episodeIDList = [ ];
	var episodeTitleList = [ ];
	var episodeDescList = [ ];
	var episodeImgURLList = [ ];
	
	for(var i = 0; i < xmlElement.length; i++) {
		
		episodeIDList[i] = xmlElement[i]["ID"].toString();
		episodeTitleList[i] = xmlElement[i]["Title"].toString();
		episodeDescList[i] = xmlElement[i]["Description"].toString();
		episodeImgURLList[i] = xmlElement[i]["ImageUrl"].toString();
		
		//alert("newsImgURLList:" + newsImgURLList[i]);
	}

	Data.setEpisodeIDList(episodeIDList);
	Data.setEpisodeTitleList(episodeTitleList);
	Data.setEpisodeDescList(episodeDescList);
	Data.setEpisodeImgURLList(episodeImgURLList);	

	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    // Notify all data is received and stored 
	}	
*/
}

Server.createMyBookmarkList = function(xmlElement)
{

}

Server.createNewslList = function(xmlElement)
{

	//var items = xmlElement.length;
	//alert("item.length" + xmlElement.length);
	var newsIDList = [ ];
	var newsTitleList = [ ];
	var newsDescList = [ ];
	var newsImgURLList = [ ];
	
	for(var i = 0; i < xmlElement.length; i++) {
		
		var tmpDescription = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString() : "";
		newsIDList[i] = xmlElement[i]["ID"]? xmlElement[i]["ID"].toString() : "";
		newsTitleList[i] = xmlElement[i]["Title"]? xmlElement[i]["Title"].toString() : "";
		
		if(tmpDescription != "") {
			tmpDescription = tmpDescription.replace(/<p[^>]*>/g, "<br><br>");
			tmpDescription = tmpDescription.replace(/<\/p>/g, "");
			tmpDescription = tmpDescription.replace(/<\/span>/g, "");
			tmpDescription = tmpDescription.replace(/<span[^>]+>/g, "");
		}
		
		newsDescList[i] = tmpDescription;
		//newsDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
		newsImgURLList[i] = xmlElement[i]["ImageUrl"]? xmlElement[i]["ImageUrl"].toString() : "";
		
		//alert("newsImgURLList:" + newsImgURLList[i]);
	}

	Data.setNewsIDList(newsIDList);
	Data.setNewsTitleList(newsTitleList);
	Data.setNewsDescList(newsDescList);
	Data.setNewsImgURLList(newsImgURLList);	

	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}		
}

Server.createProgrammelList = function(xmlElement)
{

	//var items = xmlElement.length;
	//alert("item.length" + xmlElement.length);
	var programmeIDList = [ ];
	var programmeTitleList = [ ];
	var programmeDescList = [ ];
	var programmeImgURLList = [ ];
	
	for(var i = 0; i < xmlElement.length; i++) {
		
		programmeIDList[i] = xmlElement[i]["ID"]? xmlElement[i]["ID"].toString() : "";
		programmeTitleList[i] = xmlElement[i]["Title"]? xmlElement[i]["Title"].toString() : "";
		programmeDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString() : "";
		//programmeDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
		programmeImgURLList[i] = xmlElement[i]["ImageUrl"]? xmlElement[i]["ImageUrl"].toString() : "";
		
		//alert("programmeImgURLList:" + programmeImgURLList[i]);
	}


	Data.setProgrammeIDList(programmeIDList);
	Data.setProgrammeTitleList(programmeTitleList);
	Data.setProgrammeDescList(programmeDescList);
	Data.setProgrammeImgURLList(programmeImgURLList);	

	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}	
}

Server.createChannelList = function(xmlElement)
{

	//var items = xmlElement.length;
	//alert("item.length" + xmlElement.length);
	var channelIDList = [ ];
	var channelTitleList = [ ];
	var channelDescList = [ ];
	var channelImgURLList = [ ];
	
	for(var i = 0; i < xmlElement.length; i++) {
		
		channelIDList[i] = xmlElement[i]["ID"]? xmlElement[i]["ID"].toString() : "";
		channelTitleList[i] = xmlElement[i]["Title"]? xmlElement[i]["Title"].toString() : "";
		channelDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString() : "";
		//channelDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
		channelImgURLList[i] = xmlElement[i]["ImageUrl"]? xmlElement[i]["ImageUrl"].toString() : "";
		
		//alert("createChannelList:" + channelTitleList[i]);
	}

	Data.setChannelIDList(channelIDList);
	Data.setChannelTitleList(channelTitleList);
	Data.setChannelDescList(channelDescList);
	Data.setChannelImgURLList(channelImgURLList);	
	
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}	
}

Server.createCurrentEpisode = function(xmlElement)
{
	var currentEpisode = [ ];
			
	currentEpisode['ChannelTitle'] = xmlElement["ChannelTitle"]? xmlElement["ChannelTitle"].toString() : "";
	currentEpisode['ChannelID'] = xmlElement["ChannelID"]? xmlElement["ChannelID"].toString() : "";
	currentEpisode['ProgramTitle'] = xmlElement["ProgramTitle"]? xmlElement["ProgramTitle"].toString() : "";
	currentEpisode['ProgramID'] = xmlElement["ProgramID"]? xmlElement["ProgramID"].toString() : "";
	
	currentEpisode['EpisodeTitle'] = xmlElement["EpisodeTitle"]? xmlElement["EpisodeTitle"].toString() : "";
	currentEpisode['EpisodeID'] = xmlElement["EpisodeID"]? xmlElement["EpisodeID"].toString() : "";
	currentEpisode['Description'] = xmlElement["Description"]? xmlElement["Description"].toString() : "";
	//currentEpisode['Description'] = xmlElement["Description"]? xmlElement["Description"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
	currentEpisode['YouTubeID'] = xmlElement["YouTubeID"]? xmlElement["YouTubeID"].toString() : "";
	
	currentEpisode['FacebookID'] = xmlElement["FacebookID"]? xmlElement["FacebookID"].toString() : "";
	currentEpisode['VideoUrl'] = xmlElement["VideoUrl"]? xmlElement["VideoUrl"].toString() : "";
	currentEpisode['PreviewUrl'] = xmlElement["PreviewUrl"]? xmlElement["PreviewUrl"].toString() : "";
	currentEpisode['Notes'] = xmlElement["Notes"]? xmlElement["Notes"].toString() : "";
	
	currentEpisode['IsMyVideo'] = xmlElement["IsMyVideo"]? xmlElement["IsMyVideo"].toString() : "";
	currentEpisode['IsMyCollection'] = xmlElement["IsMyCollection"]? xmlElement["IsMyCollection"].toString() : "";
	currentEpisode['is3D'] = xmlElement["is3D"]? xmlElement["is3D"].toString() : "";
	
	Data.setCurrentEpisodeDetails(currentEpisode);
						
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}		
}

Server.createFeatureList = function(xmlElement)
{
	//alert("createChannelList");

	//var items = xmlElement.length;
	//alert("item.length" + xmlElement.length);
	var featureIDList = [ ];
	var featureTitleList = [ ];
	var featureDescList = [ ];
	var featureImgURLList = [ ];
	
	for(var i = 0; i < xmlElement.length; i++) {
		
		featureIDList[i] = xmlElement[i]["ID"]? xmlElement[i]["ID"].toString() : "";
		featureTitleList[i] = xmlElement[i]["Title"]? xmlElement[i]["Title"].toString() : "";
		featureDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString() : "";
		//featureDescList[i] = xmlElement[i]["Description"]? xmlElement[i]["Description"].toString().replace(/<\/?[\w\ !"#$%&'()*+,./:;=?@\^_`{|}~-]+>|&[\w\ ]+;/g, "") : "";
		featureImgURLList[i] = xmlElement[i]["ImageUrl"]? xmlElement[i]["ImageUrl"].toString() : "";
		
	}
	
	Data.setFeatureIDList(featureIDList);
	Data.setFeatureTitleList(featureTitleList);
	Data.setFeatureDescList(featureDescList);
	Data.setFeatureImgURLList(featureImgURLList);		
			
			
	if (this.dataReceivedCallback)
	{
		this.dataReceivedCallback();    /* Notify all data is received and stored */
	}		
			
        // Parse JSON
        // Get all "item" elements
        
 /*           
        var videoNames = [ ];
        var videoURLs = [ ];
        var videoDescriptions = [ ];
		
		var items;
		if(xmlElement["data"]["item_list"])
			items = xmlElement["data"]["item_list"];   
		else
			items = xmlElement["data"];  
        for (var index = 0; index < items.length; index++)
        {
			//token
			var key="+j1nXPMO9bYs7qEBBXas3w==";
			
			//timestamp
			var today = new Date();
			var strYear = today.getFullYear();
			var strMonth = today.getMonth() + 1;
			var strDay = today.getDate();
			var strHours = today.getHours();
			var strMinutes = today.getMinutes();
			var strSeconds = today.getSeconds();
			strMonth = (strMonth < 10)? "0" + strMonth : strMonth;
			strDay = (strDay < 10)? "0" + strDay : strDay;
			strHours = (strHours < 10)? "0" + strHours : strHours;
			strMinutes = (strMinutes < 10)? "0" + strMinutes : strMinutes;
			strSeconds = (strSeconds < 10)? "0" + strSeconds : strSeconds;
			var timestamp=""+strYear+strMonth+strDay+strHours+strMinutes+strSeconds;
			
			//id
			var id=items[index]["music_id"].toString();
			
			var text = id+"-"+timestamp;
			var keyBytes = decode64(key);
			var hmac = Crypto.HMAC(Crypto.SHA1, text, keyBytes);
			var text = hmac + "-" + text;
			var crypted = Crypto.AES.encrypt(text, keyBytes, { asBytes:true,iv:keyBytes, mode: new Crypto.mode.CBC(Crypto.pad.pkcs7) });
			var cryptedBase64 = encode64(crypted);
			
			alert(text);
			alert(cryptedBase64);
		
            var titleElement = items[index]["music_name_lang1"].toString();
            var descriptionElement = items[index]["music_name_lang1"].toString();
            var linkElement = items[index]["file_path"].toString();
            if (titleElement && descriptionElement && linkElement)
            {
                videoNames[index] = titleElement;
                videoURLs[index] = linkElement;
                videoDescriptions[index] = descriptionElement;
            }
        }
        
        Data.setVideoNames(videoNames);
        Data.setVideoURLs(videoURLs);
        Data.setVideoDescriptions(videoDescriptions);

        if (this.dataReceivedCallback)
        {
            this.dataReceivedCallback();    // Notify all data is received and stored 
        }
		*/
}

Server.createNewReleaseList = function(xmlElement)
{
        // Parse JSON
        // Get all "item" elements
        var items = xmlElement["data"];
            
        var videoNames = [ ];
        var videoURLs = [ ];
        var videoDescriptions = [ ];
        var coverURLs = [ ];
		
        for (var index = 0; index < items.length; index++)
        {
            var titleElement = items[index]["name_lang1"]? items[index]["name_lang1"].toString() : "";
            var descriptionElement = items[index]["name_lang1"]? items[index]["name_lang1"].toString() : "";
			var coverElement = items[index]["photo_src"]? items[index]["photo_src"].toString() : "";
            var linkElement = "http://web.apps.soliton.co/new_release.php?id="+items[index]["id"].toString();
            if (titleElement && descriptionElement && linkElement)
            {
                videoNames[index] = titleElement;
                videoURLs[index] = linkElement;
                videoDescriptions[index] = descriptionElement;
				if(coverElement)
					coverURLs[index] = coverElement;
            }
        }
        
        Data.setVideoNames(videoNames);
        Data.setVideoURLs(videoURLs);
		Data.setCoverURLs(coverURLs);
        Data.setVideoDescriptions(videoDescriptions);
        //document.getElementById("imgcover").src = xmlElement["data"]["photo_src"]+"&size=l";    
        if (this.dataReceivedCallback)
        {
            this.dataReceivedCallback();    /* Notify all data is received and stored */
        }
}

Server.createPlaylistList = function(xmlElement)
{
        // Parse JSON
        // Get all "item" elements
        var items = xmlElement["data"];
            
        var videoNames = [ ];
        var videoURLs = [ ];
        var videoDescriptions = [ ];
        var coverURLs = [ ];
		
        for (var index = 0; index < items.length; index++)
        {
            var titleElement = items[index]["playlist_name_lang1"]? items[index]["playlist_name_lang1"].toString() : "";
            var descriptionElement = items[index]["playlist_name_lang1"]? items[index]["playlist_name_lang1"].toString() : "";
			var coverElement = items[index]["cover_img"]? items[index]["cover_img"].toString() : "";
            var linkElement = "http://web.apps.soliton.co/music.php?type=playlist_id&id="+items[index]["playlist_id"].toString();
            if (titleElement && descriptionElement && linkElement)
            {
                videoNames[index] = titleElement;
                videoURLs[index] = linkElement;
                videoDescriptions[index] = descriptionElement;
				if(coverElement)
					coverURLs[index] = coverElement;
            }
        }
        
        Data.setVideoNames(videoNames);
        Data.setVideoURLs(videoURLs);
		Data.setCoverURLs(coverURLs);
        Data.setVideoDescriptions(videoDescriptions);
        //document.getElementById("imgcover").src = xmlElement["data"]["photo_src"]+"&size=l";    
        if (this.dataReceivedCallback)
        {
            this.dataReceivedCallback();    /* Notify all data is received and stored */
        }
}