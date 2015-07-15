
/**
 * greek
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
var TITLE_LABEL = "greek";
var DESC_LABEL = "";

var STYLE_LABEL = "αβγ";

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
			setInnerHtml("wkk_key_62", "ύώ");
			setKeyText("wkk_key_00", "α");
			setKeyText("wkk_key_01", "β");
			setKeyText("wkk_key_02", "γ");
			setKeyText("wkk_key_03", "δ");
			setKeyText("wkk_key_04", "ε");
			setKeyText("wkk_key_05", "1"); 
			setKeyText("wkk_key_06", "2");
			setKeyText("wkk_key_07", "3");
			setKeyText("wkk_key_10", "ζ");
			setKeyText("wkk_key_11", "η");
			setKeyText("wkk_key_12", "θ");
			setKeyText("wkk_key_13", "ι");
			setKeyText("wkk_key_14", "κ");
			setKeyText("wkk_key_15", "4");
			setKeyText("wkk_key_16", "5");
			setKeyText("wkk_key_17", "6");
			setKeyText("wkk_key_20", "λ");
			setKeyText("wkk_key_21", "μ");
			setKeyText("wkk_key_22", "ν");
			setKeyText("wkk_key_23", "ξ");
			setKeyText("wkk_key_24", "ο");
			setKeyText("wkk_key_25", "7");
			setKeyText("wkk_key_26", "8");
			setKeyText("wkk_key_27", "9");
			setKeyText("wkk_key_30", "π");
			setKeyText("wkk_key_31", "ρ");
			setKeyText("wkk_key_32", "σ");
			setKeyText("wkk_key_33", "τ");
			setKeyText("wkk_key_34", "υ");
			setKeyText("wkk_key_35", ".");
			setKeyText("wkk_key_36", "@");
			setKeyText("wkk_key_37", "0");
			setKeyText("wkk_key_40", "φ");
			setKeyText("wkk_key_41", "χ");
			setKeyText("wkk_key_42", "ψ");
			setKeyText("wkk_key_43", "ω");
			setKeyText("wkk_key_44", "ΐ");
			setKeyText("wkk_key_45", "ά");
			setKeyText("wkk_key_46", "_");
			setKeyText("wkk_key_47", "/"); 
			setKeyText("wkk_key_50", "έ");
			setKeyText("wkk_key_51", "ή");
			setKeyText("wkk_key_52", "ί");
			setKeyText("wkk_key_53", "ΰ");
			setKeyText("wkk_key_54", "ς");
			setKeyText("wkk_key_55", "ϊ");
			setKeyText("wkk_key_56", "ϋ");
			setKeyText("wkk_key_57", "ό"); 
						
		}
		
		else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:				
				stIdx = 11;
				setInnerHtml("wkk_key_62", "ύώ");
				doHighlight('wkk_key_62');  
				setKeyText("wkk_key_00", "α");
				setKeyText("wkk_key_01", "β");
				setKeyText("wkk_key_02", "γ");
				setKeyText("wkk_key_03", "δ");
				setKeyText("wkk_key_04", "ε");
				setKeyText("wkk_key_05", "1"); 
				setKeyText("wkk_key_06", "2");
				setKeyText("wkk_key_07", "3");
				setKeyText("wkk_key_10", "ζ");
				setKeyText("wkk_key_11", "η");
				setKeyText("wkk_key_12", "θ");
				setKeyText("wkk_key_13", "ι");
				setKeyText("wkk_key_14", "κ");
				setKeyText("wkk_key_15", "4");
				setKeyText("wkk_key_16", "5");
				setKeyText("wkk_key_17", "6");
				setKeyText("wkk_key_20", "λ");
				setKeyText("wkk_key_21", "μ");
				setKeyText("wkk_key_22", "ν");
				setKeyText("wkk_key_23", "ξ");
				setKeyText("wkk_key_24", "ο");
				setKeyText("wkk_key_25", "7");
				setKeyText("wkk_key_26", "8");
				setKeyText("wkk_key_27", "9");
				setKeyText("wkk_key_30", "π");
				setKeyText("wkk_key_31", "ρ");
				setKeyText("wkk_key_32", "σ");
				setKeyText("wkk_key_33", "τ");
				setKeyText("wkk_key_34", "υ");
				setKeyText("wkk_key_35", ".");
				setKeyText("wkk_key_36", "@");
				setKeyText("wkk_key_37", "0");
				setKeyText("wkk_key_40", "φ");
				setKeyText("wkk_key_41", "χ");
				setKeyText("wkk_key_42", "ψ");
				setKeyText("wkk_key_43", "ω");
				setKeyText("wkk_key_44", "ΐ");
				setKeyText("wkk_key_45", "ά");
				setKeyText("wkk_key_46", "_");
				setKeyText("wkk_key_47", "/"); 
				setKeyText("wkk_key_50", "έ");
				setKeyText("wkk_key_51", "ή");
				setKeyText("wkk_key_52", "ί");
				setKeyText("wkk_key_53", "ΰ");
				setKeyText("wkk_key_54", "ς");
				setKeyText("wkk_key_55", "ϊ");
				setKeyText("wkk_key_56", "ϋ");
				setKeyText("wkk_key_57", "ό"); 
				break;                    
			case 11:                    
				stIdx = 12;
				setInnerHtml("wkk_key_62", "ΑΒΓ");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "ύ");
				setKeyText("wkk_key_01", "ώ");
				setKeyText("wkk_key_02", " ");
				setKeyText("wkk_key_03", " ");
				setKeyText("wkk_key_04", " ");
				setKeyText("wkk_key_05", "1");
				setKeyText("wkk_key_06", "2");
				setKeyText("wkk_key_07", "3");
				setKeyText("wkk_key_10", " ");
				setKeyText("wkk_key_11", " ");
				setKeyText("wkk_key_12", " ");
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
			
			case 12:
				stIdx = 13;
				setInnerHtml("wkk_key_62", "ΎΏ");
				doHighlight('wkk_key_62');  
				setKeyText("wkk_key_00", "Α");
				setKeyText("wkk_key_01", "Β");
				setKeyText("wkk_key_02", "Γ");
				setKeyText("wkk_key_03", "Δ");
				setKeyText("wkk_key_04", "Ε");
				setKeyText("wkk_key_05", "1");
				setKeyText("wkk_key_06", "2");
				setKeyText("wkk_key_07", "3");
				setKeyText("wkk_key_10", "Ζ");
				setKeyText("wkk_key_11", "Η");
				setKeyText("wkk_key_12", "Θ");
				setKeyText("wkk_key_13", "Ι");
				setKeyText("wkk_key_14", "Κ");
				setKeyText("wkk_key_15", "4");
				setKeyText("wkk_key_16", "5");
				setKeyText("wkk_key_17", "6");
				setKeyText("wkk_key_20", "Λ");
				setKeyText("wkk_key_21", "Μ");
				setKeyText("wkk_key_22", "Ν");
				setKeyText("wkk_key_23", "Ξ");
				setKeyText("wkk_key_24", "Ο");
				setKeyText("wkk_key_25", "7");
				setKeyText("wkk_key_26", "8");
				setKeyText("wkk_key_27", "9");
				setKeyText("wkk_key_30", "Π");
				setKeyText("wkk_key_31", "Ρ");
				setKeyText("wkk_key_32", "Σ");
				setKeyText("wkk_key_33", "Τ");
				setKeyText("wkk_key_34", "Υ");
				setKeyText("wkk_key_35", ".");
				setKeyText("wkk_key_36", "@");
				setKeyText("wkk_key_37", "0");
				setKeyText("wkk_key_40", "Φ");
				setKeyText("wkk_key_41", "Χ");
				setKeyText("wkk_key_42", "Ψ");
				setKeyText("wkk_key_43", "Ω");
				setKeyText("wkk_key_44", "ΐ");
				setKeyText("wkk_key_45", "Ά");
				setKeyText("wkk_key_46", "_");
				setKeyText("wkk_key_47", "/");
				setKeyText("wkk_key_50", "Έ");
				setKeyText("wkk_key_51", "Ή");
				setKeyText("wkk_key_52", "Ί");
				setKeyText("wkk_key_53", "ΰ");
				setKeyText("wkk_key_54", "Σ");
				setKeyText("wkk_key_55", "Ϊ");
				setKeyText("wkk_key_56", "Ϋ");
				setKeyText("wkk_key_57", "Ό"); 
				break;
			case 13:
				stIdx = 10; 
				setInnerHtml("wkk_key_62", "αβγ");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "Ύ");
				setKeyText("wkk_key_01", "Ώ");
				setKeyText("wkk_key_02", " ");
				setKeyText("wkk_key_03", " ");
				setKeyText("wkk_key_04", " ");
				setKeyText("wkk_key_05", "1");
				setKeyText("wkk_key_06", "2");
				setKeyText("wkk_key_07", "3");
				setKeyText("wkk_key_10", " ");
				setKeyText("wkk_key_11", " ");
				setKeyText("wkk_key_12", " ");
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
		} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}
			setInnerHtml("wkk_key_61", "GRE");	//Lang Toggle
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

	}
	
	/*********************************************************************/
	/*********************  KeyBoard Layout 2 Start  *********************/
	/*********************************************************************/
	else if(keyBoardType==1){	
		
		if(gubun == 'lang'){
			
			stIdx = 11;
			
			setKeyText("wkk_key_00", "α");
			setKeyText("wkk_key_01", "β");
			setKeyText("wkk_key_02", "γ");
			setKeyText("wkk_key_03", "δ");
			setKeyText("wkk_key_04", "ε");
			setKeyText("wkk_key_05", "ζ");
			setKeyText("wkk_key_10", "η");
			setKeyText("wkk_key_11", "θ");
			setKeyText("wkk_key_12", "ι");
			setKeyText("wkk_key_13", "κ");
			setKeyText("wkk_key_14", "λ");
			setKeyText("wkk_key_15", "μ");
			setKeyText("wkk_key_20", "ν");
			setKeyText("wkk_key_21", "ξ");
			setKeyText("wkk_key_22", "ο");
			setKeyText("wkk_key_23", "π");
			setKeyText("wkk_key_24", "ρ");
			setKeyText("wkk_key_25", "σ");
			setKeyText("wkk_key_30", "τ");
			setKeyText("wkk_key_31", "υ");
			setKeyText("wkk_key_32", "φ");
			setKeyText("wkk_key_33", "χ");
			setKeyText("wkk_key_34", "ψ");
			setKeyText("wkk_key_35", "ω");
			setKeyText("wkk_key_40", "ΐ");
			setKeyText("wkk_key_41", "ά");
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
				setInnerHtml("wkk_key_62", "αβγ");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "α");
				setKeyText("wkk_key_01", "β");
				setKeyText("wkk_key_02", "γ");
				setKeyText("wkk_key_03", "δ");
				setKeyText("wkk_key_04", "ε");
				setKeyText("wkk_key_05", "ζ");
				setKeyText("wkk_key_10", "η");
				setKeyText("wkk_key_11", "θ");
				setKeyText("wkk_key_12", "ι");
				setKeyText("wkk_key_13", "κ");
				setKeyText("wkk_key_14", "λ");
				setKeyText("wkk_key_15", "μ");
				setKeyText("wkk_key_20", "ν");
				setKeyText("wkk_key_21", "ξ");
				setKeyText("wkk_key_22", "ο");
				setKeyText("wkk_key_23", "π");
				setKeyText("wkk_key_24", "ρ");
				setKeyText("wkk_key_25", "σ");
				setKeyText("wkk_key_30", "τ");
				setKeyText("wkk_key_31", "υ");
				setKeyText("wkk_key_32", "φ");
				setKeyText("wkk_key_33", "χ");
				setKeyText("wkk_key_34", "ψ");
				setKeyText("wkk_key_35", "ω");
				setKeyText("wkk_key_40", "ΐ");
				setKeyText("wkk_key_41", "ά");
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
				stIdx = 12;
				setInnerHtml("wkk_key_62", "ΑΒΓ");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "έ");
				setKeyText("wkk_key_01", "ή");
				setKeyText("wkk_key_02", "ί");
				setKeyText("wkk_key_03", "ΰ");
				setKeyText("wkk_key_04", "ς");
				setKeyText("wkk_key_05", "ϊ");
				setKeyText("wkk_key_10", "ϋ"); 
				setKeyText("wkk_key_11", "ό"); 
				setKeyText("wkk_key_12", "ύ"); 
				setKeyText("wkk_key_13", "ώ"); 
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
			case 12:
				stIdx = 13;
				setInnerHtml("wkk_key_62", "ΑΒΓ");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "Α"); 
				setKeyText("wkk_key_01", "Β"); 
				setKeyText("wkk_key_02", "Γ"); 
				setKeyText("wkk_key_03", "Δ"); 
				setKeyText("wkk_key_04", "Ε"); 
				setKeyText("wkk_key_05", "Ζ"); 
				setKeyText("wkk_key_10", "Η"); 
				setKeyText("wkk_key_11", "Θ"); 
				setKeyText("wkk_key_12", "Ι"); 
				setKeyText("wkk_key_13", "Κ"); 
				setKeyText("wkk_key_14", "Λ"); 
				setKeyText("wkk_key_15", "Μ"); 
				setKeyText("wkk_key_20", "Ν"); 
				setKeyText("wkk_key_21", "Ξ"); 
				setKeyText("wkk_key_22", "Ο"); 
				setKeyText("wkk_key_23", "Π"); 
				setKeyText("wkk_key_24", "Ρ"); 
				setKeyText("wkk_key_25", "Σ"); 
				setKeyText("wkk_key_30", "Τ"); 
				setKeyText("wkk_key_31", "Υ"); 
				setKeyText("wkk_key_32", "Φ"); 
				setKeyText("wkk_key_33", "Χ"); 
				setKeyText("wkk_key_34", "Ψ"); 
				setKeyText("wkk_key_35", "Ω"); 
				setKeyText("wkk_key_40", "ΐ");  
				setKeyText("wkk_key_41", "Ά");  
				setKeyText("wkk_key_42", " ");  
				setKeyText("wkk_key_43", " ");  
				setKeyText("wkk_key_44", " ");  
				setKeyText("wkk_key_45", " ");  
				setKeyText("wkk_key_50", " ");  
				setKeyText("wkk_key_51", " ");  
				setKeyText("wkk_key_52", " ");  
				setKeyText("wkk_key_53", " ");  
				break;
			case 13:
				stIdx = 10;
				setInnerHtml("wkk_key_62", "αβγ");
				doHighlight('wkk_key_62');
				setKeyText("wkk_key_00", "Έ");
				setKeyText("wkk_key_01", "Ή");
				setKeyText("wkk_key_02", "Ί");
				setKeyText("wkk_key_03", "ΰ");
				setKeyText("wkk_key_04", "Σ");
				setKeyText("wkk_key_05", "Ϊ");
				setKeyText("wkk_key_10", "Ϋ");
				setKeyText("wkk_key_11", "Ό");
				setKeyText("wkk_key_12", "Ύ");
				setKeyText("wkk_key_13", "Ώ");
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
		} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}			
			setInnerHtml("wkk_key_61", "GRE");	//Lang Toggle
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
			
			setKeyText("wkk_key_001", "α");     
			setKeyText("wkk_key_002", "β");
			setKeyText("wkk_key_003", "γ");
			setKeyText("wkk_key_004", "δ");
			setKeyText("wkk_key_005", "ε");
			setKeyText("wkk_key_006", "ζ");
			setKeyText("wkk_key_007", "η");
			setKeyText("wkk_key_008", "θ");
			setKeyText("wkk_key_009", "ι");
			setKeyText("wkk_key_010", "κ");
			setKeyText("wkk_key_011", "λ");
			setKeyText("wkk_key_012", "μ");
			setKeyText("wkk_key_013", "ν");
			setKeyText("wkk_key_101", "ξ");
			setKeyText("wkk_key_102", "ο");
			setKeyText("wkk_key_103", "π");
			setKeyText("wkk_key_104", "ρ");
			setKeyText("wkk_key_105", "σ");
			setKeyText("wkk_key_106", "τ");
			setKeyText("wkk_key_107", "υ");
			setKeyText("wkk_key_108", "φ");
			setKeyText("wkk_key_109", "χ");
			setKeyText("wkk_key_110", "ψ");
			setKeyText("wkk_key_111", "ω");
			setKeyText("wkk_key_112", "ΐ");
			setKeyText("wkk_key_113", "ά");
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
				setInnerHtml("wkk_key_100", "αβγ");
				doHighlight('wkk_key_100');
				setKeyText("wkk_key_001", "α");     
				setKeyText("wkk_key_002", "β");
				setKeyText("wkk_key_003", "γ");
				setKeyText("wkk_key_004", "δ");
				setKeyText("wkk_key_005", "ε");
				setKeyText("wkk_key_006", "ζ");
				setKeyText("wkk_key_007", "η");
				setKeyText("wkk_key_008", "θ");
				setKeyText("wkk_key_009", "ι");
				setKeyText("wkk_key_010", "κ");
				setKeyText("wkk_key_011", "λ");
				setKeyText("wkk_key_012", "μ");
				setKeyText("wkk_key_013", "ν");
				setKeyText("wkk_key_101", "ξ");
				setKeyText("wkk_key_102", "ο");
				setKeyText("wkk_key_103", "π");
				setKeyText("wkk_key_104", "ρ");
				setKeyText("wkk_key_105", "σ");
				setKeyText("wkk_key_106", "τ");
				setKeyText("wkk_key_107", "υ");
				setKeyText("wkk_key_108", "φ");
				setKeyText("wkk_key_109", "χ");
				setKeyText("wkk_key_110", "ψ");
				setKeyText("wkk_key_111", "ω");
				setKeyText("wkk_key_112", "ΐ");
				setKeyText("wkk_key_113", "ά");
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
				stIdx = 12;
				setInnerHtml("wkk_key_100", "ΑΒΓ");
				doHighlight('wkk_key_100');          
				setKeyText("wkk_key_001", "έ");       			   
				setKeyText("wkk_key_002", "ή");       			
				setKeyText("wkk_key_003", "ί");       			
				setKeyText("wkk_key_004", "ΰ");       			
				setKeyText("wkk_key_005", "ς");       			
				setKeyText("wkk_key_006", "ϊ");       			
				setKeyText("wkk_key_007", "ϋ");       			
				setKeyText("wkk_key_008", "ό");       			
				setKeyText("wkk_key_009", "ύ");       			
				setKeyText("wkk_key_010", "ώ");       			
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
				setInnerHtml("wkk_key_100", "ΑΒΓ");								   
		        doHighlight('wkk_key_100');   		        
		        setKeyText("wkk_key_001", "Α");   					   
				setKeyText("wkk_key_002", "Β");   					
				setKeyText("wkk_key_003", "Γ");   					
				setKeyText("wkk_key_004", "Δ");   			
				setKeyText("wkk_key_005", "Ε");   			
				setKeyText("wkk_key_006", "Ζ");   			
				setKeyText("wkk_key_007", "Η");   			
				setKeyText("wkk_key_008", "Θ");   			
				setKeyText("wkk_key_009", "Ι");   			
				setKeyText("wkk_key_010", "Κ");   			
				setKeyText("wkk_key_011", "Λ");   			
				setKeyText("wkk_key_012", "Μ");   			
				setKeyText("wkk_key_013", "Ν");   			
				setKeyText("wkk_key_101", "Ξ");   			
				setKeyText("wkk_key_102", "Ο");   			
				setKeyText("wkk_key_103", "Π");   			
				setKeyText("wkk_key_104", "Ρ");   			
				setKeyText("wkk_key_105", "Σ");   			
				setKeyText("wkk_key_106", "Τ");   			
				setKeyText("wkk_key_107", "Υ");   			
				setKeyText("wkk_key_108", "Φ");   			
				setKeyText("wkk_key_109", "Χ");   			
				setKeyText("wkk_key_110", "Ψ");   			
				setKeyText("wkk_key_111", "Ω");   			
				setKeyText("wkk_key_112", "ΐ");   			
				setKeyText("wkk_key_113", "Ά");   			
				setKeyText("wkk_key_201", " ");   			
				setKeyText("wkk_key_202", " ");   			
				setKeyText("wkk_key_203", " ");   			
				setKeyText("wkk_key_204", " ");   			
				setKeyText("wkk_key_210", " ");   			
				setKeyText("wkk_key_211", " ");   			
				setKeyText("wkk_key_212", " ");   			
				setKeyText("wkk_key_213", " ");   
				break;        
			case 13:
				stIdx = 10;
				setInnerHtml("wkk_key_100", "αβγ");  
				doHighlight('wkk_key_100');   		   
				setKeyText("wkk_key_001", "Έ");
		        setKeyText("wkk_key_002", "Ή");                           
		        setKeyText("wkk_key_003", "Ί");       			              
		        setKeyText("wkk_key_004", "ΰ");       			              
		        setKeyText("wkk_key_005", "Σ");       			              
		        setKeyText("wkk_key_006", "Ϊ");       			              
		        setKeyText("wkk_key_007", "Ϋ");       			              
		        setKeyText("wkk_key_008", "Ό");                           
		        setKeyText("wkk_key_009", "Ύ");                           
		        setKeyText("wkk_key_010", "Ώ");                           
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
			setInnerHtml("wkk_key_116", "GRE");	//Lang Toggle       
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