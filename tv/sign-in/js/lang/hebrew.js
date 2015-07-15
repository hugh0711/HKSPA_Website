
/**
 * hebrew
 */

/**
 * key board page count
 */
var pageCnt = 7;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "Ok";
var CANCEL_BUTTON_LABEL = "Cancel";
var TITLE_LABEL = "עברית";
var PL_ADD_BUTTON_LABEL = "OK";
var PL_CANCEL_BUTTON_LABEL = "CANCEL";
var DESC_LABEL = "";

var STYLE_LABEL = " " ;


/**
 * initialize keyboard data
 * @return
 */
function initialize() {
		chTggIdx = 0;
		document.getElementById("wkk_tx").style.textAlign= 'right';
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
}


/**
 * return page idx change button label
 * @return
 */



/**
 * Numeric key display on screen.
 * @param currPageIdx
 * @return truel/false
 */
function isNumericKeyActivated(currPageIdx) {
	if(currPageIdx==6 ) {
		return false;
	} else {
		return true;
	}
}


/**
 * change key values
 * @return
 */
function changeKeyValue(gubun) {	
/*********************************************************************/
/*********************  KeyBoard Layout 1 Start  *********************/
/*********************************************************************/
	if(keyBoardType==0){	
		if(gubun == 'lang'){	
			stIdx = 10;
		 	setInnerHtml("wkk_key_62", 'גבא');	
			setKeyText("wkk_key_00", "3");					
			setKeyText("wkk_key_01", "2");          
			setKeyText("wkk_key_02", "1");          
			setKeyText("wkk_key_03", "ה");          
			setKeyText("wkk_key_04", "ד");          
			setKeyText("wkk_key_05", "ג");          
			setKeyText("wkk_key_06", "ב");          
			setKeyText("wkk_key_07", "א");          
			setKeyText("wkk_key_10", "6");          
			setKeyText("wkk_key_11", "5");          
			setKeyText("wkk_key_12", "4");          
			setKeyText("wkk_key_13", "י");          
			setKeyText("wkk_key_14", "ט");          
			setKeyText("wkk_key_15", "ח");          
			setKeyText("wkk_key_16", "ז");          
			setKeyText("wkk_key_17", "ו");          
			setKeyText("wkk_key_20", "9");          
			setKeyText("wkk_key_21", "8");          
			setKeyText("wkk_key_22", "7");          
			setKeyText("wkk_key_23", "ס");          
			setKeyText("wkk_key_24", "נ");					
			setKeyText("wkk_key_25", "מ");          
			setKeyText("wkk_key_26", "ל");
			setKeyText("wkk_key_27", "כ");
			setKeyText("wkk_key_30", ".");
			setKeyText("wkk_key_31", "@");
			setKeyText("wkk_key_32", "0");
			setKeyText("wkk_key_33", "ר");
			setKeyText("wkk_key_34", "ק");
			setKeyText("wkk_key_35", "צ");
			setKeyText("wkk_key_36", "פ");
			setKeyText("wkk_key_37", "ע");
			setKeyText("wkk_key_40", "_");
			setKeyText("wkk_key_41", "/");
			setKeyText("wkk_key_42", " ");
			setKeyText("wkk_key_43", "ם");
			setKeyText("wkk_key_44", "ך");
			setKeyText("wkk_key_45", "ף");
			setKeyText("wkk_key_46", "ת");
			setKeyText("wkk_key_47", "ש"); 
			setKeyText("wkk_key_50", " ");
			setKeyText("wkk_key_51", " ");
			setKeyText("wkk_key_52", " ");
			setKeyText("wkk_key_53", " ");
			setKeyText("wkk_key_54", " ");
			setKeyText("wkk_key_55", " ");
			setKeyText("wkk_key_56", "ץ");
			setKeyText("wkk_key_57", "ן");
		}else if(gubun == 'sl')	{
			switch(stIdx){		
				case 10:
					stIdx = 10;
					 setInnerHtml("wkk_key_62", 'גבא');
	 				doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "3");					
					setKeyText("wkk_key_01", "2");          
					setKeyText("wkk_key_02", "1");          
					setKeyText("wkk_key_03", "ה");          
					setKeyText("wkk_key_04", "ד");          
					setKeyText("wkk_key_05", "ג");          
					setKeyText("wkk_key_06", "ב");          
					setKeyText("wkk_key_07", "א");          
					setKeyText("wkk_key_10", "6");          
					setKeyText("wkk_key_11", "5");          
					setKeyText("wkk_key_12", "4");          
					setKeyText("wkk_key_13", "י");          
					setKeyText("wkk_key_14", "ט");          
					setKeyText("wkk_key_15", "ח");          
					setKeyText("wkk_key_16", "ז");          
					setKeyText("wkk_key_17", "ו");          
					setKeyText("wkk_key_20", "9");          
					setKeyText("wkk_key_21", "8");          
					setKeyText("wkk_key_22", "7");          
					setKeyText("wkk_key_23", "ס");          
					setKeyText("wkk_key_24", "נ");					
					setKeyText("wkk_key_25", "מ");          
					setKeyText("wkk_key_26", "ל");
					setKeyText("wkk_key_27", "כ");
					setKeyText("wkk_key_30", ".");
					setKeyText("wkk_key_31", "@");
					setKeyText("wkk_key_32", "0");
					setKeyText("wkk_key_33", "ר");
					setKeyText("wkk_key_34", "ק");
					setKeyText("wkk_key_35", "צ");
					setKeyText("wkk_key_36", "פ");
					setKeyText("wkk_key_37", "ע");
					setKeyText("wkk_key_40", "_");
					setKeyText("wkk_key_41", "/");
					setKeyText("wkk_key_42", " ");
					setKeyText("wkk_key_43", "ם");
					setKeyText("wkk_key_44", "ך");
					setKeyText("wkk_key_45", "ף");
					setKeyText("wkk_key_46", "ת");
					setKeyText("wkk_key_47", "ש"); 
					setKeyText("wkk_key_50", " ");
					setKeyText("wkk_key_51", " ");
					setKeyText("wkk_key_52", " ");
					setKeyText("wkk_key_53", " ");
					setKeyText("wkk_key_54", " ");
					setKeyText("wkk_key_55", " ");
					setKeyText("wkk_key_56", "ץ");
					setKeyText("wkk_key_57", "ן");
					break;	 
				}
			}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "HEB");	//Lang Toggle
			setInnerHtml("wkk_key_62", " ");				
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
				setKeyText("wkk_key_23", "£");
				setKeyText("wkk_key_24", "$");
				setKeyText("wkk_key_25", "¥");
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

	} //end keyboard 1
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==1){	
		if(gubun == 'lang'){	
			stIdx = 10;
			setInnerHtml("wkk_key_62", 'גבא');	
			setKeyText("wkk_key_00", "ו");
			setKeyText("wkk_key_01", "ה");
			setKeyText("wkk_key_02", "ד");
			setKeyText("wkk_key_03", "ג");
			setKeyText("wkk_key_04", "ב'");
			setKeyText("wkk_key_05", "א"); 
			setKeyText("wkk_key_10", "ל");
			setKeyText("wkk_key_11", "כ");
			setKeyText("wkk_key_12", "י");
			setKeyText("wkk_key_13", "ט");
			setKeyText("wkk_key_14", "ח");
			setKeyText("wkk_key_15", "ז");
			setKeyText("wkk_key_20", "צ");
			setKeyText("wkk_key_21", "פ");
			setKeyText("wkk_key_22", "ע");
			setKeyText("wkk_key_23", "ס");
			setKeyText("wkk_key_24", "נ");
			setKeyText("wkk_key_25", "מ");
			setKeyText("wkk_key_30", "ר");
			setKeyText("wkk_key_31", "ף");
			setKeyText("wkk_key_32", "ת");
			setKeyText("wkk_key_33", "ש");
			setKeyText("wkk_key_34", "ר");
			setKeyText("wkk_key_35", "ק");
			setKeyText("wkk_key_40", " ");
			setKeyText("wkk_key_41", " ");
			setKeyText("wkk_key_42", " ");
			setKeyText("wkk_key_43", "ץ");
			setKeyText("wkk_key_44", "ן");
			setKeyText("wkk_key_45", "ם");
			setKeyText("wkk_key_50", " ");
			setKeyText("wkk_key_51", " ");
			setKeyText("wkk_key_52", " ");
			setKeyText("wkk_key_53", " ");	
		}else	if(gubun == 'sl')	{
			switch(stIdx){
				case 10:
					stIdx = 10;
					setInnerHtml("wkk_key_62", 'גבא');
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "ה");  
					setKeyText("wkk_key_01", "ד");  
					setKeyText("wkk_key_02", "ג");  
					setKeyText("wkk_key_03", "ב");  
					setKeyText("wkk_key_04", "א'");
					setKeyText("wkk_key_05", "י");   
					setKeyText("wkk_key_10", "ט");  
					setKeyText("wkk_key_11", "ח");  
					setKeyText("wkk_key_12", "ז");  
					setKeyText("wkk_key_13", "ו");  
					setKeyText("wkk_key_14", "ס");  
					setKeyText("wkk_key_15", "נ");  
					setKeyText("wkk_key_20", "מ");  
					setKeyText("wkk_key_21", "ל");  
					setKeyText("wkk_key_22", "כ");  
					setKeyText("wkk_key_23", "ר");  
					setKeyText("wkk_key_24", "ק");  
					setKeyText("wkk_key_25", "צ");  
					setKeyText("wkk_key_30", "פ");  
					setKeyText("wkk_key_31", "ע");  
					setKeyText("wkk_key_32", "ץ");  
					setKeyText("wkk_key_33", "ן");  
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
		}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}			
			setInnerHtml("wkk_key_61", "HEB");	//Lang Toggle
			setInnerHtml("wkk_key_62", " ");				
			switch(chIdx){
				case 20:
					chIdx = 21;
					
					setInnerHtml("wkk_key_63", '$€£'); 
					doHighlight("wkk_key_63");
					setKeyText("wkk_key_00", "6");
					setKeyText("wkk_key_01", "5");
					setKeyText("wkk_key_02", "4");
					setKeyText("wkk_key_03", "3");
					setKeyText("wkk_key_04", "2");
					setKeyText("wkk_key_05", "1");
					setKeyText("wkk_key_10", "0");
					setKeyText("wkk_key_11", "9");
					setKeyText("wkk_key_12", "8");
					setKeyText("wkk_key_13", "7");
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
					setKeyText("wkk_key_35", ":");
					setKeyText("wkk_key_40", ";");
					setKeyText("wkk_key_41", "+");
					setKeyText("wkk_key_42", "&");
					setKeyText("wkk_key_43", "%");
					setKeyText("wkk_key_44", "*");
					setKeyText("wkk_key_45", "=");
					setKeyText("wkk_key_50", "<");	
					setKeyText("wkk_key_51", ">");
					setKeyText("wkk_key_52", "[");
					setKeyText("wkk_key_53", "]");
					break;
				case 21:
					chIdx = 20;
					setInnerHtml("wkk_key_63", '12;'); 
					doHighlight("wkk_key_63"); 
					setKeyText("wkk_key_00", "\{");
					setKeyText("wkk_key_01", "\}");
					setKeyText("wkk_key_02", "\,");
					setKeyText("wkk_key_03", "\§");
					setKeyText("wkk_key_04", "\%");
					setKeyText("wkk_key_05", "\?");
					setKeyText("wkk_key_10", "￦");
					setKeyText("wkk_key_11", "\!");
					setKeyText("wkk_key_12", "\€");
					setKeyText("wkk_key_13", "\£");
					setKeyText("wkk_key_14", "\$");
					setKeyText("wkk_key_15", "\¥");
					setKeyText("wkk_key_20", " "); 
					setKeyText("wkk_key_21", " "); 
					setKeyText("wkk_key_22", " "); 
					setKeyText("wkk_key_23", " ");
					setKeyText("wkk_key_24", "＼");
					setKeyText("wkk_key_25", "|");
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
	}//end keyboard 2
	/*********************************************************************/
	/*********************  KeyBoard Layout 3 Start  *********************/
	/*********************************************************************/	
	else {		
		if(gubun == 'lang'){	
			stIdx = 10;
			setInnerHtml("wkk_key_100", 'גבא');				
			setKeyText("wkk_key_001", "נ"); 
			setKeyText("wkk_key_002", "מ");
			setKeyText("wkk_key_003", "ל"); 
			setKeyText("wkk_key_004", "כ");
			setKeyText("wkk_key_005", "י");
			setKeyText("wkk_key_006", "ט"); 
			setKeyText("wkk_key_007", "ח");
			setKeyText("wkk_key_008", "ז"); 
			setKeyText("wkk_key_009", "ו"); 
			setKeyText("wkk_key_010", "ה"); 
			setKeyText("wkk_key_011", "ד");
			setKeyText("wkk_key_012", "ג"); 
			setKeyText("wkk_key_013", "ב"); 
			setKeyText("wkk_key_101", "א");
			setKeyText("wkk_key_102", "ץ");
			setKeyText("wkk_key_103", "ן");
			setKeyText("wkk_key_104", "ם");
			setKeyText("wkk_key_105", "ך"); 
			setKeyText("wkk_key_106", "ף"); 
			setKeyText("wkk_key_107", "ת");
			setKeyText("wkk_key_108", "ש");
			setKeyText("wkk_key_109", "ר");
			setKeyText("wkk_key_110", "ק");
			setKeyText("wkk_key_111", "צ");
			setKeyText("wkk_key_112", "פ");
			setKeyText("wkk_key_113", "ע");
			setKeyText("wkk_key_201", "ס");
			setKeyText("wkk_key_202", " ");
			setKeyText("wkk_key_203", " ");
			setKeyText("wkk_key_204", " ");
			setKeyText("wkk_key_210", "@"); 
			setKeyText("wkk_key_211", "."); 
			setKeyText("wkk_key_212", "_"); 
			setKeyText("wkk_key_213", "/");	
		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 10;
				setInnerHtml("wkk_key_100", 'גבא');	
				doHighlight("wkk_key_100");							
				setKeyText("wkk_key_001", "נ"); 
				setKeyText("wkk_key_002", "מ");
				setKeyText("wkk_key_003", "ל"); 
				setKeyText("wkk_key_004", "כ");
				setKeyText("wkk_key_005", "י");
				setKeyText("wkk_key_006", "ט"); 
				setKeyText("wkk_key_007", "ח");
				setKeyText("wkk_key_008", "ז"); 
				setKeyText("wkk_key_009", "ו"); 
				setKeyText("wkk_key_010", "ה"); 
				setKeyText("wkk_key_011", "ד");
				setKeyText("wkk_key_012", "ג"); 
				setKeyText("wkk_key_013", "ב"); 
				setKeyText("wkk_key_101", "א");
				setKeyText("wkk_key_102", "ץ");
				setKeyText("wkk_key_103", "ן");
				setKeyText("wkk_key_104", "ם");
				setKeyText("wkk_key_105", "ך"); 
				setKeyText("wkk_key_106", "ף"); 
				setKeyText("wkk_key_107", "ת");
				setKeyText("wkk_key_108", "ש");
				setKeyText("wkk_key_109", "ר");
				setKeyText("wkk_key_110", "ק");
				setKeyText("wkk_key_111", "צ");
				setKeyText("wkk_key_112", "פ");
				setKeyText("wkk_key_113", "ע");
				setKeyText("wkk_key_201", "ס");
				setKeyText("wkk_key_202", " ");
				setKeyText("wkk_key_203", " ");
				setKeyText("wkk_key_204", " ");
				setKeyText("wkk_key_210", "@"); 
				setKeyText("wkk_key_211", "."); 
				setKeyText("wkk_key_212", "_"); 
				setKeyText("wkk_key_213", "/");	
				break;
				} 
			} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}				
			setInnerHtml("wkk_key_116", "HEB");	//Lang Toggle
			setInnerHtml("wkk_key_100", " ");			
			switch(chIdx){
			case 20:
				chIdx = 21;
			
				setInnerHtml("wkk_key_200", '$€£'); 
				doHighlight("wkk_key_200");
				setKeyText("wkk_key_001", "0"); 
				setKeyText("wkk_key_002", "9"); 
				setKeyText("wkk_key_003", "8"); 
				setKeyText("wkk_key_004", "7"); 
				setKeyText("wkk_key_005", "6"); 
				setKeyText("wkk_key_006", "5"); 
				setKeyText("wkk_key_007", "4"); 
				setKeyText("wkk_key_008", "3"); 
				setKeyText("wkk_key_009", "2"); 
				setKeyText("wkk_key_010", "1"); 
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
				setInnerHtml("wkk_key_200", '12;)'); 
				doHighlight("wkk_key_200");
				setKeyText("wkk_key_001", "＼");
				setKeyText("wkk_key_002", "￦");
				setKeyText("wkk_key_003", "{");
				setKeyText("wkk_key_004", "}");
				setKeyText("wkk_key_005", ",");
				setKeyText("wkk_key_006", "§");
				setKeyText("wkk_key_007", "#");
				setKeyText("wkk_key_008", "?");
				setKeyText("wkk_key_009", "!");
				setKeyText("wkk_key_010", "€");
				setKeyText("wkk_key_011", "£");
				setKeyText("wkk_key_012", "$ ");
				setKeyText("wkk_key_013", "¥ ");
				setKeyText("wkk_key_101", " "); 
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
				setKeyText("wkk_key_113", "|");
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
	appendText(" ");
}

/**
 * backspace text
 * @return
 */
function backspaceText() {
	deletePrevChar();
}

/**
 * 
 * @param val
 * @return
 */
function appendText(content) {
	//alert("russian");
	var textItem = document.getElementById("wkk_tx");
	if( textItem != null) {
		if(content == " ") {
			addStrIntoFld(" ", true);
		} else {
			addStrIntoFld(content, true);
		}
	}

}

/**
 * pre processing define when key pressed (for combination charset ex> hangle)
 * @param nMode
 * @return
 */
function setNewMode(nMode) {
	//do nothing
}