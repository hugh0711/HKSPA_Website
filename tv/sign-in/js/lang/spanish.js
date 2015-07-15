
/**
 * spanish
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
var TITLE_LABEL = "spanish";
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
		miniPopUpInfoObjects[0] = getPopUPInfoObject("11", "wkk_key_00", "04", new Array('a','á'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[1] = getPopUPInfoObject("10", "wkk_key_00", "04", new Array('A','Á'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[2] = getPopUPInfoObject("11", "wkk_key_04", "04", new Array('e','é'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[3] = getPopUPInfoObject("10", "wkk_key_04", "04", new Array('E','É'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[4] = getPopUPInfoObject("11", "wkk_key_13", "04", new Array('i','í'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[5] = getPopUPInfoObject("10", "wkk_key_13", "04", new Array('I','Í'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[6] = getPopUPInfoObject("11", "wkk_key_30", "04", new Array('o','ó'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[7] = getPopUPInfoObject("10", "wkk_key_30", "04", new Array('O','Ó'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[8] = getPopUPInfoObject("11", "wkk_key_40", "02", new Array('u','ú','ü'), new Array("00","01","02"), null, "03");
		miniPopUpInfoObjects[9] = getPopUPInfoObject("10", "wkk_key_40", "02", new Array('U','Ú','Ü'), new Array("00","01","02"), null, "03");
	} else if(keyBoardType==1){
		miniPopUpInfoObjects[0] = getPopUPInfoObject("11", "wkk_key_00", "04", new Array('a','á'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[1] = getPopUPInfoObject("10", "wkk_key_00", "04", new Array('A','Á'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[2] = getPopUPInfoObject("11", "wkk_key_04", "04", new Array('e','é'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[3] = getPopUPInfoObject("10", "wkk_key_04", "04", new Array('E','É'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[4] = getPopUPInfoObject("11", "wkk_key_12", "04", new Array('i','í'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[5] = getPopUPInfoObject("10", "wkk_key_12", "04", new Array('I','Í'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[6] = getPopUPInfoObject("11", "wkk_key_23", "04", new Array('o','ó'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[7] = getPopUPInfoObject("10", "wkk_key_23", "04", new Array('O','Ó'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[8] = getPopUPInfoObject("11", "wkk_key_32", "02", new Array('u','ú','ü'), new Array("00","01","02"), null, "03");
		miniPopUpInfoObjects[9] = getPopUPInfoObject("10", "wkk_key_32", "02", new Array('U','Ú','Ü'), new Array("00","01","02"), null, "03");

	} else{
		miniPopUpInfoObjects[0] = getPopUPInfoObject("11", "wkk_key_001", "04", new Array('a','á'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[1] = getPopUPInfoObject("10", "wkk_key_001", "04", new Array('A','Á'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[2] = getPopUPInfoObject("11", "wkk_key_005", "04", new Array('e','é'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[3] = getPopUPInfoObject("10", "wkk_key_005", "04", new Array('E','É'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[4] = getPopUPInfoObject("11", "wkk_key_009", "04", new Array('i','í'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[5] = getPopUPInfoObject("10", "wkk_key_009", "04", new Array('I','Í'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[6] = getPopUPInfoObject("11", "wkk_key_103", "04", new Array('o','ó'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[7] = getPopUPInfoObject("10", "wkk_key_103", "04", new Array('O','Ó'), new Array("00","01"), null, "02");
		miniPopUpInfoObjects[8] = getPopUPInfoObject("11", "wkk_key_108", "02", new Array('u','ú','ü'), new Array("00","01","02"), null, "03");
		miniPopUpInfoObjects[9] = getPopUPInfoObject("10", "wkk_key_108", "02", new Array('U','Ú','Ü'), new Array("00","01","02"), null, "03");

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
			setKeyText("wkk_key_24", "ñ");
			setKeyText("wkk_key_25", "7");
			setKeyText("wkk_key_26", "8");
			setKeyText("wkk_key_27", "9");
			setKeyText("wkk_key_30", "o");
			setKeyText("wkk_key_31", "p");
			setKeyText("wkk_key_32", "q");
			setKeyText("wkk_key_33", "r");
			setKeyText("wkk_key_34", "s");
			setKeyText("wkk_key_35", ".");
			setKeyText("wkk_key_36", "@");
			setKeyText("wkk_key_37", "0");
			setKeyText("wkk_key_40", "t");
			setKeyText("wkk_key_41", "u");
			setKeyText("wkk_key_42", "v");
			setKeyText("wkk_key_43", "w");
			setKeyText("wkk_key_44", "x");
			setKeyText("wkk_key_45", "y");
			setKeyText("wkk_key_46", "_");
			setKeyText("wkk_key_47", "/"); 
			setKeyText("wkk_key_50", "z");
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
					setKeyText("wkk_key_24", "ñ");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", "o");
					setKeyText("wkk_key_31", "p");
					setKeyText("wkk_key_32", "q");
					setKeyText("wkk_key_33", "r");
					setKeyText("wkk_key_34", "s");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", "t");
					setKeyText("wkk_key_41", "u");
					setKeyText("wkk_key_42", "v");
					setKeyText("wkk_key_43", "w");
					setKeyText("wkk_key_44", "x");
					setKeyText("wkk_key_45", "y");
					setKeyText("wkk_key_46", "_");
					setKeyText("wkk_key_47", "/"); 
					setKeyText("wkk_key_50", "z");
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
					setKeyText("wkk_key_24", "Ñ");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", "O");
					setKeyText("wkk_key_31", "P");
					setKeyText("wkk_key_32", "Q");
					setKeyText("wkk_key_33", "R");
					setKeyText("wkk_key_34", "S");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", "T");
					setKeyText("wkk_key_41", "U");
					setKeyText("wkk_key_42", "V");
					setKeyText("wkk_key_43", "W");
					setKeyText("wkk_key_44", "X");
					setKeyText("wkk_key_45", "Y");
					setKeyText("wkk_key_46", "_");
					setKeyText("wkk_key_47", "/"); 
					setKeyText("wkk_key_50", "Z");
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
			setInnerHtml("wkk_key_61", "SPA");	//Lang Toggle
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
			setKeyText("wkk_key_22", "ñ");
			setKeyText("wkk_key_23", "o");
			setKeyText("wkk_key_24", "p");
			setKeyText("wkk_key_25", "q");
			setKeyText("wkk_key_30", "r");
			setKeyText("wkk_key_31", "s");
			setKeyText("wkk_key_32", "t");
			setKeyText("wkk_key_33", "u");
			setKeyText("wkk_key_34", "v");
			setKeyText("wkk_key_35", "w");
			setKeyText("wkk_key_40", "x");
			setKeyText("wkk_key_41", "y");
			setKeyText("wkk_key_42", "z ");
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
				setKeyText("wkk_key_22", "ñ");
				setKeyText("wkk_key_23", "o");
				setKeyText("wkk_key_24", "p");
				setKeyText("wkk_key_25", "q");
				setKeyText("wkk_key_30", "r");
				setKeyText("wkk_key_31", "s");
				setKeyText("wkk_key_32", "t");
				setKeyText("wkk_key_33", "u");
				setKeyText("wkk_key_34", "v");
				setKeyText("wkk_key_35", "w");
				setKeyText("wkk_key_40", "x");
				setKeyText("wkk_key_41", "y");
				setKeyText("wkk_key_42", "z ");
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
				setKeyText("wkk_key_22", "Ñ"); 
				setKeyText("wkk_key_23", "O"); 
				setKeyText("wkk_key_24", "P"); 
				setKeyText("wkk_key_25", "Q"); 
				setKeyText("wkk_key_30", "R"); 
				setKeyText("wkk_key_31", "S"); 
				setKeyText("wkk_key_32", "T"); 
				setKeyText("wkk_key_33", "U"); 
				setKeyText("wkk_key_34", "V"); 
				setKeyText("wkk_key_35", "W"); 
				setKeyText("wkk_key_40", "X"); 
				setKeyText("wkk_key_41", "Y"); 
				setKeyText("wkk_key_42", "Z "); 
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
			setInnerHtml("wkk_key_61", "SPA");	//Lang Toggle
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
			setKeyText("wkk_key_102", "ñ");
			setKeyText("wkk_key_103", "o");
			setKeyText("wkk_key_104", "p");
			setKeyText("wkk_key_105", "q");
			setKeyText("wkk_key_106", "r");
			setKeyText("wkk_key_107", "s");
			setKeyText("wkk_key_108", "t");
			setKeyText("wkk_key_109", "u");
			setKeyText("wkk_key_110", "v");
			setKeyText("wkk_key_111", "w");
			setKeyText("wkk_key_112", "x");
			setKeyText("wkk_key_113", "y");
			setKeyText("wkk_key_201", "z");
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
				setKeyText("wkk_key_102", "ñ");
				setKeyText("wkk_key_103", "o");
				setKeyText("wkk_key_104", "p");
				setKeyText("wkk_key_105", "q");
				setKeyText("wkk_key_106", "r");
				setKeyText("wkk_key_107", "s");
				setKeyText("wkk_key_108", "t");
				setKeyText("wkk_key_109", "u");
				setKeyText("wkk_key_110", "v");
				setKeyText("wkk_key_111", "w");
				setKeyText("wkk_key_112", "x");
				setKeyText("wkk_key_113", "y");
				setKeyText("wkk_key_201", "z");
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
				setKeyText("wkk_key_102", "Ñ");
				setKeyText("wkk_key_103", "O");
				setKeyText("wkk_key_104", "P");
				setKeyText("wkk_key_105", "Q");
				setKeyText("wkk_key_106", "R");
				setKeyText("wkk_key_107", "S");
				setKeyText("wkk_key_108", "T");
				setKeyText("wkk_key_109", "U");
				setKeyText("wkk_key_110", "V");
				setKeyText("wkk_key_111", "W");
				setKeyText("wkk_key_112", "X");
				setKeyText("wkk_key_113", "Y");
				setKeyText("wkk_key_201", "Z");
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
			setInnerHtml("wkk_key_116", "SPA");	//Lang Toggle
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