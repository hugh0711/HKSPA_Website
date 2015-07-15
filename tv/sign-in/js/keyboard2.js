
/**
 * current page number  
 */
var currentPageIdx = 0;
var currentKeyId = "";
var currentCaretIdx = 0;

var miniPopUpSupport = false;
var miniPopUpInfoObjects;
var miniPopUpActivated = false;
var currentPopUpInfo = null;
var currentPopUpKeyId = "";

var idx;
var gubun = 'lang';

var bgImage = "";
var blackBgImage = "";
var flag = true;

var autoSign;

/**
 * @param type (0 : Layout1 / 1 : Layout2 / 3: Layout3)
 */ 
function keyboardInit(type) {	
	getTxtCookies();
	miniPopUpInfoObjects = new Array();
	keyBoardType = type;
	document.form2.layout.value = type;
	document.getElementById(txtid).focus();

	currentPageIdx = new Number(pageCnt) -1;
	changeKeyValue(gubun);
	toggleKeyChange(); 
	initialize();
	miniPopUpSupport = miniPopUpInfoObjects.length > 0 ? true : false;
	getUserAgent();
	if(langToggleState==0){
		currentKeyId  = null;
		currentPopUpKeyId = null;
		setNewMode(0);
		currentCaretIdx = 0;
		getCookies();
	}

	setTdElementText("versionInfo", versionStr);
}

//set label
function toggleKeyChange(){	
	
	SELECTED_LANG_LABEL = document.form2.langName.value;		
	
	if(keyBoardType==0){	//Layout1
		setTdElementText("wkk_key_58", "登入");
		setTdElementText("wkk_key_59", "返回");
		setInnerHtml("wkk_desc", replaceAll(DESC_LABEL,"\n", "<br>"));
				
		setInnerHtml("wkk_key_61", SELECTED_LANG_LABEL);	//Lang Toggle
		setInnerHtml("wkk_key_62", STYLE_LABEL);			//s/l Toggle
		setInnerHtml("wkk_key_63", CHARACTER_LABEL);		//Character

	}else if(keyBoardType==1){	//Layout2
		
		setTdElementText("wkk_key_58", "登入");
		setTdElementText("wkk_key_59", "返回");
		
		setInnerHtml("wkk_key_61", SELECTED_LANG_LABEL);	//Lang Toggle
		setInnerHtml("wkk_key_62", STYLE_LABEL);			//s/l Toggle
		setInnerHtml("wkk_key_63", VH_CHAR_LABEL);			//Character		
		
		setElementBackground("wkk_key_61", blackBgImage );
		setElementBackground("wkk_key_62", blackBgImage );
		setElementBackground("wkk_key_63", blackBgImage );		
		
	}else {	//Layout3
		
		setTdElementText("wkk_key_58", "登入");
		setTdElementText("wkk_key_59", "返回");			
		setInnerHtml("wkk_key_116", SELECTED_LANG_LABEL);	//Lang Toggle
		setInnerHtml("wkk_key_100", STYLE_LABEL);			//s/l Toggle
		setInnerHtml("wkk_key_200", VH_CHAR_LABEL);			//Character		
		setElementBackground("wkk_key_116", blackBgImage );
		setElementBackground("wkk_key_100", blackBgImage );
	}	
}

function keyboardUnload() {
	
}

function setKeyText(keyId, value) {	
	
	var keyItem = document.getElementById(keyId);	
	
	if(keyBoardType==0){
		bgImage = "url('../image/KEYBOARD_BTN_01_N.png')";          //modify
		blackBgImage = "url('../image/KEYBOARD_BTN_02_N.png')";
	}else if(keyBoardType==1){
		bgImage = "url('../image/vertical/VER_KEYBOARD_BTN_01_N.png')";
		blackBgImage = "url('../image/vertical/VER_KEYBOARD_BTN_02_N.png')";
	}else if(keyBoardType==2){
		bgImage = "url('../image/horizontal/HOR_KEYBOARD_BTN_01_N.png')";
		blackBgImage = "url('../image/horizontal/HOR_KEYBOARD_BTN_02_N.png')";
	}
		
	if(keyItem != null) {
		keyItem.firstChild.nodeValue = value;		
		if(isBlackKey(currentPageIdx, keyId)) {			
			setElementBackground(keyId, blackBgImage );
		} else {
			setElementBackground(keyId, bgImage );
		}
	}
}

function processKeyDown(event) {
	if(selectLangState){
		return;
	}
	
	var keyCode;
	if(window.event) { // IE
		
		keyCode = event.keyCode;
	} else if(event.which) { // Netscape/Firefox/Opera
		keyCode = event.which;
	} else {
		alert("Unknown event type.");
		return ;
	}

	switch( keyCode ) {
		case VK_UP :
		case VK_DOWN :
		case VK_LEFT :
		case VK_RIGHT :
			if(Main.screen == "fail") {
				Display.hideStatus();
			} 
			if(miniPopUpActivated) {
				if(currentPopUpKeyId == null) {
					doHighlightPopUp("wkk_p"+currentPopUpInfo.popUpId+"_00");
				} else {
					var nextKey = getNextKeyIdPopUp(currentPopUpKeyId, keyCode);
					if(nextKey != null) {
						if(Main.screen == "true") {
						cancelHighlightPopUp();
						doHighlightPopUp(nextKey);
						}
					} 
				}
			} else {
				if( currentKeyId == null ) {
					//doHighlight("wkk_key_00");
					if(keyBoardType == 0 || keyBoardType == 1) {
						doHighlight("wkk_key_00");
					}else if(keyBoardType == 2){
						doHighlight("wkk_key_000");
					}
				} else {
					var nextKey = getNextKeyId(currentPageIdx, currentKeyId,  keyCode);
			//		alert("currentKeyId : " + currentKeyId + " nextKey : " + nextKey );
				
					//add 2 input fields
					if(keyBoardType==0){
						if(currentKeyId == "wkk_tx2" && nextKey == "wkk_tx2"){
							cancelHighlight("wkk_tx");
						}else if(currentKeyId == "wkk_tx" && nextKey == "wkk_key_00"){
							doHighlight("wkk_key_00");
						}
					}else if(keyBoardType==1){
			
					}else{
						if(currentKeyId == "wkk_tx" && nextKey == "wkk_tx"){
							cancelHighlight("wkk_tx2");
						}
					}
					
					
					
					if(nextKey != null) {
						cancelHighlight(currentKeyId);
						doHighlight(nextKey);
					} 
				}
			}

			break;
		case VK_ENTER :			

			if(Main.screen == "fail") {
				Display.hideStatus();
			} 
			if ( currentKeyId != null ) {					
					execKey(currentKeyId);	
					setInputFocus();
			}
			
			break;
		case 16 :
			//alert(getCaretPosition());
			break;
		case VK_INFO :
			document.location.reload();
			break;
		case VK_BACK :
			if(miniPopUpActivated) {
				doInactivatePopUp();
			} else {
				if ( Main.screen == "true") {
					Main.saveLogin();	
					window.history.back();
				} else if ( Main.screen == "fail") {
					Display.hideStatus();
				}
			}
			break;
		default :
			if(miniPopUpActivated) {
				//do nothing.
			} else {
				var key = getKeyIdFromKeyCode(keyCode);
				if(key != null) {
					execKey(key);
					doHighlight(key);
					currentKeyId = key;
				}
			}
			break;
	}
}

/**
 * doHighlight 
 * key Ids 
 * 		- wkk_key_51 : switch page key
 * 		- wkk_key_57 : back space key
 * 		- wkk_key_58 : ok key
 * 		- wkk_key_59 : cancel key
 * 		- wkk_tx : text bar
 * 		- wkk_key_53 : space key
 * keyBoardType : ( 0 : Layout1 / 1 : Layout2 / 3 : Layout3 )
 */ 
function doHighlight(keyId) {
	
	document.getElementById(txtid).focus();

	/*********************************************************************/
	/*********************  KeyBoard Layout 1 Start  *********************/
	/*********************************************************************/
	if(keyBoardType==0){
		
		// OK
		if (keyId == 'wkk_key_58') {  
			setElementBackground("wkk_key_58", "url('../image/BTN_FOCUS.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");			
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");

		//CANCEL	
		} else if (keyId == 'wkk_key_59') {	
			
			setElementBackground("wkk_key_59", "url('../image/BTN_FOCUS.png')");
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			
		//SPACE	
		}  else if ( keyId == 'wkk_key_66' ) {			
			
			var top = document.getElementById("wkk_key_6").offsetTop - 10;
			var left = document.getElementById("wkk_key_66").offsetLeft - 8;
			var e = document.getElementById("wkk_key_focus_s");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);			
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_l_arrow2", false);
			setElementVisibility("wkk_key_focus_r_arrow2", false);			
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");
			
		//BACK SPACE	
		} else if ( keyId == 'wkk_key_67' ) {	
			
			var top = document.getElementById("wkk_key_6").offsetTop - 10;
			var left = document.getElementById("wkk_key_67").offsetLeft - 9;
			var e = document.getElementById("wkk_key_focus_b");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);			
			setElementVisibility("wkk_key_focus_l_arrow2", false);
			setElementVisibility("wkk_key_focus_r_arrow2", false);			
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");	

		//Left Arrow
		} else if ( keyId == 'wkk_key_64' ) {	
						
			var top = document.getElementById("wkk_key_6").offsetTop-8;
			var left = document.getElementById("wkk_key_54").offsetLeft - 9;
			var e = document.getElementById("wkk_key_focus_l_arrow");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);						
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_l_arrow2", false);
			setElementVisibility("wkk_key_focus_r_arrow2", false);			
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");
		
			
		//Rigth Arrow
		} else if ( keyId == 'wkk_key_65' ) {	
			var top = document.getElementById("wkk_key_6").offsetTop-8;
			var left = document.getElementById("wkk_key_55").offsetLeft - 9;
			var e = document.getElementById("wkk_key_focus_r_arrow");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);			
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_l_arrow2", false);
			setElementVisibility("wkk_key_focus_r_arrow2", false);			
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");

		} else if ( keyId == 'wkk_tx') {
			setElementBackground('wkk_tx', "url('../image/login/LOGIN_INPUT_FOCUS.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);	
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");	
		
		}  else if ( keyId == 'wkk_tx2') {
			setElementBackground('wkk_tx2', "url('../image/login/LOGIN_INPUT_FOCUS.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);	
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");
	
			
		} else if( isHighlightableKey(currentPageIdx, keyId) ) {	
						
			var topIndex = keyId.charAt(8);			
			var top = document.getElementById("wkk_key_"+topIndex).offsetTop - 10;
			var left = document.getElementById(keyId).offsetLeft - 9;
			var e;
			
			if( keyId == 'wkk_key_61' || keyId == 'wkk_key_62' ){
				e = document.getElementById("wkk_key_focus_n1");
				setElementVisibility("wkk_key_focus_n", false);
			} else{
				e = document.getElementById("wkk_key_focus_n");
				setElementVisibility("wkk_key_focus_n1", false);
			}
			
			e.style.top = top + "px";
			e.style.left = left + "px";
			var val = getKeyValue(keyId);
			
			if(val == "<") {
				e.innerHTML = "&lt;";
			} else if(val == "&"){
				e.innerHTML = "&"+val;
			} else {				
				e.innerHTML = val+"";
			}
			e.style.visibility = "";
			
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_l_arrow2", false);
			setElementVisibility("wkk_key_focus_r_arrow2", false);			
			setElementBackground(txtid, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('../image/BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('../image/BTN_NORMAL.png')");
	
		}
		
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	}else if(keyBoardType==1){
		
		// OK 
		if (keyId == 'wkk_key_58') { 
			
			setElementBackground("wkk_key_58", "url('../image/vertical/VER_BTN_FOCUS.png')");
			setElementBackground("wkk_key_59", "url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false); 
			setElementVisibility("wkk_key_focus_st", false); 
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			
		//CANCEL
		} else if (keyId == 'wkk_key_59') {	
			
			setElementBackground("wkk_key_59", "url('../image/vertical/VER_BTN_FOCUS.png')");
			setElementBackground("wkk_key_58", "url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementVisibility("wkk_key_focus_st", false); 
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			
		
		//SPACE	
		} else if ( keyId == 'wkk_key_64' ) {	
			
			var top = document.getElementById("wkk_key_6").offsetTop-26;			
			var left = document.getElementById("wkk_key_64").offsetLeft - 8;
			var e = document.getElementById("wkk_key_focus_s");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
		
		//BACK SPACE
		} else if ( keyId == 'wkk_key_65' ) {	
		
			var top = document.getElementById("wkk_key_6").offsetTop-26;
			var left = document.getElementById("wkk_key_65").offsetLeft - 9;
			var e = document.getElementById("wkk_key_focus_b");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");		
			
		//Left Arrow
		} else if ( keyId == 'wkk_key_54' ) {	
					
			var top = document.getElementById("wkk_key_5").offsetTop-8;
			var left = document.getElementById("wkk_key_54").offsetLeft - 9;
			var e = document.getElementById("wkk_key_focus_l_arrow");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			
		//Right Arrow
		} else if ( keyId == 'wkk_key_55' ) {	
			
			var top = document.getElementById("wkk_key_5").offsetTop-8;
			var left = document.getElementById("wkk_key_55").offsetLeft - 9;
			var e = document.getElementById("wkk_key_focus_r_arrow");
			e.style.top = top + "px";
			e.style.left = left + "px";
			e.style.visibility = "";
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			
		}  else if ( keyId == 'wkk_tx') {			
			setElementBackground('wkk_tx', "url('../image/vertical/VER_SEARCH_INPUT_FOCUS.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_l", false);		
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			
		}else if ( keyId == 'wkk_tx2') {			
			setElementBackground('wkk_tx2', "url('../image/vertical/VER_SEARCH_INPUT_FOCUS.png')");
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_l", false);		
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementVisibility("wkk_key_focus_c", false);
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			
		} else if( isHighlightableKey(currentPageIdx, keyId) ) {
			
			var topIndex = keyId.charAt(8);			
			var top = document.getElementById("wkk_key_"+topIndex).offsetTop - 8;
			var left = document.getElementById(keyId).offsetLeft - 9;
			var e = "";
			
			if(keyId == 'wkk_key_61'){
				e = document.getElementById("wkk_key_focus_m2");
				setElementVisibility("wkk_key_focus_n", false);
				setElementVisibility("wkk_key_focus_st", false);
				setElementVisibility("wkk_key_focus_c", false);				
			} else if(keyId == 'wkk_key_62'){
				e = document.getElementById("wkk_key_focus_st");
				setElementVisibility("wkk_key_focus_n", false);
				setElementVisibility("wkk_key_focus_m2", false);
				setElementVisibility("wkk_key_focus_c", false);				
			} else if(keyId == 'wkk_key_63'){
				e = document.getElementById("wkk_key_focus_c");
				setElementVisibility("wkk_key_focus_n", false);
				setElementVisibility("wkk_key_focus_st", false);
				setElementVisibility("wkk_key_focus_m2", false);				
			} else{
				
				e = document.getElementById("wkk_key_focus_n");
				setElementVisibility("wkk_key_focus_m2", false);
				setElementVisibility("wkk_key_focus_st", false);
				setElementVisibility("wkk_key_focus_c", false);
			}
			
			e.style.top = top + "px";
			e.style.left = left + "px";
			var val = getKeyValue(keyId);				
			if(val == "<") {
				e.innerHTML = "&lt;";
			} else if(val == "&"){
				e.innerHTML = "&"+val;
			} else {
				e.innerHTML = val;	
			}
			e.style.visibility = "";
			
			setElementVisibility("wkk_key_focus_m", false);			
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			//setElementVisibility("wkk_key_focus_c", false);
			setElementVisibility("wkk_key_focus_r_arrow", false);
			setElementVisibility("wkk_key_focus_l_arrow", false);
			setElementBackground(txtid, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
			setElementBackground("wkk_key_58", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
			setElementBackground("wkk_key_59", "url('url('../image/vertical/VER_BTN_NORMAL.png')");
		}
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 3 Start  *********************/
	/*********************************************************************/	
	}else{
		
		var x = keyId.charAt(8);
  		var y = keyId.charAt(9);
  			
  			// OK
			if (keyId == 'wkk_key_58') { 
				
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_FOCUS.png')");
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
			} else if( keyId == 'wkk_key_000' ) {
				var top = document.getElementById("wkk_key_0").offsetTop - 10;
				var left = document.getElementById("wkk_key_000").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_n4");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);					
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 	
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			}else if( keyId == 'wkk_key_014' ) { // enter 
				var top = document.getElementById("wkk_key_0").offsetTop - 10;
				var left = document.getElementById("wkk_key_014").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_n_ent");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n2", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 								
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			} else if ( keyId == 'wkk_key_015' ) {
				//for back space	
				var top = document.getElementById("wkk_key_0").offsetTop - 10;
				var left = document.getElementById("wkk_key_015").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_n2");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 								
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			}else if ( keyId == 'wkk_key_114' ) {	//Left arrow
				//for left arrow		
				var top = document.getElementById("wkk_key_1").offsetTop - 10;
				var left = document.getElementById("wkk_key_114").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_n_la");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 						
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
		}	else if ( keyId == 'wkk_key_115' ) {	//Left arrow
				//for left arrow		
				var top = document.getElementById("wkk_key_1").offsetTop - 10;
				var left = document.getElementById("wkk_key_115").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_n_ra");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 							
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
		} else if( keyId == 'wkk_key_200' ) {
				//for changeKeySetKey
				var top = document.getElementById("wkk_key_2").offsetTop - 10;
				var left = document.getElementById("wkk_key_200").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_ns");
				e.style.top = top + "px";
				e.style.left = left + "px";
				var val = getKeyValue(keyId);
				if(val == "<") {
					e.innerHTML = "&lt;";
				} else {
					e.innerHTML = val;
				}
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 						
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			}  else if( keyId == 'wkk_key_214' ) { //hidden
				var top = document.getElementById("wkk_key_2").offsetTop - 10;
				var left = document.getElementById("wkk_key_214").offsetLeft - 9;
				var e = document.getElementById("wkk_key_focus_m_hdd");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			}  else if ( keyId == 'wkk_key_205' ) {
				//for space
				var top = document.getElementById("wkk_key_2").offsetTop - 10;
				var left = document.getElementById("wkk_key_205").offsetLeft - 8;
				var e = document.getElementById("wkk_key_focus_l");
				e.style.top = top + "px";
				e.style.left = left + "px";
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 		
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			}	else if ( keyId == 'wkk_tx') {
				setElementBackground("wkk_tx", "url('../image/horizontal/HOR_SEARCH_INPUT_FOCUS.png')");
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			} else if ( keyId == 'wkk_tx2') {
				setElementBackground("wkk_tx2", "url('../image/horizontal/HOR_SEARCH_INPUT_FOCUS.png')");
				setElementVisibility("wkk_key_focus_n", false); 
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			} else if( isHighlightableKey(currentPageIdx, keyId) ) {
				var topIndex = keyId.charAt(8);
				var top = document.getElementById("wkk_key_"+topIndex).offsetTop - 10;
				var left = document.getElementById(keyId).offsetLeft - 9;			
				var e = document.getElementById("wkk_key_focus_n");
				e.style.top = top + "px";
				e.style.left = left + "px";
				var val = getKeyValue(keyId);
				if(val == "<") {
					e.innerHTML = "&lt;";
				} else if(val == "&"){
					e.innerHTML = "&"+val;
				} else {
					e.innerHTML = val;
				}
				e.style.visibility = "";
				setElementVisibility("wkk_key_focus_n1", false);
				setElementVisibility("wkk_key_focus_n2", false);
				setElementVisibility("wkk_key_focus_n3", false);
				setElementVisibility("wkk_key_focus_n4", false);						
				setElementVisibility("wkk_key_focus_ns", false);
				setElementVisibility("wkk_key_focus_l", false);
				setElementVisibility("wkk_key_focus_n_la", false);	
				setElementVisibility("wkk_key_focus_n_ra", false);
				setElementVisibility("wkk_key_focus_n_ent", false); 
				setElementVisibility("wkk_key_focus_m_hdd", false); 		
				setElementBackground(txtid, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
				setElementBackground("wkk_key_58", "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			}
			
	}
	currentKeyId = keyId;
	setElementCursor("keyId", "hand" );
	
}


/**
 * cancelHighlight
 * key Ids 
 * ==========================================
 * 1. keyBoardType == 0
 * 		- wkk_key_58 : ok key
 * 		- wkk_key_59 : cancel key
 *      - wkk_key_60 : language select key
 * 		- wkk_key_61 : language Toggle key
 * 		- wkk_key_62 : s/l Toggle key
 * 		- wkk_key_63 : char Toggle key
 * 		- wkk_key_64 : space key
 * 		- wkk_key_65 : back space key
 * 		- wkk_tx : text bar
 * ==========================================
 * 2. keyBoardType == 1
 * 		- wkk_tx : text bar
 *      - wkk_key_54 : left Arrow key
 * 		- wkk_key_55 : right Arrow key
 * 		- wkk_key_58 : ok key
 * 		- wkk_key_59 : cancel key
 *      - wkk_key_60 : language select key
 * 		- wkk_key_61 : language Toggle key
 * 		- wkk_key_62 : s/l Toggle key
 * 		- wkk_key_63 : char Toggle key
 * 		- wkk_key_64 : space key
 * 		- wkk_key_65 : back space key
 * ==========================================
 * 3. keyBoardType == 2
 * 		- wkk_tx : text bar
 * 		- wkk_key_58 : ok key
 * 		- wkk_key_59 : cancel key
 * 		- wkk_key_000 : language select key
 * 		- wkk_key_116 : language Toggle key
 * 		- wkk_key_100 : s/l Toggle key
 * 		- wkk_key_200 : char Toggle key
 * 		- wkk_key_014 : space key
 * 		- wkk_key_015 : back space key
 *      - wkk_key_114 : left Arrow key
 * 		- wkk_key_115 : right Arrow key
 * 		- wkk_key_214 : down Arrow key
 * ==========================================
 */
function cancelHighlight(keyId) {	
	//alert("cancelHighlight : "  + keyId);
	//basic
	if(keyBoardType == 0){
		if (keyId == 'wkk_tx' || keyId == 'wkk_tx2' ) {		
			setElementBackground(keyId, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
		}  else if ( keyId == 'wkk_key_58' || keyId == 'wkk_key_59' ) {
			setElementBackground(keyId, "url('../image/BTN_NORMAL_mid.png')");
		} else if(keyId == 'wkk_key_64') {		
			setElementVisibility("wkk_key_focus_l_arrow", false);
		}else if(keyId == 'wkk_key_65') {
			setElementVisibility("wkk_key_focus_r_arrow", false);
		} else if(keyId == 'wkk_key_66') {		
			setElementVisibility("wkk_key_focus_s", false);
		}else if(keyId == 'wkk_key_67') {
			setElementVisibility("wkk_key_focus_b", false);		
		} else if(isHighlightableKey(currentPageIdx, keyId)) {
			setElementVisibility("wkk_key_focus_n", false);
		}  else if(keyId==null) {
			setElementBackground(keyId, "url('../image/login/LOGIN_INPUT_NORMAL.png')");
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);	
			setElementBackground(keyId, "url('../image/BTN_NORMAL_mid.png')");
			setElementBackground(keyId, "url('../image/login/LOGIN_SPINBOX_ARROW_NORMAL_L.png')")
			setElementBackground(keyId, "url('../image/login/LOGIN_SPINBOX_ARROW_NORMAL_R.png')")
		}

		if(currentKeyId != null ) {			
			/*if(currentKeyId == 'wkk_key_61' || currentKeyId == 'wkk_key_62') {
				setElementVisibility("wkk_key_focus_n1", false);
			} */
			if (keyId == 'wkk_tx') {	
				setElementBackground(keyId, "url('../image/search/SIGN_NORMALBAR.png')");
			} else if (keyId == 'wkk_tx') {	
				setElementBackground(keyId, "url('../image/search/SIGN_NORMALBAR.png')");
			}
		}			
	} 
	//vertical
	else if(keyBoardType == 1){
		
		if (keyId == 'wkk_tx') {		
			setElementBackground(keyId, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
		}else if (keyId == 'wkk_tx2') {		
			setElementBackground(keyId, "url('../image/vertical/VER_SEARCH_INPUT_NORMAL.png')");
		} else if(keyId == 'wkk_key_54') {		
			setElementVisibility("wkk_key_focus_l_arrow", false);
		} else if ( keyId == 'wkk_key_55') {
			setElementVisibility("wkk_key_focus_r_arrow", false);
		}  else if ( keyId == 'wkk_key_61') {
			setElementVisibility("wkk_key_focus_m2", false);
		} else if ( keyId == 'wkk_key_58' || keyId == 'wkk_key_59' ) {
			setElementBackground(keyId, "url('../image/vertical/VER_BTN_NORMAL.png')");
		} else if(keyId == 'wkk_key_62') {		
			setElementVisibility("wkk_key_focus_st", false);
		} else if(keyId == 'wkk_key_63') {
			setElementVisibility("wkk_key_focus_c", false);
		} else if(keyId == 'wkk_key_64') {
			setElementVisibility("wkk_key_focus_s", false);
		} else if(keyId == 'wkk_key_65') {			
			setElementVisibility("wkk_key_focus_b", false);
		} else if( isHighlightableKey(currentPageIdx, keyId)) {
			setElementVisibility("wkk_key_focus_n", false);
		}
		else if(keyId==null) {
			setElementBackground(keyId, "url('../image/SEARCH_INPUT_NORMAL.png')");
			setElementVisibility("wkk_key_focus_m", false);
			setElementVisibility("wkk_key_focus_m2", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_n", false);
			setElementVisibility("wkk_key_focus_s", false);
			setElementVisibility("wkk_key_focus_b", false);
			setElementBackground(keyId, "url('../image/BTN_NORMAL_mid.png')");
		}		
	}
	//horizantal
	else{
		
		if (keyId == 'wkk_tx') {		
			setElementBackground(keyId, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
		}else if (keyId == 'wkk_tx2') {		
			setElementBackground(keyId, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
		}else if( keyId == 'wkk_key_000' ) {
			setElementVisibility("wkk_key_focus_n4", false);
		}else if(keyId == 'wkk_key_015') {
			setElementVisibility("wkk_key_focus_n2", false);
		}else if( keyId == 'wkk_key_116') {		
			setElementVisibility("wkk_key_focus_n1", false);
		}else if( keyId == 'wkk_key_100') {		
			setElementVisibility("wkk_key_focus_n3", false);
		}else if( keyId == 'wkk_key_200') {		
			setElementVisibility("wkk_key_focus_ns", false);
		} else if ( keyId == 'wkk_key_205') {
			setElementVisibility("wkk_key_focus_l", false);
		}else if(keyId == 'wkk_key_114') {
			setElementVisibility("wkk_key_focus_n_la ", false);
		}else if(keyId == 'wkk_key_115') {
			setElementVisibility("wkk_key_focus_n_ra", false);
		}else if ( keyId == 'wkk_key_014') {
			setElementVisibility("wkk_key_focus_n_ent", false);
		}else if ( keyId == 'wkk_key_214') {
			setElementVisibility("wkk_key_focus_m_hdd", false);
		} else if( isHighlightableKey(currentPageIdx, keyId)) {
			setElementVisibility("wkk_key_focus_n", false);
		}  else if(keyId==null) {
			setElementBackground(keyId, "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			setElementVisibility("wkk_key_focus_n1", false);
			setElementVisibility("wkk_key_focus_n2", false);
			setElementVisibility("wkk_key_focus_n3", false);
			setElementVisibility("wkk_key_focus_n4", false);						
			setElementVisibility("wkk_key_focus_ns", false);
			setElementVisibility("wkk_key_focus_l", false);
			setElementVisibility("wkk_key_focus_n_la", false);	
			setElementVisibility("wkk_key_focus_n_ra", false);
			setElementVisibility("wkk_key_focus_n_ent", false); 
			setElementVisibility("wkk_key_focus_m_hdd", false); 		
			setElementBackground(keyId, "url('../image/horizontal/HOR_BTN_NORMAL.png')");
		}
		
		if(currentKeyId != null ) {
			if (keyId == 'wkk_tx') {	
				setElementBackground(keyId, "url('../image/horizontal/HOR_SEARCH_INPUT_NORMAL.png')");
			} else if( currentKeyId == 'wkk_key_51' ) {
				setElementVisibility("wkk_key_focus_m", false);
			} else if ( currentKeyId == 'wkk_key_53') {
				setElementVisibility("wkk_key_focus_l", false);
			} else if ( currentKeyId == 'wkk_key_58' || currentKeyId == 'wkk_key_59' ) {
				setElementBackground(currentKeyId, "url('../image/horizontal/HOR_BTN_NORMAL.png')");
			} else if(currentKeyId == 'wkk_key_57') {
				setElementVisibility("wkk_key_focus_m2", false);
			} else if( isHighlightableKey(currentPageIdx, currentKeyId)) {
				setElementVisibility("wkk_key_focus_n", false);
			}
		}
	}
	
	
	currentKeyId = null;
}

/**
 * return keyId by keyCode
 * @param keyCode
 * @return
 */
function getKeyIdFromKeyCode(keyCode) {
	var keyId = null;

	switch(keyCode) {
		case 8 :
		case 46 :
		case VK_REWIND :
			keyId = "wkk_key_57";
			break;
		case 32 :
		case VK_FAST_FWD :
			keyId = "wkk_key_53";
			break;
		case VK_0 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_37";
			}
			break;
		case VK_1 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_05";
			}
			break;
		case VK_2 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_06";
			}
			break;
		case VK_3 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_07";
			}
			break;
		case VK_4 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_15";
			}
			break;
		case VK_5 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_16";
			}
			break;
		case VK_6 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_17";
			}
			break;
		case VK_7 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_25";
			}
			break;
		case VK_8 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_26";
			}
			break;
		case VK_9 :
			if(isNumericKeyActivated(currentPageIdx)) {
				keyId = "wkk_key_27";
			}
			break;
		default :
			break;
	}
	return keyId;
}

/**
 * return Textbar's content
 * @return
 */
function getTextContent() {
	var textItem = document.getElementById(txtid);
	if( textItem != null) {
		return textItem.value;
	}
	return null;
}

/**
 * set Textbar's content
 * @param value
 * @return
 */
function setTextContent(value) {
	var textItem = document.getElementById(txtid);
	
	//add 2 input field
	if(value == "execCncl"){
		document.getElementById("wkk_tx").value="";
		document.getElementById("wkk_tx2").value="";
		txtid="wkk_tx";
		setInputCaretPos();
		return;
	}
	
	
	if( textItem != null) {		
		textItem.value = value;
	}
}

/**
 * return key's value
 * @param keyId
 * @return
 */
function getKeyValue(keyId) {
	var keyItem = document.getElementById(keyId);
	if(keyItem != null) {
		return keyItem.firstChild.nodeValue;
	} else {
		return null;
	}
}


/**
 * execute key's action.
 * @param keyId
 * @return
 */
function execKey(keyId) {

	/*********************************************************************/
	/*********************  KeyBoard Layout 1 Start  *********************/
	/*********************************************************************/	

	if(keyBoardType==0){	
	
		switch(keyId) {
		//OK
		case "wkk_key_58" :
			//setCookies();
			executeLogin();
			break;
		//cancel
		case "wkk_key_59" :
			//executeCancel();
			executeBack();
			break;
		//show history
		case "wkk_key_08" :
			break;
		//input text
		case "wkk_key_09" :
			break;

		//change Lang		
		case "wkk_key_61" :	
			gubun = 'lang';
			changeLanValue(gubun);			
			break;

		//s/t Toggle
		case "wkk_key_62" :
			gubun = 'sl';
			changeKeyValue(gubun);
			break;
		//chage Char
		case "wkk_key_63" :	
			gubun = 'ch';
			changeKeyValue(gubun);
			break;
		//LeftArrow
		case "wkk_key_64" :
			inputBoxControl('left');
			break;
		//RightArrow
		case "wkk_key_65" :
			inputBoxControl('right');
			break;
		//space
		case "wkk_key_66" :
			addSpaceText();
			break;
		//back space
		case "wkk_key_67" :
			backspaceText();
			break;
		case "wkk_key_focus" :
			execKey(currentKeyId);
		default :
					
			if(miniPopUpSupport) {	
				var idx = -1;
				for(var i=0 ; i<miniPopUpInfoObjects.length; i++) {
					var obj = miniPopUpInfoObjects[i];
					if(obj.pageIdx == stIdx && obj.keyId == keyId && gubun!='ch') {
						idx = i;
						break;
					}
				}
				if(idx > -1) {
					
					//isFound
					currentPopUpInfo = miniPopUpInfoObjects[idx];
					doActivatePopUp();
					doHighlightPopUp("wkk_p"+currentPopUpInfo.popUpId+"_00");
				} else {					
					//not found.					
					var val = getKeyValue(keyId);					
					if(val != null) {						
						appendText(val);					
					}	
				}
				//currentPopUpInfo
			} else {				
				var val = getKeyValue(keyId);	
				if(val != null) {
					appendText(val);
				}
			}
		}
	}
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==1){	
		
		switch(keyId) {
		//OK
		case "wkk_key_58" :
			executeLogin();
			break;
		//cancel
		case "wkk_key_59" :
			//executeCancel();
			executeBack();
			break;

		//change Lang
		case "wkk_key_61" :			
			gubun = 'lang';
			changeLanValue(gubun);
			break;
		//change s/l
		case "wkk_key_62" :
			gubun = 'sl';
			changeKeyValue(gubun);
			break;
		//chage Char
		case "wkk_key_63" :
			gubun = 'ch';
			changeKeyValue(gubun);
			break;
		//LeftArrow
		case "wkk_key_54" :
			inputBoxControl('left');
			break;
		//RightArrow
		case "wkk_key_55" :
			inputBoxControl('right');
			break;
		//space
		case "wkk_key_64" :
			addSpaceText();
			break;
		//back space
		case "wkk_key_65" :
			backspaceText();
			break;
		case "wkk_key_focus" :
			execKey(currentKeyId);
			break;
		default :
			
			if(miniPopUpSupport) {		
			
				var idx = -1;
				
				for(var i=0 ; i<miniPopUpInfoObjects.length; i++) {
					var obj = miniPopUpInfoObjects[i];	
					
					if(obj.pageIdx == stIdx && obj.keyId == keyId && gubun!='ch') {
						idx = i;					
						break;
					}
				}
				if(idx > -1) {
					//isFound
					currentPopUpInfo = miniPopUpInfoObjects[idx];
					doActivatePopUp();
					doHighlightPopUp("wkk_p"+currentPopUpInfo.popUpId+"_00");
				} else {					
					//not found.
					var val = getKeyValue(keyId);
					if(val != null) {
						appendText(val);
					}	
				}
				//currentPopUpInfo
			} else {				
				var val = getKeyValue(keyId);					
				if(val != null) {
					appendText(val);
				}
			}
		}
	}
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 3 Start  *********************/
	/*********************************************************************/
	else {
		switch(keyId) {
		//OK
		case "wkk_key_58" :
			executeLogin();
			break;
		//cancel
		case "wkk_key_59" :
			//executeCancel();
			executeBack();
			break;
		//show history
		case "wkk_key_08" :
			break;
		//input text
		case "wkk_key_09" :
			break;
	
		case "wkk_key_000" :
			selectLang();
			break;
		
		case "wkk_key_116" :
			gubun = 'lang';
			changeLanValue(gubun);
			break;				
		//change s/l
		case "wkk_key_100" : 
			gubun = 'sl';
			changeKeyValue(gubun);
			break;
		//change char
		case "wkk_key_200" :
			gubun = 'ch';
			changeKeyValue(gubun);
			break;
			//LeftArrow
		case "wkk_key_114" :
			inputBoxControl('left');
			break;
		//RightArrow
		case "wkk_key_115" :
			inputBoxControl('right');
			break;	
		//space
		case "wkk_key_205" :
			addSpaceText();
			break;
		//back space
		case "wkk_key_015" :
			backspaceText();
			break;
		case "wkk_key_focus" :
			execKey(currentKeyId);
			break;
		default :			
			
			if(miniPopUpSupport) {		
				var idx = -1;
				
				for(var i=0 ; i<miniPopUpInfoObjects.length; i++) {
					var obj = miniPopUpInfoObjects[i];					
					if(obj.pageIdx == stIdx && obj.keyId == keyId && gubun!='ch') {
						idx = i;
						break;
					}
				}
				if(idx > -1) {
					//isFound
					currentPopUpInfo = miniPopUpInfoObjects[idx];
					doActivatePopUp();
					doHighlightPopUp("wkk_p"+currentPopUpInfo.popUpId+"_00");
				} else {					
					//not found.
					var val = getKeyValue(keyId);
					if(val != null) {
						appendText(val);
					}	
				}
				//currentPopUpInfo
			} else {				
				var val = getKeyValue(keyId);					
				if(val != null) {
					appendText(val);
				}
			}
		}
	} 
}



function doActivatePopUp() {
	
	var topIndex;			
	var top;
	var left;	
	
	if(currentPopUpInfo != null) {
		miniPopUpActivated = true;
		var keyId = currentPopUpInfo.keyId;
		var popUpId = "mini_popup_"+currentPopUpInfo.popUpId;
		var type = popUpId.charAt(12); //miniPop Type
		setElementVisibility("web_keyboard_popup_bg", true);
		setElementVisibility(popUpId, true);
						
		//adjustPopUp
		if(keyBoardType==0){
			topIndex = keyId.charAt(8);
			top = document.getElementById("wkk_key_"+topIndex).offsetTop + 5;
			left = document.getElementById(keyId).offsetLeft + 534;
		}else if(keyBoardType==1){
			topIndex = keyId.charAt(8);			
			top = document.getElementById("wkk_key_"+topIndex).offsetTop - 8;
			left = document.getElementById(keyId).offsetLeft - 9;
		}else if(keyBoardType==2){						
			topIndex = keyId.charAt(8);
			top = document.getElementById("wkk_key_"+topIndex).offsetTop + 446;
			
			if(keyId == "wkk_key_113" && type == "2"){				
				left = document.getElementById(keyId).offsetLeft -88;
			} else{
				left = document.getElementById(keyId).offsetLeft -9;
			}			
		}
		
		var popUpE = document.getElementById(popUpId);
		
		popUpE.style.top = top + "px";
		popUpE.style.left = left + "px";
		
				
		//fill div
		if(currentPopUpInfo.keyIdxArray != null) {
			
			for(var i=0; i < currentPopUpInfo.keyIdxArray.length ; i++) {
				var pKey = "wkk_p"+currentPopUpInfo.popUpId+"_"+currentPopUpInfo.keyIdxArray[i];
				setInnerHtml(pKey,currentPopUpInfo.keyValueArray[i]);
				setElementFontSize(pKey, "36px");
				if(keyBoardType==0){
					if(isBlackKey(currentPageIdx, pKey)){
						setElementBackground(pKey, blackBgImage);
					} else{
						setElementBackground(pKey, bgImage);
					}
					
				}else if(keyBoardType==1){
					if(isBlackKey(currentPageIdx, pKey)){
						setElementBackground(pKey, blackBgImage);
					} else{
						setElementBackground(pKey, bgImage);
					}					
				}else{
					if(isBlackKey(currentPageIdx, pKey)){
						setElementBackground(pKey, blackBgImage);
					} else{
						setElementBackground(pKey, bgImage);
					}					
				}				
			}
		}
		//cancel Id set
		if(currentPopUpInfo.cancelBtnIdx!=null) {
			var cKey = "wkk_p"+currentPopUpInfo.popUpId+"_"+currentPopUpInfo.cancelBtnIdx;
			setInnerHtml(cKey,'<img alt="" src="../image/KEYHELP_ICON_BACK.png" style="margin-top: 13px" />');
			setElementFontSize(cKey, "26px");			
			if(keyBoardType==0){
				setElementBackground(cKey, "url('../image/KEYBOARD_BTN_02_N.png')");
			}else if(keyBoardType==1){
				setElementBackground(cKey, "url('../image/vertical/VER_KEYBOARD_BTN_02_N.png')");
			}else{
				setElementBackground(cKey, "url('../image/horizontal/HOR_KEYBOARD_BTN_02_N.png')");
			}
			
		}
		
		//hide div
		if(currentPopUpInfo.hideKeyArray != null) {
			for(var i=0; i < currentPopUpInfo.hideKeyArray.length ; i++) {
				var hKey = "wkk_p"+currentPopUpInfo.popUpId+"_"+currentPopUpInfo.hideKeyArray[i];
				setElementVisibility(hKey, false);
			}
		}
		currentPopUpKeyId = null;
	}
}

function doInactivatePopUp() {
	miniPopUpActivated = false;
	setElementVisibility("mini_popup_"+currentPopUpInfo.popUpId, false);
	setElementVisibility("web_keyboard_popup_bg", false);
	setElementVisibility("wkk_key_focus_pn", false);
	currentPopUpInfo = null;
	currentPopUpKeyId = null;
}

function doHighlightPopUp(keyId) {
	
	var yx = keyId.charAt(8)+""+keyId.charAt(9);
	if(currentPopUpInfo.hideKeyArray !=null) {
		for(var i=0; i<currentPopUpInfo.hideKeyArray.length;i++) {
			if(yx==currentPopUpInfo.hideKeyArray[i]) {
				// it is possible infinite loop .. 
				doHighlightPopUp(getNextKeyIdPopUp(keyId, VK_RIGHT));
				return;
			}
		}
	}
	
	else if(keyId == null && keyId == " ") {		
		return;
	}
	
	var popUpId = "mini_popup_"+currentPopUpInfo.popUpId;
	//alert("popUpId : " +document.getElementById(popUpId).offsetTop);
	var top = document.getElementById(popUpId).offsetTop + document.getElementById(keyId).offsetTop - 10 ;
	var left = document.getElementById(popUpId).offsetLeft + document.getElementById(keyId).offsetLeft - 9 ;
	var e = document.getElementById("wkk_key_focus_pn");
	e.style.top = top + "px";
	e.style.left = left + "px";
	
	if(yx!=currentPopUpInfo.cancelBtnIdx) {
		var val = getKeyValue(keyId);
				
		if(val == null || val == " "){
			return;
		} else if(val == "<") {
			e.innerHTML = "&lt;";
		} else {
			e.innerHTML = val;
		} 
	} else {
		e.innerHTML = '<img alt="" src="../image/KEYHELP_ICON_BACK.png" style="margin-top: 23px" />';
	}
	
	e.style.visibility = "";
	var cKeyId ="wkk_p"+currentPopUpInfo.popUpId+"_"+currentPopUpInfo.cancelBtnIdx;
	if(keyId == cKeyId) {
		e.style.fontSize = "32px";
	} else {
		e.style.fontSize = "46px";
	}
	currentPopUpKeyId = keyId;
	setInputFocus();
	
}

function cancelHighlightPopUp() {
	setElementVisibility("wkk_key_focus_pn", false);
	currentPopUpKeyId = null;
	setInputFocus();
}

function execKeyPopUp() {
	if(currentPopUpKeyId!=null) {
		var cKeyId ="wkk_p"+currentPopUpInfo.popUpId+"_"+currentPopUpInfo.cancelBtnIdx;
		if(currentPopUpKeyId == cKeyId) {
			doInactivatePopUp();
		} else {
			var val = getKeyValue(currentPopUpKeyId);
			if(val != null) {
				appendText(val);
			}
			doInactivatePopUp();
			
		}	
		setInputFocus();
	}
}

function getNextKeyIdPopUp(currentPopUpKeyId, keyCode) {
	var type = currentPopUpKeyId.charAt(6);
	/**
	 * type 1 : 5 x 2
	 * type 2 : 4 x 1
	 * type 3 : basic,vertical : 3 x 2	/ horizontal : 6 x 1
	 * type 4 : 3 x 1
	 * type 5 : 5 x 1
	 */
	var y = currentPopUpKeyId.charAt(8);
	var x = currentPopUpKeyId.charAt(9);
	var popKeyValue;
	
	switch(keyCode) {
		case VK_UP :
			if(type == "2" || type == "4" || type == "5") {
				return null;
			} else {
				y --;
				if(y<0) {
					y = 0;
				}
			}
			break;
		case VK_DOWN :
			if(type == "2" || type == "4" || type == "5") {
				return null;
			} else {
				y++;
								
				//basic Type / vertical Type
				if(keyBoardType != 2){
					popKeyValue = getKeyValue("wkk_p0"+type+"_"+y+""+x);
					for(z=y; z<=1; z++){	
											
						if(popKeyValue == " "){	
							y = new Number(z);
							
						}else{
							y = new Number(y);
						}						
					}												
				}
								
				if(y > 1) {
					y = 1;
				}
				//when last value is empty
				v = getKeyValue("wkk_p0"+type+"_"+y+""+x);
				if(popKeyValue == " "){
					return;
				}
				
			
			}
			break;
		case VK_LEFT :
			x--;			
			
			popKeyValue = getKeyValue("wkk_p0"+type+"_"+y+""+x);
			for(z=x; z>=0; z--){	
									
				if(popKeyValue == " "){	
					x = new Number(z);
					
				}else{
					x = new Number(x);
				}						
			}
						
			if(x < 0) {
				x = 0;
			}
			break;
		case VK_RIGHT :
			x++;
			//horizon Type
			if(keyBoardType == 2){
				popKeyValue = getKeyValue("wkk_p0"+type+"_"+y+""+x);
				for(z=x; z<=5; z++){	
										
					if(popKeyValue == " "){	
						x = new Number(z);
						
					}else{
						x = new Number(x);
					}						
				}
				
				if(type == "3") {
					if(x > 5) {
						x = 5;
					}
				}				
			//basic Type / vertical Type	
			} else{
				
				popKeyValue = getKeyValue("wkk_p0"+type+"_"+y+""+x);				
				for(z=x; z<=2; z++){	
										
					if(popKeyValue == " "){	
						x = new Number(z);						
					}else{
						x = new Number(x);
					}						
				}
				if(type == "3") {
					if(x > 2) {
						x = 2;
					}
				}
			}
			
			if(type == "5" || type == "1") {
				if(x > 4) {
					x = 4;
				}
			} else if (type == "2") {
				if(x>3) {
					x = 3;
				}
			} else if (type =="4") {
				if(x > 2) {
					x = 2;
				}
			}
			
			break;
		default:
			return null;
	}
	var yx = y+""+x;
	if(currentPopUpInfo.hideKeyArray !=null) {
		for(var i=0; i<currentPopUpInfo.hideKeyArray.length;i++) {
			if(yx==currentPopUpInfo.hideKeyArray[i]) {
				return null;
			}
		}
	}
	return "wkk_p0"+type+"_"+yx;
}


/*start of carot handle*/
function caretMoved() {
	setNewMode(0);
	setCaretPosition(getCaretPosition(), 0);
}

function caretNext() {
	setNewMode(0);
	var pos = getCaretPosition();
	setCaretPosition(new Number(pos) + 1, 0);
}

function caretPrev() {
	setNewMode(0);
	var pos = getCaretPosition();
	setCaretPosition(new Number(pos) -1, 0);
}

function getCaretPosition() {
	return currentCaretIdx;
}

function isCaretActivated() {
	return isCaretActive;
}

var isCaretActive = false;

function setInputFocus() {
	var textItem = document.getElementById(txtid);
	textItem.focus();
	
	try{
		textItem.blur();
		textItem.focus();
	}catch(e){
		alert("error: " + e);
	}
}

function setInputCaretPos() {
	
	//alert("txtid : "  + txtid);
	var caretPos = 0;
	var ctrl = document.getElementById(txtid);
	// IE Support
	if (document.selection) {
		ctrl.focus ();
		var Sel = document.selection.createRange ();

		Sel.moveStart ('character', -ctrl.value.length);

		caretPos = Sel.text.length;
	}
	// Firefox support
	else if (ctrl.selectionStart || ctrl.selectionStart == '0')
		caretPos = ctrl.selectionStart;
	
	setCaretPosition(caretPos, 0);
	setNewMode(0);
}

function setCaretPosition(pos, r) {
	
	if(pos<0){
		pos = 0;
	}
	
	var ctrl = document.getElementById(txtid);
	ctrl.focus();
	if(ctrl.setSelectionRange) 	{
		//
		ctrl.setSelectionRange(pos, new Number(pos) + new Number(r) );
	} else if (ctrl.createTextRange) {
		//IE... 
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos + r);
		range.moveStart('character', pos );
		range.select();
		ctrl.blur();
	}
	
	currentCaretIdx = pos;
	if(r > 0 ) {
		isCaretActive = true;
	} else {
		isCaretActive = false;
	}
}

function setInputCaret() {
	event.returnValue=false;
}

/*end of carot handle*/

/*start of default text handle*/
var maxLen = 100;

function addStrIntoFld( c , isNew ) {
	
	var kTxt = getTextContent();
	var kTxtLen = kTxt.length;

	if( kTxtLen < maxLen ) {
		var kSelected = isCaretActivated();
		var kIdx = getCaretPosition();
		var kIsEnd = false;
		if(kSelected) {
			kIsEnd = (kIdx >= (new Number(kTxtLen) - 1));
		} else {
			kIsEnd = (kIdx >= kTxtLen);
		}
		if(isNew) { 
			if(kIsEnd) { 				
				addCharToEnd(kTxt, c);
			} else {
				if(kSelected) {
					addCharInMiddle(kTxt, c, kIdx+1);
				} else {
					addCharInMiddle(kTxt, c, kIdx);
				}
			}
		} else {			
			if (kIsEnd) {
				overwriteCharToEnd(kTxt, c);
			} else {
				overwriteCharInMiddle(kTxt, c, kIdx);
			}
		}
	}
}

function addCharToEnd(txt, c) {
	var kJoin = txt + c;
	if(c.length > 1) {
		putStrIntoFld(kJoin, kJoin.length);
	} else {
		putStrIntoFld(kJoin, txt.length);
	}
}

function overwriteCharToEnd(txt, c) {
	var kTxt = txt.substr(0, txt.length -1);
	putStrIntoFld(kTxt+c, kTxt.length);
}

function addCharInMiddle(txt, c, idx) {
	var kTxt_0 = txt.substr(0, idx);
	var kTxt_1 = txt.substr(idx, txt.length);

	var kJoin = kTxt_0 + c + kTxt_1;
	if(c.length > 1) {
		putStrIntoFld(kJoin, new Number(idx) + c.length-1);
	} else {
		putStrIntoFld(kJoin, idx);
	}
	setCaretPosition(idx + c.length, 0);
}

function overwriteCharInMiddle(txt, c, idx) {
	var kTxt_0 = txt.substr(0,idx);
	var kTxt_1 = txt.substr(new Number(idx)+1, txt.length);
	putStrIntoFld(kTxt_0+ c + kTxt_1, idx);	
}

function putStrIntoFld( str, idx) {
	
	var kStr = "";
	if( str != null && str.length > 0 ) {
		kStr = str;
	}
	setTextContent(kStr);

	if(kStr.length == 0 ) {
		setCaretPosition(0, 0);	
	} else {
		setCaretPosition(new Number(idx)+1, 0);
	}
}

function deletePrevChar() {
	var kTxt = getTextContent();
	var kSelected = isCaretActivated();
	var kIdx = getCaretPosition();

	if(!kSelected) {
		kIdx = kIdx -1;
	}
	var kResult = "";	
	if( kIdx > -1) {
		kResult = kTxt.substr(0,kIdx) + kTxt.substr(kIdx +1, kTxt.length);
		putStrIntoFld(kResult, kIdx);	
		setCaretPosition(kIdx, 0);
	}
}


function mouseDown(keyId){
//	if(flag){
//		flag=false;		
//		timer=setTimeout(function(){
//			flag=true;
//		},1);
//		
//		execKey(keyId);
//		
//		setTimeout(function(){setInputFocus();},1);
//		return;
//	}
	
	execKey(keyId);
}





/****************************************************************************/
/**************** Lang.js replace keyboard.js functions Start ***************/
/****************************************************************************/

/**
 * action that ok button pressed 
 * @return
 */
function executeOK() {

}
function executeLogin() {
	console.log("executeOK()");
	var name=document.getElementById("wkk_tx").value;
	var password=document.getElementById("wkk_tx2").value;
	console.log("name : " + name + " password : "+password);
	Main.login(name,password);
}
var Main =
{
    elementIds : [ "wkk_tx", "wkk_tx2"],
    inputs : [ null, null ],
    ready : [ false, false],
	
	dataReceivedCallback : null,
    XHRObj : null,
    fs : null,
    screen : "true"
};
Main.saveLogin = function() {
	console.log("Main.saveLogin()");
	var name=document.getElementById("wkk_tx").value;
	var password=document.getElementById("wkk_tx2").value;
	document.getElementById("autoLogintxt").setAttribute("email", name);
	document.getElementById("autoLogintxt").setAttribute("password", password);
};
Main.onLoad = function()
{
	var name=document.getElementById("autoLogintxt").getAttribute("email");
	var password=document.getElementById("autoLogintxt").getAttribute("password");
	document.getElementById("wkk_tx").value = name;
	document.getElementById("wkk_tx2").value = password;
	console.log("Main.onLoad name : " + name + " password : "+password);
    //alert("Main.onLoad()");
    //getTxtCookies();
    //Main.readFromFile();
    //this.createInputObjects();
};
Main.onUnload = function()
{
    //alert("Main.onUnload()");
};
Main.writeToFile = function(name,password) {
	var fs = new FileSystem();
	if (!fs.isValidCommonPath(curWidget.id)) {
		fs.createCommonDir(curWidget.id);
	}

	var keyFilePath = curWidget.id + '/myfile';
	var keyFile = fs.openCommonFile(keyFilePath, 'w');
	keyFile.writeLine('{"username":"'+name+'","password":"'+password+'"}');
	fs.closeCommonFile(keyFile);
};
Main.readFromFile = function() {
	var fs = new FileSystem();
	if (!fs.isValidCommonPath(curWidget.id)) {
		fs.createCommonDir(curWidget.id);
	}
	var keyFilePath = curWidget.id + '/myfile';
	var readKeyFile = fs.openCommonFile(keyFilePath, 'r');
	if(readKeyFile){
		var strLine=readKeyFile.readLine();
		alert(strLine);
		var jsonObj = JSON.parse( strLine );
		document.getElementById("wkk_tx").value=jsonObj["username"];
		document.getElementById("wkk_tx2").value=jsonObj["password"];
		var name=document.getElementById("wkk_tx").value;
		var password=document.getElementById("wkk_tx2").value;
		Main.login(name,password);
	}
};
Main.login = function(name,password)
{
	//var url="https://web.rsprod.soliton.co/login.php";
	//var dataString="username="+name+"&password="+password+"&version_number=10&device_name=smarttv&device_type=smarttv";
	
	var url='http://majitv.innowil.com/api/login.ashx';
	var dataString= 'user=' + name + '&pwd=' + password;
	var LoginURL='http://majitv.innowil.com/api/login.ashx?user=' + name + '&pwd=' + password;
	
	//widgetAPI.putInnerHTML(document.getElementById("notimsg"), "LOGGING IN...");
	//Display.showStatus("登入中...");
    //alert(dataString);
	if (Main.XHRObj == null)
    {
		//alert("this.XHRObj == null");
		Main.XHRObj = new XMLHttpRequest();
    }
    
    if (Main.XHRObj)
    {
    	Main.XHRObj.onreadystatechange = function(){
                if (Main.XHRObj.readyState == 4)
                {
					//alert("YESSSSSSSS");
				    if (Main.XHRObj.status != 200)
					{
						console.log("XML Server Error " + Main.XHRObj.status);
						//Display.status("XML Server Error " + Server.XHRObj.status);
						//widgetAPI.putInnerHTML(document.getElementById("notimsg"), "CONNECTION ERROR");
						Display.showStatus("CONNECTION ERROR");
						console.log("CONNECTION ERROR");
					}
					else
					{
						//alert(Main.XHRObj.responseText);
						var xmlElement = JSON.parse( Main.XHRObj.responseText );
						
						if(xmlElement["status"]){
							//Data.isLogin = true;
							window.name = "true";
							//Main.writeToFile(name,password);
							Main.saveLogin();
							Main.username = name;
							
							window.name = "true|" + name;
							
							console.log("Main.username: "+Main.username);
							//window.name = xmlElement["data"]["member_id"]+";"+xmlElement["data"]["token"]+";"+xmlElement["data"]["encryption_key"];
							//token,encryption_key
							//window.location = 'index.html'+window.location.search;
							location.href = '../../index.html';
						}else{
							//widgetAPI.putInnerHTML(document.getElementById("notimsg"), "INVALID PASSWORD");
							//alert("登入失敗。請檢查輸入資料。");
							Main.screen = "fail";
							Display.showStatus("登入失敗。請檢查輸入資料。");
							
						}
					}
					
				}
        }
            
		var tmpURL = 'http://majitv.innowil.com/api/login.ashx?' + 	dataString;
		Main.XHRObj.open("GET", LoginURL, true);
		//this.XHRObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //this.XHRObj.send(dataString);
		Main.XHRObj.send(null);
     }
    else
    {
        alert("Failed to create XHR");
    }
}
/**
 * action that cancel button pressed 
 * @return
 */
function executeCancel() {

}
function executeBack() {
//	setTextContent("execCncl");
//	currentCaretIdx = 0;
	console.log("executeBack");
//	if ( Main.screen == "true") {
		Main.saveLogin();	
		window.history.back();
//	} 
}
/**
 * return isHighLightable key?? except 'space', 'back space','switch page', 'ok', 'cancel' key 
 * @param curPageIdx
 * @param keyId
 * @return true/false
 */
function isHighlightableKey(curPageIdx, keyId) {
	var keyValue = getKeyValue(keyId);
	if(keyValue == " "){
		return false;
	}
	return true;	

}

/**
 * return has black background.
 * @param curPageIdx
 * @param keyId
 * @return true/false
 */
function isBlackKey(curPageIdx, keyId) {
	
	/* add */
	// for type 0,1
	var x = keyId.charAt(8);
	var y = keyId.charAt(9);	
	//for type 2
	var xx = keyId.charAt(8);
	var yy = keyId.substring(9,11);
	/* end */

	var keyValue = getKeyValue(keyId);
	
	if(keyValue == " "){
		return true;
	}
	
	/* add */
	 if(keyBoardType==0 ){
		 if(keyValue =="1" ||  keyValue =="2"  ||  keyValue =="3" ||  keyValue =="4" ||  keyValue =="5" ||
		    keyValue =="6"  || keyValue =="7" || keyValue =="8" || keyValue =="9" || keyValue =="0"||
		  keyValue =="@" || keyValue =="." || keyValue =="/" ){
				return true;
			} 
	 	}
	/* end */
		
		
	return false;
}



/**
 * return keyId after arrow key pressed.
 * @param keyId
 * @param keyCode
 * @return next keyId or null
 */
function getNextKeyId(curPageIdx, keyId, keyCode) {

	var keyValue;
	var xLastIdx;
	var yLastIdx;
	
	if ( keyId == null || keyCode == null ) {
		return null;
	}
	
	var x = keyId.charAt(8);
	var y = keyId.charAt(9);

	/*********************************************************************/
	/*********************  KeyBoard Layout 1 Start  *********************/
	/*********************************************************************/	
	if(keyBoardType==0){
		
		xLastIdx = 6;
		yLastIdx = 7;
			
		switch(keyCode) {
		
			case VK_UP :
				if(keyId == '') {
					return "wkk_key_00";
				}			

			if (keyId == "wkk_key_58"){
				cancelHighlight('wkk_key_58');
				txtid='wkk_tx2';
				doHighlight(txtid);
				setInputCaretPos();
				return txtid;
			}
			if (keyId == 'wkk_key_59') {				
				doHighlight('wkk_key_58');
				return "wkk_key_58";
			}

			if (keyId == "wkk_tx" || keyId == "wkk_tx2") {					
					txtid='wkk_tx';
					setInputCaretPos();
					return txtid;
				}
				
				if( y==0 || y==1 || y==2 || y==3 || y==4 || y==5 || y==6 || y==7){ 
					x = new Number(x) - 1;  
					for(z=x; z>=0; z--){ 
						keyValue = getKeyValue("wkk_key_"+ x + "" + y);
						if(keyValue == " "){ 
								x = new Number(z); 			 
						}else{ 
							x = new Number(x); 
						} 
					}
					//block 
					if(x<0){
						 x = 0; 
					}
					//when last value is empty
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(x == 0 && keyValue == " "){
						return keyId;
					}	
				}
				break;
				
			case VK_DOWN :
				if(keyId == '') {
					return "wkk_key_00";
				}
				if(keyId == 'wkk_key_40') {
					return "wkk_key_40";
				}
				
			//alert("VK_DOWN currentKeyId : " + currentKeyId); 
		
			if (keyId == 'wkk_tx') {
				txtid='wkk_tx2';
				setInputCaretPos();
				doHighlight(txtid);
				return txtid;
			}
			
			if (keyId == 'wkk_tx2') {				
				txtid='wkk_tx2';
				setInputCaretPos();
				cancelHighlight(txtid);
				doHighlight('wkk_key_58');
				return "wkk_key_58";
			}
			if (keyId == 'wkk_key_58') {				
//				txtid='wkk_key_58';
//				setInputCaretPos();
//				cancelHighlight(txtid);
				doHighlight('wkk_key_59');
				return "wkk_key_59";
			}
				if( y==0 || y==1 || y==2 || y==3 || y==4 || y==5 || y==6 || y==7){					
					x = new Number(x) + 1;					
					for(z=x; z<=yLastIdx; z++){
						keyValue = getKeyValue("wkk_key_"+ x + "" + y);						
						if(keyValue == " "){	
							x = new Number(z); 
							
						}else{							
							x = new Number(x);
						}											
					}					
					//block
					if(x>xLastIdx){
						x = xLastIdx;
					}
					//when last value is empty
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(x == xLastIdx && keyValue == " "){
						return keyId;
					}		
				}
				
				break;
				
			case VK_LEFT :
				
				if (keyId == txtid) {
					var cc = getCaretPosition();
					cc = cc -1 < 0 ? 0 : cc -1;
					setCaretPosition(cc, 0);
					setNewMode(0);
					return txtid;
				} 

				if (keyId == "wkk_key_62") {					
					return "wkk_key_58";
				}
				if( x==0 || x==1 || x==2 || x==3 || x==4 || x==5 || x==6){ 
					y = new Number(y) - 1; 
					for(z=y; z>=0; z--){ 
						keyValue = getKeyValue("wkk_key_"+ x + "" + y);
						if(keyValue == " "){ 
								y = new Number(z); 
			 
						}else{ 
							y = new Number(y); 
						} 
					}
									
					//block 
					if(y<0){									
						return txtid;												 
					} 
					//when last value is empty
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(y == 0 && keyValue == " "){
						return keyId;
					}
				}								
				break;
				
			case VK_RIGHT :
				if(keyId == '') {
					return "wkk_key_00";
				}
				/*if (keyId == txtid) {
					var cc2 = getCaretPosition();
					if (cc2 <= getTextContent().length) {
						cc2++;
						setCaretPosition(cc2, 0);
						return txtid;
					}else {					
						setCaretPosition(getTextContent().length, 0);
						return "wkk_key_00";
					}
					setNewMode(0);
				}*/
				
				if(keyId == 'wkk_tx' || keyId == 'wkk_tx2'){
					return "wkk_key_00";
				}
				
				
				if (keyId == "wkk_key_58") {					
					return "wkk_key_62";
				}
								 					
				if (keyId == "wkk_key_59") {					
					return "wkk_key_62";
				} 

				
				if( x==0 || x==1 || x==2 || x==3 || x==4 || x==5 || x==6){
					
					y = new Number(y) + 1;
					
					for(z=y; z<=yLastIdx; z++){	
						keyValue = getKeyValue("wkk_key_"+ x + "" + y);
						if(keyValue == " "){	
							y = new Number(z);
							
						}else{
							y = new Number(y);
						}						
					}										
					//block
					if(y>yLastIdx){
						y = yLastIdx;
					}					
					//when last value is empty
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(y == yLastIdx && keyValue == " "){
						return keyId;
					}	
				}
				break;
				
			default :
				break;
		}
		return "wkk_key_"+ x + "" + y;
	}
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/	
	else if(keyBoardType==1){
		
		xLastIdx = 7;
		yLastIdx = 5;
		
		switch(keyCode) {
		
		case VK_UP :
	
			if (keyId == "wkk_tx" || keyId == "wkk_tx2") {					
					txtid='wkk_tx';
					setInputCaretPos();
					return txtid;
			}
				
	
			if( x == 0){
				txtid='wkk_tx2';
				setInputCaretPos();
				doHighlight(txtid);
				return txtid;	
			}
	


				
			if( y==0 || y==1 || y==2 || y==3 || y==4 || y==5 ){ 
				x = new Number(x) - 1; 
 
				for(z=x; z>=0; z--){  
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(keyValue == " "){ 
						x = new Number(z); 			 
					}else{ 
						x = new Number(x); 
					} 
				}
				
				//when last value is empty
				keyValue = getKeyValue("wkk_key_"+ x + "" + y);
				if(x == 0 && keyValue == " "){
					return keyId;
				}		 
			}else{				
				if(keyId == "wkk_key_58"){
					x = 6;
					y = 0;
				}else if(keyId == "wkk_key_59"){
					x = 6;
					y = 3;
				}
			}
			break;
			
		case VK_DOWN :
			
			if (keyId == "wkk_tx") {
				txtid='wkk_tx2';
				setInputCaretPos();
				return txtid;
			}
			
			if (keyId == "wkk_tx2") {
				return "wkk_key_00";
			}
			
			if( y==0 || y==1 || y==2 || y==3 || y==4 || y==5 ){
				
				x = new Number(x)  + 1; 
				
				for(z=x; z<=xLastIdx; z++){  
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(keyValue == " "){ 						
						x = new Number(z) ; 												
					}else{ 
						x = new Number(x) ; 
					} 
				}				
				if(x==7){
					if(y==0||y==1||y==2){
						return "wkk_key_58";
					}else if(y==3||y==4||y==5){
						return "wkk_key_59";
					}					
				}
				//block
				if(x>xLastIdx){
					x = xLastIdx;
				}				
				//when last value is empty
				keyValue = getKeyValue("wkk_key_"+ x + "" + y);
				if(x == xLastIdx && keyValue == " "){
					return keyId;
				}
			}
			
			break;
		case VK_LEFT :
			
			if (keyId == "wkk_tx") {
				return "wkk_tx";
			}
			
			if (keyId == "wkk_tx2") {
				return "wkk_tx2";
			}
			
			if (keyId == "wkk_key_58") {
				return "wkk_key_58";
			}
			
			if (keyId == "wkk_key_59") {
				return "wkk_key_58";
			}
			
			if( x==0 || x==1 || x==2 || x==3 || x==4 || x==5 || x==6){ 
				y = new Number(y) - 1; 
				for(z=y; z>=0; z--){ 
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(keyValue == " "){ 
						y = new Number(z); 									
					}else{ 
						y = new Number(y); 
					} 
				}
				//block 
				if(y<0){
					 y = 0;
				}
				//when last value is empty
				keyValue = getKeyValue("wkk_key_"+ x + "" + y);
				if(y == 0 && keyValue == " "){
					return keyId;
				}
			}			
			break;
			
		case VK_RIGHT :
			
			if (keyId == "wkk_tx") {
				return "wkk_tx";
			}
			
			if (keyId == "wkk_tx2") {
				return "wkk_tx2";
			}
			
			if (keyId == "wkk_key_58") {
				return "wkk_key_59";
			}
			if (keyId == "wkk_key_59") {
				return "wkk_key_59";
			}
												
			if(x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5 || x == 6){
								
				y = new Number(y) + 1;
				
				for(z=y; z<=yLastIdx; z++){	
					keyValue = getKeyValue("wkk_key_"+ x + "" + y);
					if(keyValue == " "){	
						y = new Number(z);		
					}else{
						y = new Number(y);
					}						
				}															
				//block
				if(y>yLastIdx){
					y = yLastIdx;
				}					
				//when last value is empty
				keyValue = getKeyValue("wkk_key_"+ x + "" + y);
				if(y == yLastIdx && keyValue == " "){
					return keyId;
				}	
			}					
			break;
			
		default :
			break;
		}
		
		return "wkk_key_"+ x + "" + y;
	} 
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 3 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==2){		
		var xx = keyId.charAt(8);
		var yy = keyId.substring(9,11);
		switch(keyCode) {					
			case VK_UP :								
			if (keyId == "wkk_tx" || keyId == "wkk_tx2") {					
					txtid='wkk_tx';
					setInputCaretPos();
					doHighlight(txtid);
					return txtid;
				}else if(keyId == "wkk_key_58") {
					return "wkk_key_58";	
				}else if(keyId == "wkk_key_116"){
					return "wkk_key_000";
				}
					
				if(yy == 0  || yy == 1  || yy == 2  || yy == 3|| yy == 4|| yy == 5|| 
					 yy == 6  || yy == 7  || yy == 8  || yy == 9|| yy == 10|| yy == 11||
					 yy == 12 || yy == 13 || yy == 14 || yy == 15){
					
					xx = new Number(xx) - 1; 					
					for(z=xx; z>=0; z--){ 					
						keyValue = getKeyValue("wkk_key_"+ xx + "" + yy);
						xx = new Number(xx);
						if(keyValue == " "){
							if(xx == 1){
									if(yy == 0){
										xx = new Number(xx); 	
									}
								}else{
									xx = new Number(z);
								}					 
						}else{ 
							xx = new Number(xx); 	
						} 
					}					
					//block
					if( new Number(xx) < 0){
							txtid='wkk_tx2';
							setNewMode(0);
							var cc = getCaretPosition();			
							setCaretPosition(cc, 0);
							return txtid;	 
					}
					//go to Language Select key
					if(xx == 1){
						if(yy == 0){
							return "wkk_key_116";
						}
					}					
				}		
				break;
				
			case VK_DOWN :
				
				if(keyId == "wkk_tx"){
					txtid='wkk_tx2';
					setInputCaretPos();
					return txtid;
				}else if (keyId == "wkk_tx2" || keyId == "wkk_key_58") {
					doHighlight('wkk_key_000');
					return "wkk_key_000";
				} else if(keyId == "wkk_key_115"){
					return "wkk_key_214";
				} else if(keyId == "wkk_key_116"){
					return "wkk_key_200";
				}	
				
				
												
				if(yy == 0  || yy == 1  || yy == 2  || yy == 3|| yy == 4|| yy == 5|| 
					 yy == 6  || yy == 7  || yy == 8  || yy == 9|| yy == 10|| yy == 11||
					 yy == 12 || yy == 13 || yy == 14 || yy == 15){
					
					xx = new Number(xx) + 1; 
					
					for(z=xx; z<=2; z++){ 
						keyValue = getKeyValue("wkk_key_"+ xx + "" + yy);
						xx = new Number(xx);
						if(keyValue == " "){
								if(xx == 1){
									if(yy == 0){
										xx = new Number(xx); 	
									}
								}else{
									xx = new Number(z);
								}				 
						}else{ 
							xx = new Number(xx); 	
						} 
					}
					
					//go to Spacebar
					if(xx == 2){
						if( yy == 6  || yy == 7  || yy == 8  || yy == 9){
								return "wkk_key_205";
						}
					}
					
					
					//go to Language Select key
					if(xx == 1){
						if(yy == 0){
							return "wkk_key_116";
						}
					}
					
					//block
					if( new Number(xx) > 2){
							xx = 2; 
					}
										
					//when last value is empty
					if(xx == 2 && keyValue == " "){
						if(yy == 5){
								return "wkk_key_205";
						}else{
							return keyId;
						}
					}
				}
				break;

			case VK_LEFT :
	
				if(keyId == "wkk_tx"){
						setNewMode(0);
						var cc = getCaretPosition();			
						setCaretPosition(cc, 0);
						return "wkk_tx";						
				}else if (keyId == "wkk_tx2" || keyId == "wkk_key_58") {
						setNewMode(0);
						var cc = getCaretPosition();			
						setCaretPosition(cc, 0);
						return "wkk_tx2";	
				}else if(keyId == "wkk_key_116"){
					return "wkk_key_116";
				}
								
								
				if(xx == 0 || xx == 1 || xx == 2){						
					yy = new Number(yy) - 1; 
					for(z=yy; z>=0; z--){ 
						if( yy < 10){
							yy = '0' + yy;
						} else{
							yy = yy;
						}
						keyValue = getKeyValue("wkk_key_"+ xx + "" + yy);
						yy = new Number(yy);
						if(keyValue == " "){
							/* modify : 20101014*/
							if(xx == 1){
								if(yy == "00"){
									return "wkk_key_116";
								}
							}else{
								yy = z ;	
							}		 
						}else{ 
							yy = new Number(yy); 		
						} 
					}	
					if( yy < 10){
						yy = '0' + yy;
					}	
					
					//go to Spacebar & go to language toggle key
					if(xx == 2){
						if( yy == 6  || yy == 7  || yy == 8  || yy == 9){
								return "wkk_key_205";
						}
					}else if( xx == 1 ){
						if( yy == "0-1" ){
								return "wkk_key_116";
						}								
					}	
								
					
					
					/* modify : 20101014*/			
					//block
					if( yy == "0-1" ){
							yy = "00";
					}					
				}

				break;
				
			case VK_RIGHT :		
				/* modify : 20101014*/
				if (keyId == "wkk_tx" || keyId == "wkk_tx2" || keyId == "wkk_key_58") {
					doHighlight('wkk_key_58');
					return "wkk_key_58";
				}else if(keyId == "wkk_key_116"){
					key = getKeyValue("wkk_key_100");
					if(key ==" "){
						return "wkk_key_101";				
					}else{
						return "wkk_key_100";
					}
				}
				
				if(xx == 0 || xx == 1 || xx == 2){
					yy = new Number(yy) + 1; 
					for(z=yy; z<=16; z++){ 
						if( yy < 10){
							yy = '0' + yy;
						} else{
							yy = yy;
						}
						keyValue = getKeyValue("wkk_key_"+ xx + "" + yy);
							yy = new Number(yy);
						if(keyValue == " "){
							yy = z ;	 
						}else{ 
							yy = new Number(yy); 	
						} 
					}	
					
					if( yy < 10){
						yy = '0' + yy;
					}
					// next key					
					if(xx == 2){
						if( yy == 6  || yy == 7  || yy == 8  || yy == 9){
							keyValue = getKeyValue("wkk_key_210");

							if(keyValue == " "){
								return "wkk_key_214";
							}else{
								return "wkk_key_210";
							}
						}
					}								
					//block
					if( xx == 2){
						if(yy > 14){
							yy = 14;
						}
					}else{
						if( yy > 15){
							yy = 15;
						}
					}	
				}
				break;				
			default :
				break;
		}
		return "wkk_key_"+ xx + "" + yy;
	}		
}

/****************************************************************************/
/**************** Lang.js replace keyboard.js functions End ***************/
/****************************************************************************/


/*end of default text handle*/




//add

function setAutoSignIn(obj){

	//document.getElementById('autosignin').innerHTML=obj;
	document.getElementById('autosignin').value=obj;
	
	if(obj == "Enable"){
		autoSign = 0;
	}else{
		autoSign = 1;
	}
		
}


function getTxtCookies(){
	var getTxtId = getCookie("txt_id");
 	var getTxtPasswd = getCookie("txt_passwd");	
		
	if(getTxtId!=null && getTxtPasswd!=null){
		document.getElementById('wkk_tx').value = getTxtId;
		document.getElementById('wkk_tx2').value = getTxtPasswd;
	}
}

function setTxtCookies(){
	console.log("setTxtCookies() , id : " + getCookie("txt_id") + " password : " + getCookie("txt_passwd"));
	if(getCookie("txt_id") != "" && getCookie("txt_passwd") != ""){		
		//clear cookie_test_status cookie if it have been set
		delCookie("txt_id", "/");
		delCookie("txt_passwd", "/");
	}
	
	var today = new Date();	
	var expiry = today.setTime(today.getTime() + 1000*60*60*24); //new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000); 	

	var txt_id = document.getElementById('wkk_tx').value;
	var txt_passwd = document.getElementById('wkk_tx2').value;
	
//	alert("id : " + txt_id + " password : " + txt_passwd);
	setCookie("txt_id", txt_id, expiry);
	setCookie("txt_passwd", txt_passwd, expiry);
	console.log("SaveCookies() , id : " + txt_id + " password : " + txt_passwd);
	console.log("setTxtCookies() , id : " + getCookie("txt_id") + " password : " + getCookie("txt_passwd"));
}



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

