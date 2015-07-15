var Data =
{
    videoNames : [ ],
    videoURLs : [ ],
    videoDescriptions : [ ],
	coverURLs : [ ], 
	
	//Feature list
	featureIDList : [ ],
	featureTitleList : [ ],
	featureDescList : [ ], 
	featureImgURLList : [ ],
	featureIs3DList : [ ],
	
	//Channel list
	channelIDList : [ ],
	channelTitleList : [ ],
	channelDescList : [ ],
	channelImgURLList : [ ],
	
	//Programme list
	programmeIDList : [ ],
	programmeTitleList : [ ],
	programmeDescList : [ ],
	programmeImgURLList : [ ],
	
	//New List
	newsIDList : [ ],
	newsTitleList : [ ],
	newsDescList : [ ],
	newsImgURLList : [ ],
	
	//current episode
	currentEpisodeDetails : [ ],
	
	//Episode List
	episodeIDList : [ ],
	episodeTitleList : [ ],
	episodeDescList : [ ],
	episodeImgURLList : [ ],
	
	//Collection List
	collectionIDList : [ ],
	collectionEpIDList : [ ],
	collectionTitleList : [ ],
	collectionNoteList : [ ],
	collectionVideoURLList : [ ],
	collectionImgURLList : [ ],
	
	//Comment list
	commentUserList : [ ],
	commentUserIDList : [ ],
	commentDateList : [ ],
	commentContentList : [ ],
	
	//AboutUs
	aboutUsList : "",
	
	PAGE_TITLE_FEATURES : "影片推介",
	PAGE_TITLE_NEWS : "最新消息",
	PAGE_TITLE_CHANNELS : "瀏覽頻道",
	PAGE_TITLE_COLLECTIONS : "我的資訊",
	PAGE_TITLE_BOOKMARKS : "我的影片",
	PAGE_TITLE_ABOUTMAJI : "關於Maji",
	
	PAGE_TITLE_PROGRAMMES : "節目",
	PAGE_TITLE_EPISODES : "集數",
	PAGE_TITLE_CHANNELS2 : "頻道",
	
	TEXT_NO_ITEMS : "沒有任何項目",
	TEXT_NO_ITEMS2 : "請先登入查看「我的資訊」 ",
	TEXT_NO_ITEMS3 : "請先登入查看「我的影片」 ",
	
	isLogin : false
}


//unload
Data.unloadCollectionSet = function() {
	this.collectionIDList = null;
	this.collectionEpIDList = null;
	this.collectionTitleList = null;
	this.collectionNoteList = null;
	this.collectionVideoURLList = null;
	this.collectionImgURLList = null;
}

//Comment setter
Data.setCommentUserList = function(list) {
	this.commentUserList = list;
}

Data.setCommentUserIDList = function(list) {
	this.commentUserIDList = list;
}

Data.setCommentDateList = function(list) {
	this.commentDateList = list;
}

Data.setCommentContentList = function(list) {
	this.commentContentList = list;
}

//Comment getter
Data.getCommentUserList = function() {
	return this.commentUserList;
}

Data.getCommentUserIDList = function() {
	return this.commentUserIDList;
}

Data.getCommentDateList = function() {
	return this.commentDateList;
}

Data.getCommentContentList = function() {
	return this.commentContentList;
}
Data.setAboutList = function(list) {
	this.aboutUsList = list;
}

Data.getAboutList = function() {
	return this.aboutUsList;
}

//Collection List setter
Data.setCollectionIDList = function(list) {
	this.collectionIDList = list;
}


Data.setCollectionEpIDList = function(list) {
	this.collectionEpIDList = list;
}


Data.setCollectionTitleList = function(list) {
	this.collectionTitleList = list;
}


Data.setCollectionNoteList = function(list) {
	this.collectionNoteList = list;
}

Data.setCollectionVideoURLList = function(list) {
	this.collectionVideoURLList = list;
}


Data.setCollectionImgURLList = function(list) {
	this.collectionImgURLList = list;
}



//Collection List getter
Data.getCollectionIDList = function() {
	return this.collectionIDList;
}


Data.getCollectionEpIDList = function() {
	return this.collectionEpIDList;
}


Data.getCollectionTitleList = function() {
	return this.collectionTitleList;
}


Data.getCollectionNoteList = function() {
	return this.collectionNoteList;
}

Data.getCollectionVideoURLList = function() {
	return this.collectionVideoURLList;
}


Data.getCollectionImgURLList = function() {
	return this.collectionImgURLList;
}


//Episode List setter
Data.setEpisodeIDList = function(list) {
	this.episodeIDList = list;
}


Data.setEpisodeTitleList = function(list) {
	this.episodeTitleList = list;
}


Data.setEpisodeDescList = function(list) {
	this.episodeDescList = list;
}


Data.setEpisodeImgURLList = function(list) {
	this.episodeImgURLList = list;
}


//Episode List getter
Data.getEpisodeIDList = function() {
	return this.episodeIDList;
}

Data.getEpisodeTitleList = function() {
	return this.episodeTitleList;
}

Data.getEpisodeDescList = function() {
	return this.episodeDescList;
}

Data.getEpisodeImgURLList = function() {
	return this.episodeImgURLList;
}

//Episode setter
Data.setCurrentEpisodeDetails = function(list) {
	this.currentEpisodeDetails = list;
}

//Episode getter
Data.getCurrentEpisodeDetails = function() {
	return this.currentEpisodeDetails;
}

//News setter
Data.setNewsIDList = function(list) {
	this.newsIDList = list;
}


Data.setNewsTitleList = function(list) {
	this.newsTitleList = list;
}


Data.setNewsDescList = function(list) {
	this.newsDescList = list;
}


Data.setNewsImgURLList = function(list) {
	this.newsImgURLList = list;
}


//News getter
Data.getNewsIDList = function() {
	return this.newsIDList;
}

Data.getNewsTitleList = function() {
	return this.newsTitleList;
}

Data.getNewsDescList = function() {
	return this.newsDescList;
}

Data.getNewsImgURLList = function() {
	return this.newsImgURLList;
}

//Programme setter
Data.setProgrammeIDList = function(list) {
	this.programmeIDList = list;
}


Data.setProgrammeTitleList = function(list) {
	this.programmeTitleList = list;
}


Data.setProgrammeDescList = function(list) {
	this.programmeDescList = list;
}


Data.setProgrammeImgURLList = function(list) {
	this.programmeImgURLList = list;
}

//Programme getter
Data.getProgrammeIDList = function() {
	return this.programmeIDList;
}

Data.getProgrammeTitleList = function() {
	return this.programmeTitleList;
}

Data.getProgrammeDescList = function() {
	return this.programmeDescList;
}

Data.getProgrammeImgURLList = function() {
	return this.programmeImgURLList;
}


//Channel setter
Data.setChannelIDList = function(list) {
	this.channelIDList = list;
}


Data.setChannelTitleList = function(list) {
	this.channelTitleList = list;
}


Data.setChannelDescList = function(list) {
	this.channelDescList = list;
}


Data.setChannelImgURLList = function(list) {
	this.channelImgURLList = list;
}

//Channel getter
Data.getChannelIDList = function() {
	return this.channelIDList;
}

Data.getChannelTitleList = function() {
	return this.channelTitleList;
}

Data.getChannelDescList = function() {
	return this.channelDescList;
}

Data.getChannelImgURLList = function() {
	return this.channelImgURLList;
}

//Feature setter
Data.setFeatureIDList = function(list) {
	this.featureIDList = list;
}


Data.setFeatureTitleList = function(list) {
	this.featureTitleList = list;
}


Data.setFeatureDescList = function(list) {
	this.featureDescList = list;
}


Data.setFeatureImgURLList = function(list) {
	this.featureImgURLList = list;
}


//Feature getter
Data.getFeatureIDList = function() {
	return this.featureIDList;
}

Data.getFeatureTitleList = function() {
	return this.featureTitleList;
}

Data.getFeatureDescList = function() {
	return this.featureDescList;
}

Data.getFeatureImgURLList = function() {
	return this.featureImgURLList;
}

Data.setVideoNames = function(list)
{
    this.videoNames = list;
}

Data.setVideoURLs = function(list)
{
    this.videoURLs = list;
}

Data.setVideoDescriptions = function(list)
{
    this.videoDescriptions = list;
}

Data.setCoverURLs = function(list)
{
    this.coverURLs = list;
}

Data.getVideoURL = function(index)
{
    var url = this.videoURLs[index];
    
    if (url)    // Check for undefined entry (outside of valid array)
    {
        return url;
    }
    else
    {
        return null;
    }
}

Data.getCoverURL = function(index)
{
    var url = this.coverURLs[index];
    
    if (url)    // Check for undefined entry (outside of valid array)
    {
        return url;
    }
    else
    {
        return null;
    }
}

Data.getVideoCount = function()
{
    return this.videoURLs.length;
}

Data.getVideoNames = function()
{
    return this.videoNames;
}

Data.getVideoDescription = function(index)
{
    var description = this.videoDescriptions[index];
    
    if (description)    // Check for undefined entry (outside of valid array)
    {
        return description;
    }
    else
    {
        return "No description";
    }
}
