
/**
 * ukrainian
 */

/**
 * key board page count
 */
var pageCnt = 7;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "Ok";
var CANCEL_BUTTON_LABEL = "Отмена";
var TITLE_LABEL = "Поиск!";
var PL_ADD_BUTTON_LABEL = "Добавить";
var PL_CANCEL_BUTTON_LABEL = "Стереть";
var DESC_LABEL = "Печатайте на экранной клавиатуре, расположенной с правой стороны, так же, как на обычной.\n\n";
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
			setKeyText("wkk_key_04", "ґ");            
			setKeyText("wkk_key_05", "1");            
			setKeyText("wkk_key_06", "2");            
			setKeyText("wkk_key_07", "3");            
			setKeyText("wkk_key_10", "д");            
			setKeyText("wkk_key_11", "е");            
			setKeyText("wkk_key_12", "є");            
			setKeyText("wkk_key_13", "ж");            
			setKeyText("wkk_key_14", "з");            
			setKeyText("wkk_key_15", "4");            
			setKeyText("wkk_key_16", "5");            
			setKeyText("wkk_key_17", "6");            
			setKeyText("wkk_key_20", "и");            
			setKeyText("wkk_key_21", "і");            
			setKeyText("wkk_key_22", "ї");            
			setKeyText("wkk_key_23", "й");            
			setKeyText("wkk_key_24", "к");            
			setKeyText("wkk_key_25", "7");            
			setKeyText("wkk_key_26", "8");            
			setKeyText("wkk_key_27", "9");            
			setKeyText("wkk_key_30", "л");            
			setKeyText("wkk_key_31", "м");            
			setKeyText("wkk_key_32", "н");            
			setKeyText("wkk_key_33", "о");            
			setKeyText("wkk_key_34", "п");            
			setKeyText("wkk_key_35", ".");            
			setKeyText("wkk_key_36", "@");            
			setKeyText("wkk_key_37", "0");            
			setKeyText("wkk_key_40", "р");            
			setKeyText("wkk_key_41", "с");            
			setKeyText("wkk_key_42", "т");            
			setKeyText("wkk_key_43", "у");            
			setKeyText("wkk_key_44", "ф");            
			setKeyText("wkk_key_45", "х");            
			setKeyText("wkk_key_46", "_");
			setKeyText("wkk_key_47", "/"); 
			setKeyText("wkk_key_50", "ц");
			setKeyText("wkk_key_51", "ч");
			setKeyText("wkk_key_52", "ш");
			setKeyText("wkk_key_53", "щ");
			setKeyText("wkk_key_54", "ь");
			setKeyText("wkk_key_55", "ю");
			setKeyText("wkk_key_56", "я");
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
					setKeyText("wkk_key_04", "ґ");            
					setKeyText("wkk_key_05", "1");            
					setKeyText("wkk_key_06", "2");            
					setKeyText("wkk_key_07", "3");            
					setKeyText("wkk_key_10", "д");            
					setKeyText("wkk_key_11", "е");            
					setKeyText("wkk_key_12", "є");            
					setKeyText("wkk_key_13", "ж");            
					setKeyText("wkk_key_14", "з");            
					setKeyText("wkk_key_15", "4");            
					setKeyText("wkk_key_16", "5");            
					setKeyText("wkk_key_17", "6");            
					setKeyText("wkk_key_20", "и");            
					setKeyText("wkk_key_21", "і");            
					setKeyText("wkk_key_22", "ї");            
					setKeyText("wkk_key_23", "й");            
					setKeyText("wkk_key_24", "к");            
					setKeyText("wkk_key_25", "7");            
					setKeyText("wkk_key_26", "8");            
					setKeyText("wkk_key_27", "9");            
					setKeyText("wkk_key_30", "л");            
					setKeyText("wkk_key_31", "м");            
					setKeyText("wkk_key_32", "н");            
					setKeyText("wkk_key_33", "о");            
					setKeyText("wkk_key_34", "п");            
					setKeyText("wkk_key_35", ".");            
					setKeyText("wkk_key_36", "@");            
					setKeyText("wkk_key_37", "0");            
					setKeyText("wkk_key_40", "р");            
					setKeyText("wkk_key_41", "с");            
					setKeyText("wkk_key_42", "т");            
					setKeyText("wkk_key_43", "у");            
					setKeyText("wkk_key_44", "ф");            
					setKeyText("wkk_key_45", "х");            
					setKeyText("wkk_key_46", "_");
					setKeyText("wkk_key_47", "/"); 
					setKeyText("wkk_key_50", "ц");
					setKeyText("wkk_key_51", "ч");
					setKeyText("wkk_key_52", "ш");
					setKeyText("wkk_key_53", "щ");
					setKeyText("wkk_key_54", "ь");
					setKeyText("wkk_key_55", "ю");
					setKeyText("wkk_key_56", "я");
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
					setKeyText("wkk_key_04", "Ґ");               
					setKeyText("wkk_key_05", "1");               
					setKeyText("wkk_key_06", "2");               
					setKeyText("wkk_key_07", "3");               
					setKeyText("wkk_key_10", "Д");               
					setKeyText("wkk_key_11", "Е");               
					setKeyText("wkk_key_12", "Є");               
					setKeyText("wkk_key_13", "Ж");               
					setKeyText("wkk_key_14", "З");               
					setKeyText("wkk_key_15", "4");               
					setKeyText("wkk_key_16", "5");               
					setKeyText("wkk_key_17", "6");               
					setKeyText("wkk_key_20", "И");               
					setKeyText("wkk_key_21", "І");               
					setKeyText("wkk_key_22", "Ї");               
					setKeyText("wkk_key_23", "Й");               
					setKeyText("wkk_key_24", "К");               
					setKeyText("wkk_key_25", "7");               
					setKeyText("wkk_key_26", "8");               
					setKeyText("wkk_key_27", "9");               
					setKeyText("wkk_key_30", "Л");               
					setKeyText("wkk_key_31", "М");               
					setKeyText("wkk_key_32", "Н");               
					setKeyText("wkk_key_33", "О");               
					setKeyText("wkk_key_34", "П");               
					setKeyText("wkk_key_35", ".");               
					setKeyText("wkk_key_36", "@");               
					setKeyText("wkk_key_37", "0");               
					setKeyText("wkk_key_40", "Р");               
					setKeyText("wkk_key_41", "С");               
					setKeyText("wkk_key_42", "Т");               
					setKeyText("wkk_key_43", "У");               
					setKeyText("wkk_key_44", "Ф");               
					setKeyText("wkk_key_45", "Х");               
					setKeyText("wkk_key_46", "_");  
					setKeyText("wkk_key_47", "/");  
					setKeyText("wkk_key_50", "Ц");
					setKeyText("wkk_key_51", "Ч");
					setKeyText("wkk_key_52", "Ш");
					setKeyText("wkk_key_53", "Щ");
					setKeyText("wkk_key_54", "Ь");
					setKeyText("wkk_key_55", "Ю");
					setKeyText("wkk_key_56", "Я");
					setKeyText("wkk_key_57", " "); 
					break; 	
				
				}
			}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "UKR");	//Lang Toggle
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
			setKeyText("wkk_key_04", "ґ");
			setKeyText("wkk_key_05", "д"); 
			setKeyText("wkk_key_10", "е");
			setKeyText("wkk_key_11", "є");
			setKeyText("wkk_key_12", "ж");
			setKeyText("wkk_key_13", "з");
			setKeyText("wkk_key_14", "и");
			setKeyText("wkk_key_15", "і");
			setKeyText("wkk_key_20", "ї");
			setKeyText("wkk_key_21", "й");
			setKeyText("wkk_key_22", "к");
			setKeyText("wkk_key_23", "л");
			setKeyText("wkk_key_24", "м");
			setKeyText("wkk_key_25", "н");
			setKeyText("wkk_key_30", "о");
			setKeyText("wkk_key_31", "п");
			setKeyText("wkk_key_32", "р");
			setKeyText("wkk_key_33", "с");
			setKeyText("wkk_key_34", "т");
			setKeyText("wkk_key_35", "у");
			setKeyText("wkk_key_40", "ф");
			setKeyText("wkk_key_41", "х");
			setKeyText("wkk_key_42", "ц");
			setKeyText("wkk_key_43", "ч");
			setKeyText("wkk_key_44", "ш");
			setKeyText("wkk_key_45", "щ");
			setKeyText("wkk_key_50", "ь");
			setKeyText("wkk_key_51", "ю");
			setKeyText("wkk_key_52", "я");
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
					setKeyText("wkk_key_04", "ґ"); 
					setKeyText("wkk_key_05", "д");   
					setKeyText("wkk_key_10", "е");  
					setKeyText("wkk_key_11", "є");  
					setKeyText("wkk_key_12", "ж");  
					setKeyText("wkk_key_13", "з");  
					setKeyText("wkk_key_14", "и");  
					setKeyText("wkk_key_15", "і");  
					setKeyText("wkk_key_20", "ї");  
					setKeyText("wkk_key_21", "й");  
					setKeyText("wkk_key_22", "к");  
					setKeyText("wkk_key_23", "л");  
					setKeyText("wkk_key_24", "м");  
					setKeyText("wkk_key_25", "н");  
					setKeyText("wkk_key_30", "о");  
					setKeyText("wkk_key_31", "п");  
					setKeyText("wkk_key_32", "р");  
					setKeyText("wkk_key_33", "с");  
					setKeyText("wkk_key_34", "т");  
					setKeyText("wkk_key_35", "у");  
					setKeyText("wkk_key_40", "ф");  
					setKeyText("wkk_key_41", "х");  
					setKeyText("wkk_key_42", "ц");  
					setKeyText("wkk_key_43", "ч");  
					setKeyText("wkk_key_44", "ш");  
					setKeyText("wkk_key_45", "щ");  
					setKeyText("wkk_key_50", "ь");  
					setKeyText("wkk_key_51", "ю");  
					setKeyText("wkk_key_52", "я");  
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
					setKeyText("wkk_key_04", "Ґ");
					setKeyText("wkk_key_05", "Д");
					setKeyText("wkk_key_10", "Е");
					setKeyText("wkk_key_11", "Є");
					setKeyText("wkk_key_12", "Ж");
					setKeyText("wkk_key_13", "З");
					setKeyText("wkk_key_14", "И");
					setKeyText("wkk_key_15", "І");
					setKeyText("wkk_key_20", "Ї");
					setKeyText("wkk_key_21", "Й");
					setKeyText("wkk_key_22", "К");
					setKeyText("wkk_key_23", "Л");
					setKeyText("wkk_key_24", "М");
					setKeyText("wkk_key_25", "Н");
					setKeyText("wkk_key_30", "О");
					setKeyText("wkk_key_31", "П");
					setKeyText("wkk_key_32", "Р");
					setKeyText("wkk_key_33", "С");
					setKeyText("wkk_key_34", "Т");
					setKeyText("wkk_key_35", "У");
					setKeyText("wkk_key_40", "Ф");
					setKeyText("wkk_key_41", "Х");
					setKeyText("wkk_key_42", "Ц");
					setKeyText("wkk_key_43", "Ч");
					setKeyText("wkk_key_44", "Ш");
					setKeyText("wkk_key_45", "Щ");
					setKeyText("wkk_key_50", "Ь");
					setKeyText("wkk_key_51", "Ю");
					setKeyText("wkk_key_52", "Я"); 
					setKeyText("wkk_key_53", " ");					
					break;						
			}
		}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "UKR");	//Lang Toggle
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
			setKeyText("wkk_key_005", "ґ");
			setKeyText("wkk_key_006", "д"); 
			setKeyText("wkk_key_007", "е");
			setKeyText("wkk_key_008", "є"); 
			setKeyText("wkk_key_009", "ж"); 
			setKeyText("wkk_key_010", "з"); 
			setKeyText("wkk_key_011", "и");
			setKeyText("wkk_key_012", "і"); 
			setKeyText("wkk_key_013", "ї"); 
			setKeyText("wkk_key_101", "й");
			setKeyText("wkk_key_102", "к");
			setKeyText("wkk_key_103", "л");
			setKeyText("wkk_key_104", "м");
			setKeyText("wkk_key_105", "н"); 
			setKeyText("wkk_key_106", "о"); 
			setKeyText("wkk_key_107", "п");
			setKeyText("wkk_key_108", "р");
			setKeyText("wkk_key_109", "с");
			setKeyText("wkk_key_110", "т");
			setKeyText("wkk_key_111", "у");
			setKeyText("wkk_key_112", "ф");
			setKeyText("wkk_key_113", "х");
			setKeyText("wkk_key_201", "ц");
			setKeyText("wkk_key_202", "ч");
			setKeyText("wkk_key_203", "ш");
			setKeyText("wkk_key_204", " ");
			setKeyText("wkk_key_210", "щ"); 
			setKeyText("wkk_key_211", "ь"); 
			setKeyText("wkk_key_212", "ю"); 
			setKeyText("wkk_key_213", "я");	
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
				setKeyText("wkk_key_005", "ґ");             
				setKeyText("wkk_key_006", "д");              
				setKeyText("wkk_key_007", "е");              
				setKeyText("wkk_key_008", "є");              
				setKeyText("wkk_key_009", "ж");              
				setKeyText("wkk_key_010", "з");              
				setKeyText("wkk_key_011", "и");              
				setKeyText("wkk_key_012", "і");              
				setKeyText("wkk_key_013", "ї");              
				setKeyText("wkk_key_101", "й");              
				setKeyText("wkk_key_102", "к");              
				setKeyText("wkk_key_103", "л");              
				setKeyText("wkk_key_104", "м");              
				setKeyText("wkk_key_105", "н");              
				setKeyText("wkk_key_106", "о");              
				setKeyText("wkk_key_107", "п");              
				setKeyText("wkk_key_108", "р");              
				setKeyText("wkk_key_109", "с");              
				setKeyText("wkk_key_110", "т");              
				setKeyText("wkk_key_111", "у");              
				setKeyText("wkk_key_112", "ф");              
				setKeyText("wkk_key_113", "х");              
				setKeyText("wkk_key_201", "ц");              
				setKeyText("wkk_key_202", "ч");              
				setKeyText("wkk_key_203", "ш");              
				setKeyText("wkk_key_204", " ");              
				setKeyText("wkk_key_210", "щ");              
				setKeyText("wkk_key_211", "ь");              
				setKeyText("wkk_key_212", "ю");              
				setKeyText("wkk_key_213", "я");	             
				break;
			case 11:
				stIdx = 10;
				setInnerHtml("wkk_key_100", 'абв');		
				doHighlight("wkk_key_100");			
				setKeyText("wkk_key_001", "А");
				setKeyText("wkk_key_002", "Б");
				setKeyText("wkk_key_003", "В");
				setKeyText("wkk_key_004", "Г");
				setKeyText("wkk_key_005", "Ґ");
				setKeyText("wkk_key_006", "Д");
				setKeyText("wkk_key_007", "Е");
				setKeyText("wkk_key_008", "Є");
				setKeyText("wkk_key_009", "Ж");
				setKeyText("wkk_key_010", "З");
				setKeyText("wkk_key_011", "И");
				setKeyText("wkk_key_012", "І");
				setKeyText("wkk_key_013", "Ї");
				setKeyText("wkk_key_101", "Й");
				setKeyText("wkk_key_102", "К");
				setKeyText("wkk_key_103", "Л");
				setKeyText("wkk_key_104", "М");
				setKeyText("wkk_key_105", "Н");
				setKeyText("wkk_key_106", "О");
				setKeyText("wkk_key_107", "П");
				setKeyText("wkk_key_108", "Р");
				setKeyText("wkk_key_109", "С");
				setKeyText("wkk_key_110", "Т");
				setKeyText("wkk_key_111", "У");
				setKeyText("wkk_key_112", "Ф");
				setKeyText("wkk_key_113", "Х");
				setKeyText("wkk_key_201", "Ц");
				setKeyText("wkk_key_202", "Ч");
				setKeyText("wkk_key_203", "Ш");
				setKeyText("wkk_key_204", " ");
				setKeyText("wkk_key_210", "Щ");
				setKeyText("wkk_key_211", "Ь");
				setKeyText("wkk_key_212", "Ю");
				setKeyText("wkk_key_213", "Я");			
				break;
				} 
			} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_116", "UKR");	//Lang Toggle
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