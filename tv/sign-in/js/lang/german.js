
/**
 * german
 */

/**
 * key board page count
 */
var pageCnt = 3;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "Ok";
var CANCEL_BUTTON_LABEL = "Cancle";
var TITLE_LABEL = "german";
var DESC_LABEL = "";

var STYLE_LABEL = "ABC";
/**
 * initialize keyboard data
 * @return
 */
function initialize() {
	chTggIdx = 0;
	document.getElementById("wkk_tx").style.textAlign= 'left';	
	if(keyBoardType==0){
		miniPopUpInfoObjects[0] = getPopUPInfoObject("11", "wkk_key_00", "04", new Array('a','ä'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[1] = getPopUPInfoObject("10", "wkk_key_00", "04", new Array('A','Ä'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[2] = getPopUPInfoObject("11", "wkk_key_24", "04", new Array('o','ö'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[3] = getPopUPInfoObject("10", "wkk_key_24", "04", new Array('O','Ö'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[4] = getPopUPInfoObject("11", "wkk_key_33", "04", new Array('s','ß'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[5] = getPopUPInfoObject("10", "wkk_key_33", "04", new Array('S','ß'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[6] = getPopUPInfoObject("11", "wkk_key_40", "04", new Array('u','ü'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[7] = getPopUPInfoObject("10", "wkk_key_40", "04", new Array('U','Ü'), new Array("00","01"), null, "02");
	} else if(keyBoardType==1){
		miniPopUpInfoObjects[0] = getPopUPInfoObject("11", "wkk_key_00", "04", new Array('a','ä'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[1] = getPopUPInfoObject("10", "wkk_key_00", "04", new Array('A','Ä'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[2] = getPopUPInfoObject("11", "wkk_key_22", "04", new Array('o','ö'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[3] = getPopUPInfoObject("10", "wkk_key_22", "04", new Array('O','Ö'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[4] = getPopUPInfoObject("11", "wkk_key_30", "04", new Array('s','ß'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[5] = getPopUPInfoObject("10", "wkk_key_30", "04", new Array('S','ß'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[6] = getPopUPInfoObject("11", "wkk_key_32", "04", new Array('u','ü'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[7] = getPopUPInfoObject("10", "wkk_key_32", "04", new Array('U','Ü'), new Array("00","01"), null, "02");
	} else{
		miniPopUpInfoObjects[0] = getPopUPInfoObject("11", "wkk_key_001", "04", new Array('a','ä'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[1] = getPopUPInfoObject("10", "wkk_key_001", "04", new Array('A','Ä'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[2] = getPopUPInfoObject("11", "wkk_key_102", "04", new Array('o','ö'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[3] = getPopUPInfoObject("10", "wkk_key_102", "04", new Array('O','Ö'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[4] = getPopUPInfoObject("11", "wkk_key_106", "04", new Array('s','ß'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[5] = getPopUPInfoObject("10", "wkk_key_106", "04", new Array('S','ß'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[6] = getPopUPInfoObject("11", "wkk_key_108", "04", new Array('u','ü'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[7] = getPopUPInfoObject("10", "wkk_key_108", "04", new Array('U','Ü'), new Array("00","01"), null, "02");
	}
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
	return '<font id="font'+f+'0">a</font><font id="font'+f+'1" style="margin-left: -3px; color: #4D4D4D">A</font><font id="font'+f+'2" style="margin-left: -3px; color: #4D4D4D" >#</font>';
}





/**
 * Numeric key display on screen.
 * @param currPageIdx
 * @return truel/false
 */
function isNumericKeyActivated(currPageIdx) {
	if(currPageIdx==0 || currPageIdx == 1 ) {
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
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 1 Start  *********************/
	/*********************************************************************/
	if(keyBoardType==0){	
		if(gubun == 'lang'){	
			stIdx = 11;
		  setInnerHtml("wkk_key_62", 'ABC');
			setKeyText("wkk_key_00", "a");
			setKeyText("wkk_key_01", "b");
			setKeyText("wkk_key_02", "c");
			setKeyText("wkk_key_03", "d");
			setKeyText("wkk_key_04", "e");
			setKeyText("wkk_key_05", "1");
			setKeyText("wkk_key_06", "2");
			setKeyText("wkk_key_07", "3");
			setKeyText("wkk_key_10", "f");
			setKeyText("wkk_key_11", "g");
			setKeyText("wkk_key_12", "h");
			setKeyText("wkk_key_13", "i");
			setKeyText("wkk_key_14", "j");
			setKeyText("wkk_key_15", "4");
			setKeyText("wkk_key_16", "5");
			setKeyText("wkk_key_17", "6");
			setKeyText("wkk_key_20", "k");
			setKeyText("wkk_key_21", "l");
			setKeyText("wkk_key_22", "m");
			setKeyText("wkk_key_23", "n");
			setKeyText("wkk_key_24", "o");
			setKeyText("wkk_key_25", "7");
			setKeyText("wkk_key_26", "8");
			setKeyText("wkk_key_27", "9");
			setKeyText("wkk_key_30", "p");
			setKeyText("wkk_key_31", "q");
			setKeyText("wkk_key_32", "r");
			setKeyText("wkk_key_33", "s");
			setKeyText("wkk_key_34", "t");
			setKeyText("wkk_key_35", ".");
			setKeyText("wkk_key_36", "@");
			setKeyText("wkk_key_37", "0");
			setKeyText("wkk_key_40", "u");
			setKeyText("wkk_key_41", "v");
			setKeyText("wkk_key_42", "w");
			setKeyText("wkk_key_43", "x");
			setKeyText("wkk_key_44", "y");
			setKeyText("wkk_key_45", "z");
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
		}else if(gubun == 'sl')	{
			switch(stIdx){		
				case 10:
					stIdx = 11;
					setInnerHtml("wkk_key_62", 'ABC');
				 	 doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "a");
					setKeyText("wkk_key_01", "b");
					setKeyText("wkk_key_02", "c");
					setKeyText("wkk_key_03", "d");
					setKeyText("wkk_key_04", "e");
					setKeyText("wkk_key_05", "1");
					setKeyText("wkk_key_06", "2");
					setKeyText("wkk_key_07", "3");
					setKeyText("wkk_key_10", "f");
					setKeyText("wkk_key_11", "g");
					setKeyText("wkk_key_12", "h");
					setKeyText("wkk_key_13", "i");
					setKeyText("wkk_key_14", "j");
					setKeyText("wkk_key_15", "4");
					setKeyText("wkk_key_16", "5");
					setKeyText("wkk_key_17", "6");
					setKeyText("wkk_key_20", "k");
					setKeyText("wkk_key_21", "l");
					setKeyText("wkk_key_22", "m");
					setKeyText("wkk_key_23", "n");
					setKeyText("wkk_key_24", "o");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", "p");
					setKeyText("wkk_key_31", "q");
					setKeyText("wkk_key_32", "r");
					setKeyText("wkk_key_33", "s");
					setKeyText("wkk_key_34", "t");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", "u");
					setKeyText("wkk_key_41", "v");
					setKeyText("wkk_key_42", "w");
					setKeyText("wkk_key_43", "x");
					setKeyText("wkk_key_44", "y");
					setKeyText("wkk_key_45", "z");
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
				case 11:
					stIdx = 10;		
				 	setInnerHtml("wkk_key_62", 'abc'); 
				 	doHighlight("wkk_key_62"); 		  
					setKeyText("wkk_key_00", "A");
					setKeyText("wkk_key_01", "B");
					setKeyText("wkk_key_02", "C");
					setKeyText("wkk_key_03", "D");
					setKeyText("wkk_key_04", "E");
					setKeyText("wkk_key_05", "1");
					setKeyText("wkk_key_06", "2");
					setKeyText("wkk_key_07", "3");
					setKeyText("wkk_key_10", "F");
					setKeyText("wkk_key_11", "G");
					setKeyText("wkk_key_12", "H");
					setKeyText("wkk_key_13", "I");
					setKeyText("wkk_key_14", "J");
					setKeyText("wkk_key_15", "4");
					setKeyText("wkk_key_16", "5");
					setKeyText("wkk_key_17", "6");
					setKeyText("wkk_key_20", "K");
					setKeyText("wkk_key_21", "L");
					setKeyText("wkk_key_22", "M");
					setKeyText("wkk_key_23", "N");
					setKeyText("wkk_key_24", "O");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", "P");
					setKeyText("wkk_key_31", "Q");
					setKeyText("wkk_key_32", "R");
					setKeyText("wkk_key_33", "S");
					setKeyText("wkk_key_34", "T");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", "U");
					setKeyText("wkk_key_41", "V");
					setKeyText("wkk_key_42", "W");
					setKeyText("wkk_key_43", "X");
					setKeyText("wkk_key_44", "Y");
					setKeyText("wkk_key_45", "Z");
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
			}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "GER");	//Lang Toggle
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
			
			setKeyText("wkk_key_00", "a");
			setKeyText("wkk_key_01", "b");
			setKeyText("wkk_key_02", "c");
			setKeyText("wkk_key_03", "d");
			setKeyText("wkk_key_04", "e");
			setKeyText("wkk_key_05", "f");
			setKeyText("wkk_key_10", "g");
			setKeyText("wkk_key_11", "h");
			setKeyText("wkk_key_12", "i");
			setKeyText("wkk_key_13", "j");
			setKeyText("wkk_key_14", "k");
			setKeyText("wkk_key_15", "l");
			setKeyText("wkk_key_20", "m");
			setKeyText("wkk_key_21", "n");
			setKeyText("wkk_key_22", "o");
			setKeyText("wkk_key_23", "p");
			setKeyText("wkk_key_24", "q");
			setKeyText("wkk_key_25", "r");
			setKeyText("wkk_key_30", "s");
			setKeyText("wkk_key_31", "t");
			setKeyText("wkk_key_32", "u");
			setKeyText("wkk_key_33", "v");
			setKeyText("wkk_key_34", "w");
			setKeyText("wkk_key_35", "x");
			setKeyText("wkk_key_40", "y");
			setKeyText("wkk_key_41", "z");
			setKeyText("wkk_key_42", " ");
			setKeyText("wkk_key_43", " ");
			setKeyText("wkk_key_44", " ");
			setKeyText("wkk_key_45", " ");
			setKeyText("wkk_key_50", " "); 
			setKeyText("wkk_key_51", " "); 
			setKeyText("wkk_key_52", " "); 
			setKeyText("wkk_key_53", " ");
						
		}
		
		if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_62", "ABC");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "a");
				setKeyText("wkk_key_01", "b");
				setKeyText("wkk_key_02", "c");
				setKeyText("wkk_key_03", "d");
				setKeyText("wkk_key_04", "e");
				setKeyText("wkk_key_05", "f");
				setKeyText("wkk_key_10", "g");
				setKeyText("wkk_key_11", "h");
				setKeyText("wkk_key_12", "i");
				setKeyText("wkk_key_13", "j");
				setKeyText("wkk_key_14", "k");
				setKeyText("wkk_key_15", "l");
				setKeyText("wkk_key_20", "m");
				setKeyText("wkk_key_21", "n");
				setKeyText("wkk_key_22", "o");
				setKeyText("wkk_key_23", "p");
				setKeyText("wkk_key_24", "q");
				setKeyText("wkk_key_25", "r");
				setKeyText("wkk_key_30", "s");
				setKeyText("wkk_key_31", "t");
				setKeyText("wkk_key_32", "u");
				setKeyText("wkk_key_33", "v");
				setKeyText("wkk_key_34", "w");
				setKeyText("wkk_key_35", "x");
				setKeyText("wkk_key_40", "y");
				setKeyText("wkk_key_41", "z");
				setKeyText("wkk_key_42", " ");
				setKeyText("wkk_key_43", " ");
				setKeyText("wkk_key_44", " ");
				setKeyText("wkk_key_45", " ");
				setKeyText("wkk_key_50", " "); 
				setKeyText("wkk_key_51", " "); 
				setKeyText("wkk_key_52", " "); 
				setKeyText("wkk_key_53", " ");
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_62", "abc");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "A"); 
				setKeyText("wkk_key_01", "B"); 
				setKeyText("wkk_key_02", "C"); 
				setKeyText("wkk_key_03", "D"); 
				setKeyText("wkk_key_04", "E"); 
				setKeyText("wkk_key_05", "F"); 
				setKeyText("wkk_key_10", "G"); 
				setKeyText("wkk_key_11", "H"); 
				setKeyText("wkk_key_12", "I"); 
				setKeyText("wkk_key_13", "J"); 
				setKeyText("wkk_key_14", "K"); 
				setKeyText("wkk_key_15", "L"); 
				setKeyText("wkk_key_20", "M"); 
				setKeyText("wkk_key_21", "N"); 
				setKeyText("wkk_key_22", "O"); 
				setKeyText("wkk_key_23", "P"); 
				setKeyText("wkk_key_24", "Q"); 
				setKeyText("wkk_key_25", "R"); 
				setKeyText("wkk_key_30", "S"); 
				setKeyText("wkk_key_31", "T"); 
				setKeyText("wkk_key_32", "U"); 
				setKeyText("wkk_key_33", "V"); 
				setKeyText("wkk_key_34", "W"); 
				setKeyText("wkk_key_35", "X"); 
				setKeyText("wkk_key_40", "Y"); 
				setKeyText("wkk_key_41", "Z"); 
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
		} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "GER");	//Lang Toggle
			setInnerHtml("wkk_key_62", " ");				
			switch(chIdx){
				case 20:
					chIdx = 21;
					
					setInnerHtml("wkk_key_63", "$€£");
					doHighlight('wkk_key_63');
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
					setInnerHtml("wkk_key_63", VH_CHAR_LABEL);
					doHighlight('wkk_key_63');
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
			
			stIdx = 11;
			
			setKeyText("wkk_key_001", "a");
			setKeyText("wkk_key_002", "b");
			setKeyText("wkk_key_003", "c");
			setKeyText("wkk_key_004", "d");
			setKeyText("wkk_key_005", "e");
			setKeyText("wkk_key_006", "f");
			setKeyText("wkk_key_007", "g");
			setKeyText("wkk_key_008", "h");
			setKeyText("wkk_key_009", "i");
			setKeyText("wkk_key_010", "j");
			setKeyText("wkk_key_011", "k");
			setKeyText("wkk_key_012", "l");
			setKeyText("wkk_key_013", "m");
			setKeyText("wkk_key_101", "n");
			setKeyText("wkk_key_102", "o");
			setKeyText("wkk_key_103", "p");
			setKeyText("wkk_key_104", "q");
			setKeyText("wkk_key_105", "r");
			setKeyText("wkk_key_106", "s");
			setKeyText("wkk_key_107", "t");
			setKeyText("wkk_key_108", "u");
			setKeyText("wkk_key_109", "v");
			setKeyText("wkk_key_110", "w");
			setKeyText("wkk_key_111", "x");
			setKeyText("wkk_key_112", "y");
			setKeyText("wkk_key_113", "z");
			setKeyText("wkk_key_201", " ");
			setKeyText("wkk_key_202", " ");
			setKeyText("wkk_key_203", " ");
			setKeyText("wkk_key_204", " ");
			setKeyText("wkk_key_210", " "); 
			setKeyText("wkk_key_211", " "); 
			setKeyText("wkk_key_212", " "); 
			setKeyText("wkk_key_213", " ");				
						
		}
		else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_100", "ABC");
				doHighlight('wkk_key_100');
				setKeyText("wkk_key_001", "a");
				setKeyText("wkk_key_002", "b");
				setKeyText("wkk_key_003", "c");
				setKeyText("wkk_key_004", "d");
				setKeyText("wkk_key_005", "e");
				setKeyText("wkk_key_006", "f");
				setKeyText("wkk_key_007", "g");
				setKeyText("wkk_key_008", "h");
				setKeyText("wkk_key_009", "i");
				setKeyText("wkk_key_010", "j");
				setKeyText("wkk_key_011", "k");
				setKeyText("wkk_key_012", "l");
				setKeyText("wkk_key_013", "m");
				setKeyText("wkk_key_101", "n");
				setKeyText("wkk_key_102", "o");
				setKeyText("wkk_key_103", "p");
				setKeyText("wkk_key_104", "q");
				setKeyText("wkk_key_105", "r");
				setKeyText("wkk_key_106", "s");
				setKeyText("wkk_key_107", "t");
				setKeyText("wkk_key_108", "u");
				setKeyText("wkk_key_109", "v");
				setKeyText("wkk_key_110", "w");
				setKeyText("wkk_key_111", "x");
				setKeyText("wkk_key_112", "y");
				setKeyText("wkk_key_113", "z");
				setKeyText("wkk_key_201", " ");
				setKeyText("wkk_key_202", " ");
				setKeyText("wkk_key_203", " ");
				setKeyText("wkk_key_204", " ");
				setKeyText("wkk_key_210", " "); 
				setKeyText("wkk_key_211", " "); 
				setKeyText("wkk_key_212", " "); 
				setKeyText("wkk_key_213", " ");	
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_100", "abc");
				doHighlight('wkk_key_100');
				setKeyText("wkk_key_001", "A");
				setKeyText("wkk_key_002", "B");
				setKeyText("wkk_key_003", "C");
				setKeyText("wkk_key_004", "D");
				setKeyText("wkk_key_005", "E");
				setKeyText("wkk_key_006", "F");
				setKeyText("wkk_key_007", "G");
				setKeyText("wkk_key_008", "H");
				setKeyText("wkk_key_009", "I");
				setKeyText("wkk_key_010", "J");
				setKeyText("wkk_key_011", "K");
				setKeyText("wkk_key_012", "L");
				setKeyText("wkk_key_013", "M");
				setKeyText("wkk_key_101", "N");
				setKeyText("wkk_key_102", "O");
				setKeyText("wkk_key_103", "P");
				setKeyText("wkk_key_104", "Q");
				setKeyText("wkk_key_105", "R");
				setKeyText("wkk_key_106", "S");
				setKeyText("wkk_key_107", "T");
				setKeyText("wkk_key_108", "U");
				setKeyText("wkk_key_109", "V");
				setKeyText("wkk_key_110", "W");
				setKeyText("wkk_key_111", "X");
				setKeyText("wkk_key_112", "Y");
				setKeyText("wkk_key_113", "Z");
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
			setInnerHtml("wkk_key_116", "GER");	//Lang Toggle
			setInnerHtml("wkk_key_100", " ");			
			switch(chIdx){
			case 20:
				chIdx = 21;
				
				setInnerHtml("wkk_key_200", "$€£");
				doHighlight('wkk_key_200');
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
				setKeyText("wkk_key_201", "＆"); 
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
				setInnerHtml("wkk_key_200", VH_CHAR_LABEL);
				doHighlight('wkk_key_200');
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