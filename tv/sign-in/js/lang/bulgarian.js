
/**
 * bulgarian
 */

/**
 * key board page count
 */
var pageCnt = 7;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "Ok";
var CANCEL_BUTTON_LABEL = "cancle";
var TITLE_LABEL = "bulgarian";
var DESC_LABEL = "";
var STYLE_LABEL = "АБВ";

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
 * return page idx change button label
 * @return
 */

/**
 * return page idx change button label
 * @return
 */
function getPageHtml(isFocus, lang) {
	lang = lang || 'ENG';
	var f = "";
	if(isFocus) {
		f = "f";
	}
		  return '<font id="font'+f+'0">' + lang + '</font>';

}

function getAlphabetHtml(isFocus, lang) {
	lang = lang || 'АБВ';
	var f = "";
	if(isFocus) {
		f = "f";
	}
		  return '<font id="font'+f+'0">' + lang + '</font>';

}
function getNumSymbHtml(isFocus, lang) {
	lang = lang || '12;)';
	var f = "";
	if(isFocus) {
		f = "f";
	}
		  return '<font id="font'+f+'0">' + lang + '</font>';

} 

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
		  	setInnerHtml("wkk_key_62", 'АБВ');   
			setKeyText("wkk_key_00", "а");                   
			setKeyText("wkk_key_01", "б");                   
			setKeyText("wkk_key_02", "в");                   
			setKeyText("wkk_key_03", "г");                   
			setKeyText("wkk_key_04", "д");                   
			setKeyText("wkk_key_05", "1");                   
			setKeyText("wkk_key_06", "2");                   
			setKeyText("wkk_key_07", "3");                   
			setKeyText("wkk_key_10", "е");                   
			setKeyText("wkk_key_11", "ж");                   
			setKeyText("wkk_key_12", "з");                   
			setKeyText("wkk_key_13", "и");                 
			setKeyText("wkk_key_14", "й");                   
			setKeyText("wkk_key_15", "4");                   
			setKeyText("wkk_key_16", "5");                   
			setKeyText("wkk_key_17", "6");                   
			setKeyText("wkk_key_20", "к");                   
			setKeyText("wkk_key_21", "л");                   
			setKeyText("wkk_key_22", "м");                   
			setKeyText("wkk_key_23", "н");                   
			setKeyText("wkk_key_24", "о");                   
			setKeyText("wkk_key_25", "7");                   
			setKeyText("wkk_key_26", "8");                   
			setKeyText("wkk_key_27", "9");                   
			setKeyText("wkk_key_30", "п");                   
			setKeyText("wkk_key_31", "р");                   
			setKeyText("wkk_key_32", "с");                   
			setKeyText("wkk_key_33", "т");                   
			setKeyText("wkk_key_34", "у");                   
			setKeyText("wkk_key_35", ".");                   
			setKeyText("wkk_key_36", "@");                   
			setKeyText("wkk_key_37", "0");                   
			setKeyText("wkk_key_40", "ф");                   
			setKeyText("wkk_key_41", "х");                   
			setKeyText("wkk_key_42", "ц");                   
			setKeyText("wkk_key_43", "ш");                   
			setKeyText("wkk_key_44", "щ");                   
			setKeyText("wkk_key_45", "ъ");                   
			setKeyText("wkk_key_46", "_");                   
			setKeyText("wkk_key_47", "/");   
			setKeyText("wkk_key_50", "ь");
			setKeyText("wkk_key_51", "ю");
			setKeyText("wkk_key_52", "я");
			setKeyText("wkk_key_53", " ");
			setKeyText("wkk_key_54", " ");
			setKeyText("wkk_key_55", " ");
			setKeyText("wkk_key_56", " ");
			setKeyText("wkk_key_57", " ");

		}else if(gubun == 'sl')	{
			switch(stIdx){		
				case 10:
					stIdx = 11;
					setInnerHtml("wkk_key_62", 'АБВ');   
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "а");                   
					setKeyText("wkk_key_01", "б");                   
					setKeyText("wkk_key_02", "в");                   
					setKeyText("wkk_key_03", "г");                   
					setKeyText("wkk_key_04", "д");                   
					setKeyText("wkk_key_05", "1");                   
					setKeyText("wkk_key_06", "2");                   
					setKeyText("wkk_key_07", "3");                   
					setKeyText("wkk_key_10", "е");                   
					setKeyText("wkk_key_11", "ж");                   
					setKeyText("wkk_key_12", "з");                   
					setKeyText("wkk_key_13", "и");                 
					setKeyText("wkk_key_14", "й");                   
					setKeyText("wkk_key_15", "4");                   
					setKeyText("wkk_key_16", "5");                   
					setKeyText("wkk_key_17", "6");                   
					setKeyText("wkk_key_20", "к");                   
					setKeyText("wkk_key_21", "л");                   
					setKeyText("wkk_key_22", "м");                   
					setKeyText("wkk_key_23", "н");                   
					setKeyText("wkk_key_24", "о");                   
					setKeyText("wkk_key_25", "7");                   
					setKeyText("wkk_key_26", "8");                   
					setKeyText("wkk_key_27", "9");                   
					setKeyText("wkk_key_30", "п");                   
					setKeyText("wkk_key_31", "р");                   
					setKeyText("wkk_key_32", "с");                   
					setKeyText("wkk_key_33", "т");                   
					setKeyText("wkk_key_34", "у");                   
					setKeyText("wkk_key_35", ".");                   
					setKeyText("wkk_key_36", "@");                   
					setKeyText("wkk_key_37", "0");                   
					setKeyText("wkk_key_40", "ф");                   
					setKeyText("wkk_key_41", "х");                   
					setKeyText("wkk_key_42", "ц");                   
					setKeyText("wkk_key_43", "ш");                   
					setKeyText("wkk_key_44", "щ");                   
					setKeyText("wkk_key_45", "ъ");                   
					setKeyText("wkk_key_46", "_");                   
					setKeyText("wkk_key_47", "/");   
					setKeyText("wkk_key_50", "ь");
					setKeyText("wkk_key_51", "ю");
					setKeyText("wkk_key_52", "я");
					setKeyText("wkk_key_53", " ");
					setKeyText("wkk_key_54", " ");
					setKeyText("wkk_key_55", " ");
					setKeyText("wkk_key_56", " ");
					setKeyText("wkk_key_57", " ");                 
					break;
				case 11:
					stIdx = 10;		
				 	setInnerHtml("wkk_key_62", 'абв'); 
		      		doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "А");                	
					setKeyText("wkk_key_01", "Б");                  
					setKeyText("wkk_key_02", "В");                  
					setKeyText("wkk_key_03", "Г");                  
					setKeyText("wkk_key_04", "Д");                  
					setKeyText("wkk_key_05", "1");                  
					setKeyText("wkk_key_06", "2");                  
					setKeyText("wkk_key_07", "3");                  
					setKeyText("wkk_key_10", "Е");                  
					setKeyText("wkk_key_11", "Ж");                  
					setKeyText("wkk_key_12", "З");                  
					setKeyText("wkk_key_13", "И");             
					setKeyText("wkk_key_14", "Й");                  
					setKeyText("wkk_key_15", "4");                  
					setKeyText("wkk_key_16", "5");                  
					setKeyText("wkk_key_17", "6");                  
					setKeyText("wkk_key_20", "К");                  
					setKeyText("wkk_key_21", "Л");                  
					setKeyText("wkk_key_22", "М");                  
					setKeyText("wkk_key_23", "Н");                  
					setKeyText("wkk_key_24", "О");                  
					setKeyText("wkk_key_25", "7");                  
					setKeyText("wkk_key_26", "8");                  
					setKeyText("wkk_key_27", "9");                  
					setKeyText("wkk_key_30", "П");                  
					setKeyText("wkk_key_31", "Р");                  
					setKeyText("wkk_key_32", "С");                  
					setKeyText("wkk_key_33", "Т");                  
					setKeyText("wkk_key_34", "У");                  
					setKeyText("wkk_key_35", ".");                  
					setKeyText("wkk_key_36", "@");                  
					setKeyText("wkk_key_37", "0");                  
					setKeyText("wkk_key_40", "Ф");                  
					setKeyText("wkk_key_41", "Х");                  
					setKeyText("wkk_key_42", "Ц");                  
					setKeyText("wkk_key_43", "Ш");                  
					setKeyText("wkk_key_44", "Щ");                  
					setKeyText("wkk_key_45", "Ъ");                  
					setKeyText("wkk_key_46", "_");                  
					setKeyText("wkk_key_47", "/");
					setKeyText("wkk_key_50", "Ь");
					setKeyText("wkk_key_51", "Ю");
					setKeyText("wkk_key_52", "Я");
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
			setInnerHtml("wkk_key_61", "BUL");	//Lang Toggle
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
			setInnerHtml("wkk_key_62", 'АБВ');	
			setKeyText("wkk_key_00", "а");
			setKeyText("wkk_key_01", "б");
			setKeyText("wkk_key_02", "в");
			setKeyText("wkk_key_03", "г");
			setKeyText("wkk_key_04", "д");
			setKeyText("wkk_key_05", "е"); 
			setKeyText("wkk_key_10", "ж");
			setKeyText("wkk_key_11", "з");
			setKeyText("wkk_key_12", "и");
			setKeyText("wkk_key_13", "й");
			setKeyText("wkk_key_14", "к");
			setKeyText("wkk_key_15", "л");
			setKeyText("wkk_key_20", "м");
			setKeyText("wkk_key_21", "н");
			setKeyText("wkk_key_22", "о");
			setKeyText("wkk_key_23", "п");
			setKeyText("wkk_key_24", "р");
			setKeyText("wkk_key_25", "с");
			setKeyText("wkk_key_30", "т");
			setKeyText("wkk_key_31", "у");
			setKeyText("wkk_key_32", "ф");
			setKeyText("wkk_key_33", "х");
			setKeyText("wkk_key_34", "ц");
			setKeyText("wkk_key_35", "ш");
			setKeyText("wkk_key_40", "щ");
			setKeyText("wkk_key_41", "ъ");
			setKeyText("wkk_key_42", "ь");
			setKeyText("wkk_key_43", "ю");
			setKeyText("wkk_key_44", "я");
			setKeyText("wkk_key_45", " ");
			setKeyText("wkk_key_50", " ");
			setKeyText("wkk_key_51", " ");
			setKeyText("wkk_key_52", " ");
			setKeyText("wkk_key_53", " ");	
		}else	if(gubun == 'sl')	{
			switch(stIdx){
				case 10:
					stIdx = 11;
					setInnerHtml("wkk_key_62", 'АБВ');
					doHighlight("wkk_key_62");				
					setKeyText("wkk_key_00", "а");
					setKeyText("wkk_key_01", "б");
					setKeyText("wkk_key_02", "в");
					setKeyText("wkk_key_03", "г");
					setKeyText("wkk_key_04", "д");
					setKeyText("wkk_key_05", "е"); 
					setKeyText("wkk_key_10", "ж");
					setKeyText("wkk_key_11", "з");
					setKeyText("wkk_key_12", "и");  
					setKeyText("wkk_key_13", "й");
					setKeyText("wkk_key_14", "к");
					setKeyText("wkk_key_15", "л");
					setKeyText("wkk_key_20", "м");
					setKeyText("wkk_key_21", "н");
					setKeyText("wkk_key_22", "о");
					setKeyText("wkk_key_23", "п");
					setKeyText("wkk_key_24", "р");
					setKeyText("wkk_key_25", "с");
					setKeyText("wkk_key_30", "т");
					setKeyText("wkk_key_31", "у");
					setKeyText("wkk_key_32", "ф");
					setKeyText("wkk_key_33", "х");
					setKeyText("wkk_key_34", "ц");
					setKeyText("wkk_key_35", "ш");
					setKeyText("wkk_key_40", "щ");
					setKeyText("wkk_key_41", "ъ");
					setKeyText("wkk_key_42", "ь");
					setKeyText("wkk_key_43", "ю");
					setKeyText("wkk_key_44", "я");
					setKeyText("wkk_key_45", " ");
					setKeyText("wkk_key_50", " ");
					setKeyText("wkk_key_51", " ");
					setKeyText("wkk_key_52", " ");
					setKeyText("wkk_key_53", " ");						 
					break; 
				case 11 :
					stIdx = 10;
					setInnerHtml("wkk_key_62", 'абв');	
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "А");
					setKeyText("wkk_key_01", "Б");
					setKeyText("wkk_key_02", "В");
					setKeyText("wkk_key_03", "Г");
					setKeyText("wkk_key_04", "Д");
					setKeyText("wkk_key_05", "Е");
					setKeyText("wkk_key_10", "Ж");
					setKeyText("wkk_key_11", "З");
					setKeyText("wkk_key_12", "И"); 
					setKeyText("wkk_key_13", "Й");
					setKeyText("wkk_key_14", "К");
					setKeyText("wkk_key_15", "Л");
					setKeyText("wkk_key_20", "М");
					setKeyText("wkk_key_21", "Н");
					setKeyText("wkk_key_22", "О");
					setKeyText("wkk_key_23", "П");
					setKeyText("wkk_key_24", "Р");
					setKeyText("wkk_key_25", "С");
					setKeyText("wkk_key_30", "Т");
					setKeyText("wkk_key_31", "У");
					setKeyText("wkk_key_32", "Ф");
					setKeyText("wkk_key_33", "Х");
					setKeyText("wkk_key_34", "Ц");
					setKeyText("wkk_key_35", "Ш");
					setKeyText("wkk_key_40", "Щ");
					setKeyText("wkk_key_41", "Ъ");
					setKeyText("wkk_key_42", "Ь");
					setKeyText("wkk_key_43", "Ю");
					setKeyText("wkk_key_44", "Я");
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
			setInnerHtml("wkk_key_61", "BUL");	//Lang Toggle
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
			setInnerHtml("wkk_key_100", 'АБВ');					
			setKeyText("wkk_key_001", "а"); 
			setKeyText("wkk_key_002", "б");
			setKeyText("wkk_key_003", "в");
			setKeyText("wkk_key_004", "г");
			setKeyText("wkk_key_005", "д");
			setKeyText("wkk_key_006", "е"); 
			setKeyText("wkk_key_007", "ж");
			setKeyText("wkk_key_008", "з"); 
			setKeyText("wkk_key_009", "и"); 
			setKeyText("wkk_key_010", "й"); 
			setKeyText("wkk_key_011", "к");
			setKeyText("wkk_key_012", "л"); 
			setKeyText("wkk_key_013", "м"); 
			setKeyText("wkk_key_101", "н");
			setKeyText("wkk_key_102", "о");
			setKeyText("wkk_key_103", "п");
			setKeyText("wkk_key_104", "р");
			setKeyText("wkk_key_105", "с"); 
			setKeyText("wkk_key_106", "т"); 
			setKeyText("wkk_key_107", "у");
			setKeyText("wkk_key_108", "ф");
			setKeyText("wkk_key_109", "х");
			setKeyText("wkk_key_110", "ц");
			setKeyText("wkk_key_111", "ш");
			setKeyText("wkk_key_112", "щ");
			setKeyText("wkk_key_113", "ъ");
			setKeyText("wkk_key_201", "ь");
			setKeyText("wkk_key_202", "ю");
			setKeyText("wkk_key_203", "я");
			setKeyText("wkk_key_204", " ");
			setKeyText("wkk_key_210", " "); 
			setKeyText("wkk_key_211", " "); 
			setKeyText("wkk_key_212", " "); 
			setKeyText("wkk_key_213", " ");	
		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_100", 'АБВ');
				doHighlight("wkk_key_100");	
				setKeyText("wkk_key_001", "а"); 
				setKeyText("wkk_key_002", "б");
				setKeyText("wkk_key_003", "в");
				setKeyText("wkk_key_004", "г");
				setKeyText("wkk_key_005", "д'");
				setKeyText("wkk_key_006", "е"); 
				setKeyText("wkk_key_007", "ж");
				setKeyText("wkk_key_008", "з"); 
				setKeyText("wkk_key_009", "и");   
				setKeyText("wkk_key_010", "й"); 
				setKeyText("wkk_key_011", "к");
				setKeyText("wkk_key_012", "л"); 
				setKeyText("wkk_key_013", "м"); 
				setKeyText("wkk_key_101", "н");
				setKeyText("wkk_key_102", "о");
				setKeyText("wkk_key_103", "п");
				setKeyText("wkk_key_104", "р");
				setKeyText("wkk_key_105", "с"); 
				setKeyText("wkk_key_106", "т"); 
				setKeyText("wkk_key_107", "у");
				setKeyText("wkk_key_108", "ф");
				setKeyText("wkk_key_109", "х");
				setKeyText("wkk_key_110", "ц");
				setKeyText("wkk_key_111", "ш");
				setKeyText("wkk_key_112", "щ");
				setKeyText("wkk_key_113", "ъ");
				setKeyText("wkk_key_201", "ь");
				setKeyText("wkk_key_202", "ю");
				setKeyText("wkk_key_203", "я");
				setKeyText("wkk_key_204", " ");
				setKeyText("wkk_key_210", " "); 
				setKeyText("wkk_key_211", " "); 
				setKeyText("wkk_key_212", " "); 
				setKeyText("wkk_key_213", " ");
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_100", 'абв');		
				doHighlight("wkk_key_100");			
				setKeyText("wkk_key_001", "А");
				setKeyText("wkk_key_002", "Б");
				setKeyText("wkk_key_003", "В");
				setKeyText("wkk_key_004", "Г");
				setKeyText("wkk_key_005", "Д");
				setKeyText("wkk_key_006", "Е");
				setKeyText("wkk_key_007", "Ж");
				setKeyText("wkk_key_008", "З");
				setKeyText("wkk_key_009", "И");    
				setKeyText("wkk_key_010", "Й");
				setKeyText("wkk_key_011", "К");
				setKeyText("wkk_key_012", "Л");
				setKeyText("wkk_key_013", "М");
				setKeyText("wkk_key_101", "Н");
				setKeyText("wkk_key_102", "О");
				setKeyText("wkk_key_103", "П");
				setKeyText("wkk_key_104", "Р");
				setKeyText("wkk_key_105", "С");
				setKeyText("wkk_key_106", "Т");
				setKeyText("wkk_key_107", "У");
				setKeyText("wkk_key_108", "Ф");
				setKeyText("wkk_key_109", "Х");
				setKeyText("wkk_key_110", "Ц");
				setKeyText("wkk_key_111", "Ш");
				setKeyText("wkk_key_112", "Щ");
				setKeyText("wkk_key_113", "Ъ");
				setKeyText("wkk_key_201", "Ь");
				setKeyText("wkk_key_202", "Ю");
				setKeyText("wkk_key_203", "Я");
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
			setInnerHtml("wkk_key_116", "BUL");	//Lang Toggle
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