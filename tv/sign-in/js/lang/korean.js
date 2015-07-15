/**
 * Korean
 */



/**
 * key board page count
 */
var pageCnt = 4;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "확인";
var CANCEL_BUTTON_LABEL = "취소";
var TITLE_LABEL = "제목";
var DESC_LABEL = "설명";
var STYLE_LABEL = " ";


var firstLst = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
var secondLst = ["ㅏ","ㅐ","ㅑ","ㅒ","ㅓ","ㅔ","ㅕ","ㅖ","ㅗ","ㅘ","ㅙ","ㅚ","ㅛ","ㅜ","ㅝ","ㅞ","ㅟ","ㅠ","ㅡ","ㅢ","ㅣ"];
var thirdLst = ["//","ㄱ","ㄲ","ㄳ","ㄴ","ㄵ","ㄶ","ㄷ","ㄹ","ㄺ","ㄻ","ㄼ","ㄽ","ㄾ","ㄿ","ㅀ","ㅁ","ㅂ","ㅄ","ㅅ","ㅆ","ㅇ","ㅈ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
var keyboardLst = ["ㅁ","ㅠ","ㅊ","ㅇ","ㄷ","ㄹ","ㅎ","ㅗ","ㅑ","ㅓ","ㅏ","ㅣ","ㅡ","ㅜ","ㅐ","ㅔ","ㅂ","ㄱ","ㄴ","ㅅ","ㅕ","ㅍ","ㅈ","ㅌ","ㅛ","ㅋ"];
var twinConsonantLst = ["ㄲ","ㄸ","ㅃ","ㅆ","ㅉ"];
var hangleKeyLst = ["ㄲ","ㄸ","ㅃ","ㅆ","ㅉ","ㅁ","ㅠ","ㅊ","ㅇ","ㄷ","ㄹ","ㅎ","ㅗ","ㅑ","ㅓ","ㅏ","ㅣ","ㅡ","ㅜ","ㅐ","ㅔ","ㅒ","ㅖ","ㅂ","ㄱ","ㄴ","ㅅ","ㅕ","ㅍ","ㅈ","ㅌ","ㅛ","ㅋ"];
var doubleFirstLst = new Array();
var doubleSecondLst = new Array();
var doubleBottomLst = new Array();

var BASE_JISU = 44032;
var CHOSUNG_K = 588;
var JUNGSUNG_K = 28;

/**
 * initialize keyboard data
 * @return
 */
function initialize() {
//	alert("in Korean!!");

	chTggIdx = 0;
	document.getElementById("wkk_tx").style.textAlign= 'left';		
	miniPopUpInfoObjects[0] = "";
	miniPopUpInfoObjects[1] = "";
	miniPopUpInfoObjects[2] = "";
	miniPopUpInfoObjects[3] = "";
	miniPopUpInfoObjects[4] = "";
	miniPopUpInfoObjects[5] = "";
	miniPopUpInfoObjects[6] = "";
	miniPopUpInfoObjects[7] = "";
	miniPopUpInfoObjects[8] = "";
	miniPopUpInfoObjects[9] = "";

	doubleSecondLst[2] = new Array("ㅣ");
	doubleSecondLst[6] = new Array("ㅣ");
	doubleSecondLst[8] = new Array("ㅏ","ㅐ","ㅣ");
	doubleSecondLst[13] = new Array("ㅓ","ㅔ","ㅣ");
	doubleSecondLst[18] = new Array("ㅣ");

	doubleBottomLst[1] = new Array(" ","ㅅ");
	doubleBottomLst[4] = new Array("ㅈ","ㅎ");
	doubleBottomLst[7] = new Array(" ");
	doubleBottomLst[8] = new Array("ㄱ","ㅁ","ㅂ","ㅅ","ㅌ","ㅍ","ㅎ");
	doubleBottomLst[17] = new Array("ㅅ");
	doubleBottomLst[19] = new Array(" ");
	doubleBottomLst[22] = new Array(" ");
}

/**
 * return page idx change button label
 * @return
 */
function getPageHtml(isFocus) {
	var f = "";
	if(isFocus) {
		f = "f";
	}
	return '<font id="font'+f+'0">한</font>/ <font id="font'+f+'1" style="margin-left: -3px; color: #4D4D4D">영</font>/ <font id="font'+f+'2" style="margin-left: -3px; color: #4D4D4D">기호</font>';		
}



/**
 * Numeric key display on screen.
 * @param currPageIdx
 * @return truel/false
 */
function isNumericKeyActivated(currPageIdx) {
	if(currPageIdx==1 || currPageIdx == 2 ) {
		return true;
	} else {
		return false;
	}
}


/**
 * change key values
 * @return
 */
function changeKeyValue(gubun) {	
	setNewMode(0);	
	var ccKey = document.getElementById("wkk_key_cc");	
	/*********************************************************************/
	/*********************  KeyBoard Layout 1 Start  *********************/
	/*********************************************************************/
	if(keyBoardType==0){		
		if(gubun == 'lang'){
			stIdx = 10;
			setKeyText("wkk_key_00", "ㄱ");
			setKeyText("wkk_key_01", "ㄲ");
			setKeyText("wkk_key_02", "ㄴ");
			setKeyText("wkk_key_03", "ㄷ");
			setKeyText("wkk_key_04", "ㄸ");
			setKeyText("wkk_key_05", "ㅏ");
			setKeyText("wkk_key_06", "ㅓ");
			setKeyText("wkk_key_07", "ㅗ");
			setKeyText("wkk_key_10", "ㄹ");
			setKeyText("wkk_key_11", "ㅁ");
			setKeyText("wkk_key_12", "ㅂ");
			setKeyText("wkk_key_13", "ㅃ");
			setKeyText("wkk_key_14", "ㅅ");
			setKeyText("wkk_key_15", "ㅑ");
			setKeyText("wkk_key_16", "ㅕ");
			setKeyText("wkk_key_17", "ㅛ");
			setKeyText("wkk_key_20", "ㅆ");
			setKeyText("wkk_key_21", "ㅇ");
			setKeyText("wkk_key_22", "ㅈ");
			setKeyText("wkk_key_23", "ㅉ");
			setKeyText("wkk_key_24", "ㅊ");
			setKeyText("wkk_key_25", "ㅡ");
			setKeyText("wkk_key_26", "ㅣ");
			setKeyText("wkk_key_27", "ㅜ");
			setKeyText("wkk_key_30", "ㅋ");
			setKeyText("wkk_key_31", "ㅌ");
			setKeyText("wkk_key_32", "ㅍ");
			setKeyText("wkk_key_33", "ㅎ");
			setKeyText("wkk_key_34", " ");
			setKeyText("wkk_key_35", "ㅐ");
			setKeyText("wkk_key_36", "ㅔ");
			setKeyText("wkk_key_37", "ㅠ");
			setKeyText("wkk_key_40", " ");
			setKeyText("wkk_key_41", " ");
			setKeyText("wkk_key_42", " ");
			setKeyText("wkk_key_43", " ");
			setKeyText("wkk_key_44", " ");
			setKeyText("wkk_key_45", "ㅒ");
			setKeyText("wkk_key_46", "ㅖ");
			setKeyText("wkk_key_47", " "); 
			setKeyText("wkk_key_50", " ");
			setKeyText("wkk_key_51", " ");
			setKeyText("wkk_key_52", " ");
			setKeyText("wkk_key_53", " ");
			setKeyText("wkk_key_54", " ");
			setKeyText("wkk_key_55", " ");
			setKeyText("wkk_key_56", " ");
			setKeyText("wkk_key_57", " "); 
						
		}
		else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:				
				setKeyText("wkk_key_00", "ㄱ");
				setKeyText("wkk_key_01", "ㄲ");
				setKeyText("wkk_key_02", "ㄴ");
				setKeyText("wkk_key_03", "ㄷ");
				setKeyText("wkk_key_04", "ㄸ");
				setKeyText("wkk_key_05", "ㅏ");
				setKeyText("wkk_key_06", "ㅓ");
				setKeyText("wkk_key_07", "ㅗ");
				setKeyText("wkk_key_10", "ㄹ");
				setKeyText("wkk_key_11", "ㅁ");
				setKeyText("wkk_key_12", "ㅂ");
				setKeyText("wkk_key_13", "ㅃ");
				setKeyText("wkk_key_14", "ㅅ");
				setKeyText("wkk_key_15", "ㅑ");
				setKeyText("wkk_key_16", "ㅕ");
				setKeyText("wkk_key_17", "ㅛ");
				setKeyText("wkk_key_20", "ㅆ");
				setKeyText("wkk_key_21", "ㅇ");
				setKeyText("wkk_key_22", "ㅈ");
				setKeyText("wkk_key_23", "ㅉ");
				setKeyText("wkk_key_24", "ㅊ");
				setKeyText("wkk_key_25", "ㅡ");
				setKeyText("wkk_key_26", "ㅣ");
				setKeyText("wkk_key_27", "ㅜ");
				setKeyText("wkk_key_30", "ㅋ");
				setKeyText("wkk_key_31", "ㅌ");
				setKeyText("wkk_key_32", "ㅍ");
				setKeyText("wkk_key_33", "ㅎ");
				setKeyText("wkk_key_34", " ");
				setKeyText("wkk_key_35", "ㅐ");
				setKeyText("wkk_key_36", "ㅔ");
				setKeyText("wkk_key_37", "ㅠ");
				setKeyText("wkk_key_40", " ");
				setKeyText("wkk_key_41", " ");
				setKeyText("wkk_key_42", " ");
				setKeyText("wkk_key_43", " ");
				setKeyText("wkk_key_44", " ");
				setKeyText("wkk_key_45", "ㅒ");
				setKeyText("wkk_key_46", "ㅖ");
				setKeyText("wkk_key_47", " "); 
				setKeyText("wkk_key_50", " ");
				setKeyText("wkk_key_51", " ");
				setKeyText("wkk_key_52", " ");
				setKeyText("wkk_key_53", " ");
				setKeyText("wkk_key_54", " ");
				setKeyText("wkk_key_55", " ");
				setKeyText("wkk_key_56", " ");
				setKeyText("wkk_key_57", " "); 
				break;
			case 11:
				//
				break;
			}
		} else if (gubun == 'ch') {
			chTggIdx++;
			if(lagnTogglIdx == 8){
				lagnTogglIdx = 0;
			}else if(chTggIdx == 1){
				lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "KOR");	//Lang Toggle
			
			switch(chIdx){
			case 20:
				setKeyText("wkk_key_00", "^");
				setKeyText("wkk_key_01", "~");
				setKeyText("wkk_key_02", "?");
				setKeyText("wkk_key_03", "!");
				setKeyText("wkk_key_04", "\'");
				setKeyText("wkk_key_05", "\""); 
				setKeyText("wkk_key_06", "(");
				setKeyText("wkk_key_07", ")");
				setKeyText("wkk_key_10", "-");
				setKeyText("wkk_key_11", ":");
				setKeyText("wkk_key_12", ";");
				setKeyText("wkk_key_13", "+");
				setKeyText("wkk_key_14", "&");
				setKeyText("wkk_key_15", "%");
				setKeyText("wkk_key_16", "*");
				setKeyText("wkk_key_17", "=");
				setKeyText("wkk_key_20", "<");
				setKeyText("wkk_key_21", ">");
				setKeyText("wkk_key_22", "€");
				setKeyText("wkk_key_23", "￡");
				setKeyText("wkk_key_24", "$");
				setKeyText("wkk_key_25", "￥");
				setKeyText("wkk_key_26", "¤");
				setKeyText("wkk_key_27", "\\");
				setKeyText("wkk_key_30", "[");
				setKeyText("wkk_key_31", "]");
				setKeyText("wkk_key_32", "{");
				setKeyText("wkk_key_33", "}");
				setKeyText("wkk_key_34", ",");
				setKeyText("wkk_key_35", ".");
				setKeyText("wkk_key_36", "@");
				setKeyText("wkk_key_37", "§");
				setKeyText("wkk_key_40", "#");
				setKeyText("wkk_key_41", "¿");
				setKeyText("wkk_key_42", "¡");
				setKeyText("wkk_key_43", "￦");
				setKeyText("wkk_key_44", "|");
				setKeyText("wkk_key_45", " ");
				setKeyText("wkk_key_46", "_");
				setKeyText("wkk_key_47", "/"); 
				setKeyText("wkk_key_50", " ");
				setKeyText("wkk_key_51", " ");
				setKeyText("wkk_key_52", " ");
				setKeyText("wkk_key_53", " ");
				setKeyText("wkk_key_54", " ");
				setKeyText("wkk_key_55", " ");
				setKeyText("wkk_key_56", " ");
				setKeyText("wkk_key_57", " "); 	
				break;
			}
		}

	}
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==1){	
		
		if(gubun == 'lang'){
			
			//stIdx = 11;
			
			setKeyText("wkk_key_00", "ㄱ");
			setKeyText("wkk_key_01", "ㄲ");
			setKeyText("wkk_key_02", "ㄴ");
			setKeyText("wkk_key_03", "ㄷ");
			setKeyText("wkk_key_04", "ㄸ");
			setKeyText("wkk_key_05", "ㄹ");
			setKeyText("wkk_key_10", "ㅁ");
			setKeyText("wkk_key_11", "ㅂ");
			setKeyText("wkk_key_12", "ㅃ");
			setKeyText("wkk_key_13", "ㅅ");
			setKeyText("wkk_key_14", "ㅆ");
			setKeyText("wkk_key_15", "ㅇ");
			setKeyText("wkk_key_20", "ㅈ");
			setKeyText("wkk_key_21", "ㅉ");
			setKeyText("wkk_key_22", "ㅊ");
			setKeyText("wkk_key_23", "ㅋ");
			setKeyText("wkk_key_24", "ㅌ");
			setKeyText("wkk_key_25", "ㅍ");
			setKeyText("wkk_key_30", "ㅎ");
			setKeyText("wkk_key_31", "ㅏ");
			setKeyText("wkk_key_32", "ㅑ");
			setKeyText("wkk_key_33", "ㅓ");
			setKeyText("wkk_key_34", "ㅕ");
			setKeyText("wkk_key_35", "ㅗ");
			setKeyText("wkk_key_40", "ㅛ");
			setKeyText("wkk_key_41", "ㅜ");
			setKeyText("wkk_key_42", "ㅠ");
			setKeyText("wkk_key_43", "ㅡ");
			setKeyText("wkk_key_44", "ㅣ");
			setKeyText("wkk_key_45", "ㅐ");
			setKeyText("wkk_key_50", "ㅒ");
			setKeyText("wkk_key_51", "ㅔ");
			setKeyText("wkk_key_52", "ㅖ");
			setKeyText("wkk_key_53", " "); 						
		}
		
		else if(gubun == 'sl')	{			
		
			//
		} else if (gubun == 'ch') {
			chTggIdx++;		
			if(lagnTogglIdx == 8){
						lagnTogglIdx = 0;
			}else if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			
			setInnerHtml("wkk_key_61", "KOR");	//Lang Toggle
			switch(chIdx){
				case 20:
					chIdx = 21;
					setKeyText("wkk_key_00", "1");
					setKeyText("wkk_key_01", "2");
					setKeyText("wkk_key_02", "3");
					setKeyText("wkk_key_03", "4");
					setKeyText("wkk_key_04", "5");
					setKeyText("wkk_key_05", "6");
					setKeyText("wkk_key_10", "7");
					setKeyText("wkk_key_11", "8");
					setKeyText("wkk_key_12", "9");
					setKeyText("wkk_key_13", "0");
					setKeyText("wkk_key_14", ".");
					setKeyText("wkk_key_15", "@");
					setKeyText("wkk_key_20", "_");
					setKeyText("wkk_key_21", "/");
					setKeyText("wkk_key_22", "^");
					setKeyText("wkk_key_23", "~");
					setKeyText("wkk_key_24", "?");
					setKeyText("wkk_key_25", "!");
					setKeyText("wkk_key_30", "\'");
					setKeyText("wkk_key_31", "\"");
					setKeyText("wkk_key_32", "(");
					setKeyText("wkk_key_33", ")");
					setKeyText("wkk_key_34", "-");
					setKeyText("wkk_key_35", "#");
					setKeyText("wkk_key_40", ":");
					setKeyText("wkk_key_41", ";");
					setKeyText("wkk_key_42", "+");
					setKeyText("wkk_key_43", "&");
					setKeyText("wkk_key_44", "*");
					setKeyText("wkk_key_45", "=");
					setKeyText("wkk_key_50", "<");	
					setKeyText("wkk_key_51", ">");
					setKeyText("wkk_key_52", "[");
					setKeyText("wkk_key_53", "]");
				break;
				case 21:
					chIdx = 20;
					setKeyText("wkk_key_00", "\{");
					setKeyText("wkk_key_01", "\}");
					setKeyText("wkk_key_02", "\,");
					setKeyText("wkk_key_03", "\§");
					setKeyText("wkk_key_04", "\%");
					setKeyText("wkk_key_05", "\¿");
					setKeyText("wkk_key_10", "\¡");
					setKeyText("wkk_key_11", "\€");
					setKeyText("wkk_key_12", "\£");
					setKeyText("wkk_key_13", "\$");
					setKeyText("wkk_key_14", "\¥");
					setKeyText("wkk_key_15", "￦");
					setKeyText("wkk_key_20", "＼");
					setKeyText("wkk_key_21", "|");
					setKeyText("wkk_key_22", " ");
					setKeyText("wkk_key_23", " ");
					setKeyText("wkk_key_24", " ");
					setKeyText("wkk_key_25", " ");
					setKeyText("wkk_key_30", " ");
					setKeyText("wkk_key_31", " ");
					setKeyText("wkk_key_32", " ");
					setKeyText("wkk_key_33", " ");
					setKeyText("wkk_key_34", " ");
					setKeyText("wkk_key_35", " ");
					setKeyText("wkk_key_40", " ");
					setKeyText("wkk_key_41", " ");
					setKeyText("wkk_key_42", " ");
					setKeyText("wkk_key_43", " ");
					setKeyText("wkk_key_44", " ");
					setKeyText("wkk_key_45", " ");
					setKeyText("wkk_key_50", " ");	
					setKeyText("wkk_key_51", " ");
					setKeyText("wkk_key_52", " ");
					setKeyText("wkk_key_53", " ");
					break;				
			}
		}
	}
		
		
	/*********************************************************************/
	/*********************  KeyBoard Layout 3 Start  *********************/
	/*********************************************************************/	
	else {		
		
		if(gubun == 'lang'){
			stIdx = 10;	
			setKeyText("wkk_key_001", "ㄱ"); 
			setKeyText("wkk_key_002", "ㄲ"); 
			setKeyText("wkk_key_003", "ㄴ"); 
			setKeyText("wkk_key_004", "ㄷ"); 
			setKeyText("wkk_key_005", "ㄸ"); 
			setKeyText("wkk_key_006", "ㄹ"); 
			setKeyText("wkk_key_007", "ㅁ"); 
			setKeyText("wkk_key_008", "ㅂ"); 
			setKeyText("wkk_key_009", "ㅏ"); 
			setKeyText("wkk_key_010", "ㅑ"); 
			setKeyText("wkk_key_011", "ㅓ"); 
			setKeyText("wkk_key_012", "ㅕ"); 
			setKeyText("wkk_key_013", "ㅡ"); 
			setKeyText("wkk_key_101", "ㅃ"); 
			setKeyText("wkk_key_102", "ㅅ"); 
			setKeyText("wkk_key_103", "ㅆ"); 
			setKeyText("wkk_key_104", "ㅇ"); 
			setKeyText("wkk_key_105", "ㅈ"); 
			setKeyText("wkk_key_106", "ㅉ"); 
			setKeyText("wkk_key_107", "ㅊ"); 
			setKeyText("wkk_key_108", "ㅋ"); 
			setKeyText("wkk_key_109", "ㅗ"); 
			setKeyText("wkk_key_110", "ㅛ"); 
			setKeyText("wkk_key_111", "ㅜ"); 
			setKeyText("wkk_key_112", "ㅠ"); 
			setKeyText("wkk_key_113", "ㅣ"); 
			setKeyText("wkk_key_201", "ㅌ"); 
			setKeyText("wkk_key_202", "ㅍ"); 
			setKeyText("wkk_key_203", "ㅎ"); 
			setKeyText("wkk_key_204", " "); 
			setKeyText("wkk_key_210", "ㅐ"); 
			setKeyText("wkk_key_211", "ㅒ"); 
			setKeyText("wkk_key_212", "ㅔ"); 
			setKeyText("wkk_key_213", "ㅖ");	 						
		}
		else if(gubun == 'sl')	{
				switch(stIdx){
					case 10 :			
					setKeyText("wkk_key_001", "ㄱ"); 
					setKeyText("wkk_key_002", "ㄲ"); 
					setKeyText("wkk_key_003", "ㄴ"); 
					setKeyText("wkk_key_004", "ㄷ"); 
					setKeyText("wkk_key_005", "ㄸ"); 
					setKeyText("wkk_key_006", "ㄹ"); 
					setKeyText("wkk_key_007", "ㅁ"); 
					setKeyText("wkk_key_008", "ㅂ"); 
					setKeyText("wkk_key_009", "ㅏ"); 
					setKeyText("wkk_key_010", "ㅑ"); 
					setKeyText("wkk_key_011", "ㅓ"); 
					setKeyText("wkk_key_012", "ㅕ"); 
					setKeyText("wkk_key_013", "ㅡ"); 
					setKeyText("wkk_key_101", "ㅃ"); 
					setKeyText("wkk_key_102", "ㅅ"); 
					setKeyText("wkk_key_103", "ㅆ"); 
					setKeyText("wkk_key_104", "ㅇ"); 
					setKeyText("wkk_key_105", "ㅈ"); 
					setKeyText("wkk_key_106", "ㅉ"); 
					setKeyText("wkk_key_107", "ㅊ"); 
					setKeyText("wkk_key_108", "ㅋ"); 
					setKeyText("wkk_key_109", "ㅗ"); 
					setKeyText("wkk_key_110", "ㅛ"); 
					setKeyText("wkk_key_111", "ㅜ"); 
					setKeyText("wkk_key_112", "ㅠ"); 
					setKeyText("wkk_key_113", "ㅣ"); 
					setKeyText("wkk_key_201", "ㅌ"); 
					setKeyText("wkk_key_202", "ㅍ"); 
					setKeyText("wkk_key_203", "ㅎ"); 
					setKeyText("wkk_key_204", " "); 
					setKeyText("wkk_key_210", "ㅐ"); 
					setKeyText("wkk_key_211", "ㅒ"); 
					setKeyText("wkk_key_212", "ㅔ"); 
					setKeyText("wkk_key_213", "ㅖ");	 					
					break;					
				}
		} else if (gubun == 'ch') {
			chTggIdx++;
			if(lagnTogglIdx == 8){
					lagnTogglIdx = 0;
			}else if(chTggIdx == 1) {
					lagnTogglIdx = lagnTogglIdx -1;
			}
		
			setInnerHtml("wkk_key_116", "KOR");	//Lang Toggle
			switch(chIdx){
			case 20:
				chIdx = 21;
				setKeyText("wkk_key_001", "1"); 
				setKeyText("wkk_key_002", "2"); 
				setKeyText("wkk_key_003", "3"); 
				setKeyText("wkk_key_004", "4"); 
				setKeyText("wkk_key_005", "5"); 
				setKeyText("wkk_key_006", "6"); 
				setKeyText("wkk_key_007", "7"); 
				setKeyText("wkk_key_008", "8"); 
				setKeyText("wkk_key_009", "9"); 
				setKeyText("wkk_key_010", "0"); 
				setKeyText("wkk_key_011", "."); 
				setKeyText("wkk_key_012", "@"); 
				setKeyText("wkk_key_013", "_"); 
				setKeyText("wkk_key_101", "/"); 
				setKeyText("wkk_key_102", "^"); 
				setKeyText("wkk_key_103", "~"); 
				setKeyText("wkk_key_104", "?"); 
				setKeyText("wkk_key_105", "!"); 
				setKeyText("wkk_key_106", "\'");
				setKeyText("wkk_key_107", "\"");
				setKeyText("wkk_key_108", "("); 
				setKeyText("wkk_key_109", ")"); 
				setKeyText("wkk_key_110", "-"); 
				setKeyText("wkk_key_111", ":"); 
				setKeyText("wkk_key_112", ";"); 
				setKeyText("wkk_key_113", "+"); 
				setKeyText("wkk_key_201", "&"); 
				setKeyText("wkk_key_202", "%"); 
				setKeyText("wkk_key_203", "*"); 
				setKeyText("wkk_key_204", "="); 
				setKeyText("wkk_key_210", "<");	
				setKeyText("wkk_key_211", ">"); 
				setKeyText("wkk_key_212", "["); 
				setKeyText("wkk_key_213", "]"); 
				break;
			case 21:
				chIdx = 20;
				setKeyText("wkk_key_001", "{");
				setKeyText("wkk_key_002", "}");
				setKeyText("wkk_key_003", ",");
				setKeyText("wkk_key_004", "§");
				setKeyText("wkk_key_005", "#");
				setKeyText("wkk_key_006", "¿");
				setKeyText("wkk_key_007", "¡");
				setKeyText("wkk_key_008", "€");
				setKeyText("wkk_key_009", "£");
				setKeyText("wkk_key_010", "$");
				setKeyText("wkk_key_011", "¥");
				setKeyText("wkk_key_012", "￦");
				setKeyText("wkk_key_013", "＼");
				setKeyText("wkk_key_101", "|");
				setKeyText("wkk_key_102", " ");
				setKeyText("wkk_key_103", " ");
				setKeyText("wkk_key_104", " ");
				setKeyText("wkk_key_105", " ");
				setKeyText("wkk_key_106", " ");
				setKeyText("wkk_key_107", " ");
				setKeyText("wkk_key_108", " ");
				setKeyText("wkk_key_109", " ");
				setKeyText("wkk_key_110", " ");
				setKeyText("wkk_key_111", " ");
				setKeyText("wkk_key_112", " ");
				setKeyText("wkk_key_113", " ");
				setKeyText("wkk_key_201", " ");
				setKeyText("wkk_key_202", " ");
				setKeyText("wkk_key_203", " ");
				setKeyText("wkk_key_204", " ");
				setKeyText("wkk_key_210", " "); 
				setKeyText("wkk_key_211", " "); 
				setKeyText("wkk_key_212", " "); 
				setKeyText("wkk_key_213", " ");		
				break;
			}
		}
	}
	
	
		
	
	

}

/**
 * add space to textbox's content
 * @return
 */
function addSpaceText() {
	setNewMode(0);
	appendText(" ");
	lastInputChar = " ";
}

/**
 * backspace text
 * @return
 */
function backspaceText() {
	var textItem = document.getElementById("wkk_tx");
	
	if( textItem != null) {
		var isKor = isCaretActivated();
		if (isKor) {
			doSomeAfterPressMuteForHangul();
		} else {
			//alert("ELSE");
			deletePrevChar();
		}
	}
}

/**
 * 
 * @param val
 * @return
 */
function appendText(content) {
//	alert("korean");
	var textItem = document.getElementById("wkk_tx");
	if( textItem != null) {
		if(content == " ") {
			addStrIntoFld(" ", true);
		}else{
			if( gubun == 'lang' ||  gubun == 'sl') {	
				var kObj = getHangul(content);
				addStrIntoFldForHangul(kObj);
			} else {
				addStrIntoFld(content, true);
			}
		}		
	}
}

/**
 * pre processing define when key pressed (for combination charset ex> hangle)
 * @param nMode
 * @return
 */
function setNewMode(nMode) {
	mode = new Number(nMode);
	if(mode == 0) {
		historyLst = null;
		historyLst = new Array();
		initializeIndex();
	}
}


/*start of hangle handle*/

var firstIdx = new Number();
var secondIdx = new Number();
var thirdIdx = new Number();
var doubleBottomIdx = new Number();
var mode = new Number();
var historyLst = new Array();
var lastInputChar = new String();
var isScreen = true;


function initializeIndex() {
	firstIdx = -1;
	secondIdx = -1;
	thirdIdx = -1;
	doubleBottomIdx = -1;
}


function getLastInputChar() {
	var kHistory = historyLst[historyLst.length -1];
	if(kHistory == null) {
		return null;
	}
	return kHistory.inputChar;
}

function deleteChar(u) {
	var kCurrent = historyLst[historyLst.length -1];
	if(kCurrent.newSecondIdx > -1 ) {
		kCurrent.newSecondIdx = -1;
		if(kCurrent.newFirstIdx > -1 ) {
			setNewMode(1);
		} else {
			setNewMode(0);
		}
		kCurrent.deleteLen = 2;
	} else if (kCurrent.newFirstIdx > -1) {
		kCurrent.newFirstIdx = -1;
		setNewMode(0);
		kCurrent.deleteLen = 2;
	} else if (kCurrent.doubleBottomIdx > -1 ) {
		thirdIdx = revertThirdIdx( kCurrent.thirdIdx, kCurrent.doubleBottomIdx);
		kCurrent.doubleBottomIdx = -1;
		kCurrent.thirdIdx = thirdIdx;
		setNewMode(3);
		kCurrent.deleteLen = 1;
	} else if (kCurrent.thirdIdx > -1) {
		thirdIdx = -1;
		doubleBottomIdx = -1;
		kCurrent.thirdIdx = -1;
		setNewMode(2);
		kCurrent.deleteLen = 1;
	} else if (kCurrent.secondIdx > -1 ) {
		if (( u =="forReplace") && (kCurrent.secondIdx == 9 || kCurrent.secondIdx == 14 )) {
			kCurrent.secondIdx -= 1;
			secondIdx = kCurrent.secondIdx;
			lastInputChar = secondLst[kCurrent.secondIdx];
			kCurrent.inputChar = lastInputChar;
			setNewMode(2);
		} else {
			secondIdx= - -1;
			kCurrent.secondIdx = -1;
			lastInputChar = firstLst[kCurrent.firstIdx];
			kCurrent.inputChar = lastInputChar;
			setNewMode(1);
		}
		kCurrent.deleteLen = 1;
	} else if (kCurrent.firstIdx > -1 ) {
		firstIdx = -1;
		kCurrent.firstIdx = -1;
		setNewMode(0);
		kCurrent.deleteLen = 1;
	}
	kCurrent.resultChar = getKoreanChar(kCurrent.firstIdx, kCurrent.secondIdx, kCurrent.thirdIdx);
	kCurrent.newChar = getKoreanChar(kCurrent.newFirstIdx, kCurrent.newSecondIdx, kCurrent.newThirdIdx);
	return kCurrent;
}

function initHistoryLastIdx( his ) {
	if( his.thirdIdx > -1) {
		his.thirdIdx = -1;
		his.mode = 2;
	} else if ( his.secondIdx > -1) {
		his.secondIdx = -1;
		his.mode = 1;
	} else if ( his.firstIdx > -1 ) {
		his.firstIdx = -1;
		his.mode = 0;
	}
}

function initHistoryLastNewIdx(his) {
	if( his.newThirdIdx > -1) {
		his.newThirdIdx = -1;
		his.mode = 2;
	} else if (his.newSecondIdx > -1) {
		his.newSecondIdx = -1;
		his.mode = 1;
	} else if (his.newFirstIdx > -1) {
		his.newFirstIdx = -1;
		his.mode = 0;
	}
}

function getCanDeleteChar() {
	var historyLst2 = historyLst;
	if( historyLst.length > 0 ) {
		return true;
	} else {
		return false;
	}
}

function revertThirdIdx( t, db ) {
	return new Number(t) - new Number(db) -1;
}

function doublizeThirdIdx( t, db) {
	return new Number(t) + new Number(db) +1;
}

function getInitialObj( c ) {
	var obj = new Object();
	obj.firstIdx = firstIdx;
	obj.secondIdx = secondIdx;
	obj.thirdIdx = thirdIdx;
	obj.doubleBottomIdx = doubleBottomIdx;
	obj.newFirstIdx = -1;
	obj.newSecondIdx = -1;
	obj.newThirdIdx = -1;
	obj.isCompleted = false;
	obj.inputChar = c;
	obj.resultChar = "";
	obj.newChar = "";
	obj.mode = mode;
	return obj;
}

function getArrayIndex( array, str, defaultValue) {
	var dv = new Number(defaultValue);
	if(array != null && array.length > 0 ) {
		for( var i = 0 ; i < array.length ; i++ ) {
			if( array[i] == str) {
				dv = i;
				break;
			}
		}
	}
	return dv;
}


function doSomeWhenConsonant( result ) {
	var kChar = result.inputChar;
	var kLastChar = getLastInputChar();
	if( mode == 0) {
		firstIdx = getArrayIndex(firstLst, kChar, -1);
		setNewMode(1);
		result.firstIdx = firstIdx;
	} else if ( mode == 1) {
		var kSubDFIdx = checkDoubleFirstConsonant( kLastChar, kChar);
		if(kSubDFIdx == -1) {
			initializeIndex();
			firstIdx = getArrayIndex(firstLst, kChar, -1);
			setNewMode(1);
			result.isCompleted = true;
			result.newFirstIdx = firstIdx;
		} else {
			var kTwin = getIsTwinWithFirstIdx(firstIdx);
			if(kTwin) {
				initializeIndex();
				firstIdx = getArrayIndex(firstLst, kChar, -1);
				setNewMode(1);
				result.isCompleted = true;
				result.newFirstIdx = firstIdx;
			} else {
				firstIdx = new Number(firstIdx) + new Number(kSubDFIdx) + 1;
				setNewMode(1);
				result.firstIdx = firstIdx;
			}
		}
	} else if ( mode == 2) {
		if ( firstIdx == -1) {
			initializeIndex();
			firstIdx = getArrayIndex(firstLst, kChar, -1);
			setNewMode(1);
			result.isCompleted = true;
			result.newFirstIdx = firstIdx;
		} else {
			thirdIdx = getArrayIndex(thirdLst, kChar, -1);

			if (thirdIdx != -1) {
				setNewMode(3);
				result.thirdIdx = thirdIdx;				
			} else {
				initializeIndex();
				firstIdx = getArrayIndex(firstLst, kChar, -1);
				setNewMode(1);
				result.isCompleted = true;
				result.newFirstIdx = firstIdx;
			}
		}
	} else if ( mode == 3) {
		var kSubDBLst = doubleBottomLst[thirdIdx];
		if(kSubDBLst == null || kSubDBLst.length == 0 ) {
			var kSubDFIdx = checkDoubleFirstConsonant(kLastChar, kChar);
			if(kSubDFIdx == -1) {
				initializeIndex();
				firstIdx = getArrayIndex(firstLst, kChar, -1);
				setNewMode(1);
				result.isCompleted = true;
				result.newFirstIdx = firstIdx;
			} else {
				var kDTIdx = revertThirdIdx(thirdIdx, doubleBottomIdx);
				initializeIndex();

				firstIdx = getArrayIndex(firstLst, thirdLst[kDTIdx], -1);
				firstIdx = new Number(firstIdx) + new Number(kSubDFIdx) + 1;
				setNewMode(1);

				result.isCompleted = true;
				result.newFirstIdx = firstIdx;
				result.thirdIdx = -1;
			}
		} else {
			doubleBottomIdx = getArrayIndex(kSubDBLst, kChar, -1);
			if( doubleBottomIdx == -1) {
				initializeIndex();
				setNewMode(1);
				firstIdx = getArrayIndex(firstLst, kChar, -1);
				result.isCompleted = true;
				result.newFirstIdx = firstIdx;
			} else {
				setNewMode(4);
				thirdIdx = doublizeThirdIdx(thirdIdx, doubleBottomIdx);
				result.thirdIdx = thirdIdx;
			}
			result.doubleBottomIdx = doubleBottomIdx;
		}
	} else if ( mode == 4) {
		var kSubDFIdx = checkDoubleFirstConsonant(kLastChar, kChar);
		if(kSubDFIdx == -1) {
			initializeIndex();
			setNewMode(1);
			firstIdx = getArrayIndex(firstLst, kChar, -1);
			result.isCompleted = true;
			result.newFirstIdx = firstIdx;
		} else {
			var kThirdIdx = revertThirdIdx(thirdIdx, doubleBottomIdx);
			initializeIndex();
			setNewMode(1);
			var kIdx = getArrayIndex(firstLst, kChar, -1);
			firstIdx = new Number(kIdx) + new Number(kSubDFIdx) + 1;

			result.isCompleted = true;
			result.thirdIdx = kThirdIdx;
			result.newFirstIdx = firstIdx;
			result.doubleBottomIdx = -1;
			doubleBottomIdx = -1;
		}
	}
}

function doSomeWhenVowel(result) {
	var kChar = result.inputChar;
	var kLastChar = getLastInputChar();

	if( mode == 0) {
		setNewMode(0);
		var kSecondIdx = getArrayIndex(secondLst, kChar, -1);
		result.isCompleted = true;
		//result.secondIdx = getArrayIndex(secondLst, kLastChar, -1);;
		result.secondIdx = kSecondIdx;
	} else if (mode == 1) {
		secondIdx = getArrayIndex(secondLst,kChar,-1);
		setNewMode(2);
		result.secondIdx = secondIdx;
	} else if ( mode == 2) {
		var kSubDSLst = doubleSecondLst[secondIdx];
		
		if( isScreen && kChar =="ㅣ") {
			if(kLastChar == "ㅑ" || kLastChar == "ㅕ") {
				kSubDSLst = null;
			}
		}
		if(kSubDSLst == null || kSubDSLst.length == 0) {
			setNewMode(0);
			var kSecondIdx = getArrayIndex(secondLst, kChar, -1);
			result.isCompleted = true;
			result.newSecondIdx = kSecondIdx;
		} else {
			var kSubDSIdx = getArrayIndex(kSubDSLst, kChar, -1);
			if(kSubDSIdx == -1) {
				setNewMode(0);
				var kSecondIdx = getArrayIndex(secondLst, kChar, -1);
				result.isCompleted = true;
				result.newSecondIdx = kSecondIdx;
			} else {
				secondIdx = new Number(secondIdx) + new Number(kSubDSIdx) + 1;
				setNewMode(2);
				result.secondIdx = secondIdx;
			}
		}
	} else if ( mode == 3) {
		initializeIndex();
		firstIdx = getArrayIndex(firstLst, kLastChar, -1);
		secondIdx = getArrayIndex(secondLst, kChar, -1);
		setNewMode(2);
		result.isCompleted = true;
		result.thirdIdx = -1;
		result.newFirstIdx = firstIdx;
		result.newSecondIdx = secondIdx;
	} else if ( mode == 4) {
		var kFirstIdx = getArrayIndex(firstLst, thirdLst[thirdIdx], -1);
		if(kFirstIdx == -1) {
			var kThirdIdx = revertThirdIdx(thirdIdx, doubleBottomIdx);
			initializeIndex();
			firstIdx = getArrayIndex(firstLst, kLastChar, -1);
			secondIdx = getArrayIndex(secondLst, kChar, -1);
			setNewMode(2);
			result.isCompleted = true;
			result.thirdIdx = kThirdIdx;
			result.newFirstIdx = firstIdx;
			result.newSecondIdx = secondIdx;
			result.doubleBottomIdx = doubleBottomIdx = -1;
		} else {
			initializeIndex();
			firstIdx = kFirstIdx;
			secondIdx = getArrayIndex(secondLst, kChar, -1);
			setNewMode(2);
			result.isCompleted = true;
			result.thirdIdx = thirdIdx;
			result.newFirstIdx = firstIdx;
			result.newSecondIDx = secondIdx;
		}
	}
}

function compound(result) {
	var kInputChar = result.inputChar;
	var kIsConsonant = false;
	if(getArrayIndex(firstLst, kInputChar, -1) > -1) {
		kIsConsonant = true;
	}
	if(kIsConsonant) {
		//alert("Consonant");
		doSomeWhenConsonant(result);
	} else {
		//alert("Vowel");
		doSomeWhenVowel(result);
	}
	result.resultChar = getKoreanChar(result.firstIdx, result.secondIdx, result.thirdIdx);
	result.newChar = getKoreanChar(result.newFirstIdx, result.newSecondIdx, result.newThirdIdx);
	result.newMode = mode;
}

function getHangul( c ) {
	var kResult = getInitialObj(c);
	compound(kResult);
	if(kResult.isCompleted) {
		historyLst = null;
		historyLst = new Array();
	}
	historyLst.push(kResult);
	lastInputChar = c;
	return kResult;
}

function doSomeAfterPressMuteForHangul() {
	//alert("doSomeAfterPressMuteForHangul");
	var kSelected = isCaretActivated();
	var kIdx = getCaretPosition();
	var kCanDelete = (kSelected || kIdx > 0);
	if (kCanDelete) {
		if (getCanDeleteChar()) {
			if (kSelected) {
				var kResult = deleteCharPressingBackSpace();
				deleteCharInCompoundingForHangul(kResult);
			} else {
				deleteCharAtForHangul(kIdx -1);
			}
		} else {
			deleteCharAtForHangul(kIdx-1);
		}
	}
}

function deleteCharInCompoundingForHangul(result) {
	var resultChar = result.resultChar == null ? "" : result.resultChar;
	var newChar = result.newChar == null ? "" : result.newChar;
	var kNew = resultChar + newChar;
	var kTxt = getTextContent(); 
	var kMode = result.mode;
	var kCaretSelected = isCaretActivated();
	var kDeleteLen = 1;

	
	//alert("kTxt : " + kTxt);
	
	if( result.deleteLen != null && result.deleteLen != "undefined" ) {
		kDeleteLen = result.deleteLen;
	}
	
//	alert("kDeleteLen : " + kDeleteLen );
	
	var kIsCompounding = (kCaretSelected && (kMode > 0));
	var kIdx = getCaretPosition();

	var kTxt_0;
	var kTxt_1;
	var kCaretIdx; 

	if (kNew.length == 0) {
		//alert("kNew.length == 0, kIdx : " + kIdx);
		if(kDIdx == 0 || kDIdx == 1){
			kTxt_0 = kTxt.substr(0, kIdx);
			kTxt_1 = kTxt.substr(kIdx + 1, kTxt.length);
		}else{
			kTxt_0 = kTxt.substr(0, kIdx -1);
			kTxt_1 = kTxt.substr(kIdx + 1, kTxt.length);
			kDIdx = 0;
		}
		kCaretIdx = kTxt_0.length;
		kCaretSelected = false;
		kDIdx++;
		
		//alert("kDIdx : " + kDIdx);


		/*kTxt_0 = kTxt.substr(0, kIdx -1);
		kTxt_1 = kTxt.substr(kIdx + 1, kTxt.length);*/
		//alert("kTxt_0 : " + kTxt_0 + " kTxt_1 : " + kTxt_1 + " kCaretIdx : " + kCaretIdx );
	} else if (kNew.length == 2) {
	//	alert("kNew.length ==  2");
		kTxt_0 = kTxt.substr(0, kIdx-1);
		kTxt_1 = kTxt.substr(kIdx + 1, kTxt.length);

		kCaretIdx = (kTxt_0 + kNew).length -1;
		kCaretSelected = true;
	} else {
		//alert("kNew.length Else");
		if (kDeleteLen == 2) {
			kTxt_0 = kTxt.substr(0, kIdx -1);
			kTxt_1 = kTxt.substr(kIdx + 1, kTxt.length);
			kCaretIdx = (kTxt_0 + kNew).length;
			//alert("kTxt_0 : " + kTxt_0 + " kTxt_1 : " + kTxt_1 + " kCaretIdx : " + kCaretIdx );
		} else {
			kTxt_0 = kTxt.substr(0, kIdx);
			kTxt_1 = kTxt.substr(kIdx + 1, kTxt.length);
			kCaretIdx = kIdx;
			kCaretSelected = true;
			//alert("kTxt_0 : " + kTxt_0 + " kTxt_1 : " + kTxt_1 + " kCaretIdx : " + kCaretIdx );
		}
	}
	var kJoin = kTxt_0 + kNew + kTxt_1;

//	alert("kJoin : " + kJoin.length);
	
	putStrIntoFldForHangul(kJoin, kCaretIdx, kCaretSelected);
	
}

function deleteCharPressingBackSpace() {
	lastInputNum = -1;
	lastInputChar = "";
	return deleteChar("forDelete");

}

function deleteCharAtForHangul(idx) {
	var kTxt = getTextContent();
	var kTxt_0 = kTxt.substr(0, idx);
	var kTxt_1 = kTxt.substr(idx + 1, kTxt.length);
	var kJoin = kTxt_0 + kTxt_1;
	var kCaretIdx = idx;
	putStrIntoFldForHangul(kJoin, kCaretIdx, false);	

}

function putStrIntoFldForHangul(str, idx, selected) {
	
	var kStr = (str == null) ? "" : str;
	var kSeletected = selected == null ? true : selected;

	setTextContent(kStr);
	if (kStr.length == 0) {
		setCaretPosition(0, 0);
		caretMoved();
	} else {
		setCaretPosition(idx, 1);
	}
}

function addStrIntoFldForHangul( result ) {
	
	var kNew = "";
	if(result.resultChar !=null && result.resultChar.length>0) {
		kNew = result.resultChar;
	}
	if(result.newChar != null && result.newChar.length>0) {
		kNew = kNew + result.newChar;
	}
	var kDeleteLen = 1;
	if( result.deleteLen != null && result.deleteLen != "undefined") {
		kDeleteLen = result.deleteLen;
	}
	var kTxt = getTextContent();

	var kMode = result.mode;
	var kCaretSelected = isCaretActivated();

	var kIsCompounding = ( kCaretSelected && (kMode > 0) );
	var kIdx = getCaretPosition();
	var kIsEnd = false;
	if(kCaretSelected) {
		kIsEnd = (kIdx >= kTxt.length-1);
	} else {
		kIsEnd = (kIdx >= kTxt.length);
	}

	var kJoin = "";
	if(kTxt.length == 0) {
		addCharToEndForHangul(kTxt, kNew, kNew.length -1);
	} else if (kIsEnd) {
		if(kIsCompounding) {
			if(result.doubleCompounding) {
				kTxt = kTxt.substr(0, kTxt.length -2);
			} else {
				kTxt = kTxt.substr(0, kTxt.length -1);
			}
			kJoin = kTxt + kNew ;
			addCharToEndForHangul(kTxt, kNew, kJoin.length-1);
		} else {
			kJoin = kTxt + kNew;
			addCharToEndForHangul(kTxt, kNew, kJoin.length -1);
		}
	} else {
		if(kIsCompounding) {
			replaceCharForHangul(kTxt, kNew, kIdx, result.doubleCompounding);
		} else {
			insertCharForHangul(kTxt, kNew, kIdx);
		}
	}
}

function addCharToEndForHangul(txt, c, caretIdx) {
	var kJoin = txt + c;
	putStrIntoFldForHangul(kJoin, caretIdx, true);
}

function replaceCharForHangul(txt, c, idx, doubleCompounding) {
	var kTxt_0 = "";
	var kTxt_1 = "";
	if(doubleCompounding) {
		kTxt_0 = txt.substr(0, new Number(idx) -1);
	} else {
		kTxt_0 = txt.substr(0, idx);
	}
	kTxt_1 = txt.substr(new Number(idx) +1, txt.length);

	var kJoin = kTxt_0 + c + kTxt_1;
	var kCaretIdx = (kTxt_0 + c).length -1;
	putStrIntoFldForHangul(kJoin, kCaretIdx, true);
}

function insertCharForHangul(txt, c, idx) {
	var kTxt_0 = txt.substr(0, idx);
	var kTxt_1 = txt.substr(idx, txt.length);
	var kJoin = kTxt_0 + c + kTxt_1;
	var kCaretIdx = (kTxt_0 + c).length -1;
	putStrIntoFldForHangul(kJoin, kCaretIdx, true);
}

function getIsHangleKey( c ) {
	var idx = getArrayIndex( hangleKeyLst, c, -1);
	if( idx == -1) {
		return false;
	} else {
		return true;
	}
}

function checkDoubleFirstConsonant( prevCons, curCons) {
	var kIdx = 0;
	for ( kIdx = 0 ; kIdx < firstLst.length ; kIdx++ ) {
		if(	firstLst[kIdx] == prevCons ) {
			break;
		}
	}
	var kDoubleFirstLst = doubleFirstLst[kIdx];
	if ( kDoubleFirstLst != null && kDoubleFirstLst.length > 0 ) {
		var isFound = 0;
		for( kIdx = 0 ; kIdx < kDoubleFirstLst.length ; kIdx ++ ) {
			if( kDoubleFirstLst[kIdx] == curCons ) {
				isFound = 1;
				break;
			}
		}
		if(isFound == 1 ) {
			return kIdx;
		} else {
			return -1;
		}
	}
	return -1;
}

function checkDoubleBottomConsonant( prevCons, curCons) {
	var isFound = 0;
	var idx = 0;

	for(idx = 0 ; idx < thirdLst.length ; idx ++ ) {
		if (thirdLst[idx] == prevCons) {
			isFound = 1;
			break;
		}
	}
	if ( isFound == 0 ) {
		return -1;
	} 
	var kDoubleBottomSubLst = doubleBottomLst[idx];
	if( kDoubleBottomSubLst == null || kDoubleBottomSubLst.length == 0 ) {
		return -1;
	} else {
		isFound = 0;

		for(idx = 0; idx < kDoubleBottomSubLst.length ; idx++ ) {
			if( kDoubleBottomSubLst[idx] == curCons ) {
				isFound =1;
				break;
			}
		}
		if( isFound == 1 ) {
			return idx;
		} else {
			return -1;
		}
	}
}

function getKoreanChar( first, second, third ) {
	var f = new Number(first);
	var s = new Number(second);
	var t = new Number(third);
	if( f == -1) {
		if(s == -1 ) {
			return "";
		} else {
			return secondLst[s];
		}
	} else if (s == -1) {
		return firstLst[f];
	}
	f = new Number(CHOSUNG_K) * f;
	s = new Number(JUNGSUNG_K) * s;
	t = (t == -1) ? 0 : t;
	return String.fromCharCode(BASE_JISU+ f + s + t);
}

function getIsConsonant( c ) {
	var idx = -1;
	for( var i = 0 ; i < thirdLst.length ; i++ ) {
		if(thirdLst[i] == c ) {
			idx = i;
			break;
		}
	}
	if ( idx > -1 ) {
		return true;
	} else {
		return false;
	}
}

function getIsVowel ( c ) {
	var idx = -1;
	for( var i = 0 ; i < secondLst.length ; i++ ) {
		if(secondLst[i] == c ) {
			idx = i;
			break;
		}
	}
	if ( idx > -1 ) {
		return true;
	} else {
		return false;
	}
}

function getKorCharWithKetyCode( code) {
	var kIdx = new Number(Code) - 65;
	return keyboardLst[kIdx];
}

function getIsTwinWithChar ( c ) {
	var idx = -1;
	for( var i = 0 ; i < twinConsonantLst.length ; i++ ) {
		if(twinConsonantLst[i] == c ) {
			idx = i;
			break;
		}
	}
	if ( idx > -1 ) {
		return true;
	} else {
		return false;
	}
}

function getIsTwinWithFirstIdx( idx ) {
	var kChar = firstLst[idx];
	return getIsTwinWithChar(kChar);
}

/*end of hangle handle*/