
/**
 * kazakh
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
var TITLE_LABEL = "kazakh";
var DESC_LABEL = "";
var STYLE_LABEL = "АӘБ";

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
function getPageHtml(isFocus) {
	var f = "";
	if(isFocus) {
		f = "f";
	}
	return 	 '<font id="font'+f+'0">a</font><font id="font'+f+'1" style="margin-left: -3px;">A</font>'
			+'<font id="font'+f+'2" style="margin-left: -3px;">a</font><font id="font'+f+'3" style="margin-left: -3px;">A</font>'
		 	+'<font id="font'+f+'4" style="margin-left: -3px;">#</font>';
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
		 	setInnerHtml("wkk_key_62", 'щъы');	
			setKeyText("wkk_key_00", "а");
			setKeyText("wkk_key_01", "ә");
			setKeyText("wkk_key_02", "б");
			setKeyText("wkk_key_03", "в");
			setKeyText("wkk_key_04", "г");
			setKeyText("wkk_key_05", "1"); 
			setKeyText("wkk_key_06", "2");
			setKeyText("wkk_key_07", "3");
			setKeyText("wkk_key_10", "ғ");
			setKeyText("wkk_key_11", "д");
			setKeyText("wkk_key_12", "е");
			setKeyText("wkk_key_13", "ё");
			setKeyText("wkk_key_14", "ж");
			setKeyText("wkk_key_15", "4");
			setKeyText("wkk_key_16", "5");
			setKeyText("wkk_key_17", "6");
			setKeyText("wkk_key_20", "з");
			setKeyText("wkk_key_21", "и");
			setKeyText("wkk_key_22", "й");
			setKeyText("wkk_key_23", "к");
			setKeyText("wkk_key_24", "қ");
			setKeyText("wkk_key_25", "7");
			setKeyText("wkk_key_26", "8");
			setKeyText("wkk_key_27", "9");
			setKeyText("wkk_key_30", "л");
			setKeyText("wkk_key_31", "м");
			setKeyText("wkk_key_32", "н");
			setKeyText("wkk_key_33", "ң");
			setKeyText("wkk_key_34", "о");
			setKeyText("wkk_key_35", ".");
			setKeyText("wkk_key_36", "@");
			setKeyText("wkk_key_37", "0");
			setKeyText("wkk_key_40", "ө");
			setKeyText("wkk_key_41", "п");
			setKeyText("wkk_key_42", "р");
			setKeyText("wkk_key_43", "с");
			setKeyText("wkk_key_44", "т");
			setKeyText("wkk_key_45", "у");
			setKeyText("wkk_key_46", "_");
			setKeyText("wkk_key_47", "/"); 
			setKeyText("wkk_key_50", "ұ");
			setKeyText("wkk_key_51", "ү");
			setKeyText("wkk_key_52", "ф");
			setKeyText("wkk_key_53", "х");
			setKeyText("wkk_key_54", "һ");
			setKeyText("wkk_key_55", "ц");
			setKeyText("wkk_key_56", "ч");
			setKeyText("wkk_key_57", "ш");     
			
		}else if(gubun == 'sl')	{
			switch(stIdx){		
				case 10:                      
					stIdx = 11;
		 			setInnerHtml("wkk_key_62", 'щъы');	
		 			doHighlight("wkk_key_62");  
					setKeyText("wkk_key_00", "а");
					setKeyText("wkk_key_01", "ә");
					setKeyText("wkk_key_02", "б");
					setKeyText("wkk_key_03", "в");
					setKeyText("wkk_key_04", "г");
					setKeyText("wkk_key_05", "1"); 
					setKeyText("wkk_key_06", "2");
					setKeyText("wkk_key_07", "3");
					setKeyText("wkk_key_10", "ғ");
					setKeyText("wkk_key_11", "д");
					setKeyText("wkk_key_12", "е");
					setKeyText("wkk_key_13", "ё");
					setKeyText("wkk_key_14", "ж");
					setKeyText("wkk_key_15", "4");
					setKeyText("wkk_key_16", "5");
					setKeyText("wkk_key_17", "6");
					setKeyText("wkk_key_20", "з");
					setKeyText("wkk_key_21", "и");
					setKeyText("wkk_key_22", "й");
					setKeyText("wkk_key_23", "к");
					setKeyText("wkk_key_24", "қ");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", "л");
					setKeyText("wkk_key_31", "м");
					setKeyText("wkk_key_32", "н");
					setKeyText("wkk_key_33", "ң");
					setKeyText("wkk_key_34", "о");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", "ө");
					setKeyText("wkk_key_41", "п");
					setKeyText("wkk_key_42", "р");
					setKeyText("wkk_key_43", "с");
					setKeyText("wkk_key_44", "т");
					setKeyText("wkk_key_45", "у");
					setKeyText("wkk_key_46", "_");
					setKeyText("wkk_key_47", "/"); 
					setKeyText("wkk_key_50", "ұ");
					setKeyText("wkk_key_51", "ү");
					setKeyText("wkk_key_52", "ф");
					setKeyText("wkk_key_53", "х");
					setKeyText("wkk_key_54", "һ");
					setKeyText("wkk_key_55", "ц");
					setKeyText("wkk_key_56", "ч");
					setKeyText("wkk_key_57", "ш");      
					break;
				case 11:
					stIdx = 12;		
				 	setInnerHtml("wkk_key_62", 'АӘБ');
				 	doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "щ");
					setKeyText("wkk_key_01", "ъ");
					setKeyText("wkk_key_02", "ы");
					setKeyText("wkk_key_03", "і");
					setKeyText("wkk_key_04", "ь");
					setKeyText("wkk_key_05", "1");
					setKeyText("wkk_key_06", "2");
					setKeyText("wkk_key_07", "3");
					setKeyText("wkk_key_10", "э");
					setKeyText("wkk_key_11", "ю");
					setKeyText("wkk_key_12", "я");
					setKeyText("wkk_key_13", " ");
					setKeyText("wkk_key_14", " ");
					setKeyText("wkk_key_15", "4");
					setKeyText("wkk_key_16", "5");
					setKeyText("wkk_key_17", "6");
					setKeyText("wkk_key_20", " ");
					setKeyText("wkk_key_21", " ");
					setKeyText("wkk_key_22", " ");
					setKeyText("wkk_key_23", " ");
					setKeyText("wkk_key_24", " ");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", " ");
					setKeyText("wkk_key_31", " ");
					setKeyText("wkk_key_32", " ");
					setKeyText("wkk_key_33", " ");
					setKeyText("wkk_key_34", " ");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", " ");
					setKeyText("wkk_key_41", " ");
					setKeyText("wkk_key_42", " ");
					setKeyText("wkk_key_43", " ");
					setKeyText("wkk_key_44", " ");
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
			case 12 : 
					stIdx = 13;
				 	setInnerHtml("wkk_key_62", 'ЩЪЫ');
				 	doHighlight("wkk_key_62");  
					setKeyText("wkk_key_00", "А");
					setKeyText("wkk_key_01", "Ә");
					setKeyText("wkk_key_02", "Б");
					setKeyText("wkk_key_03", "В");
					setKeyText("wkk_key_04", "Г");
					setKeyText("wkk_key_05", "1");
					setKeyText("wkk_key_06", "2");
					setKeyText("wkk_key_07", "3");
					setKeyText("wkk_key_10", "Ғ");
					setKeyText("wkk_key_11", "Д");
					setKeyText("wkk_key_12", "Е");
					setKeyText("wkk_key_13", "Ё");
					setKeyText("wkk_key_14", "Ж");
					setKeyText("wkk_key_15", "4");
					setKeyText("wkk_key_16", "5");
					setKeyText("wkk_key_17", "6");
					setKeyText("wkk_key_20", "З");
					setKeyText("wkk_key_21", "И");
					setKeyText("wkk_key_22", "Й");
					setKeyText("wkk_key_23", "К");
					setKeyText("wkk_key_24", "Қ");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", "Л");
					setKeyText("wkk_key_31", "М");
					setKeyText("wkk_key_32", "Н");
					setKeyText("wkk_key_33", "Ң");
					setKeyText("wkk_key_34", "О");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", "Ө");
					setKeyText("wkk_key_41", "П");
					setKeyText("wkk_key_42", "Р");
					setKeyText("wkk_key_43", "С");
					setKeyText("wkk_key_44", "Т");
					setKeyText("wkk_key_45", "У");
					setKeyText("wkk_key_46", "_");
					setKeyText("wkk_key_47", "/");  
					setKeyText("wkk_key_50", "Ұ");
					setKeyText("wkk_key_51", "Ү");
					setKeyText("wkk_key_52", "Ф");
					setKeyText("wkk_key_53", "Х");
					setKeyText("wkk_key_54", "Һ");
					setKeyText("wkk_key_55", "Ц");
					setKeyText("wkk_key_56", "Ч");
					setKeyText("wkk_key_57", "Ш"); 
					break; 
			case 13 :
					stIdx = 10;
					setInnerHtml("wkk_key_62", 'аәб');
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "Щ");
					setKeyText("wkk_key_01", "Ъ");
					setKeyText("wkk_key_02", "Ы");
					setKeyText("wkk_key_03", "І");
					setKeyText("wkk_key_04", "Ь");
					setKeyText("wkk_key_05", "1");
					setKeyText("wkk_key_06", "2");
					setKeyText("wkk_key_07", "3");
					setKeyText("wkk_key_10", "Э");
					setKeyText("wkk_key_11", "Ю");
					setKeyText("wkk_key_12", "Я");
					setKeyText("wkk_key_13", " ");
					setKeyText("wkk_key_14", " ");
					setKeyText("wkk_key_15", "4");
					setKeyText("wkk_key_16", "5");
					setKeyText("wkk_key_17", "6");
					setKeyText("wkk_key_20", " ");
					setKeyText("wkk_key_21", " ");
					setKeyText("wkk_key_22", " ");
					setKeyText("wkk_key_23", " ");
					setKeyText("wkk_key_24", " ");
					setKeyText("wkk_key_25", "7");
					setKeyText("wkk_key_26", "8");
					setKeyText("wkk_key_27", "9");
					setKeyText("wkk_key_30", " ");
					setKeyText("wkk_key_31", " ");
					setKeyText("wkk_key_32", " ");
					setKeyText("wkk_key_33", " ");
					setKeyText("wkk_key_34", " ");
					setKeyText("wkk_key_35", ".");
					setKeyText("wkk_key_36", "@");
					setKeyText("wkk_key_37", "0");
					setKeyText("wkk_key_40", " ");
					setKeyText("wkk_key_41", " ");
					setKeyText("wkk_key_42", " ");
					setKeyText("wkk_key_43", " ");
					setKeyText("wkk_key_44", " ");
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
			}else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "KAZ");	//Lang Toggle
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
			setInnerHtml("wkk_key_62", 'ЩЪЫ');	
			setKeyText("wkk_key_00", "а");
			setKeyText("wkk_key_01", "ә");
			setKeyText("wkk_key_02", "б");
			setKeyText("wkk_key_03", "в");
			setKeyText("wkk_key_04", "г");
			setKeyText("wkk_key_05", "ғ"); 
			setKeyText("wkk_key_10", "д");
			setKeyText("wkk_key_11", "е");
			setKeyText("wkk_key_12", "ё");
			setKeyText("wkk_key_13", "ж");
			setKeyText("wkk_key_14", "з");
			setKeyText("wkk_key_15", "и");
			setKeyText("wkk_key_20", "й");
			setKeyText("wkk_key_21", "к");
			setKeyText("wkk_key_22", "қ");
			setKeyText("wkk_key_23", "л");
			setKeyText("wkk_key_24", "м");
			setKeyText("wkk_key_25", "н");
			setKeyText("wkk_key_30", "ң");
			setKeyText("wkk_key_31", "о");
			setKeyText("wkk_key_32", "ө");
			setKeyText("wkk_key_33", "п");
			setKeyText("wkk_key_34", "р");
			setKeyText("wkk_key_35", "с");
			setKeyText("wkk_key_40", "т");
			setKeyText("wkk_key_41", "у");
			setKeyText("wkk_key_42", "Ұ");
			setKeyText("wkk_key_43", "Ү");
			setKeyText("wkk_key_44", "Ф");
			setKeyText("wkk_key_45", "Х");
			setKeyText("wkk_key_50", "Һ");
			setKeyText("wkk_key_51", "Ц");
			setKeyText("wkk_key_52", "Ч");
			setKeyText("wkk_key_53", "Ш");	
		}else	if(gubun == 'sl')	{
			switch(stIdx){
				case 10:
					stIdx = 11;
					setInnerHtml("wkk_key_62", 'ЩЪЫ');	
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "а");
					setKeyText("wkk_key_01", "ә");
					setKeyText("wkk_key_02", "б");
					setKeyText("wkk_key_03", "в");
					setKeyText("wkk_key_04", "г");
					setKeyText("wkk_key_05", "ғ"); 
					setKeyText("wkk_key_10", "д");
					setKeyText("wkk_key_11", "е");
					setKeyText("wkk_key_12", "ё");
					setKeyText("wkk_key_13", "ж");
					setKeyText("wkk_key_14", "з");
					setKeyText("wkk_key_15", "и");
					setKeyText("wkk_key_20", "й");
					setKeyText("wkk_key_21", "к");
					setKeyText("wkk_key_22", "қ");
					setKeyText("wkk_key_23", "л");
					setKeyText("wkk_key_24", "м");
					setKeyText("wkk_key_25", "н");
					setKeyText("wkk_key_30", "ң");
					setKeyText("wkk_key_31", "о");
					setKeyText("wkk_key_32", "ө");
					setKeyText("wkk_key_33", "п");
					setKeyText("wkk_key_34", "р");
					setKeyText("wkk_key_35", "с");
					setKeyText("wkk_key_40", "т");
					setKeyText("wkk_key_41", "у");
					setKeyText("wkk_key_42", "Ұ");
					setKeyText("wkk_key_43", "Ү");
					setKeyText("wkk_key_44", "Ф");
					setKeyText("wkk_key_45", "Х");
					setKeyText("wkk_key_50", "Һ");
					setKeyText("wkk_key_51", "Ц");
					setKeyText("wkk_key_52", "Ч");
					setKeyText("wkk_key_53", "Ш");						 
					break; 
				case 11 :
					stIdx = 12;
					setInnerHtml("wkk_key_62", 'АӘБ');	
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "Щ");  
					setKeyText("wkk_key_01", "Ъ");  
					setKeyText("wkk_key_02", "Ы");  
					setKeyText("wkk_key_03", "І");
					setKeyText("wkk_key_04", "Ь");
					setKeyText("wkk_key_05", "Э");
					setKeyText("wkk_key_10", "Ю");
					setKeyText("wkk_key_11", "Я");
					setKeyText("wkk_key_12", " ");
					setKeyText("wkk_key_13", " ");
					setKeyText("wkk_key_14", " ");
					setKeyText("wkk_key_15", " ");
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
			case 12 :
					stIdx = 13;
					setInnerHtml("wkk_key_62", 'ЩЪЫ');
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "А");
					setKeyText("wkk_key_01", "Ә");
					setKeyText("wkk_key_02", "Б");
					setKeyText("wkk_key_03", "В");
					setKeyText("wkk_key_04", "Г");
					setKeyText("wkk_key_05", "Ғ");
					setKeyText("wkk_key_10", "Д");
					setKeyText("wkk_key_11", "Е");
					setKeyText("wkk_key_12", "Ё");
					setKeyText("wkk_key_13", "Ж");
					setKeyText("wkk_key_14", "З");
					setKeyText("wkk_key_15", "И");
					setKeyText("wkk_key_20", "Й");
					setKeyText("wkk_key_21", "К");
					setKeyText("wkk_key_22", "Қ");
					setKeyText("wkk_key_23", "Л");
					setKeyText("wkk_key_24", "М");
					setKeyText("wkk_key_25", "Н");
					setKeyText("wkk_key_30", "Ң");
					setKeyText("wkk_key_31", "О");
					setKeyText("wkk_key_32", "Ө");
					setKeyText("wkk_key_33", "П");
					setKeyText("wkk_key_34", "Р");
					setKeyText("wkk_key_35", "С");
					setKeyText("wkk_key_40", "Т");
					setKeyText("wkk_key_41", "У");
					setKeyText("wkk_key_42", "Ұ");
					setKeyText("wkk_key_43", "Ү");
					setKeyText("wkk_key_44", "Ф");
					setKeyText("wkk_key_45", "Х");
					setKeyText("wkk_key_50", "Һ");
					setKeyText("wkk_key_51", "Ц");
					setKeyText("wkk_key_52", "Ч"); 
					setKeyText("wkk_key_53", "Ш");					
					break;	
			case 13 :
					stIdx = 10;
					setInnerHtml("wkk_key_62", 'аәб');	
					doHighlight("wkk_key_62");
					setKeyText("wkk_key_00", "Щ");
					setKeyText("wkk_key_01", "Ъ");
					setKeyText("wkk_key_02", "Ы");
					setKeyText("wkk_key_03", "І");
					setKeyText("wkk_key_04", "Ь");
					setKeyText("wkk_key_05", "Э");
					setKeyText("wkk_key_10", "Ю");
					setKeyText("wkk_key_11", "Я");
					setKeyText("wkk_key_12", " ");
					setKeyText("wkk_key_13", " ");
					setKeyText("wkk_key_14", " ");
					setKeyText("wkk_key_15", " ");
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
			setInnerHtml("wkk_key_61", "KAZ");	//Lang Toggle
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
					setKeyText("wkk_key_45", "=");c
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
			setInnerHtml("wkk_key_100", 'ЩЪЫ');			
			doHighlight("wkk_key_100");		
			setKeyText("wkk_key_001", "а"); 
			setKeyText("wkk_key_002", "ә");
			setKeyText("wkk_key_003", "б");
			setKeyText("wkk_key_004", "в");
			setKeyText("wkk_key_005", "г'");
			setKeyText("wkk_key_006", "ғ"); 
			setKeyText("wkk_key_007", "д");
			setKeyText("wkk_key_008", "е"); 
			setKeyText("wkk_key_009", "ё"); 
			setKeyText("wkk_key_010", "ж"); 
			setKeyText("wkk_key_011", "з");
			setKeyText("wkk_key_012", "и"); 
			setKeyText("wkk_key_013", "й"); 
			setKeyText("wkk_key_101", "к");
			setKeyText("wkk_key_102", "қ");
			setKeyText("wkk_key_103", "л");
			setKeyText("wkk_key_104", "м");
			setKeyText("wkk_key_105", "н"); 
			setKeyText("wkk_key_106", "ң"); 
			setKeyText("wkk_key_107", "о");
			setKeyText("wkk_key_108", "ө");
			setKeyText("wkk_key_109", "п");
			setKeyText("wkk_key_110", "р");
			setKeyText("wkk_key_111", "с");
			setKeyText("wkk_key_112", "т");
			setKeyText("wkk_key_113", "у");
			setKeyText("wkk_key_201", "Ұ");
			setKeyText("wkk_key_202", "Ү");
			setKeyText("wkk_key_203", "Ф");
			setKeyText("wkk_key_204", "Х");
			setKeyText("wkk_key_210", "Һ"); 
			setKeyText("wkk_key_211", "Ц"); 
			setKeyText("wkk_key_212", "Ч"); 
			setKeyText("wkk_key_213", "Ш");	
		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_100", 'ЩЪЫ');		
				doHighlight("wkk_key_100");			
				setKeyText("wkk_key_001", "а"); 
				setKeyText("wkk_key_002", "ә");
				setKeyText("wkk_key_003", "б");
				setKeyText("wkk_key_004", "в");
				setKeyText("wkk_key_005", "г'");
				setKeyText("wkk_key_006", "ғ"); 
				setKeyText("wkk_key_007", "д");
				setKeyText("wkk_key_008", "е"); 
				setKeyText("wkk_key_009", "ё"); 
				setKeyText("wkk_key_010", "ж"); 
				setKeyText("wkk_key_011", "з");
				setKeyText("wkk_key_012", "и"); 
				setKeyText("wkk_key_013", "й"); 
				setKeyText("wkk_key_101", "к");
				setKeyText("wkk_key_102", "қ");
				setKeyText("wkk_key_103", "л");
				setKeyText("wkk_key_104", "м");
				setKeyText("wkk_key_105", "н"); 
				setKeyText("wkk_key_106", "ң"); 
				setKeyText("wkk_key_107", "о");
				setKeyText("wkk_key_108", "ө");
				setKeyText("wkk_key_109", "п");
				setKeyText("wkk_key_110", "р");
				setKeyText("wkk_key_111", "с");
				setKeyText("wkk_key_112", "т");
				setKeyText("wkk_key_113", "у");
				setKeyText("wkk_key_201", "Ұ");
				setKeyText("wkk_key_202", "Ү");
				setKeyText("wkk_key_203", "Ф");
				setKeyText("wkk_key_204", "Х");
				setKeyText("wkk_key_210", "Һ"); 
				setKeyText("wkk_key_211", "Ц"); 
				setKeyText("wkk_key_212", "Ч"); 
				setKeyText("wkk_key_213", "Ш");		
				break;
			case 11:
				stIdx = 12;
				setInnerHtml("wkk_key_100", 'АӘБ');	
				doHighlight("wkk_key_100");			
				setKeyText("wkk_key_001", "Щ");   
				setKeyText("wkk_key_002", "Ъ");   
				setKeyText("wkk_key_003", "Ы");   
				setKeyText("wkk_key_004", "І");
				setKeyText("wkk_key_005", "Ь");
				setKeyText("wkk_key_006", "Э");
				setKeyText("wkk_key_007", "Ю");
				setKeyText("wkk_key_008", "Я");
				setKeyText("wkk_key_009", " ");
				setKeyText("wkk_key_010", " ");
				setKeyText("wkk_key_011", " ");
				setKeyText("wkk_key_012", " ");
				setKeyText("wkk_key_013", " ");
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
			case 12:
				stIdx = 13;
				setInnerHtml("wkk_key_100", 'АӘБ');					
				doHighlight("wkk_key_100");
				setKeyText("wkk_key_001", "А");
				setKeyText("wkk_key_002", "Ә");
				setKeyText("wkk_key_003", "Б");
				setKeyText("wkk_key_004", "В");
				setKeyText("wkk_key_005", "Г");
				setKeyText("wkk_key_006", "Ғ");
				setKeyText("wkk_key_007", "Д");
				setKeyText("wkk_key_008", "Е");
				setKeyText("wkk_key_009", "Ё");
				setKeyText("wkk_key_010", "Ж");
				setKeyText("wkk_key_011", "З");
				setKeyText("wkk_key_012", "И");
				setKeyText("wkk_key_013", "Й");
				setKeyText("wkk_key_101", "К");
				setKeyText("wkk_key_102", "Қ");
				setKeyText("wkk_key_103", "Л");
				setKeyText("wkk_key_104", "М");
				setKeyText("wkk_key_105", "Н");
				setKeyText("wkk_key_106", "Ң");
				setKeyText("wkk_key_107", "О");
				setKeyText("wkk_key_108", "Ө");
				setKeyText("wkk_key_109", "П");
				setKeyText("wkk_key_110", "Р");
				setKeyText("wkk_key_111", "С");
				setKeyText("wkk_key_112", "Т");
				setKeyText("wkk_key_113", "У");
				setKeyText("wkk_key_201", "Ұ");
				setKeyText("wkk_key_202", "Ү");
				setKeyText("wkk_key_203", "Ф");
				setKeyText("wkk_key_204", "Х");
				setKeyText("wkk_key_210", "Һ");
				setKeyText("wkk_key_211", "Ц");
				setKeyText("wkk_key_212", "Ч");
				setKeyText("wkk_key_213", "Ш");			
				break;	
			case 13:
				stIdx = 10;
				setInnerHtml("wkk_key_100", 'абв');	
				doHighlight("wkk_key_100");				
				setKeyText("wkk_key_001", "Щ");
				setKeyText("wkk_key_002", "Ъ");
				setKeyText("wkk_key_003", "Ы");
				setKeyText("wkk_key_004", "І");
				setKeyText("wkk_key_005", "Ь");
				setKeyText("wkk_key_006", "Э");
				setKeyText("wkk_key_007", "Ю");
				setKeyText("wkk_key_008", "Я");
				setKeyText("wkk_key_009", " ");
				setKeyText("wkk_key_010", " ");
				setKeyText("wkk_key_011", " ");
				setKeyText("wkk_key_012", " ");
				setKeyText("wkk_key_013", " ");
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
			setInnerHtml("wkk_key_116", "KAZ");	//Lang Toggle
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