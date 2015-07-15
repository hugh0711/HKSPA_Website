
/**
 * arbic
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
var TITLE_LABEL = "arabic";
var PL_ADD_BUTTON_LABEL = "OK";
var PL_CANCEL_BUTTON_LABEL = "CANCEL";
var DESC_LABEL = "";

var STYLE_LABEL = "ئةإ";


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
			stIdx = 11;
     		setInnerHtml("wkk_key_62", 'ئةإ'); 
			setKeyText("wkk_key_00", "١");            
			setKeyText("wkk_key_01", "٢");            
			setKeyText("wkk_key_02", "٣");            
			setKeyText("wkk_key_03", "ج");            
			setKeyText("wkk_key_04", "ث");            
			setKeyText("wkk_key_05", "ت");            
			setKeyText("wkk_key_06", "ب");            
			setKeyText("wkk_key_07", "ا");            
			setKeyText("wkk_key_10", "٤");            
			setKeyText("wkk_key_11", "٥");            
			setKeyText("wkk_key_12", "٦");            
			setKeyText("wkk_key_13", "ر");            
			setKeyText("wkk_key_14", "ذ");            
			setKeyText("wkk_key_15", "د");            
			setKeyText("wkk_key_16", "خ");            
			setKeyText("wkk_key_17", "ح");            
			setKeyText("wkk_key_20", "٧");            
			setKeyText("wkk_key_21", "٨");            
			setKeyText("wkk_key_22", "٩");            
			setKeyText("wkk_key_23", "ض");   				
			setKeyText("wkk_key_24", "ص");            
			setKeyText("wkk_key_25", "ش");   
			setKeyText("wkk_key_26", "س");   
			setKeyText("wkk_key_27", "ز");   
			setKeyText("wkk_key_30", "٠");   
			setKeyText("wkk_key_31", "ك");   
			setKeyText("wkk_key_32", "ق");   
			setKeyText("wkk_key_33", "ف");   
			setKeyText("wkk_key_34", "غ");   
			setKeyText("wkk_key_35", "ع");   
			setKeyText("wkk_key_36", "ظ");   
			setKeyText("wkk_key_37", "ط");   
			setKeyText("wkk_key_40", "ى");   
			setKeyText("wkk_key_41", "ء");   
			setKeyText("wkk_key_42", "ي");   
			setKeyText("wkk_key_43", "و");   
			setKeyText("wkk_key_44", "ه");   
			setKeyText("wkk_key_45", "ن");   
			setKeyText("wkk_key_46", "م");   
			setKeyText("wkk_key_47", "ل");  
			setKeyText("wkk_key_50", "ؤ");
			setKeyText("wkk_key_51", "لآ");
			setKeyText("wkk_key_52", "آ");
			setKeyText("wkk_key_53", "لأ");
			setKeyText("wkk_key_54", "أ");
			setKeyText("wkk_key_55", "إ");
			setKeyText("wkk_key_56", "ة");
			setKeyText("wkk_key_57", "ئ"); 

		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_62", 'ئةإ'); 
 				doHighlight("wkk_key_62");
				setKeyText("wkk_key_00", "١");            
				setKeyText("wkk_key_01", "٢");            
				setKeyText("wkk_key_02", "٣");            
				setKeyText("wkk_key_03", "ج");            
				setKeyText("wkk_key_04", "ث");            
				setKeyText("wkk_key_05", "ت");            
				setKeyText("wkk_key_06", "ب");            
				setKeyText("wkk_key_07", "ا");            
				setKeyText("wkk_key_10", "٤");            
				setKeyText("wkk_key_11", "٥");            
				setKeyText("wkk_key_12", "٦");            
				setKeyText("wkk_key_13", "ر");            
				setKeyText("wkk_key_14", "ذ");            
				setKeyText("wkk_key_15", "د");            
				setKeyText("wkk_key_16", "خ");            
				setKeyText("wkk_key_17", "ح");            
				setKeyText("wkk_key_20", "٧");            
				setKeyText("wkk_key_21", "٨");            
				setKeyText("wkk_key_22", "٩");            
				setKeyText("wkk_key_23", "ض");   				
				setKeyText("wkk_key_24", "ص");            
				setKeyText("wkk_key_25", "ش");   
				setKeyText("wkk_key_26", "س");   
				setKeyText("wkk_key_27", "ز");   
				setKeyText("wkk_key_30", "٠");   
				setKeyText("wkk_key_31", "ك");   
				setKeyText("wkk_key_32", "ق");   
				setKeyText("wkk_key_33", "ف");   
				setKeyText("wkk_key_34", "غ");   
				setKeyText("wkk_key_35", "ع");   
				setKeyText("wkk_key_36", "ظ");   
				setKeyText("wkk_key_37", "ط");   
				setKeyText("wkk_key_40", "ى");   
				setKeyText("wkk_key_41", "ء");   
				setKeyText("wkk_key_42", "ي");   
				setKeyText("wkk_key_43", "و");   
				setKeyText("wkk_key_44", "ه");   
				setKeyText("wkk_key_45", "ن");   
				setKeyText("wkk_key_46", "م");   
				setKeyText("wkk_key_47", "ل");  
				setKeyText("wkk_key_50", "ؤ");
				setKeyText("wkk_key_51", "لآ");
				setKeyText("wkk_key_52", "آ");
				setKeyText("wkk_key_53", "لأ");
				setKeyText("wkk_key_54", "أ");
				setKeyText("wkk_key_55", "إ");
				setKeyText("wkk_key_56", "ة");
				setKeyText("wkk_key_57", "ئ"); 
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_62", 'ئةإ'); 
 				doHighlight("wkk_key_62");
				setKeyText("wkk_key_00", "ْ");            
				setKeyText("wkk_key_01", "ّ");            
				setKeyText("wkk_key_02", "ُ");            
				setKeyText("wkk_key_03", "ٌ");            
				setKeyText("wkk_key_04", "ٍ");            
				setKeyText("wkk_key_05", "ً");            
				setKeyText("wkk_key_06", "ِ");            
				setKeyText("wkk_key_07", "َ");            
				setKeyText("wkk_key_10", " ");            
				setKeyText("wkk_key_11", " ");            
				setKeyText("wkk_key_12", " ");            
				setKeyText("wkk_key_13", " ");            
				setKeyText("wkk_key_14", " ");            
				setKeyText("wkk_key_15", " ");            
				setKeyText("wkk_key_16", " ");            
				setKeyText("wkk_key_17", " ");            
				setKeyText("wkk_key_20", " ");            
				setKeyText("wkk_key_21", " ");            
				setKeyText("wkk_key_22", " ");            
				setKeyText("wkk_key_23", " ");   				
				setKeyText("wkk_key_24", " ");            
				setKeyText("wkk_key_25", " ");   
				setKeyText("wkk_key_26", " ");   
				setKeyText("wkk_key_27", " ");   
				setKeyText("wkk_key_30", " ");   
				setKeyText("wkk_key_31", " ");   
				setKeyText("wkk_key_32", " ");   
				setKeyText("wkk_key_33", " ");   
				setKeyText("wkk_key_34", " ");   
				setKeyText("wkk_key_35", " ");   
				setKeyText("wkk_key_36", " ");   
				setKeyText("wkk_key_37", " ");   
				setKeyText("wkk_key_40", " ");   
				setKeyText("wkk_key_41", " ");   
				setKeyText("wkk_key_42", " ");   
				setKeyText("wkk_key_43", " ");   
				setKeyText("wkk_key_44", " ");   
				setKeyText("wkk_key_45", " ");   
				setKeyText("wkk_key_46", " ");   
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
					}
		}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "ARB");	//Lang Toggle
			setInnerHtml("wkk_key_62", " ");				
			switch(chIdx){
			case 20:
				setKeyText("wkk_key_00", "9");
				setKeyText("wkk_key_01", "8");
				setKeyText("wkk_key_02", "7");
				setKeyText("wkk_key_03", "6");
				setKeyText("wkk_key_04", "5");
				setKeyText("wkk_key_05", "4"); 
				setKeyText("wkk_key_06", "3");
				setKeyText("wkk_key_07", "2");
				setKeyText("wkk_key_10", "1");
				setKeyText("wkk_key_11", "0");
				setKeyText("wkk_key_12", "^");
				setKeyText("wkk_key_13", "~");
				setKeyText("wkk_key_14", "?");
				setKeyText("wkk_key_15", "!");
				setKeyText("wkk_key_16", "\'");
				setKeyText("wkk_key_17", "\"");
				setKeyText("wkk_key_20", "(");
				setKeyText("wkk_key_21", ")");
				setKeyText("wkk_key_22", "-");
				setKeyText("wkk_key_23", ":");
				setKeyText("wkk_key_24", ";");
				setKeyText("wkk_key_25", "+");
				setKeyText("wkk_key_26", "&");
				setKeyText("wkk_key_27", "%");
				setKeyText("wkk_key_30", "*");
				setKeyText("wkk_key_31", "=");
				setKeyText("wkk_key_32", "<");
				setKeyText("wkk_key_33", ">");
				setKeyText("wkk_key_34", "€");
				setKeyText("wkk_key_35", "£");
				setKeyText("wkk_key_36", "$");
				setKeyText("wkk_key_37", "¥");
				setKeyText("wkk_key_40", "¤");
				setKeyText("wkk_key_41", "\\");
				setKeyText("wkk_key_42", "[");
				setKeyText("wkk_key_43", "]");
				setKeyText("wkk_key_44", "{");
				setKeyText("wkk_key_45", "}");
				setKeyText("wkk_key_46", ",");
				setKeyText("wkk_key_47", "."); 
				setKeyText("wkk_key_50", "@");
				setKeyText("wkk_key_51", "§");
				setKeyText("wkk_key_52", "#");
				setKeyText("wkk_key_53", "¿");
				setKeyText("wkk_key_54", "¡");
				setKeyText("wkk_key_55", "_");
				setKeyText("wkk_key_56", "/");
				setKeyText("wkk_key_57", "|"); 
				break;
			}
		}

	} //end keyboard 1
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==1){	
		if(gubun == 'lang'){	
			stIdx = 11;
			setInnerHtml("wkk_key_62", 'لآآلأ');	
			setKeyText("wkk_key_00", "ح");
			setKeyText("wkk_key_01", "ج");
			setKeyText("wkk_key_02", "ث");
			setKeyText("wkk_key_03", "ت");
			setKeyText("wkk_key_04", "ب");
			setKeyText("wkk_key_05", "ا"); 
			setKeyText("wkk_key_10", "س");
			setKeyText("wkk_key_11", "ز");
			setKeyText("wkk_key_12", "ر");
			setKeyText("wkk_key_13", "ذ");
			setKeyText("wkk_key_14", "د");
			setKeyText("wkk_key_15", "خ");
			setKeyText("wkk_key_20", "ع");
			setKeyText("wkk_key_21", "ظ");
			setKeyText("wkk_key_22", "ط");
			setKeyText("wkk_key_23", "ض");
			setKeyText("wkk_key_24", "ص");
			setKeyText("wkk_key_25", "ش");
			setKeyText("wkk_key_30", "م");
			setKeyText("wkk_key_31", "ل");
			setKeyText("wkk_key_32", "ك");
			setKeyText("wkk_key_33", "ق");
			setKeyText("wkk_key_34", "ف");
			setKeyText("wkk_key_35", "غ");
			setKeyText("wkk_key_40", "ى");
			setKeyText("wkk_key_41", "ء");
			setKeyText("wkk_key_42", "ي");
			setKeyText("wkk_key_43", "و");
			setKeyText("wkk_key_44", "ه");
			setKeyText("wkk_key_45", "ن");
			setKeyText("wkk_key_50", "أ");
			setKeyText("wkk_key_51", "إ");
			setKeyText("wkk_key_52", "ة");
			setKeyText("wkk_key_53", "ئ");	
		}else if(gubun == 'sl')	{
			switch(stIdx){
				case 10:
					stIdx = 11;
					setInnerHtml("wkk_key_62", 'لآآلأ');
					setKeyText("wkk_key_00", "ح");
					setKeyText("wkk_key_01", "ج");
					setKeyText("wkk_key_02", "ث");
					setKeyText("wkk_key_03", "ت");
					setKeyText("wkk_key_04", "ب");
					setKeyText("wkk_key_05", "ا");
					setKeyText("wkk_key_10", "س");
					setKeyText("wkk_key_11", "ز");
					setKeyText("wkk_key_12", "ر");
					setKeyText("wkk_key_13", "ذ");
					setKeyText("wkk_key_14", "د");
					setKeyText("wkk_key_15", "خ");
					setKeyText("wkk_key_20", "ع");
					setKeyText("wkk_key_21", "ظ");
					setKeyText("wkk_key_22", "ط");
					setKeyText("wkk_key_23", "ض");
					setKeyText("wkk_key_24", "ص");
					setKeyText("wkk_key_25", "ش");
					setKeyText("wkk_key_30", "م");
					setKeyText("wkk_key_31", "ل");
					setKeyText("wkk_key_32", "ك");
					setKeyText("wkk_key_33", "ق");
					setKeyText("wkk_key_34", "ف");
					setKeyText("wkk_key_35", "غ");
					setKeyText("wkk_key_40", "ى");
					setKeyText("wkk_key_41", "ء");
					setKeyText("wkk_key_42", "ي");
					setKeyText("wkk_key_43", "و");
					setKeyText("wkk_key_44", "ه");
					setKeyText("wkk_key_45", "ن");
					setKeyText("wkk_key_50", "أ");
					setKeyText("wkk_key_51", "إ");
					setKeyText("wkk_key_52", "ة");
					setKeyText("wkk_key_53", "ئ");				 
					break; 			
				case 11:                        
					stIdx = 10;                   
					setInnerHtml("wkk_key_62", 'ابت');         
					setKeyText("wkk_key_00", "");
					setKeyText("wkk_key_01", "");
					setKeyText("wkk_key_02", "ؤ");
					setKeyText("wkk_key_03", "لآ");
					setKeyText("wkk_key_04", "آ"); 
					setKeyText("wkk_key_05", "لأ");
					setKeyText("wkk_key_10", "");
					setKeyText("wkk_key_11", "");
					setKeyText("wkk_key_12", "");
					setKeyText("wkk_key_13", "");
					setKeyText("wkk_key_14", "");
					setKeyText("wkk_key_15", "");
					setKeyText("wkk_key_20", " ");
					setKeyText("wkk_key_21", " ");
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
		}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "ARB");	//Lang Toggle
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
					setInnerHtml("wkk_key_63", '12;'); 
					doHighlight("wkk_key_63"); 
					setKeyText("wkk_key_00", "\{");
					setKeyText("wkk_key_01", "\}");
					setKeyText("wkk_key_02", "\,");
					setKeyText("wkk_key_03", "\§");
					setKeyText("wkk_key_04", "\%");
					setKeyText("wkk_key_05", "\¿");
					setKeyText("wkk_key_10", "￦");
					setKeyText("wkk_key_11", "\¡");
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
			stIdx = 11;
			setInnerHtml("wkk_key_100", 'لآآلأ');				
			setKeyText("wkk_key_001", "ش"); 
			setKeyText("wkk_key_002", "س");
			setKeyText("wkk_key_003", "ز");
			setKeyText("wkk_key_004", "ر");
			setKeyText("wkk_key_005", "ذ");
			setKeyText("wkk_key_006", "د"); 
			setKeyText("wkk_key_007", "خ");
			setKeyText("wkk_key_008", "ح"); 
			setKeyText("wkk_key_009", "ج"); 
			setKeyText("wkk_key_010", "ث"); 
			setKeyText("wkk_key_011", "ت");
			setKeyText("wkk_key_012", "ب"); 
			setKeyText("wkk_key_013", "ا"); 
			setKeyText("wkk_key_101", "ه");
			setKeyText("wkk_key_102", "ن");
			setKeyText("wkk_key_103", "م");
			setKeyText("wkk_key_104", "ل");
			setKeyText("wkk_key_105", "ك"); 
			setKeyText("wkk_key_106", "ق"); 
			setKeyText("wkk_key_107", "ف");
			setKeyText("wkk_key_108", "غ");
			setKeyText("wkk_key_109", "ع");
			setKeyText("wkk_key_110", "ظ");
			setKeyText("wkk_key_111", "ط");
			setKeyText("wkk_key_112", "ض");
			setKeyText("wkk_key_113", "ص");
			setKeyText("wkk_key_201", "أ");
			setKeyText("wkk_key_202", "إ");
			setKeyText("wkk_key_203", "ة");
			setKeyText("wkk_key_204", "ئ");
			setKeyText("wkk_key_210", "ى"); 
			setKeyText("wkk_key_211", "ء"); 
			setKeyText("wkk_key_212", "ي"); 
			setKeyText("wkk_key_213", "و");	
		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_100", 'لآآلأ');	
				doHighlight("wkk_key_100");							
				setKeyText("wkk_key_001", "ش"); 
				setKeyText("wkk_key_002", "س");
				setKeyText("wkk_key_003", "ز");
				setKeyText("wkk_key_004", "ر");
				setKeyText("wkk_key_005", "ذ");
				setKeyText("wkk_key_006", "د"); 
				setKeyText("wkk_key_007", "خ");
				setKeyText("wkk_key_008", "ح"); 
				setKeyText("wkk_key_009", "ج"); 
				setKeyText("wkk_key_010", "ث"); 
				setKeyText("wkk_key_011", "ت");
				setKeyText("wkk_key_012", "ب"); 
				setKeyText("wkk_key_013", "ا"); 
				setKeyText("wkk_key_101", "ه");
				setKeyText("wkk_key_102", "ن");
				setKeyText("wkk_key_103", "م");
				setKeyText("wkk_key_104", "ل");
				setKeyText("wkk_key_105", "ك"); 
				setKeyText("wkk_key_106", "ق"); 
				setKeyText("wkk_key_107", "ف");
				setKeyText("wkk_key_108", "غ");
				setKeyText("wkk_key_109", "ع");
				setKeyText("wkk_key_110", "ظ");
				setKeyText("wkk_key_111", "ط");
				setKeyText("wkk_key_112", "ض");
				setKeyText("wkk_key_113", "ص");
				setKeyText("wkk_key_201", "أ");
				setKeyText("wkk_key_202", "إ");
				setKeyText("wkk_key_203", "ة");
				setKeyText("wkk_key_204", "ئ");
				setKeyText("wkk_key_210", "ى"); 
				setKeyText("wkk_key_211", "ء"); 
				setKeyText("wkk_key_212", "ي"); 
				setKeyText("wkk_key_213", "و");
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_100", 'ابت');	
				doHighlight("wkk_key_100");							
				setKeyText("wkk_key_001", ""); 
				setKeyText("wkk_key_002", "");
				setKeyText("wkk_key_003", "");
				setKeyText("wkk_key_004", "");
				setKeyText("wkk_key_005", "");
				setKeyText("wkk_key_006", ""); 
				setKeyText("wkk_key_007", "");
				setKeyText("wkk_key_008", ""); 
				setKeyText("wkk_key_009", ""); 
				setKeyText("wkk_key_010", "ؤ"); 
				setKeyText("wkk_key_011", "لآ");
				setKeyText("wkk_key_012", "آ");  
				setKeyText("wkk_key_013", "لأ"); 
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
			} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_116", "ARB");	//Lang Toggle
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
				setKeyText("wkk_key_001", "￦");
				setKeyText("wkk_key_002", "＼");
				setKeyText("wkk_key_003", "{");
				setKeyText("wkk_key_004", "}");
				setKeyText("wkk_key_005", ",");
				setKeyText("wkk_key_006", "§");
				setKeyText("wkk_key_007", "#");
				setKeyText("wkk_key_008", "¿");
				setKeyText("wkk_key_009", "¡");
				setKeyText("wkk_key_010", "€");
				setKeyText("wkk_key_011", "£");
				setKeyText("wkk_key_012", "$");
				setKeyText("wkk_key_013", "¥");
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