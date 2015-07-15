var Display =
{
	videoList : new Array(),
	isStatusShown : false,
	
	TimerRunning :false,
	mouseTimerRunning:false,
	showingNameList: [ ],
	showingthumbNailList: [ ],
	POPUP_TEXT_LOADING : "載入中...",
	scrollPageStartIndex : 0,
    
    scrollPageStartIndex : 0,
    scrollPageEndIndex : 8,
    scrollPageScript : "",
    t : 0,
    mouseTimer:0
}


//Display.scrollItemPage = function(direction, currentItemIndex) {
//
//	var selectedRow = Math.floor(currentItemIndex / 4);
//    
//    var gridViewArray = document.getElementsByName('gridViewItem');
//    var htmlScript = "";
//    document.getElementById('gridView_wrapper').innerHTML = this.scrollPageScript;
//    
//    if(gridViewArray.length > 0 && gridViewArray.length < this.scrollPageEndIndex) {
//        this.scrollPageEndIndex = gridViewArray.length;
//    }
//    
//    
//	if(direction == Main.UP) {
//		
//		if(this.scrollPageStartIndex >= 4 && currentItemIndex - 4 < this.scrollPageStartIndex) {
//			this.scrollPageStartIndex -= 4;
//			this.scrollPageEndIndex -= 4;
//		}
//		
//	}
//	else if(direction == Main.DOWN) { 
//		if(currentItemIndex + 4 >= this.scrollPageEndIndex) {
//			this.scrollPageStartIndex += 4;
//			this.scrollPageEndIndex += 4;
//		}
//
//	}
//	else if(direction == Main.RIGHT) {
//		if(currentItemIndex + 1 >= this.scrollPageEndIndex) {
//			this.scrollPageStartIndex += 4;
//			this.scrollPageEndIndex += 4;
//		}
//		
//
//	}
//    
//    var gridCount = 0;
//    var gridViewItem = null;
//    for(var i = this.scrollPageStartIndex; i < this.scrollPageEndIndex; i++) {
//        //console.log('i: ' + i);
//        if(i == this.scrollPageStartIndex || i%4 == 0) {
//            htmlScript += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem" style="margin-left:0px;">';
//        }
//        else {
//            htmlScript += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem">\n';
//        }
//        gridViewItem = gridViewArray[i];
//        htmlScript += gridViewItem.innerHTML;
//        htmlScript += '</div>\n';
//        gridCount++;
//    }
//        
//    htmlScript += '<div id="gridViewUpBtn" class="gridViewUpBtn"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';		
//    document.getElementById('gridView_wrapper').innerHTML = htmlScript;
//    
//}
Display.scrollItemPage = function(direction, currentItemIndex) {

	document.getElementById('gridView_wrapper').innerHTML = this.scrollPageScript;
	var selectedRow = Math.floor(currentItemIndex / 4);
    var isLastPage = false;
    var gridViewArray = document.getElementsByName('gridViewItem');
    var htmlScript = "";
	var realIndex = 0;
	var gridItemCount = 0;
    
    gridItemCount = gridViewArray.length;
	//console.log("gridCount: " + gridCount +" gridViewArray.length: "+gridViewArray.length);
	
	
    if(gridViewArray.length > 0 && gridViewArray.length < this.scrollPageEndIndex) {
        this.scrollPageEndIndex = gridViewArray.length;
    }
		//console.log("START TESTTTTTTT");
		//console.log(gridViewArray.length);
		
    
	
	console.log('testing end index: ' + this.scrollPageEndIndex);
	if(direction == Main.UP) {
		realIndex = currentItemIndex - 4;
		if(this.scrollPageStartIndex >= 4 && currentItemIndex - 4 < this.scrollPageStartIndex) {
			var tmpItemCount = gridViewArray.length - (currentItemIndex + 4);
			
			console.log('UP tmpItemCount: ' + tmpItemCount);
			this.scrollPageStartIndex -= 4;
			if(this.scrollPageStartIndex + 8 <  gridViewArray.length) {
				this.scrollPageEndIndex = this.scrollPageStartIndex + 8;
				//console.log("1 this.scrollPageEndIndex: " + this.scrollPageEndIndex);
			}
			else {
				this.scrollPageEndIndex = this.scrollPageStartIndex + tmpItemCount;
				
			}

		}

	}
	else if(direction == Main.DOWN) { 
	console.log("DownNNNNNN");
	realIndex = currentItemIndex + 4;
	console.log("1 over: "+ currentItemIndex);
		if(currentItemIndex + 4 >= this.scrollPageEndIndex) {
		console.log("2 over: "+ currentItemIndex);
			var tmpItemCount = gridViewArray.length - (currentItemIndex + 4);
			tmpItemCount = tmpItemCount >= 0?tmpItemCount:gridViewArray.length%4;
			
			
				console.log("2.15 over: "+ currentItemIndex + "this.scrollPageEndIndex: " + this.scrollPageEndIndex + "tmpItemCount: " + tmpItemCount);
				if(currentItemIndex + 4 >= gridViewArray.length){
					console.log("3 over: "+ currentItemIndex + "this.scrollPageStartIndex: " + this.scrollPageStartIndex + "tmpItemCount: " + tmpItemCount);
					
					if(gridViewArray.length  - this.scrollPageStartIndex > 8){
						this.scrollPageStartIndex += 4;
						this.scrollPageEndIndex += (gridViewArray.length%4) + 1;
					}
					
					
				}else{

					this.scrollPageStartIndex += 4;
					this.scrollPageEndIndex += 4;
				}
				console.log("4 over: "+ currentItemIndex + "this.scrollPageEndIndex: " + this.scrollPageEndIndex + "tmpItemCount: " + tmpItemCount);

		}
		console.log("realIndex!!!! = "+realIndex+" gridItemCount!!!!!! = " + gridItemCount);

	}
	else if(direction == Main.RIGHT) {
	realIndex = currentItemIndex + 1;
		//if(currentItemIndex + 1 >= 8 && (currentItemIndex + 1) % 4 == 0) {
		if(currentItemIndex + 1 >= this.scrollPageEndIndex) {
			var tmpItemCount = gridViewArray.length - (currentItemIndex + 1);
			if(tmpItemCount >= 4) {
				this.scrollPageStartIndex += 4;
				this.scrollPageEndIndex += 4;
			}
			else {
				this.scrollPageStartIndex += 4;
				this.scrollPageEndIndex += (tmpItemCount + 1);
				isLastPage = true;
			}
		}
	}
    
    var gridCount = 0;
    var gridViewItem = null;
	console.log('end end end index: ' + this.scrollPageEndIndex);
    for(var i = this.scrollPageStartIndex; i < this.scrollPageEndIndex; i++) {
        //console.log('i: ' + i);
        if(gridViewArray[i] == null) {
        	break;
        }
        
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
	
	
	/*
	if(gridViewArray.length > 8){
		if(realIndex < 8 ){
			htmlScript += '<div id="gridViewUpBtn" class="gridViewUpBtn" style="visibility:hidden;"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn" style="visibility:visible;"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';

		}
		//else if(currentItemIndex + 4 >= gridViewArray.length -(gridViewArray.length%4+4)&& currentItemIndex + 4 < gridViewArray.length && currentItemIndex + 4 >= this.scrollPageEndIndex){
		else if(isLastPage) {
		//else if(currentItemIndex + 4 >= this.scrollPageStartIndex && currentItemIndex + 4 < this.scrollPageEndIndex) {
			htmlScript += '<div id="gridViewUpBtn" class="gridViewUpBtn" style="visibility:visible;"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn" style="visibility:hidden;"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';

		}
		else{
			htmlScript += '<div id="gridViewUpBtn" class="gridViewUpBtn" style="visibility:visible;"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn" style="visibility:visible;"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';
		}
	}
	*/
	
	htmlScript += '<div id="gridViewUpBtn" class="gridViewUpBtn"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';
	
	document.getElementById('gridView_wrapper').innerHTML = htmlScript;
	console.log("gridItemCount: " + gridItemCount +" gridViewArray.length: "+gridViewArray.length);
	console.log("realIndex: " + realIndex);
	//gridViewArray = document.getElementsByName('gridViewItem');
	if(gridItemCount > 8){
		if(realIndex < 4 ){
			console.log('inside 8');
			document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
			document.getElementById('gridViewDownBtn').style.visibility = 'visible';
		}
		
		else if(realIndex >= gridItemCount -gridItemCount%4){
			document.getElementById('gridViewUpBtn').style.visibility = 'visible'; 
			document.getElementById('gridViewDownBtn').style.visibility = 'hidden'; 
		}
		
		else{
			console.log('outside 8');
			document.getElementById('gridViewUpBtn').style.visibility = 'visible'; 
			document.getElementById('gridViewDownBtn').style.visibility = 'visible';
		}
	
	
	}

}

Display.setGridList = function(nameList, thumbNailList)
{

	var script = "";
	
	if(nameList != null) {
		for(var i = 0; i < nameList.length; i++) {
			if(i == 0) {
				script += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem" style="margin-left:0px;">\n';
				
				script += '<img id="gridViewItemImg' + i + '" name="gridViewItemImg" class="gridViewImg" ></img>\n';
				script += '<div id="gridViewItemHighlight' + i + '" name="gridViewItemHighlight" class="gridViewItemHighlight"></div>\n';
				script += '<div id="gridViewItemText' + i + '" name="gridViewItemText" class="gridViewText">' + nameList[i] + '</div>\n';
			}
			else if(i%4 == 0) {
				script += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem" style="margin-left:0px;">\n';
				
				script += '<img id="gridViewItemImg' + i + '" name="gridViewItemImg" class="gridViewImg"></img>\n';
				script += '<div id="gridViewItemHighlight' + i + '" name="gridViewItemHighlight" class="gridViewItemHighlight"></div>\n';
				script += '<div id="gridViewItemText' + i + '" name="gridViewItemText" class="gridViewText">' + nameList[i] + '</div>\n';
				
			}
			else {
				script += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem">\n';
				
				script += '<img id="gridViewItemImg' + i + '" name="gridViewItemImg" class="gridViewImg"></img>\n';
				script += '<div id="gridViewItemHighlight' + i + '" name="gridViewItemHighlight" class="gridViewItemHighlight"></div>\n';
				script += '<div id="gridViewItemText' + i + '" name="gridViewItemText" class="gridViewText">' + nameList[i] + '</div>\n';
			}

			
			script += '</div>\n';
		}
	}
	script += '<div id="gridViewUpBtn" class="gridViewUpBtn"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';		
	//widgetAPI.putInnerHTML(document.getElementById("gridView_wrapper"), script);
	document.getElementById("gridView_wrapper").innerHTML = script;

	if(nameList != null) {
		for (var i=0;i<nameList.length;i++)
		{
			
			if(nameList[i] != null) {
				//widgetAPI.putInnerHTML(document.getElementById("gridViewItemText"+i), nameList[i]);
				document.getElementById("gridViewItemText"+i).innerHTML = nameList[i];
				document.getElementById('gridViewItemText'+i).style.visibility = 'visible'; 
				
			}
			else {
				document.getElementById('gridViewItemText'+i).style.visibility = 'hidden'; 
			}
			
			if(thumbNailList[i] != null) {
				document.getElementById("gridViewItemImg"+i).src=thumbNailList[i];
				document.getElementById('gridViewItemImg'+i).style.visibility = 'visible'; 
			}
			else {
				document.getElementById("gridViewItemImg"+i).src="";
				document.getElementById('gridViewItemImg'+i).style.visibility = 'hidden'; 
			}
			
		}
	}
	this.scrollPageScript = document.getElementById("gridView_wrapper").innerHTML;
	
	var gridViewArray = document.getElementsByName('gridViewItem');
    
    if(gridViewArray.length > 0 && gridViewArray.length < this.scrollPageEndIndex) {
		this.scrollPageStartIndex = 0;
        this.scrollPageEndIndex = gridViewArray.length;
    }
	else {
		this.scrollPageStartIndex = 0;
		this.scrollPageEndIndex = 8;
	}
    
	if(nameList.length > 8){
		document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'visible'; 
	}
	else {
		document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'hidden'; 
	}
}
Display.setGridList = function(nameList, thumbNailList)
{


	var script = "";
	
	/*
	var startIndex = 0;
	var endIndex = 8;
	if(curIndex >= endIndex) {
		startIndex += 4;
		endIndex += 4;
	}
	*/
	
	for(var i = 0; i < nameList.length; i++) {
		if(i == 0) {
			script += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem"   style="margin-left:0px;" >\n';
			
			script += '<img id="gridViewItemImg' + i + '" name="gridViewItemImg" class="gridViewImg"  onmouseover="dispatchMoveOverItem(' + i + ')" onmouseout="Main.onMouseOut('+ i +')" onclick="dispatchMouseKeyOnItemView(' + i + ');"></img>\n';
			script += '<div id="gridViewItemText' + i + '" name="gridViewItemText" class="gridViewText">' + nameList[i] + '</div>\n'; 
			script += '<div id="gridViewItemHighlight' + i + '" name="gridViewItemHighlight" class="gridViewItemHighlight"></div>\n';
			
		}
		else if(i%4 == 0) {
			script += '<div id="gridViewItem' + i + '" name="gridViewItem" class="gridViewItem" style="margin-left:0px;">\n';
			
			script += '<img id="gridViewItemImg' + i + '" name="gridViewItemImg" class="gridViewImg" onmouseover="dispatchMoveOverItem(' + i + ')" onmouseout="Main.onMouseOut('+ i +')" onclick="dispatchMouseKeyOnItemView(' + i + ');"></img>\n';
			script += '<div id="gridViewItemText' + i + '" name="gridViewItemText" class="gridViewText">' + nameList[i] + '</div>\n';
			script += '<div id="gridViewItemHighlight' + i + '" name="gridViewItemHighlight" class="gridViewItemHighlight"></div>\n';
			
			
		}
		else {
			script += '<div id="gridViewItem' + i + '" name="gridViewItem"    class="gridViewItem">\n';
			
			script += '<img id="gridViewItemImg' + i + '" name="gridViewItemImg" class="gridViewImg" onmouseover="dispatchMoveOverItem(' + i + ')" onmouseout="Main.onMouseOut('+ i +')" onclick="dispatchMouseKeyOnItemView(' + i + ');"></img>\n';
			script += '<div id="gridViewItemText' + i + '" name="gridViewItemText" class="gridViewText">' + nameList[i] + '</div>\n';
			script += '<div id="gridViewItemHighlight' + i + '" name="gridViewItemHighlight" class="gridViewItemHighlight"></div>\n';
			
		}

		
		script += '</div>\n';
	}
	script += '<div id="gridViewUpBtn" class="gridViewUpBtn"></div>\n<div id="gridViewDownBtn" class="gridViewDownBtn"></div>\n<div class="gridViewTitleBar">\n<div id="gridViewTitleText" class="gridViewTitleText"></div>\n</div>\n';		
	//widgetAPI.putInnerHTML(document.getElementById("gridView_wrapper"), script);
	document.getElementById("gridView_wrapper").innerHTML = script;

	//console.log('script: ' + document.getElementById("gridView_wrapper").innerHTML);

    for (var i=0;i<nameList.length;i++)
    {
		
		if(nameList[i] != null) {
			//widgetAPI.putInnerHTML(document.getElementById("gridViewItemText"+i), nameList[i]);
			document.getElementById("gridViewItemText"+i).innerHTML = nameList[i];
			document.getElementById('gridViewItemText'+i).style.visibility = 'visible'; 
			
		}
		else {
			document.getElementById('gridViewItemText'+i).style.visibility = 'hidden'; 
		}
		
		if(thumbNailList[i] != null) {
			document.getElementById("gridViewItemImg"+i).src=thumbNailList[i];
			document.getElementById('gridViewItemImg'+i).style.visibility = 'visible'; 
		}
		else {
			document.getElementById("gridViewItemImg"+i).src="";
			document.getElementById('gridViewItemImg'+i).style.visibility = 'hidden'; 
		}
		
	}
	this.scrollPageScript = document.getElementById("gridView_wrapper").innerHTML;
	
	var gridViewArray = document.getElementsByName('gridViewItem');
    
	
    if(gridViewArray.length > 0 && gridViewArray.length < this.scrollPageEndIndex) {
		this.scrollPageStartIndex = 0;
        this.scrollPageEndIndex = gridViewArray.length;
    }
	else {
		this.scrollPageStartIndex = 0;
		this.scrollPageEndIndex = 8;
	}
	
	if(nameList.length > 8){
		document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'visible'; 
	}
	else {
		document.getElementById('gridViewUpBtn').style.visibility = 'hidden'; 
		document.getElementById('gridViewDownBtn').style.visibility = 'hidden'; 
	}
	//console.log('script: ' + document.getElementById("gridView_wrapper").innerHTML);
}



Display.setListViewList = function(nameList)
{
    for (var i=0;i<8;i++)
    {
        document.getElementById("listViewRowItem"+i).innerHTML =  nameList[i];
	}
};
Display.timeMsg = function()
{
	//console.log("hetimeMsgllo");
	this.TimerRunning = true;
	this.t=setTimeout("Display.hideMenuBar()",3000);
	window.NetCastMouseOff(3);
};
Display.mouseTimer = function()
{	console.log("mouse timmer running")
	this.mouseTimerRunning = true;
	this.mouseTimer =setTimeout("Display.hideMouse",3000);
}
Display.hideMouse = function()
{	
	var mouseStatus = window.NetCastGetMouseOnOff();
	if(this.mouseTimerRunning){
	if(mouseStatus =="on"){
			window.NetCastMouseOff(1);
			this.mouseTimerRunning = false;
		}
	}
}
Display.hideMenuBar = function()
{
	//console.log("hideMenuBar");
	if(this.TimerRunning){
	document.getElementById("navi").style.visibility = "hidden";
	document.getElementById("naviUnder").style.visibility = "hidden";
	}
};
Display.showMenubar = function()
{
	console.log("showMenubar");
	if(this.TimerRunning){
		clearTimeout(this.t);
		TimerRunning=false;
		console.log("clearTimeout");
	}
	document.getElementById("navi").style.visibility = "visible";
	document.getElementById("naviUnder").style.visibility = "visible";
}
Display.getStatusMessage = function()
{
	return document.getElementById("noti_text").innerHTML;
}

Display.showStatus = function(status)
{
    console.log("ShowStatus: "+status);
	
	//widgetAPI.putInnerHTML(document.getElementById("mainNavItemText0"), status);
	//document.getElementById("noti_wrapper").style.opacity = 0.7;
	document.getElementById("noti_wrapper").style.zIndex = 51;
	document.getElementById("noti_text").innerHTML=status;
	//document.getElementById("noti_wrapper").style.zIndex = 20;
	this.isStatusShown = true;
	Display.StatusTimer();
    //widgetAPI.putInnerHTML(document.getElementById("noti_wrapper"), status);
}

Display.hideStatus = function() {
	document.getElementById("noti_wrapper").style.zIndex = -300;
	//document.getElementById("noti_wrapper").style.zIndex = 0;
	this.isStatusShown = false;
}
Display.StatusTimer = function()
{
	console.log("StatusTimer");
	//var t=setTimeout("Display.hideStatus()",3000);
	var t=setTimeout("Main.timerFinishCallback()", 2500);
}