
/**
 * Uzbek_Modern Latin
 */

/**
 * key board page count
 */
var pageCnt = 2;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "Ok";
var CANCEL_BUTTON_LABEL = "Cancel";
var TITLE_LABEL = "Uzbek_Modern Latin";
var DESC_LABEL = "";

var STYLE_LABEL = "ABC";


/**
 * initialize keyboard data
 * @return
 */
function initialize() {
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
}




/**
 * Numeric key display on screen.
 * @param currPageIdx
 * @return truel/false
 */
function isNumericKeyActivated(currPageIdx) {
	if(currPageIdx==0 || currPageIdx == 1  ) {
		return true;
	} else {
		return false;
	}
}

/**
 * action that ok button pressed 
 * @return
 */
function executeOK() {
	//TODO : define action when ok button pressed.	
	var inputText = getTextContent();
	for(i=0; i<title.length; i++){		
		alert("inputText::::"+inputText.replaceAll(" ",""));
		if(inputText==title[i]){
			alert("inputText2::"+inputText);
		}
	}
	
}

/**
 * action that cancel button pressed 
 * @return
 */
function executeCancel() {
	setTextContent("");
	currentCaretIdx = 0;
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
			setKeyText("wkk_key_02", "d");            
			setKeyText("wkk_key_03", "e");            
			setKeyText("wkk_key_04", "f");            
			setKeyText("wkk_key_05", "1");            
			setKeyText("wkk_key_06", "2");            
			setKeyText("wkk_key_07", "3");            
			setKeyText("wkk_key_10", "g");            
			setKeyText("wkk_key_11", "h");            
			setKeyText("wkk_key_12", "i");            
			setKeyText("wkk_key_13", "j");            
			setKeyText("wkk_key_14", "k");            
			setKeyText("wkk_key_15", "4");            
			setKeyText("wkk_key_16", "5");            
			setKeyText("wkk_key_17", "6");            
			setKeyText("wkk_key_20", "l");            
			setKeyText("wkk_key_21", "m");            
			setKeyText("wkk_key_22", "n");            
			setKeyText("wkk_key_23", "o");            
			setKeyText("wkk_key_24", "p");            
			setKeyText("wkk_key_25", "7");            
			setKeyText("wkk_key_26", "8");            
			setKeyText("wkk_key_27", "9");            
			setKeyText("wkk_key_30", "q");            
			setKeyText("wkk_key_31", "r");            
			setKeyText("wkk_key_32", "s");            
			setKeyText("wkk_key_33", "t");            
			setKeyText("wkk_key_34", "u");            
			setKeyText("wkk_key_35", ".");            
			setKeyText("wkk_key_36", "@");            
			setKeyText("wkk_key_37", "0");            
			setKeyText("wkk_key_40", "v");            
			setKeyText("wkk_key_41", "w");            
			setKeyText("wkk_key_42", "x");            
			setKeyText("wkk_key_43", "y");            
			setKeyText("wkk_key_44", "z");            
			setKeyText("wkk_key_45", "o‘");           
			setKeyText("wkk_key_46", "_");            
			setKeyText("wkk_key_47", "/");
			setKeyText("wkk_key_50", "g‘");
			setKeyText("wkk_key_51", "sh");
			setKeyText("wkk_key_52", "ch");
			setKeyText("wkk_key_53", "’");
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
					setKeyText("wkk_key_02", "d");            
					setKeyText("wkk_key_03", "e");            
					setKeyText("wkk_key_04", "f");            
					setKeyText("wkk_key_05", "1");            
					setKeyText("wkk_key_06", "2");            
					setKeyText("wkk_key_07", "3");            
					setKeyText("wkk_key_10", "g");            
					setKeyText("wkk_key_11", "h");            
					setKeyText("wkk_key_12", "i");            
					setKeyText("wkk_key_13", "j");            
					setKeyText("wkk_key_14", "k");            
					setKeyText("wkk_key_15", "4");            
					setKeyText("wkk_key_16", "5");            
					setKeyText("wkk_key_17", "6");            
					setKeyText("wkk_key_20", "l");            
					setKeyText("wkk_key_21", "m");            
					setKeyText("wkk_key_22", "n");            
					setKeyText("wkk_key_23", "o");            
					setKeyText("wkk_key_24", "p");            
					setKeyText("wkk_key_25", "7");            
					setKeyText("wkk_key_26", "8");            
					setKeyText("wkk_key_27", "9");            
					setKeyText("wkk_key_30", "q");            
					setKeyText("wkk_key_31", "r");            
					setKeyText("wkk_key_32", "s");            
					setKeyText("wkk_key_33", "t");            
					setKeyText("wkk_key_34", "u");            
					setKeyText("wkk_key_35", ".");            
					setKeyText("wkk_key_36", "@");            
					setKeyText("wkk_key_37", "0");            
					setKeyText("wkk_key_40", "v");            
					setKeyText("wkk_key_41", "w");            
					setKeyText("wkk_key_42", "x");            
					setKeyText("wkk_key_43", "y");            
					setKeyText("wkk_key_44", "z");            
					setKeyText("wkk_key_45", "o‘");           
					setKeyText("wkk_key_46", "_");            
					setKeyText("wkk_key_47", "/");
					setKeyText("wkk_key_50", "g‘");
					setKeyText("wkk_key_51", "sh");
					setKeyText("wkk_key_52", "ch");
					setKeyText("wkk_key_53", "’");
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
					setKeyText("wkk_key_02", "D");            
					setKeyText("wkk_key_03", "E");            
					setKeyText("wkk_key_04", "F");            
					setKeyText("wkk_key_05", "1");            
					setKeyText("wkk_key_06", "2");            
					setKeyText("wkk_key_07", "3");            
					setKeyText("wkk_key_10", "G");            
					setKeyText("wkk_key_11", "H");            
					setKeyText("wkk_key_12", "I");            
					setKeyText("wkk_key_13", "J");            
					setKeyText("wkk_key_14", "K");            
					setKeyText("wkk_key_15", "4");            
					setKeyText("wkk_key_16", "5");            
					setKeyText("wkk_key_17", "6");           	
					setKeyText("wkk_key_20", "L");            
					setKeyText("wkk_key_21", "M");            
					setKeyText("wkk_key_22", "N");            
					setKeyText("wkk_key_23", "O");            
					setKeyText("wkk_key_24", "P");            
					setKeyText("wkk_key_25", "7");            
					setKeyText("wkk_key_26", "8");            
					setKeyText("wkk_key_27", "9");            
					setKeyText("wkk_key_30", "Q");            
					setKeyText("wkk_key_31", "R");            
					setKeyText("wkk_key_32", "S");            
					setKeyText("wkk_key_33", "T");            
					setKeyText("wkk_key_34", "U");            
					setKeyText("wkk_key_35", ".");            
					setKeyText("wkk_key_36", "@");            
					setKeyText("wkk_key_37", "0");            
					setKeyText("wkk_key_40", "V");            
					setKeyText("wkk_key_41", "W");            
					setKeyText("wkk_key_42", "X");            
					setKeyText("wkk_key_43", "Y");            
					setKeyText("wkk_key_44", "Z");            
					setKeyText("wkk_key_45", "O‘");            
					setKeyText("wkk_key_46", "_");            
					setKeyText("wkk_key_47", "/");    
					setKeyText("wkk_key_50", "G‘");
					setKeyText("wkk_key_51", "Sh");
					setKeyText("wkk_key_52", "Ch");
					setKeyText("wkk_key_53", "’");
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
			setInnerHtml("wkk_key_61", "UZB");	//Lang Toggle
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

	}// end keyboard 1	
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==1){			
		if(gubun == 'lang'){			
			stIdx = 11;			
			setInnerHtml("wkk_key_62", 'ABC');
			setKeyText("wkk_key_00", "a");
			setKeyText("wkk_key_01", "b");
			setKeyText("wkk_key_02", "d");
			setKeyText("wkk_key_03", "e");
			setKeyText("wkk_key_04", "f");
			setKeyText("wkk_key_05", "g");
			setKeyText("wkk_key_10", "h");
			setKeyText("wkk_key_11", "i");
			setKeyText("wkk_key_12", "j");
			setKeyText("wkk_key_13", "k");
			setKeyText("wkk_key_14", "l");
			setKeyText("wkk_key_15", "m");
			setKeyText("wkk_key_20", "n");
			setKeyText("wkk_key_21", "o");
			setKeyText("wkk_key_22", "p");
			setKeyText("wkk_key_23", "q");
			setKeyText("wkk_key_24", "r");
			setKeyText("wkk_key_25", "s");
			setKeyText("wkk_key_30", "t");
			setKeyText("wkk_key_31", "u");
			setKeyText("wkk_key_32", "v");
			setKeyText("wkk_key_33", "w");
			setKeyText("wkk_key_34", "x");
			setKeyText("wkk_key_35", "y");
			setKeyText("wkk_key_40", "z");
			setKeyText("wkk_key_41", "o‘");
			setKeyText("wkk_key_42", "g‘");
			setKeyText("wkk_key_43", "sh");
			setKeyText("wkk_key_44", "ch");
			setKeyText("wkk_key_45", "’");
			setKeyText("wkk_key_50", " "); 
			setKeyText("wkk_key_51", " "); 
			setKeyText("wkk_key_52", " "); 
			setKeyText("wkk_key_53", " ");
						
		}
		
		if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_62", 'АBC');
				doHighlight("wkk_key_62");
				setKeyText("wkk_key_00", "a");
				setKeyText("wkk_key_01", "b");
				setKeyText("wkk_key_02", "d");
				setKeyText("wkk_key_03", "e");
				setKeyText("wkk_key_04", "f");
				setKeyText("wkk_key_05", "g");
				setKeyText("wkk_key_10", "h");
				setKeyText("wkk_key_11", "i");
				setKeyText("wkk_key_12", "j");
				setKeyText("wkk_key_13", "k");
				setKeyText("wkk_key_14", "l");
				setKeyText("wkk_key_15", "m");
				setKeyText("wkk_key_20", "n");
				setKeyText("wkk_key_21", "o");
				setKeyText("wkk_key_22", "p");
				setKeyText("wkk_key_23", "q");
				setKeyText("wkk_key_24", "r");
				setKeyText("wkk_key_25", "s");
				setKeyText("wkk_key_30", "t");
				setKeyText("wkk_key_31", "u");
				setKeyText("wkk_key_32", "v");
				setKeyText("wkk_key_33", "w");
				setKeyText("wkk_key_34", "x");
				setKeyText("wkk_key_35", "y");
				setKeyText("wkk_key_40", "z");
				setKeyText("wkk_key_41", "o‘");
				setKeyText("wkk_key_42", "g‘");
				setKeyText("wkk_key_43", "sh");
				setKeyText("wkk_key_44", "ch");
				setKeyText("wkk_key_45", "’");
				setKeyText("wkk_key_50", " "); 
				setKeyText("wkk_key_51", " "); 
				setKeyText("wkk_key_52", " "); 
				setKeyText("wkk_key_53", " ");
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_62", 'abc');
				doHighlight("wkk_key_62");
				setKeyText("wkk_key_00", "A"); 
				setKeyText("wkk_key_01", "B"); 
				setKeyText("wkk_key_02", "D"); 
				setKeyText("wkk_key_03", "E"); 
				setKeyText("wkk_key_04", "F"); 
				setKeyText("wkk_key_05", "G"); 
				setKeyText("wkk_key_10", "H"); 
				setKeyText("wkk_key_11", "I"); 
				setKeyText("wkk_key_12", "J"); 
				setKeyText("wkk_key_13", "K"); 
				setKeyText("wkk_key_14", "L"); 
				setKeyText("wkk_key_15", "M"); 
				setKeyText("wkk_key_20", "N"); 
				setKeyText("wkk_key_21", "O"); 
				setKeyText("wkk_key_22", "P"); 
				setKeyText("wkk_key_23", "Q"); 
				setKeyText("wkk_key_24", "R"); 
				setKeyText("wkk_key_25", "S"); 
				setKeyText("wkk_key_30", "T"); 
				setKeyText("wkk_key_31", "U"); 
				setKeyText("wkk_key_32", "V"); 
				setKeyText("wkk_key_33", "W"); 
				setKeyText("wkk_key_34", "X"); 
				setKeyText("wkk_key_35", "Y"); 
				setKeyText("wkk_key_40", "Z"); 
				setKeyText("wkk_key_41", "O‘"); 
				setKeyText("wkk_key_42", "G‘"); 
				setKeyText("wkk_key_43", "Sh"); 
				setKeyText("wkk_key_44", "Ch"); 
				setKeyText("wkk_key_45", "’"); 
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
			setInnerHtml("wkk_key_61", "UZB");	//Lang Toggle
			setInnerHtml("wkk_key_62", " ");				
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
	}//end keyboard 2
/*********************************************************************/
	/*********************  KeyBoard Layout 3 Start  *********************/
	/*********************************************************************/	
	else {		
		
		if(gubun == 'lang'){
			
			stIdx = 11;
			setInnerHtml("wkk_key_100", 'ABC');	
			setKeyText("wkk_key_001", "a");
			setKeyText("wkk_key_002", "b");
			setKeyText("wkk_key_003", "d");
			setKeyText("wkk_key_004", "e");
			setKeyText("wkk_key_005", "f");
			setKeyText("wkk_key_006", "g");
			setKeyText("wkk_key_007", "h");
			setKeyText("wkk_key_008", "i");
			setKeyText("wkk_key_009", "j");
			setKeyText("wkk_key_010", "k");
			setKeyText("wkk_key_011", "l");
			setKeyText("wkk_key_012", "m");
			setKeyText("wkk_key_013", "n");
			setKeyText("wkk_key_101", "o");
			setKeyText("wkk_key_102", "p");
			setKeyText("wkk_key_103", "q");
			setKeyText("wkk_key_104", "r");
			setKeyText("wkk_key_105", "s");
			setKeyText("wkk_key_106", "t");
			setKeyText("wkk_key_107", "u");
			setKeyText("wkk_key_108", "v");
			setKeyText("wkk_key_109", "w");
			setKeyText("wkk_key_110", "x");
			setKeyText("wkk_key_111", "y");
			setKeyText("wkk_key_112", "z");
			setKeyText("wkk_key_113", "o‘");
			setKeyText("wkk_key_201", "g‘");
			setKeyText("wkk_key_202", "sh");
			setKeyText("wkk_key_203", "ch");
			setKeyText("wkk_key_204", "’");
			setKeyText("wkk_key_210", " "); 
			setKeyText("wkk_key_211", " "); 
			setKeyText("wkk_key_212", " "); 
			setKeyText("wkk_key_213", " ");				
						
		}
		else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_100", 'ABC');			
				doHighlight("wkk_key_100");		
				setKeyText("wkk_key_001", "a");
				setKeyText("wkk_key_002", "b");
				setKeyText("wkk_key_003", "d");
				setKeyText("wkk_key_004", "e");
				setKeyText("wkk_key_005", "f");
				setKeyText("wkk_key_006", "g");
				setKeyText("wkk_key_007", "h");
				setKeyText("wkk_key_008", "i");
				setKeyText("wkk_key_009", "j");
				setKeyText("wkk_key_010", "k");
				setKeyText("wkk_key_011", "l");
				setKeyText("wkk_key_012", "m");
				setKeyText("wkk_key_013", "n");
				setKeyText("wkk_key_101", "o");
				setKeyText("wkk_key_102", "p");
				setKeyText("wkk_key_103", "q");
				setKeyText("wkk_key_104", "r");
				setKeyText("wkk_key_105", "s");
				setKeyText("wkk_key_106", "t");
				setKeyText("wkk_key_107", "u");
				setKeyText("wkk_key_108", "v");
				setKeyText("wkk_key_109", "w");
				setKeyText("wkk_key_110", "x");
				setKeyText("wkk_key_111", "y");
				setKeyText("wkk_key_112", "z");
				setKeyText("wkk_key_113", "o‘");
				setKeyText("wkk_key_201", "g‘");
				setKeyText("wkk_key_202", "sh");
				setKeyText("wkk_key_203", "ch");
				setKeyText("wkk_key_204", "’");
				setKeyText("wkk_key_210", " "); 
				setKeyText("wkk_key_211", " "); 
				setKeyText("wkk_key_212", " "); 
				setKeyText("wkk_key_213", " ");	
				break;
			case 11:
				stIdx = 10;	
				setInnerHtml("wkk_key_100", 'abc');			
				doHighlight("wkk_key_100");		
				setKeyText("wkk_key_001", "A");
				setKeyText("wkk_key_002", "B");
				setKeyText("wkk_key_003", "D");
				setKeyText("wkk_key_004", "E");
				setKeyText("wkk_key_005", "F");
				setKeyText("wkk_key_006", "G");
				setKeyText("wkk_key_007", "H");
				setKeyText("wkk_key_008", "I");
				setKeyText("wkk_key_009", "J");
				setKeyText("wkk_key_010", "K");
				setKeyText("wkk_key_011", "L");
				setKeyText("wkk_key_012", "M");
				setKeyText("wkk_key_013", "N");
				setKeyText("wkk_key_101", "O");
				setKeyText("wkk_key_102", "P");
				setKeyText("wkk_key_103", "Q");
				setKeyText("wkk_key_104", "R");
				setKeyText("wkk_key_105", "S");
				setKeyText("wkk_key_106", "T");
				setKeyText("wkk_key_107", "U");
				setKeyText("wkk_key_108", "V");
				setKeyText("wkk_key_109", "W");
				setKeyText("wkk_key_110", "X");
				setKeyText("wkk_key_111", "Y");
				setKeyText("wkk_key_112", "Z");
				setKeyText("wkk_key_113", "O‘");
				setKeyText("wkk_key_201", "G‘ ");
				setKeyText("wkk_key_202", "Sh");
				setKeyText("wkk_key_203", "Ch");
				setKeyText("wkk_key_204", "’");
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
			setInnerHtml("wkk_key_116", "UZB");	//Lang Toggle
			setInnerHtml("wkk_key_100", " ");				
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
//	alert("english");
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