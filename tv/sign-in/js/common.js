/**
 * version set
 */
var versionStr = "";

var popKeyBoardType;
var keyBoardType = 0;
var langValue="";
var langValue1="";
var totalLang = "";
var langToggleState = 0; 
var lagnTogglIdx = 0;
var btnTogglIdx = 0;
//Language
var SELECTED_LANG_LABEL = "";
//Character
var CHARACTER_LABEL = "#";			
var VH_CHAR_LABEL = "12; )";
//Toggle Idx
var stIdx = 10;	//s/l Toggle
var chIdx = 20; //char Toggle
var checkedKeyId = "";
var checkBoxToggleIdx = 0;	
var cnt = 0;			
var lanChooseSize = 0;
var checkboxTop = 0;
var checkBoxLeft = 0;
var checkboxIdx = 0;
//Ok
var obj1,obj2,obj3;
//Cancel
var obj4,obj5,obj6;
var popPageIdx = 0;
var popKeyId = 0;
var checkedArray = new Array(new Array(),new Array());	//checked Language Array
var firstPageIdx = 0;
var secondPageIdx = 0;
var topIndex = 0;
var leftIndex = 0;	
var scrptSrc = "";
var checkState = false;
var keyItem = "";
var keyItem1 = "";	
var focuskeyItem = "";
var totalcheckedValue = "";
var korkeyItem = "";
var langToggleClickState = false;
var selectLangState = false;

//character Index
var chTggIdx;

var kDIdx = 0;

//cookie handle
var chckArrP1;
var chckArrP2; 
var chckLang;
var cTopIndex;
var cLeftIndex;
var cTop;
var cLeft;
var cKeyId1  = new Array();
var cKeyId2  = new Array();
var c1keyItem = new Array();
var c2keyItem = new Array();


/**
 * common util function 
 */
function getParams() {
	var idx = document.URL.indexOf('?');
	var params = new Array();

	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			var nameVal = pairs[i].split('=');
			params[nameVal[0]] = nameVal[1];
		}
	}
	return params;
}

function setTdElementText(elementId, text) {
	var e = document.getElementById(elementId);
	if( e != null) {		
		e.firstChild.nodeValue = text;
	}
}



function setElementBgColor(elementId, color) {
	var e = document.getElementById(elementId);
	if(e != null) {
		e.style.backgroundColor = color;
	}
}

function setElementCursor(elementId, cursor) {
	var e = document.getElementById(elementId);
	if(e != null) {
		e.style.cursor = cursor;
	}
}

function setElementBackground(elementId, backGround) {
	var e = document.getElementById(elementId);
	if(e != null) {
		e.style.background = backGround;
	}
}

function setElementFontSize(elementId, fontSize) {
	var e = document.getElementById(elementId);
	if(e != null) {
		e.style.fontSize = fontSize;
	}
}

function setInnerHtml(elementId, html) {
	var e = document.getElementById(elementId);
	if(e != null) {
		e.innerHTML = html;
	}
}

function setImgSrc(elementId, src) {
	var e = document.getElementById(elementId);
	if(e != null) {
		e.src = src;
	}
}

function replaceAll(source, searchValue, replaceValue) {
	var toIdx = source.indexOf(searchValue, idx);
	if(toIdx < 0) {
		return source;
	}
	var rtnVal = "";
	var idx = 0;
	while(toIdx > -1) {
		rtnVal += source.substring(idx, toIdx);
		rtnVal += replaceValue;
		idx = toIdx + searchValue.length;
		toIdx = source.indexOf(searchValue, idx);
	}
	rtnVal += source.substring(idx, source.length);
	return rtnVal;
}

function setElementVisibility(elementId, isVisible) {
	var e = document.getElementById(elementId);
	if(e != null) {
		if (isVisible) {
			e.style.visibility="";		
		} else {
			e.style.visibility="hidden";
		}
	}
}

function addEvent(object, eventStr, func) {
	try {
		object.addEventListener(eventStr, func, false);
	} catch (e) {
		alert("addEvent["+eventStr+"]["+func+"] ["+e.message+"]");
	}
}

function removeEvent(object, eventStr, func) {
	try {
		object.removeEventListener(eventStr, func);
	} catch (e) {
		alert("removeEvent["+eventStr+"]["+func+"] ["+e.message+"] ");
	}
}

function getPopUPInfoObject(pageIdx, keyId, popUpId, keyValueArray, keyIdxArray, hideKeyArray, cancelBtnIdx) {

	var obj = new Object();
	obj.pageIdx = pageIdx;
	obj.keyId = keyId;
	obj.popUpId = popUpId;
	obj.keyValueArray = keyValueArray;
	obj.keyIdxArray = keyIdxArray;
	obj.hideKeyArray = hideKeyArray;
	obj.cancelBtnIdx = cancelBtnIdx;
	return obj;
}


function inputBoxControl(direct){
	if(direct=='left'){
		caretPrev();
	}else{
		caretNext();
	}
}




/*****************************************************************/
/******************* Language Popup Start ************************/
/*****************************************************************/

/**
 * Language Initializing
 */
function popupInit(){		
	var checkboxTop;
	var checkBoxLeft;
	

	popKeyBoardType = parent.document.form2.layout.value;
	
	//cookie	
	if( parent.document.form2.cookieP1KeyId.value != "" || parent.document.form2.cookieP1KeyId.value != null){
			chckArrP1 =  getCookie("checkedArrayP1");
			chckArrP2 = getCookie("checkedArrayP2");
			parent.document.form2.cookieP1KeyId.value = chckArrP1;
			parent.document.form2.cookieP2KeyId.value = chckArrP2;
			if(chckArrP1 == parent.document.form2.cookieP1KeyId.value){
				cKeyId1  = parent.document.form2.cookieP1KeyId.value.split(',');
				cKeyId2  = parent.document.form2.cookieP2KeyId.value.split(',');
			}else{
					if(chckArrP1 != null || chckArrP2 != null){
						cKeyId1  = chckArrP1.split(',');
						cKeyId2  = chckArrP2.split(',');
					}
			}
	}
				
	//page1
	if( popPageIdx == 0 ){
		
		document.getElementById('leftArr').style.visibility = 'hidden';
		document.getElementById('rightArr').style.visibility = '';
		setKeyText("pageCnt", "page 1/2");
		setKeyText("wkk_key_001", "Shqip");
		setKeyText("wkk_key_011", "Nederlands");
		setKeyText("wkk_key_021", "Magyar");
		setKeyText("wkk_key_101", "العربية");
		setKeyText("wkk_key_111", "Eesti");
		setKeyText("wkk_key_121", "Indonesia");
		setKeyText("wkk_key_201", "Bosanski");
		setKeyText("wkk_key_211", "Suomi");
		setKeyText("wkk_key_221", "Italiano");
		setKeyText("wkk_key_301", "БЪЛГАРСКИ");
		setKeyText("wkk_key_311", "Français");
		setKeyText("wkk_key_321", "Қазақ");
		setKeyText("wkk_key_401", "Hrvatski");
		setKeyText("wkk_key_411", "Deutsch");
		setKeyText("wkk_key_421", "English");	//jjw_add
		setKeyText("wkk_key_501", "Česky");
		setKeyText("wkk_key_511", "Ελληνικά");
		setKeyText("wkk_key_521", "Latviešu");
		setKeyText("wkk_key_601", "Dansk");
		setKeyText("wkk_key_611", "עברית");
		setKeyText("wkk_key_621", "Lietuvių");
	
		document.getElementById("wkk_key_620").style.visibility = "";
		doHighlight('wkk_key_00');	
		
		for(i=0; i<=secondPageIdx; i++){		
			keyItem1 = document.getElementById(checkedArray[1][i]+"c1");
			if(keyItem1!=null && keyItem1!=""){
				checkboxTop = keyItem1.style.top;
				checkBoxLeft = keyItem1.style.left;
				//focuskeyItem.style.visibility = "hidden";				
				keyItem1.style.top = checkboxTop + "px";
				keyItem1.style.left = checkBoxLeft + "px";
				keyItem1.style.visibility = "hidden";		
			}				
		}
					
		for(i=0; i<=firstPageIdx; i++){						
			keyItem = document.getElementById(checkedArray[0][i]+"c");
			if(keyItem!=null && keyItem!=""){
				checkboxTop = keyItem.style.top;
				checkBoxLeft = keyItem.style.left;					
				if(focuskeyItem!=null && focuskeyItem!=""){
					focuskeyItem.style.visibility = "";
				}
				keyItem.style.top = checkboxTop + "px";
				keyItem.style.left = checkBoxLeft + "px";
				keyItem.style.visibility = "";
			}
		}
		
		//if cookie is empty
		//jjw_modify
		if(cKeyId1 == "" && cKeyId2 == ""){	
			if(korkeyItem!=null && korkeyItem!=""){
				if(korkeyItem.style.visibility == "hidden"){
					korkeyItem.style.visibility = hidden;
				}			
			} else{
				//English default Setting			
				korkeyItem = document.getElementById("wkk_key_420c");		
				korkeyItem.style.top = "294px";
				korkeyItem.style.left = "480px";
				korkeyItem.style.visibility = "";	
				checkedArray[0][1] = "wkk_key_420";		
				firstPageIdx++;
			}
		}
		
	//	alert("cKeyId1:: " + checkedArray[0][1]);
		
		 for(i = 1 ; i < cKeyId1.length; i++){
			if(c1keyItem[i]!=null && c1keyItem[i]!=""){
					if(c1keyItem[i].style.visibility == "hidden"){
						c1keyItem[i].style.visibility = "hidden";
					}			
			}else{
					c1keyItem[i] = document.getElementById(cKeyId1[i]+"c");
					setCookieTopLeft(cKeyId1[i]);
					c1keyItem[i].style.top = cTop + "px";
					c1keyItem[i].style.left = cLeft + "px";
					c1keyItem[i].style.visibility = "";	
					checkState = true;
					firstPageIdx++;			
					lanChooseSize++;
					checkedArray[0][firstPageIdx] = cKeyId1[i];	
				//	alert("checkedArray[0]["+firstPageIdx+"] :: " + checkedArray[0][firstPageIdx] );
				}
			}
			
						
		if( secondPageIdx == 0 ){	
				for(i = 1 ; i < cKeyId2.length; i++){
					if(c2keyItem[i]!=null && c2keyItem[i]!=""){
						if(c2keyItem[i].style.visibility == "hidden"){
									c2keyItem[i].style.visibility = hidden;
								}			
						}else{
									c2keyItem[i] = document.getElementById(cKeyId2[i]+"c1");
									setCookieTopLeft(cKeyId2[i]);
									c2keyItem[i].style.top = cTop + "px";
									c2keyItem[i].style.left = cLeft + "px";
									c2keyItem[i].style.visibility = "hidden";								
									secondPageIdx++;			
									lanChooseSize++;
									checkedArray[1][secondPageIdx] = cKeyId2[i];	
					}
			 }	
		}
		
	
	//page2
	} else if( popPageIdx == 1 ){	
		 
		document.getElementById('leftArr').style.visibility = '';
		document.getElementById('rightArr').style.visibility = 'hidden';
		setKeyText("pageCnt", "page 2/2");
		setKeyText("wkk_key_001", "Македонски");
		setKeyText("wkk_key_011", "Русский");
		setKeyText("wkk_key_021", "Türkçe");		
		setKeyText("wkk_key_101", "Melayu");
		setKeyText("wkk_key_111", "Srpski");
		setKeyText("wkk_key_121", "Українська");		
		setKeyText("wkk_key_201", "Norsk");
		setKeyText("wkk_key_211", "Slovenčina");
		setKeyText("wkk_key_221", "uzbek_Cyrillic");		
		setKeyText("wkk_key_301", "فارسي");
		setKeyText("wkk_key_311", "Slovenščina");
		setKeyText("wkk_key_321", "uzbek_Modern");		
		setKeyText("wkk_key_401", "Polski");
		setKeyText("wkk_key_411", "Español");
		setKeyText("wkk_key_421", "Tiếng Việt");		
		setKeyText("wkk_key_501", "Português");
		setKeyText("wkk_key_511", "Svenska");
		setKeyText("wkk_key_521", "한국어");		 //jjw_add
		setKeyText("wkk_key_601", "Româneşte");
		setKeyText("wkk_key_611", "ภาษาไทย");
		setKeyText("wkk_key_621", " ");	
		
		document.getElementById("wkk_key_620").style.visibility = "hidden";
				
		for(i=0; i<=firstPageIdx; i++){
			keyItem = document.getElementById(checkedArray[0][i]+"c");	
			if(keyItem!=null && keyItem!=""){				
				//focuskeyItem.style.visibility = "hidden";		
				checkboxTop = keyItem.style.top;
				checkBoxLeft = keyItem.style.left;				
				keyItem.style.top = checkboxTop + "px";
				keyItem.style.left = checkBoxLeft + "px";				
				keyItem.style.visibility = "hidden";
			}								
		}
				
		for(i=0; i<=secondPageIdx; i++){					
			keyItem1 = document.getElementById(checkedArray[1][i]+"c1");
			if(keyItem1!=null && keyItem1!=""){				
				checkboxTop = keyItem1.style.top;	
				checkBoxLeft = keyItem1.style.left;			
				keyItem1.style.top = checkboxTop + "px";
				keyItem1.style.left = checkBoxLeft + "px";
				keyItem1.style.visibility = "";
			}
						
		}
		
		 for(i = 1; i < cKeyId2.length; i++){
				if(c2keyItem[i]!=null && c2keyItem[i]!=""){
						if(c2keyItem[i].style.visibility == "hidden"){
							c2keyItem[i].style.visibility = hidden;
						}			
				}else{
						c2keyItem[i] = document.getElementById(cKeyId2[i]+"c1");
						setCookieTopLeft(cKeyId2[i]);
						c2keyItem[i].style.top = cTop + "px";
						c2keyItem[i].style.left = cLeft + "px";
						c2keyItem[i].style.visibility = "";	
						checkState = true;
						secondPageIdx++;			
						lanChooseSize++;
						checkedArray[1][secondPageIdx] = cKeyId2[i];									
				}
			}			
	}	

	//jjw_add
	/*
	parent.document.ifr.focus();	
	doHighlight("wkk_key_00");	
	event.returnValue = onkeyDown;
	*/
}

/** 
 * @param keyId
 * @param value
 */
function setKeyText(keyId, value) {		
	var keyItem = document.getElementById(keyId);	
	
	if(keyItem != null) {
		keyItem.firstChild.nodeValue = value;	
	}
}

/** 
 * @param keyId
 */
function execKey(keyId) {
	
	switch(keyId) {
		//OK
		case "wkk_key_70" :
			if(lanChooseSize == 0){ //all not Checked
				return;
			}
			checkedValues();
		break;
		//cancel
		case "wkk_key_71" :
			winClose();
		break;
		default :
			break;
	}
}


function winClose(){	
	parent.selectLangState = false;
	event.returnValue = parent.onkeyDown;
	
	parent.document.getElementById('layer_ifr').style.display = "none";
	parent.document.getElementById('layer_ifr1').style.display = "none";
	parent.document.getElementById('layer_ifr2').style.display = "none";
	
	//parent.document.form2.checkedLang.value = "";
	
	if(popKeyBoardType == 0){
		parent.top.doHighlight('wkk_key_60');    // modify
		parent.document.getElementById('layer_ifr3').style.display = "none";
	}else if(popKeyBoardType == 1){
		parent.top.doHighlight('wkk_key_60');
	}else{
		parent.top.doHighlight('wkk_key_000');
		parent.document.getElementById('layer_ifr3').style.display = "none";
	}
	parent.document.getElementById("hFocus").focus();
	
}


function doHighlight(keyId){	
	
	obj1 = document.getElementById('obg1');
	obj2 = document.getElementById('obg2');
	obj3 = document.getElementById('obg3'); 

	obj4 = document.getElementById('cbg1');
	obj5 = document.getElementById('cbg2');
	obj6 = document.getElementById('cbg3');
	
	var unCheckBoxTop = 0;
	var unCheckBoxLeft = 0;
	var strCheckbox = keyId.substr(0,11);	
	if(keyId == "wkk_key_focus_c" || keyId == strCheckbox+"c" || keyId == strCheckbox+"c1"){
		unCheckBoxTop = document.getElementById(keyId).style.top;
		unCheckBoxLeft = document.getElementById(keyId).style.left;
		unCheckBoxTop = unCheckBoxTop.split('px')[0];	
		unCheckBoxLeft = unCheckBoxLeft.split('px')[0];
		if(unCheckBoxTop >=0 && unCheckBoxTop <= 87){
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_00";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_01";
			} else if(unCheckBoxLeft == 480){
				keyId = "wkk_key_02";
			}		
		} else if(unCheckBoxTop >87 && unCheckBoxTop <= 138){
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_10";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_11";
			} else if(unCheckBoxLeft == 480){
				keyId = "wkk_key_12";
			}
		} else if(unCheckBoxTop >138 && unCheckBoxTop <= 190){
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_20";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_21";
			} else if(unCheckBoxLeft == 480){
				keyId = "wkk_key_22";
			}
		} else if(unCheckBoxTop >190 && unCheckBoxTop <= 242){			
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_30";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_31";
			} else if(unCheckBoxLeft == 480){
				keyId = "wkk_key_32";
			}
		} else if(unCheckBoxTop >242 && unCheckBoxTop <= 294){
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_40";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_41";
			} else if(unCheckBoxLeft == 480){
				keyId = "wkk_key_42";
			}
		} else if(unCheckBoxTop >294 && unCheckBoxTop <= 346){
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_50";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_51";
			} else if(unCheckBoxLeft == 480){
				keyId = "wkk_key_52";
			}
		} else if(unCheckBoxTop >346 && unCheckBoxTop <= 398){
			if(unCheckBoxLeft == 70){
				keyId = "wkk_key_60";
			} else if(unCheckBoxLeft == 275){
				keyId = "wkk_key_61";
			} else if(unCheckBoxLeft == 480){
					keyId = "wkk_key_62";
			}
		}
	}
	popKeyId = keyId;	
	topIndex = keyId.charAt(8);
	leftIndex = keyId.charAt(9);
	
	var checkBoxIdx = keyId.charAt(8);		
	var top = 0;
	var left = 0;
	
	if(topIndex==0){
		top = 73;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}		
	}else if(topIndex==1){
		top = 125;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}	
	}else if(topIndex==2){
		top = 177;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}	
	}else if(topIndex==3){
		top = 229;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}	
	}else if(topIndex==4){
		top = 281;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}	
	}else if(topIndex==5){
		top = 333;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}	
	}else if(topIndex==6){
		top = 385;		
		if(leftIndex == 0){
			left = 52;
		}else if(leftIndex == 1){
			left = 257;
		}else if(leftIndex == 2){
			left = 462;
		}	
	}	
	
	if(checkBoxIdx == 0){
		checkboxTop = 87;
	} else if(checkBoxIdx == 1){
		checkboxTop = 138;
	} else if(checkBoxIdx == 2){
		checkboxTop = 190;
	} else if(checkBoxIdx == 3){
		checkboxTop = 242;
	} else if(checkBoxIdx == 4){
		checkboxTop = 294;
	} else if(checkBoxIdx == 5){
		checkboxTop = 346;
	} else if(checkBoxIdx == 6){
		checkboxTop = 398;
	}
		
	checkBoxLeft = left+18;
	
	var e = document.getElementById("wkk_key_focus_n");		//button Focus
	var e1 = document.getElementById("wkk_key_focus_c");	//checkBox 
	e.style.top = top + "px";
	e.style.left = left + "px";
	e1.style.top = checkboxTop + "px";
	e1.style.left = checkBoxLeft + "px";
	
	e.style.visibility = "hidden";
	e1.style.visibility = "hidden";	
		
	if(popKeyId == 'wkk_key_70'){
		//jjw_add	
		if(lanChooseSize == 0){ //all not Checked
			return;
		}
		
		obj1.style.background = "url('../image/POPUP_BTN_FOCUS_L.png')";
		obj2.style.background = "url('../image/POPUP_BTN_FOCUS_M.png')";
		obj3.style.background = "url('../image/POPUP_BTN_FOCUS_R.png')";
		
		obj4.style.background = "url('../image/POPUP_BTN_NORMAL_L.png')";
		obj5.style.background = "url('../image/POPUP_BTN_NORMAL_M.png')";
		obj6.style.background = "url('../image/POPUP_BTN_NORMAL_R.png')";
		//break;
				
	} else if(popKeyId == 'wkk_key_71'){
				
		obj4.style.background = "url('../image/POPUP_BTN_FOCUS_L.png')";
		obj5.style.background = "url('../image/POPUP_BTN_FOCUS_M.png')";
		obj6.style.background = "url('../image/POPUP_BTN_FOCUS_R.png')";
		
		obj1.style.background = "url('../image/POPUP_BTN_NORMAL_L.png')";
		obj2.style.background = "url('../image/POPUP_BTN_NORMAL_M.png')";
		obj3.style.background = "url('../image/POPUP_BTN_NORMAL_R.png')";
		//break;

	} else{
		
		var val = getKeyValue(keyId+"1");	
		
		if(val == "<") {
			e.innerHTML = "&lt;";
		} else {
			e.innerHTML = val;
		}
		
		if(popPageIdx == 1 && popKeyId == 'wkk_key_62'){	//jjw_add
			e.style.visibility = "hidden";
			e1.style.visibility = "hidden";		
		}else{
			e.style.visibility = "";
			e1.style.visibility = "";		
		}		
		//e1.style.visibility = "";				
	}
}


function getKeyValue(keyId) {
	
	var keyItem = document.getElementById(keyId);	
	if(keyItem != null) {
		return keyItem.firstChild.nodeValue;
	} else {
		return null;
	}
}


function cancelHighlight(keyId){
	
	getKeyValue(keyId);
	document.getElementById('wkk_key_focus_n').style.visibility = 'hidden';
	
	if(keyId == 'wkk_key_70'){
		obj1.style.background = "url('../image/POPUP_BTN_NORMAL_L.png')";
		obj2.style.background = "url('../image/POPUP_BTN_NORMAL_M.png')";
		obj3.style.background = "url('../image/POPUP_BTN_NORMAL_R.png')";
	} else if(keyId == 'wkk_key_71'){
		obj4.style.background = "url('../image/POPUP_BTN_NORMAL_L.png')";
		obj5.style.background = "url('../image/POPUP_BTN_NORMAL_M.png')";
		obj6.style.background = "url('../image/POPUP_BTN_NORMAL_R.png')";
	}
}

/**
 * checkBox check/uncheck
 */
function cbChecked(keyId){
	checkedKeyId = popKeyId+"0";	
	//hidden 
	keyItem = document.getElementById(checkedKeyId+"c");
	keyItem1 = document.getElementById(checkedKeyId+"c1");	
	focuskeyItem = document.getElementById(keyId);
	
	//page1
	if(popPageIdx == 0){
		cnt = 0;
		if(keyItem.style.visibility == ""){			
			/*if(lanChooseSize>5){				
				lanChooseSize = 5;
			}*/
			cnt = 1;
		}else {			
			if(lanChooseSize>6){
				return;
			}
			cnt = 0; 
		}				
		cnt++;
			
		if(cnt%2==0){
			checkState = false;
			var j ;
			for(i = 0 ; i < checkedArray[0].length  ; i ++){
				if(checkedKeyId == cKeyId1[i] ){
					j = i;
				}
			}
			 checkedArray[0].remove(j,popPageIdx);
			 //alert("checkedArray[0]::"+checkedArray[0]);
			firstPageIdx--;
		//	if(lanChooseSize <= 5){
				lanChooseSize--;
		//	}
		} else{			
			checkState = true;
			firstPageIdx++;			
			lanChooseSize++;
			checkedArray[popPageIdx][firstPageIdx] = checkedKeyId;		
		}

	/*	 if(checkedKeyId == "wkk_key_420" && korkeyItem.style.visibility==""){
			for(i=0; i<=firstPageIdx; i++){
				if(checkedArray[popPageIdx][i+1]!=null&&checkedArray[popPageIdx][i+1]!=""){
					checkedArray[popPageIdx][i]
					= checkedArray[popPageIdx][i+1];
			//		alert("for::checkedArray :: " + checkedArray);
				}				
			}		
			//alert("checkedArray :: " + checkedArray);	
		}*/
		
	
				
		//hidden Area check/uncheck
		if(checkState){						
			focuskeyItem.style.visibility = "hidden";				
			keyItem.style.top = checkboxTop + "px";
			keyItem.style.left = checkBoxLeft + "px";
			keyItem.style.visibility = "";
			
		} else{					
			focuskeyItem.style.visibility = "";				
			keyItem.style.top = checkboxTop + "px";
			keyItem.style.left = checkBoxLeft + "px";
			keyItem.style.visibility = "hidden";
		}	
				
	//page2
	} else{
		cnt = 0;
		
		if(keyItem1.style.visibility == ""){
			/*if(lanChooseSize>5){				
				lanChooseSize = 5;
			}*/
			cnt = 1;		
		}else {
			if(lanChooseSize>6){
				return;
			}
			cnt = 0; 
		}		
		cnt++;	
				
		if(cnt%2==0){
			checkState = false;
			var j ;
			for(i = 1 ; i < checkedArray[1].length  ; i ++){
				if(checkedKeyId == cKeyId2[i] ){
					j = i;
				}
			}
			checkedArray[1].remove(j,popPageIdx);

			secondPageIdx--;
			//if(lanChooseSize != 5){
				lanChooseSize--;
			//}
		} else{
			checkState = true;
			secondPageIdx++;
			lanChooseSize++;
			checkedArray[popPageIdx][secondPageIdx] = checkedKeyId;
		}
				
		if(checkState){						
			focuskeyItem.style.visibility = "hidden";				
			keyItem1.style.top = checkboxTop + "px";
			keyItem1.style.left = checkBoxLeft + "px";
			keyItem1.style.visibility = "";
			
		} else{					
			focuskeyItem.style.visibility = "";				
			keyItem1.style.top = checkboxTop + "px";
			keyItem1.style.left = checkBoxLeft + "px";
			keyItem1.style.visibility = "hidden";			
		}	
	}	
}

function changeImage(id, bgImage){	
	document.getElementById(id).style.background = bgImage;
	document.getElementById(id).style.backgroundRepeat = 'no-repeat';
	document.getElementById(id).style.backgroundPosition = position;
}
	
	

function arrowClick(direction){		
	if(direction == 'left'){		
		popPageIdx = 0;
		popupInit();				
	} else if(direction == 'right'){		
		popPageIdx = 1;
		popupInit();				
	}	
}


function popprocessKeyDown(event){
	var keyCode;
	if(window.event) { // IE
		keyCode = event.keyCode;
	} else if(event.which) { // Netscape/Firefox/Opera
		keyCode = event.which;
	} else {
		alert("Unknown event type.");
		return ;
	}
	
	var x = popKeyId.charAt(8);
	var y = popKeyId.charAt(9);
		
	switch(keyCode) {
				
		case VK_UP :
			
			if(y==0||y==1||y==2){
				x = new Number(x) - 1;
				
				if(x<0){
					x=0;
				} 
				else if (x==6){
					y = 0;
					cancelHighlight("wkk_key_70");
					cancelHighlight("wkk_key_71");
				}				
			}
			break;
			
		case VK_DOWN :
			if(popPageIdx == 1 && popKeyId == 'wkk_key_52'){	//jjw_add
				if(lanChooseSize == 0){ //all not Checked
					return;
				}
				cancelHighlight(popKeyId);				
				doHighlight('wkk_key_70');
			}
			if(y==0||y==1||y==2){				
				x = new Number(x) + 1;
								
				if(x>6){
					//jjw_add
					if(lanChooseSize == 0){ //all not Checked
						return;
					}
					doHighlight('wkk_key_70');					
				}
			}
			break;
			
		case VK_LEFT :
			
			if(x==0||x==1||x==2||x==3||x==4||x==5||x==6){
				y = new Number(y) - 1;
				
				if(y<0){
					y=0;
					if(popPageIdx == 1){
						popPageIdx = 0;
					}
					cancelHighlight('wkk_key_001');					
					popupInit();

				}
				doHighlight('wkk_key_'+x+''+y+'0');
			}else{
				doHighlight('wkk_key_70');		
			}
			break;
			
		case VK_RIGHT :
			
			if(popPageIdx == 1 && popKeyId == 'wkk_key_61'){								
				return;
			}		
			if(x==0||x==1||x==2||x==3||x==4||x==5||x==6){
				
				y = new Number(y) + 1;
				if(y>2){	
					y=0;
					if(popPageIdx == 0){
						popPageIdx = 1;
						popupInit();								
					}else if (popPageIdx == 1){
						y=2;
						popupInit();							
					}												
				}						
				doHighlight('wkk_key_'+x+''+y+'0');
			} else{
				doHighlight('wkk_key_71');
			}
			break;
		case VK_ENTER :
			
			if(popKeyId == 'wkk_key_70'){			
				checkedValues();
			} else if(popKeyId == 'wkk_key_71'){
				winClose();
			} else{
				cbChecked('wkk_key_focus_c');
			}
			
			break;
		default :
			break;
		}
		
	doHighlight("wkk_key_"+ x + "" + y);
}


/**
 * selectLangPopup Visible
 */
function selectLang(){	
	event.returnValue = false;		
	selectLangState = true;
	document.ifr.focus();	
	
	if(keyBoardType == 0){
		cancelHighlight('wkk_key_60');
		document.getElementById('layer_ifr3').style.display = "block";
	} else if(keyBoardType == 1){
		cancelHighlight('wkk_key_60');			
	} else{
		cancelHighlight('wkk_key_000');	
		document.getElementById('layer_ifr3').style.display = "block";
	}
	
	document.ifr.location.href = "./selectLangPop.html";	
	document.getElementById('layer_ifr').style.display = "block";	
	document.getElementById('layer_ifr1').style.display = "block";
	document.getElementById('layer_ifr2').style.display = "block";
}
/**
 * Selected Language Checked
 */	
function checkedValues(){
	parent.selectLangState = false;
	parent.langToggleClickState = true;
	
	parent.lagnTogglIdx = 0; //jjw_add
	
	//page1
	if(popPageIdx == 0){
		for(i=0; i<=firstPageIdx; i++){
			
			if(checkedArray[popPageIdx][i]!=null && checkedArray[popPageIdx][i] != "" && checkedArray[popPageIdx][i]!=" "){
				
				if(checkedArray[popPageIdx][i] == "wkk_key_000"){scrptSrc = '../js/lang/albanian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_010"){scrptSrc = '../js/lang/deutsch.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_020"){scrptSrc = '../js/lang/hungarian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_100"){scrptSrc = '../js/lang/arabic.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_110"){scrptSrc = '../js/lang/estonian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_120"){scrptSrc = '../js/lang/english.js';}	//indonesia
				else if(checkedArray[popPageIdx][i] == "wkk_key_200"){scrptSrc = '../js/lang/bosnian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_210"){scrptSrc = '../js/lang/finnish.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_220"){scrptSrc = '../js/lang/italian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_300"){scrptSrc = '../js/lang/bulgarian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_310"){scrptSrc = '../js/lang/french.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_320"){scrptSrc = '../js/lang/kazakh.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_400"){scrptSrc = '../js/lang/croatian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_410"){scrptSrc = '../js/lang/german.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_420"){scrptSrc = '../js/lang/english.js';}	//jjw_add
				else if(checkedArray[popPageIdx][i] == "wkk_key_500"){scrptSrc = '../js/lang/czech.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_510"){scrptSrc = '../js/lang/greek.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_520"){scrptSrc = '../js/lang/latvian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_600"){scrptSrc = '../js/lang/danish.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_610"){scrptSrc = '../js/lang/hebrew.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_620"){scrptSrc = '../js/lang/lithuanian.js';}
				
				langValue += scrptSrc+"-";						
			}			
		}		
		
		for(i=0; i<=secondPageIdx; i++){
			
			if(checkedArray[1][i]!=null && checkedArray[1][i] != "" && checkedArray[1][i]!=" "){
				
				if(checkedArray[1][i] == "wkk_key_000"){scrptSrc = '../js/lang/macedonian.js';}
				else if(checkedArray[1][i] == "wkk_key_010"){scrptSrc = '../js/lang/russian.js';}
				else if(checkedArray[1][i] == "wkk_key_020"){scrptSrc = '../js/lang/turkish.js';}
				else if(checkedArray[1][i] == "wkk_key_100"){scrptSrc = '../js/lang/english.js';}
				else if(checkedArray[1][i] == "wkk_key_110"){scrptSrc = '../js/lang/serbian.js';}
				else if(checkedArray[1][i] == "wkk_key_120"){scrptSrc = '../js/lang/ukrainian.js';}
				else if(checkedArray[1][i] == "wkk_key_200"){scrptSrc = '../js/lang/norwegian.js';}
				else if(checkedArray[1][i] == "wkk_key_210"){scrptSrc = '../js/lang/slovak.js';}
				else if(checkedArray[1][i] == "wkk_key_220"){scrptSrc = '../js/lang/uzbek_cyrrilic.js';}
				else if(checkedArray[1][i] == "wkk_key_300"){scrptSrc = '../js/lang/persian.js';}
				else if(checkedArray[1][i] == "wkk_key_310"){scrptSrc = '../js/lang/slovenian.js';}
				else if(checkedArray[1][i] == "wkk_key_320"){scrptSrc = '../js/lang/uzbek_modern latin.js';}
				else if(checkedArray[1][i] == "wkk_key_400"){scrptSrc = '../js/lang/polish.js';}
				else if(checkedArray[1][i] == "wkk_key_410"){scrptSrc = '../js/lang/spanish.js';}
				else if(checkedArray[1][i] == "wkk_key_420"){scrptSrc = '../js/lang/vietnam.js';}
				else if(checkedArray[1][i] == "wkk_key_500"){scrptSrc = '../js/lang/portuguese.js';}
				else if(checkedArray[1][i] == "wkk_key_510"){scrptSrc = '../js/lang/swedish.js';}	
				else if(checkedArray[1][i] == "wkk_key_520"){scrptSrc = '../js/lang/korean.js';}	//jjw_add
				else if(checkedArray[1][i] == "wkk_key_600"){scrptSrc = '../js/lang/romanian.js';}
				else if(checkedArray[1][i] == "wkk_key_610"){scrptSrc = '../js/lang/thai.js';}	
				
				langValue1 += scrptSrc+"-";			
			}			
		}			
	}
	
	//page2
	else if(popPageIdx == 1){
				
		for(i=0; i<=firstPageIdx; i++){
			
			if(checkedArray[0][i]!=null && checkedArray[0][i] != "" && checkedArray[0][i]!=" "){
				
				if(checkedArray[0][i] == "wkk_key_000"){scrptSrc = '../js/lang/albanian.js';}
				else if(checkedArray[0][i] == "wkk_key_010"){scrptSrc = '../js/lang/deutsch.js';}
				else if(checkedArray[0][i] == "wkk_key_020"){scrptSrc = '../js/lang/hungarian.js';}
				else if(checkedArray[0][i] == "wkk_key_100"){scrptSrc = '../js/lang/arabic.js';}
				else if(checkedArray[0][i] == "wkk_key_110"){scrptSrc = '../js/lang/estonian.js';}
				else if(checkedArray[0][i] == "wkk_key_120"){scrptSrc = '../js/lang/english.js';}	//indonesia
				else if(checkedArray[0][i] == "wkk_key_200"){scrptSrc = '../js/lang/bosnian.js';}
				else if(checkedArray[0][i] == "wkk_key_210"){scrptSrc = '../js/lang/finnish.js';}
				else if(checkedArray[0][i] == "wkk_key_220"){scrptSrc = '../js/lang/italian.js';}
				else if(checkedArray[0][i] == "wkk_key_300"){scrptSrc = '../js/lang/bulgarian.js';}
				else if(checkedArray[0][i] == "wkk_key_310"){scrptSrc = '../js/lang/french.js';}
				else if(checkedArray[0][i] == "wkk_key_320"){scrptSrc = '../js/lang/kazakh.js';}
				else if(checkedArray[0][i] == "wkk_key_400"){scrptSrc = '../js/lang/croatian.js';}
				else if(checkedArray[0][i] == "wkk_key_410"){scrptSrc = '../js/lang/german.js';}
				else if(checkedArray[0][i] == "wkk_key_420"){scrptSrc = '../js/lang/english.js';}	//jjw_add
				else if(checkedArray[0][i] == "wkk_key_500"){scrptSrc = '../js/lang/czech.js';}
				else if(checkedArray[0][i] == "wkk_key_510"){scrptSrc = '../js/lang/greek.js';}
				else if(checkedArray[0][i] == "wkk_key_520"){scrptSrc = '../js/lang/latvian.js';}
				else if(checkedArray[0][i] == "wkk_key_600"){scrptSrc = '../js/lang/danish.js';}
				else if(checkedArray[0][i] == "wkk_key_610"){scrptSrc = '../js/lang/hebrew.js';}
				else if(checkedArray[0][i] == "wkk_key_620"){scrptSrc = '../js/lang/lithuanian.js';}
				
				langValue += scrptSrc+"-";			
			}			
		}
		
				
		for(i=0; i<=secondPageIdx; i++){
			
			if(checkedArray[popPageIdx][i]!=null && checkedArray[popPageIdx][i] != "" && checkedArray[popPageIdx][i]!=" "){
				
				if(checkedArray[popPageIdx][i] == "wkk_key_000"){scrptSrc = '../js/lang/macedonian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_010"){scrptSrc = '../js/lang/russian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_020"){scrptSrc = '../js/lang/turkish.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_100"){scrptSrc = '../js/lang/english.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_110"){scrptSrc = '../js/lang/serbian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_120"){scrptSrc = '../js/lang/ukrainian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_200"){scrptSrc = '../js/lang/norwegian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_210"){scrptSrc = '../js/lang/slovak.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_220"){scrptSrc = '../js/lang/uzbek_cyrrilic.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_300"){scrptSrc = '../js/lang/persian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_310"){scrptSrc = '../js/lang/slovenian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_320"){scrptSrc = '../js/lang/uzbek_modern latin.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_400"){scrptSrc = '../js/lang/polish.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_410"){scrptSrc = '../js/lang/spanish.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_420"){scrptSrc = '../js/lang/vietnam.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_500"){scrptSrc = '../js/lang/portuguese.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_510"){scrptSrc = '../js/lang/swedish.js';}				
				else if(checkedArray[popPageIdx][i] == "wkk_key_520"){scrptSrc = '../js/lang/korean.js';}	//jjw_add
				else if(checkedArray[popPageIdx][i] == "wkk_key_600"){scrptSrc = '../js/lang/romanian.js';}
				else if(checkedArray[popPageIdx][i] == "wkk_key_610"){scrptSrc = '../js/lang/thai.js';}		
				
				langValue1 += scrptSrc+"-";	
			}					
		}					
	}	
	totalLang = langValue+langValue1;	
	setCookies(); 
	
	//alert("checkedArray::"+checkedArray);
	
	parent.document.getElementById('layer_ifr').style.display = "none";
	parent.document.getElementById('layer_ifr1').style.display = "none";
	parent.document.getElementById('layer_ifr2').style.display = "none";
			
	parent.document.form2.checkedLang.value = totalLang;	
	parent.document.form2.langToggleIdx.value = "0";	
	

	////////// toggleKey Change /////////
	//page1
	if(totalLang.split('-')[1] == "../js/lang/albanian.js"){
		parent.document.form2.langName.value = "ALB";		
	} else if(totalLang.split('-')[1] == "../js/lang/deutsch.js"){
		parent.document.form2.langName.value = "DEU";
	} else if(totalLang.split('-')[1] == "../js/lang/hungarian.js"){
		parent.document.form2.langName.value = "HUN";
	} 
	else if(totalLang.split('-')[1] == "../js/lang/arabic.js"){
		parent.document.form2.langName.value = "ARB";	

	} else if(totalLang.split('-')[1] == "../js/lang/estonian.js"){
		parent.document.form2.langName.value = "EST";
	} 
	else if(totalLang.split('-')[1] == "../js/lang/bosnian.js"){
		parent.document.form2.langName.value = "BOS";
	} else if(totalLang.split('-')[1] == "../js/lang/finnish.js"){
		parent.document.form2.langName.value = "FIN";		
	} else if(totalLang.split('-')[1] == "../js/lang/italian.js"){
		parent.document.form2.langName.value = "ITA";		
	}
	else if(totalLang.split('-')[1] == "../js/lang/bulgarian.js"){
		parent.document.form2.langName.value = "BUL";
	} else if(totalLang.split('-')[1] == "../js/lang/french.js"){
		parent.document.form2.langName.value = "FRE";
	} else if(totalLang.split('-')[1] == "../js/lang/kazakh.js"){
		parent.document.form2.langName.value = "KAZ";
	}
	else if(totalLang.split('-')[1] == "../js/lang/croatian.js"){
		parent.document.form2.langName.value = "CRO";
	} else if(totalLang.split('-')[1] == "../js/lang/german.js"){
		parent.document.form2.langName.value = "GER";
	} else if(totalLang.split('-')[1] == "../js/lang/korean.js"){
		parent.document.form2.langName.value = "KOR";
	} 
	else if(totalLang.split('-')[1] == "../js/lang/czech.js"){
		parent.document.form2.langName.value = "CZE";		
	} else if(totalLang.split('-')[1] == "../js/lang/greek.js"){
		parent.document.form2.langName.value = "GRE";
	}
	else if(totalLang.split('-')[1] == "../js/lang/danish.js"){
		parent.document.form2.langName.value = "DAN";
	} else if(totalLang.split('-')[1] == "../js/lang/hebrew.js"){
		parent.document.form2.langName.value = "HEB";
	} else if(totalLang.split('-')[1] == "../js/lang/latvian.js"){
		parent.document.form2.langName.value = "LAT";
	}
	
	//page2
	else if(totalLang.split('-')[1] == "../js/lang/lithuanian.js"){
		parent.document.form2.langName.value = "LIT";
	} else if(totalLang.split('-')[1] == "../js/lang/romanian.js"){
		parent.document.form2.langName.value = "RUM";
	} else if(totalLang.split('-')[1] == "../js/lang/thai.js"){
		parent.document.form2.langName.value = "THA";
	}
	else if(totalLang.split('-')[1] == "../js/lang/macedonian.js"){
		parent.document.form2.langName.value = "MAC";
	} else if(totalLang.split('-')[1] == "../js/lang/russian.js"){
		parent.document.form2.langName.value = "RUS";
	} else if(totalLang.split('-')[1] == "../js/lang/turkish.js"){
		parent.document.form2.langName.value = "TUR";		
	}
	else if(totalLang.split('-')[1] == "../js/lang/serbian.js"){
		parent.document.form2.langName.value = "SEB";
	} else if(totalLang.split('-')[1] == "../js/lang/ukrainian.js"){
		parent.document.form2.langName.value = "UKR";
	} 
	else if(totalLang.split('-')[1] == "../js/lang/norwegian.js"){
		parent.document.form2.langName.value = "NOR";		
	} else if(totalLang.split('-')[1] == "../js/lang/slovak.js"){
		parent.document.form2.langName.value = "SLV"; 
	} else if(totalLang.split('-')[1] == "../js/lang/uzbek_cyrrilic.js" ||
			totalLang.split('-')[1] == "../js/lang/uzbek_modern latin.js"){
		parent.document.form2.langName.value = "UZB";
	} 
	else if(totalLang.split('-')[1] == "../js/lang/persian.js"){
		parent.document.form2.langName.value = "PER";
	} else if(totalLang.split('-')[1] == "../js/lang/slovenian.js"){
		parent.document.form2.langName.value = "SLO";
	} else if(totalLang.split('-')[1] == "../js/lang/vietnam.js"){
		parent.document.form2.langName.value = "VTM";		
	} 
	else if(totalLang.split('-')[1] == "../js/lang/polish.js"){
		parent.document.form2.langName.value = "POL";
	} else if(totalLang.split('-')[1] == "../js/lang/spanish.js"){
		parent.document.form2.langName.value = "SPA";
	} 
	else if(totalLang.split('-')[1] == "../js/lang/portuguese.js"){
		parent.document.form2.langName.value = "POR";
	} else if(totalLang.split('-')[1] == "../js/lang/swedish.js"){
		parent.document.form2.langName.value = "SWE";
	} else if(totalLang.split('-')[1] == "../js/lang/korean.js"){
		parent.document.form2.langName.value = "KOR";
	} else{
		parent.document.form2.langName.value = "";
	}	
	parent.changeLanValue('lang');
	parent.toggleKeyChange();	
	if(popKeyBoardType == 0){
		parent.top.doHighlight('wkk_key_60');		
		parent.document.getElementById('layer_ifr3').style.display = "none";
	}else if(popKeyBoardType == 1){
		parent.top.doHighlight('wkk_key_60');		
	}else{
		parent.top.doHighlight('wkk_key_000');
		parent.document.getElementById('layer_ifr3').style.display = "none";
	}	
	parent.document.getElementById("hFocus").focus();
	event.returnValue = parent.onkeyDown;
	
}

function toggleTextKeyChage(nextIdx){	
	//page1	
	if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/albanian.js"){
		document.form2.langName.value = "ALB";			
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/deutsch.js"){
		document.form2.langName.value = "DEU";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/hungarian.js"){
		document.form2.langName.value = "HUN";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/arabic.js"){
		document.form2.langName.value = "ARB";		
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/estonian.js"){
		document.form2.langName.value = "EST";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/bosnian.js"){
		document.form2.langName.value = "BOS";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/finnish.js"){
		document.form2.langName.value = "FIN";		
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/italian.js"){
		document.form2.langName.value = "ITA";		
	}
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/bulgarian.js"){
		document.form2.langName.value = "BUL";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/french.js"){
		document.form2.langName.value = "FRE";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/kazakh.js"){
		document.form2.langName.value = "KAZ";
	}
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/croatian.js"){
		document.form2.langName.value = "CRO";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/german.js"){
		document.form2.langName.value = "GER";		
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/korean.js"){	
		document.form2.langName.value = "KOR";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/english.js"){	
		document.form2.langName.value = "ENG";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/czech.js"){
		document.form2.langName.value = "CZE";		
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/greek.js"){
		document.form2.langName.value = "GRE";			
	}
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/danish.js"){
		document.form2.langName.value = "DAN";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/hebrew.js"){
		document.form2.langName.value = "HEB";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/latvian.js"){
		document.form2.langName.value = "LAT";
	}
	//page2
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/lithuanian.js"){
		document.form2.langName.value = "LIT";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/romanian.js"){
		document.form2.langName.value = "RUM";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/thai.js"){
		document.form2.langName.value = "THA";
	}
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/macedonian.js"){
		document.form2.langName.value = "MAC";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/russian.js"){
		document.form2.langName.value = "RUS";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/turkish.js"){
		document.form2.langName.value = "TUR";		
	}
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/serbian.js"){
		document.form2.langName.value = "SEB";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/ukrainian.js"){
		document.form2.langName.value = "UKR";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/norwegian.js"){
		document.form2.langName.value = "NOR";		
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/slovak.js"){
		document.form2.langName.value = "SLV";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/uzbek_cyrrilic.js" ||
			totalcheckedValue.split('-')[nextIdx] == "../js/lang/uzbek_modern latin.js"){
		document.form2.langName.value = "UZB";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/persian.js"){
		document.form2.langName.value = "PER";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/slovenian.js"){
		document.form2.langName.value = "SLO";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/vietnam.js"){
		document.form2.langName.value = "VTM";		
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/polish.js"){
		document.form2.langName.value = "POL";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/spanish.js"){
		document.form2.langName.value = "SPA";
	} 
	else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/portuguese.js"){
		document.form2.langName.value = "POR";
	} else if(totalcheckedValue.split('-')[nextIdx] == "../js/lang/swedish.js"){
		document.form2.langName.value = "SWE";
	} else{	
		//jjw_add
		if(lagnTogglIdx == 0 && totalcheckedValue.split('-')[nextIdx] == ""){
			parent.document.form2.langName.value = " ";			
			parent.toggleKeyChange();	
			if(parent.document.form2.langName.value != " "){
				if(keyBoardType == 0){
					parent.doHighlight('wkk_key_61');
				} else if(keyBoardType == 1){
					parent.doHighlight('wkk_key_61');
				} else{
					parent.doHighlight('wkk_key_116');
				}
			}			
		} else{			
			if(totalcheckedValue.split('-')[nextIdx] == ""
				){	
				toggleTextKeyChage(0);
			}
			toggleKeyChange();	
			if(document.form2.langName.value != " "){
				if(keyBoardType == 0){
					doHighlight('wkk_key_61');
				} else if(keyBoardType == 1){
					doHighlight('wkk_key_61');
				} else{
					doHighlight('wkk_key_116');
				}
			}
		}	
	}
	toggleKeyChange();	
	if(document.form2.langName.value != " " && lagnTogglIdx!=0){
		if(keyBoardType == 0){
			doHighlight('wkk_key_61');
		} else if(keyBoardType == 1){
			doHighlight('wkk_key_61');
		} else{
			doHighlight('wkk_key_116');
		}
	}	
}


/**
 * Language Toggle
 */
function changeLanValue(gubun){	
	totalcheckedValue = document.form2.checkedLang.value;
	langToggleState = 1;		
		
	//js Dynamic Create
	var div = document.getElementById("langDiv");	
	var _script = document.createElement('script');
	_script.type = 'text/javascript';
		
	switch(lagnTogglIdx){
		case 0:			
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){	
				
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;
			}else{
				_script.src = chckLang.split('-')[0];
				lagnTogglIdx = 0;
				toggleTextKeyChage(lagnTogglIdx);
			}
			break;		
		case 1:			
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}
			break;
		
		case 2:
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}
			break;
			
		case 3:		
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;		
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}			
			break;
			
		case 4:		
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;		
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}
			break;

		case 5:		
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;		
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}
			break;
			
		case 6:		
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;	
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}
			break;
			
		case 7:		
			toggleTextKeyChage(Number(lagnTogglIdx+1));			
			if(totalcheckedValue.split('-')[lagnTogglIdx]!=null &&
				totalcheckedValue.split('-')[lagnTogglIdx]!="" &&
				totalcheckedValue.split('-')[lagnTogglIdx]!=" "
					){
				_script.src = totalcheckedValue.split('-')[lagnTogglIdx];
				lagnTogglIdx++;		
			}else{
				_script.src = totalcheckedValue.split('-')[0];
				lagnTogglIdx = 1;
				toggleTextKeyChage(lagnTogglIdx);
			}		
			break;
			
		case 8:
			_script.src = totalcheckedValue.split('-')[0];
			lagnTogglIdx = 1;
			
			//document.form2.langName.value = "KOR";
			
			//toggleKeyChange();
			toggleTextKeyChage(lagnTogglIdx);
			
			if(keyBoardType == 0){
				doHighlight('wkk_key_61');
			} else if(keyBoardType == 1){
				doHighlight('wkk_key_61');
			} else{
				doHighlight('wkk_key_116');
			}
			
		case 9:
			_script.src = totalcheckedValue.split('-')[0];
			lagnTogglIdx = 0;	
			//toggleKeyChange();		
			if(keyBoardType == 0){
				doHighlight('wkk_key_61');
			} else if(keyBoardType == 1){
				doHighlight('wkk_key_61');
			} else{
				doHighlight('wkk_key_116');
			}
		default:		
			break;
		}
	
	div.removeChild(div.children(0));						
	div.appendChild(_script);
	
	
	/* IE
	document.onreadystatechange= function () {		
		   if (document.readyState == 'complete'
		         || document.readyState == 'loaded') init();
	}*/
	
	
	//Firefox, Chrome 
	_script.onload = function () {
		keyboardInit(keyBoardType);		
	}
}




/*****************************************************************/
/******************** Language Popup End *************************/
/*****************************************************************/






//add KeyHelp
/*
function processKeyHelpOver(elementId, prefix) {
	//alert("processKeyHelpOver");
	
	fullModeCtrlView = 1;
	if(prefix != null && prefix != 'undefined') {
		setElementBgColor(prefix + "kh_"+elementId,"rgb(82,80,101)");
	} else {
		if (document.getElementById('khImg'+elementId) == null || 
				document.getElementById('khImg'+elementId).style.visibility != 'hidden') {
			setElementBgColor("kh_"+elementId,"rgb(82,80,101)");
		}
	}
}

function processKeyHelpOut(elementId, prefix) {
	//alert("processKeyHelpOut");
	fullModeCtrlView = 1;
	if(prefix != null && prefix != 'undefined') {
		setElementBgColor(prefix +"kh_"+elementId,"rgb(46,46,46)" );
	} else {
		setElementBgColor("kh_"+elementId,"rgb(46,46,46)" );
	}
}

function processKeyHelp(actionId) {
	//alert("processKeyHelp : "+actionId);
	fullModeCtrlView = 1;
	switch(actionId) {
		case 'option' :
			//full screen mode auto??
			break;
		case 'back' :
			//alert("back" );
			window.NetCastReturn(VK_BACK);
			break;
		case 'home' :
			window.NetCastReturn(VK_BACK);
			break;
		case 'exit' :
			window.NetCastExit();
			break;
		
		//deleteList
		case 'deleteList':
			deleteList();
			break;
		
		default :
			break;
	}
}





//add KeyHelp Area TV/Media
function keyHelpInit(){
	var userAgent = new String(navigator.userAgent);
	var LG_TV = document.getElementById("LG_TV");
	var LG_MEDIA = document.getElementById("LG_MEDIA");
	
	if (userAgent.search("LG NetCast.TV") > -1 ) {	
		LG_TV.style.display = "";
	} else if (userAgent.search("LG NetCast.Media") > -1 ){
		LG_MEDIA.style.display = "";
	} else {
	    //alert("other browser");
	}	
}

*/



// cookie handle

function setCookies(){
	
	if(getCookie("chckArrP1") != "" && getCookie("chckArrP2") != "" && getCookie("chckLang") != ""){		
		//clear cookie_test_status cookie if it have been set
		delCookie("chckArrP1", "/");
		delCookie("chckArrP2", "/");
		delCookie("chckLang", "/");
	}
	var today = new Date();	
	var expiry = today.setTime(today.getTime() + 1000*60*60*999999999999); //new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000); 	
		setCookie("checkedArrayP1", checkedArray[0], expiry);
		setCookie("checkedArrayP2", checkedArray[1], expiry);
		setCookie("totalLang", totalLang, expiry);

}

function getCookies(){

	chckLang = getCookie("totalLang");
	chckArrP1 =  getCookie("checkedArrayP1");
	chckArrP2 = getCookie("checkedArrayP2");
	document.form2.cookieP1KeyId.value = chckArrP1;
	document.form2.cookieP2KeyId.value = chckArrP2;
	//alert("chckArrP1 : " + chckArrP1 + " chckArrP2 : " + chckArrP2);
	cookieInit(chckLang);
}


function setCookie(key,value,expire) {
	var cookieDate = new Date();
	cookieDate.setDate(cookieDate.getDate() + parseInt(expire));
	document.cookie = key + "=" + escape(value) + "; expires=" + cookieDate.toGMTString() + "; path=/";
}


function getCookie(key) {
	   var cookie = document.cookie;
	   var first = cookie.indexOf(key+"=");
	   if (first>=0) {
	       var str = cookie.substring(first,cookie.length);
	       var last = str.indexOf(";");
	       if (last<0) {
	           last = str.length;
	       }
	       str = str.substring(0,last).split("=");
	       return unescape(str[1]);
	   } else {
	       return null;
	   }
	   
}

function delCookie(key) {
	//	alert("delCookie :: " + key);
	   today = new Date();
	   today.setDate(today.getDate() - 1);
	   document.cookie = key + "=; path=/; expires=" + today.toGMTString() + ";";
}


function cookieInit(chckLang){

	document.form2.checkedLang.value = chckLang;	
	document.form2.langToggleIdx.value = "0";	

	////////// toggleKey Change /////////
	//page1
	if(chckLang.split('-')[0] == "../js/lang/albanian.js"){
		document.form2.langName.value = "ALB";		
	} else if(chckLang.split('-')[0] == "../js/lang/deutsch.js"){
		document.form2.langName.value = "DEU";
	} else if(chckLang.split('-')[0] == "../js/lang/hungarian.js"){
		document.form2.langName.value = "HUN";
	} 
	else if(chckLang.split('-')[0] == "../js/lang/arabic.js"){
		document.form2.langName.value = "ARB";		
	} else if(chckLang.split('-')[0] == "../js/lang/estonian.js"){
		document.form2.langName.value = "EST";
	} 
	else if(chckLang.split('-')[0] == "../js/lang/bosnian.js"){
		document.form2.langName.value = "BOS";
	} else if(chckLang.split('-')[0] == "../js/lang/finnish.js"){
		document.form2.langName.value = "FIN";		
	} else if(chckLang.split('-')[0] == "../js/lang/italian.js"){
		document.form2.langName.value = "ITA";		
	}
	else if(chckLang.split('-')[0] == "../js/lang/bulgarian.js"){
		document.form2.langName.value = "BUL";
	} else if(chckLang.split('-')[0] == "../js/lang/french.js"){
		document.form2.langName.value = "FRE";
	} else if(chckLang.split('-')[0] == "../js/lang/kazakh.js"){
		document.form2.langName.value = "KAZ";
	}
	else if(chckLang.split('-')[0] == "../js/lang/croatian.js"){
		document.form2.langName.value = "CRO";
	} else if(chckLang.split('-')[0] == "../js/lang/german.js"){
		document.form2.langName.value = "GER";
	} else if(chckLang.split('-')[0] == "../js/lang/korean.js"){
		document.form2.langName.value = "KOR";
	} 
	else if(chckLang.split('-')[0] == "../js/lang/czech.js"){
		document.form2.langName.value = "CZE";		
	} else if(chckLang.split('-')[0] == "../js/lang/greek.js"){
		document.form2.langName.value = "GRE";
	}
	else if(chckLang.split('-')[0] == "../js/lang/danish.js"){
		document.form2.langName.value = "DAN";
	} else if(chckLang.split('-')[0] == "../js/lang/hebrew.js"){
		document.form2.langName.value = "HEB";
	} else if(chckLang.split('-')[0] == "../js/lang/latvian.js"){
		document.form2.langName.value = "LAT";
	}
	
	//page2
	else if(chckLang.split('-')[0] == "../js/lang/lithuanian.js"){
		document.form2.langName.value = "LIT";
	} else if(chckLang.split('-')[0] == "../js/lang/romanian.js"){
		document.form2.langName.value = "RUM";
	} else if(chckLang.split('-')[0] == "../js/lang/thai.js"){
		document.form2.langName.value = "THA";
	}
	else if(chckLang.split('-')[0] == "../js/lang/macedonian.js"){
		document.form2.langName.value = "MAC";
	} else if(chckLang.split('-')[0] == "../js/lang/russian.js"){
		document.form2.langName.value = "RUS";
	} else if(chckLang.split('-')[0] == "../js/lang/turkish.js"){
		document.form2.langName.value = "TUR";		
	}
	else if(chckLang.split('-')[0] == "../js/lang/serbian.js"){
		document.form2.langName.value = "SEB";
	} else if(chckLang.split('-')[0] == "../js/lang/ukrainian.js"){
		document.form2.langName.value = "UKR";
	} 
	else if(chckLang.split('-')[0] == "../js/lang/norwegian.js"){
		document.form2.langName.value = "NOR";		
	} else if(chckLang.split('-')[0] == "../js/lang/slovak.js"){
		document.form2.langName.value = "SLV"; 
	} else if(chckLang.split('-')[0] == "../js/lang/uzbek_cyrrilic.js" ||
			chckLang.split('-')[0] == "../js/lang/uzbek_modern latin.js"){
		document.form2.langName.value = "UZB";
	} 
	else if(chckLang.split('-')[0] == "../js/lang/persian.js"){
		document.form2.langName.value = "PER";
	} else if(chckLang.split('-')[0] == "../js/lang/slovenian.js"){
		document.form2.langName.value = "SLO";
	} else if(chckLang.split('-')[0] == "../js/lang/vietnam.js"){
		document.form2.langName.value = "VTM";		
	} 
	else if(chckLang.split('-')[0] == "../js/lang/polish.js"){
		document.form2.langName.value = "POL";
	} else if(chckLang.split('-')[0] == "../js/lang/spanish.js"){
		document.form2.langName.value = "SPA";
	} 
	else if(chckLang.split('-')[0] == "../js/lang/portuguese.js"){
		document.form2.langName.value = "POR";
	} else if(chckLang.split('-')[0] == "../js/lang/swedish.js"){
		document.form2.langName.value = "SWE";
	} else{
		document.form2.langName.value = "ENG";
	}
	
	  toggleKeyChange();
	 changeKeyValue(keyBoardType);

}

 Array.prototype.remove = function(idx,popIdx){
 	var temp = new Array(new Array(),new Array());
    var i = this.length;

	//alert("idx ::" + idx);
   while(i > idx){
       var kk = this.pop();
       temp[popIdx].push(kk);
       i--;
   }	
	
	//alert("temp::"+ temp[popIdx]);
	
   for(var i=temp[popIdx].length - 2; i>=0; i--){
   	//	alert(i + " :: temp[popIdx][i] :: " + temp[popIdx][i]);
       this.push(temp[popIdx][i]);
   }
   	if(popPageIdx == 0){
	   cKeyId1 = this;
	}else{
	   cKeyId2 = this;
	}
	//alert("this :: " + this);
 
}


function setCookieTopLeft(cKey){
	cTopIndex = cKey.charAt(8);
	cLeftIndex = cKey.charAt(9);
	switch(cTopIndex){
		case '0' :
			cTop = 87;
			break;
		case '1' :
			cTop = 138;	
			break;	
		case '2' :
			cTop = 190;
			break;
		case '3' :
			cTop = 242;
			break;
		case '4' :
			cTop = 294;
			break;
		case '5' :
			cTop = 346;
			break;		
		case '6' :
			cTop = 398 ;
			break;				
	}
	
	switch(cLeftIndex){
		case '0' :
			cLeft = 70;
			break;
		case '1' :
			cLeft = 275;
			break;
		case '2' :
			cLeft = 480;
			break;			
	}
	return;
}



/***************************************************/
/************** jjw _add Start *********************/
/***************************************************/
//jjw_add(20101214)
//KeyHelp
function processKeyHelpOver(elementId, prefix) {		
	
	if(prefix != null && prefix != 'undefined') {	
		document.getElementById(prefix+'kh_'+elementId).style.width = "197px";
		document.getElementById(prefix+'kh_'+elementId).style.height = "59px";
		setElementBackground(prefix+"kh_"+elementId,"url(../image/KEYHELP/KEYHELP_FOCUS.png)");
	} else {
		if (document.getElementById('khImg'+elementId) == null || 
				document.getElementById('khImg'+elementId).style.visibility != 'hidden') {				
			document.getElementById('kh_'+elementId).style.width = "197px";
			document.getElementById('kh_'+elementId).style.height = "59px";
			setElementBackground("kh_"+elementId,"url(../image/KEYHELP/KEYHELP_FOCUS.png)");
		}
	}
}

function processKeyHelpOut(elementId, prefix) {
	
	if(prefix != null && prefix != 'undefined') {
		document.getElementById(prefix+'kh_'+elementId).style.width = "191px";
		document.getElementById(prefix+'kh_'+elementId).style.height = "56px";
		setElementBackground(prefix+"kh_"+elementId,"url(../image/KEYHELP/KEYHELP_NORMAL.png)");
	} else {
		if (document.getElementById('kh_'+elementId) != null){
			document.getElementById('kh_'+elementId).style.width = "191px";
			document.getElementById('kh_'+elementId).style.height = "56px";
		}
		setElementBackground("kh_"+elementId,"url(../image/KEYHELP/KEYHELP_NORMAL.png)");
	}
}

function processKeyHelp(actionId) {

	switch(actionId) {
		case 'option' :
			//full screen mode auto??
			break;
		case 'full' :
			//alert('full screen');
			break;
		case 'scan' :
			//alert('scan screen');
			break;
		case 'back' :
			setTxtCookies();			
			window.history.back();
			break;
		case 'home' :
			window.NetCastReturn(VK_BACK);
			break;
		case 'exit' :
			window.NetCastExit();
			break;
		case 'nextPage' :
		{
			if (pageNo+1 < dataCount/5) {
				clickArr('true');
			}
			break;
		} 
		case 'prevPage' :
		{
			if (pageNo > 0) {
				clickArr('false');
			}
			break;
		}
		default :
			break;
	}
}

//key
function keyHelpVisible(){
	userAgent = new String(navigator.userAgent);
	var LG_TV = document.getElementById("key_tv");
	var LG_TV_BG = document.getElementById("key_tv_bg");
	var LG_MEDIA = document.getElementById("key_bdp");
	var LG_MEDIA_BG = document.getElementById("key_bdp_bg");
	if (userAgent.search("LG NetCast.TV") > -1 ) {	
		if(LG_TV_BG!=null){
			LG_TV_BG.style.display = "";
		}
		LG_TV.style.display = "";		
		versionStr = "";	
	} else if (userAgent.search("LG NetCast.Media") > -1 ){
		if(LG_MEDIA_BG!=null){
			LG_MEDIA_BG.style.display = "";
		}
		LG_MEDIA.style.display = "";
		versionStr = "";	
	} else {	
	  // alert("other browser");	    	   
	}
}
function keyHelpHidden(){
	userAgent = new String(navigator.userAgent);
	var LG_TV = document.getElementById("key_tv");
	var LG_TV_BG = document.getElementById("key_tv_bg");
	var LG_MEDIA = document.getElementById("key_bdp");
	var LG_MEDIA_BG = document.getElementById("key_bdp_bg");
	if (userAgent.search("LG NetCast.TV") > -1 ) {	
		if(LG_TV_BG!=null){
			LG_TV_BG.style.display = "none";
		}
		LG_TV.style.display = "none";		
		versionStr = "";	
	} else if (userAgent.search("LG NetCast.Media") > -1 ){
		if(LG_MEDIA_BG!=null){
			LG_MEDIA_BG.style.display = "none";
		}
		LG_MEDIA.style.display = "none";
		versionStr = "";	
	} else {	
	  // alert("other browser");	    	   
	}
}

function getUserAgent() {
	
	userAgent = new String(navigator.userAgent);
	var LG_TV = document.getElementById("key_tv");
	var LG_TV_BG = document.getElementById("key_tv_bg");
	var LG_MEDIA = document.getElementById("key_bdp");
	var LG_MEDIA_BG = document.getElementById("key_bdp_bg");

	if (userAgent.search("LG NetCast.TV") > -1 ) {	
		if(LG_TV_BG!=null){
			LG_TV_BG.style.display = "";
		}
		LG_TV.style.display = "";		
		versionStr = "";	
	} else if (userAgent.search("LG NetCast.Media") > -1 ){
		if(LG_MEDIA_BG!=null){
			LG_MEDIA_BG.style.display = "";
		}
		LG_MEDIA.style.display = "";
		versionStr = "";	
	} else {	
		if(LG_TV_BG!=null){
			LG_TV_BG.style.display = "";
		}
		LG_TV.style.display = "";		
		versionStr = "";	
	}
}


/***************************************************/
/************** jjw _add End *********************/
/***************************************************/