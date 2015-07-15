
/**
 * persian
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
var TITLE_LABEL = "persian";
var PL_ADD_BUTTON_LABEL = "OK";
var PL_CANCEL_BUTTON_LABEL = "CANCEL";
var DESC_LABEL = "";
var STYLE_LABEL = " ";


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
     		setInnerHtml("wkk_key_62", 'الف'); 
			setKeyText("wkk_key_00", "3");				         
			setKeyText("wkk_key_01", "2");                 
			setKeyText("wkk_key_02", "1");                 
			setKeyText("wkk_key_03", "ث");                 
			setKeyText("wkk_key_04", "ت");                 
			setKeyText("wkk_key_05", "پ");                 
			setKeyText("wkk_key_06", "ب");                 
			setKeyText("wkk_key_07", "ا");                 
			setKeyText("wkk_key_10", "6");                 
			setKeyText("wkk_key_11", "5");                 
			setKeyText("wkk_key_12", "4");                 
			setKeyText("wkk_key_13", "د");                 
			setKeyText("wkk_key_14", "خ");                 
			setKeyText("wkk_key_15", "ح");                 
			setKeyText("wkk_key_16", "چ");                 
			setKeyText("wkk_key_17", "ج");                 
			setKeyText("wkk_key_20", "9");                 
			setKeyText("wkk_key_21", "8");                 
			setKeyText("wkk_key_22", "7");                 
			setKeyText("wkk_key_23", "س");        				
			setKeyText("wkk_key_24", "ژ");				         
			setKeyText("wkk_key_25", "ز");        
			setKeyText("wkk_key_26", "ر");        
			setKeyText("wkk_key_27", "ذ");        
			setKeyText("wkk_key_30", ".");        
			setKeyText("wkk_key_31", "@");        
			setKeyText("wkk_key_32", "0");        
			setKeyText("wkk_key_33", "ظ");        
			setKeyText("wkk_key_34", "ط");        
			setKeyText("wkk_key_35", "ض");        
			setKeyText("wkk_key_36", "ص");        
			setKeyText("wkk_key_37", "ش");        
			setKeyText("wkk_key_40", "_");        
			setKeyText("wkk_key_41", "/");        
			setKeyText("wkk_key_42", "گ");        
			setKeyText("wkk_key_43", "ک");        
			setKeyText("wkk_key_44", "ق");        
			setKeyText("wkk_key_45", "ف");        
			setKeyText("wkk_key_46", "غ");        
			setKeyText("wkk_key_47", "ع");        
			setKeyText("wkk_key_50", " ");        
			setKeyText("wkk_key_51", " ");        
			setKeyText("wkk_key_52", "ی");        
			setKeyText("wkk_key_53", "ه");        
			setKeyText("wkk_key_54", "و");        
			setKeyText("wkk_key_55", "ن");        
			setKeyText("wkk_key_56", "م");        
			setKeyText("wkk_key_57", "ل ");       
		}else if(gubun == 'sl')	{
			switch(stIdx){
					case 10:
						stIdx = 10;
						setInnerHtml("wkk_key_62", 'الف'); 
		 				doHighlight("wkk_key_62");
						setKeyText("wkk_key_00", "3");				         
						setKeyText("wkk_key_01", "2");                 
						setKeyText("wkk_key_02", "1");                 
						setKeyText("wkk_key_03", "ث");                 
						setKeyText("wkk_key_04", "ت");                 
						setKeyText("wkk_key_05", "پ");                 
						setKeyText("wkk_key_06", "ب");                 
						setKeyText("wkk_key_07", "ا");                 
						setKeyText("wkk_key_10", "6");                 
						setKeyText("wkk_key_11", "5");                 
						setKeyText("wkk_key_12", "4");                 
						setKeyText("wkk_key_13", "د");                 
						setKeyText("wkk_key_14", "خ");                 
						setKeyText("wkk_key_15", "ح");                 
						setKeyText("wkk_key_16", "چ");                 
						setKeyText("wkk_key_17", "ج");                 
						setKeyText("wkk_key_20", "9");                 
						setKeyText("wkk_key_21", "8");                 
						setKeyText("wkk_key_22", "7");                 
						setKeyText("wkk_key_23", "س");        				
						setKeyText("wkk_key_24", "ژ");				         
						setKeyText("wkk_key_25", "ز");        
						setKeyText("wkk_key_26", "ر");        
						setKeyText("wkk_key_27", "ذ");        
						setKeyText("wkk_key_30", ".");        
						setKeyText("wkk_key_31", "@");        
						setKeyText("wkk_key_32", "0");        
						setKeyText("wkk_key_33", "ظ");        
						setKeyText("wkk_key_34", "ط");        
						setKeyText("wkk_key_35", "ض");        
						setKeyText("wkk_key_36", "ص");        
						setKeyText("wkk_key_37", "ش");        
						setKeyText("wkk_key_40", "_");        
						setKeyText("wkk_key_41", "/");        
						setKeyText("wkk_key_42", "گ");        
						setKeyText("wkk_key_43", "ک");        
						setKeyText("wkk_key_44", "ق");        
						setKeyText("wkk_key_45", "ف");        
						setKeyText("wkk_key_46", "غ");        
						setKeyText("wkk_key_47", "ع");        
						setKeyText("wkk_key_50", " ");        
						setKeyText("wkk_key_51", " ");        
						setKeyText("wkk_key_52", "ی");        
						setKeyText("wkk_key_53", "ه");        
						setKeyText("wkk_key_54", "و");        
						setKeyText("wkk_key_55", "ن");        
						setKeyText("wkk_key_56", "م");        
						setKeyText("wkk_key_57", "ل ");       
						break;
					}
		}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "PER");	//Lang Toggle
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
			//setInnerHtml("wkk_key_62", 'גבא');	
			setKeyText("wkk_key_00", "ج");
			setKeyText("wkk_key_01", "ث");
			setKeyText("wkk_key_02", "ت");
			setKeyText("wkk_key_03", "پ");
			setKeyText("wkk_key_04", "ب");
			setKeyText("wkk_key_05", "ا"); 
			setKeyText("wkk_key_10", "ر");
			setKeyText("wkk_key_11", "ذ");
			setKeyText("wkk_key_12", "د");
			setKeyText("wkk_key_13", "خ");
			setKeyText("wkk_key_14", "ح");
			setKeyText("wkk_key_15", "چ");
			setKeyText("wkk_key_20", "ض");
			setKeyText("wkk_key_21", "ص");
			setKeyText("wkk_key_22", "ش");
			setKeyText("wkk_key_23", "س");
			setKeyText("wkk_key_24", "ژ");
			setKeyText("wkk_key_25", "ز");
			setKeyText("wkk_key_30", "ق");
			setKeyText("wkk_key_31", "ف");
			setKeyText("wkk_key_32", "غ");
			setKeyText("wkk_key_33", "ع");
			setKeyText("wkk_key_34", "ظ");
			setKeyText("wkk_key_35", "ط");
			setKeyText("wkk_key_40", "و");
			setKeyText("wkk_key_41", "ن");
			setKeyText("wkk_key_42", "م");
			setKeyText("wkk_key_43", "ل");
			setKeyText("wkk_key_44", "گ");
			setKeyText("wkk_key_45", "ک");
			setKeyText("wkk_key_50", " ");
			setKeyText("wkk_key_51", " ");
			setKeyText("wkk_key_52", "ی");
			setKeyText("wkk_key_53", "ه");	
		}else	if(gubun == 'sl')	{
			switch(stIdx){
				case 10:
					stIdx = 10;
					//setInnerHtml("wkk_key_62", 'גבא');	
					setKeyText("wkk_key_00", "ج");
					setKeyText("wkk_key_01", "ث");
					setKeyText("wkk_key_02", "ت");
					setKeyText("wkk_key_03", "پ");
					setKeyText("wkk_key_04", "ب");
					setKeyText("wkk_key_05", "ا"); 
					setKeyText("wkk_key_10", "ر");
					setKeyText("wkk_key_11", "ذ");
					setKeyText("wkk_key_12", "د");
					setKeyText("wkk_key_13", "خ");
					setKeyText("wkk_key_14", "ح");
					setKeyText("wkk_key_15", "چ");
					setKeyText("wkk_key_20", "ض");
					setKeyText("wkk_key_21", "ص");
					setKeyText("wkk_key_22", "ش");
					setKeyText("wkk_key_23", "س");
					setKeyText("wkk_key_24", "ژ");
					setKeyText("wkk_key_25", "ز");
					setKeyText("wkk_key_30", "ق");
					setKeyText("wkk_key_31", "ف");
					setKeyText("wkk_key_32", "غ");
					setKeyText("wkk_key_33", "ع");
					setKeyText("wkk_key_34", "ظ");
					setKeyText("wkk_key_35", "ط");
					setKeyText("wkk_key_40", "و");
					setKeyText("wkk_key_41", "ن");
					setKeyText("wkk_key_42", "م");
					setKeyText("wkk_key_43", "ل");
					setKeyText("wkk_key_44", "گ");
					setKeyText("wkk_key_45", "ک");
					setKeyText("wkk_key_50", " ");
					setKeyText("wkk_key_51", " ");
					setKeyText("wkk_key_52", "ی");
					setKeyText("wkk_key_53", "ه");						 
					break; 			
			}
		}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "PER");	//Lang Toggle
			switch(chIdx){
				case 20:
					chIdx = 21;
					
					setInnerHtml("wkk_key_63", '$€£'); 
					doHighlight("wkk_key_63");
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
			stIdx = 10;
			//setInnerHtml("wkk_key_100", 'גבא');				
			setKeyText("wkk_key_001", "ز"); 
			setKeyText("wkk_key_002", "ر");
			setKeyText("wkk_key_003", "ذ");
			setKeyText("wkk_key_004", "د");
			setKeyText("wkk_key_005", "خ");
			setKeyText("wkk_key_006", "ح"); 
			setKeyText("wkk_key_007", "چ");
			setKeyText("wkk_key_008", "ج"); 
			setKeyText("wkk_key_009", "ث"); 
			setKeyText("wkk_key_010", "ت"); 
			setKeyText("wkk_key_011", "پ");
			setKeyText("wkk_key_012", "ب"); 
			setKeyText("wkk_key_013", "ا"); 
			setKeyText("wkk_key_101", "گ");
			setKeyText("wkk_key_102", "ک");
			setKeyText("wkk_key_103", "ق");
			setKeyText("wkk_key_104", "ف");
			setKeyText("wkk_key_105", "غ"); 
			setKeyText("wkk_key_106", "ع"); 
			setKeyText("wkk_key_107", "ظ");
			setKeyText("wkk_key_108", "ط");
			setKeyText("wkk_key_109", "ض");
			setKeyText("wkk_key_110", "ص");
			setKeyText("wkk_key_111", "ش");
			setKeyText("wkk_key_112", "س");
			setKeyText("wkk_key_113", "ژ");
			setKeyText("wkk_key_201", " ");
			setKeyText("wkk_key_202", " ");
			setKeyText("wkk_key_203", "ی");
			setKeyText("wkk_key_204", "ه");
			setKeyText("wkk_key_210", "و"); 
			setKeyText("wkk_key_211", "ن"); 
			setKeyText("wkk_key_212", "م"); 
			setKeyText("wkk_key_213", "ل");	
		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 10;
				//setInnerHtml("wkk_key_100", 'גבא');	
				doHighlight("wkk_key_100");							
				setKeyText("wkk_key_001", "ز"); 
				setKeyText("wkk_key_002", "ر");
				setKeyText("wkk_key_003", "ذ");
				setKeyText("wkk_key_004", "د");
				setKeyText("wkk_key_005", "خ");
				setKeyText("wkk_key_006", "ح"); 
				setKeyText("wkk_key_007", "چ");
				setKeyText("wkk_key_008", "ج"); 
				setKeyText("wkk_key_009", "ث"); 
				setKeyText("wkk_key_010", "ت"); 
				setKeyText("wkk_key_011", "پ");
				setKeyText("wkk_key_012", "ب"); 
				setKeyText("wkk_key_013", "ا"); 
				setKeyText("wkk_key_101", "گ");
				setKeyText("wkk_key_102", "ک");
				setKeyText("wkk_key_103", "ق");
				setKeyText("wkk_key_104", "ف");
				setKeyText("wkk_key_105", "غ"); 
				setKeyText("wkk_key_106", "ع"); 
				setKeyText("wkk_key_107", "ظ");
				setKeyText("wkk_key_108", "ط");
				setKeyText("wkk_key_109", "ض");
				setKeyText("wkk_key_110", "ص");
				setKeyText("wkk_key_111", "ش");
				setKeyText("wkk_key_112", "س");
				setKeyText("wkk_key_113", "ژ");
				setKeyText("wkk_key_201", " ");
				setKeyText("wkk_key_202", " ");
				setKeyText("wkk_key_203", "ی");
				setKeyText("wkk_key_204", "ه");
				setKeyText("wkk_key_210", "و"); 
				setKeyText("wkk_key_211", "ن"); 
				setKeyText("wkk_key_212", "م"); 
				setKeyText("wkk_key_213", "ل");	
				break;
				} 
			} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
				setInnerHtml("wkk_key_116", "PER");	//Lang Toggle
			switch(chIdx){
			case 20:
				chIdx = 21;
				
				setInnerHtml("wkk_key_200", '$€£'); 
				doHighlight("wkk_key_200");
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
				setInnerHtml("wkk_key_200", '12;)'); 
				doHighlight("wkk_key_200");
				setKeyText("wkk_key_001", "＼");
				setKeyText("wkk_key_002", "￦");
				setKeyText("wkk_key_003", "{");
				setKeyText("wkk_key_004", "}");
				setKeyText("wkk_key_005", ",");
				setKeyText("wkk_key_006", "§");
				setKeyText("wkk_key_007", "#");
				setKeyText("wkk_key_008", "¿");
				setKeyText("wkk_key_009", "¡");
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