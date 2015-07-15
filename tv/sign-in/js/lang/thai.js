
/**
 * thai
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
var TITLE_LABEL = "thai";
var PL_ADD_BUTTON_LABEL = "OK";
var PL_CANCEL_BUTTON_LABEL = "CANCEL";
var DESC_LABEL = "";

var STYLE_LABEL;


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
		STYLE_LABEL = 'ขคฆ';
		if(gubun == 'lang'){		
			stIdx = 11;
     					setInnerHtml("wkk_key_52", 'ขคฆ');  
						setKeyText("wkk_key_00", "ก");
						setKeyText("wkk_key_01", "ฃ");
						setKeyText("wkk_key_02", "ฅ");
						setKeyText("wkk_key_03", "ง"); 
						setKeyText("wkk_key_04", "ฉ");
						setKeyText("wkk_key_05", "ซ"); 
						setKeyText("wkk_key_06", "ญ");
						setKeyText("wkk_key_07", "ฏ");
						setKeyText("wkk_key_10", "ฑ");
						setKeyText("wkk_key_11", "ณ");
						setKeyText("wkk_key_12", "ต");
						setKeyText("wkk_key_13", "ท"); 
						setKeyText("wkk_key_14", "น");
						setKeyText("wkk_key_15", "ป");
						setKeyText("wkk_key_16", "ฝ");
						setKeyText("wkk_key_17", "ฟ");
						setKeyText("wkk_key_20", "ม");
						setKeyText("wkk_key_21", "ร");
						setKeyText("wkk_key_22", "ว");
						setKeyText("wkk_key_23", "ษ");
						setKeyText("wkk_key_24", "ห");
						setKeyText("wkk_key_25", "อ");
						setKeyText("wkk_key_26", "อะ");
						setKeyText("wkk_key_27", "อิ");
						setKeyText("wkk_key_30", "อึ");
						setKeyText("wkk_key_31", "อุ");
						setKeyText("wkk_key_32", "เอ");
						setKeyText("wkk_key_33", "โอ");
						setKeyText("wkk_key_34", "ฤ");
						setKeyText("wkk_key_35", "ฦ");
						setKeyText("wkk_key_36", "อำ");
						setKeyText("wkk_key_37", "ไอ");
						setKeyText("wkk_key_40", "อ้");
						setKeyText("wkk_key_41", "อ๋");
						setKeyText("wkk_key_42", "ๆ");
						setKeyText("wkk_key_43", "อ์");
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
		}else if(gubun == 'sl')	{
			switch(stIdx){
					case 10:
						stIdx = 11;
     					setInnerHtml("wkk_key_62", 'ขคฆ');  
		 				doHighlight("wkk_key_62");    
						setKeyText("wkk_key_00", "ก");
						setKeyText("wkk_key_01", "ฃ");
						setKeyText("wkk_key_02", "ฅ");
						setKeyText("wkk_key_03", "ง"); 
						setKeyText("wkk_key_04", "ฉ");
						setKeyText("wkk_key_05", "ซ"); 
						setKeyText("wkk_key_06", "ญ");
						setKeyText("wkk_key_07", "ฏ");
						setKeyText("wkk_key_10", "ฑ");
						setKeyText("wkk_key_11", "ณ");
						setKeyText("wkk_key_12", "ต");
						setKeyText("wkk_key_13", "ท"); 
						setKeyText("wkk_key_14", "น");
						setKeyText("wkk_key_15", "ป");
						setKeyText("wkk_key_16", "ฝ");
						setKeyText("wkk_key_17", "ฟ");
						setKeyText("wkk_key_20", "ม");
						setKeyText("wkk_key_21", "ร");
						setKeyText("wkk_key_22", "ว");
						setKeyText("wkk_key_23", "ษ");
						setKeyText("wkk_key_24", "ห");
						setKeyText("wkk_key_25", "อ");
						setKeyText("wkk_key_26", "อะ");
						setKeyText("wkk_key_27", "อิ");
						setKeyText("wkk_key_30", "อึ");
						setKeyText("wkk_key_31", "อุ");
						setKeyText("wkk_key_32", "เอ");
						setKeyText("wkk_key_33", "โอ");
						setKeyText("wkk_key_34", "ฤ");
						setKeyText("wkk_key_35", "ฦ");
						setKeyText("wkk_key_36", "อำ");
						setKeyText("wkk_key_37", "ไอ");
						setKeyText("wkk_key_40", "อ้");
						setKeyText("wkk_key_41", "อ๋");
						setKeyText("wkk_key_42", "ๆ");
						setKeyText("wkk_key_43", "อ์");
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
					case 11:
						stIdx = 10;
				 		setInnerHtml("wkk_key_62", 'กฃฅ');	
				 		doHighlight("wkk_key_62");				
						setKeyText("wkk_key_00", "ข");
						setKeyText("wkk_key_01", "ค");
						setKeyText("wkk_key_02", "ฆ");
						setKeyText("wkk_key_03", "จ"); 
						setKeyText("wkk_key_04", "ช");
						setKeyText("wkk_key_05", "ฌ"); 
						setKeyText("wkk_key_06", "ฎ");
						setKeyText("wkk_key_07", "ฐ"); 
						setKeyText("wkk_key_10", "ฒ");
						setKeyText("wkk_key_11", "ด");
						setKeyText("wkk_key_12", "ถ");
						setKeyText("wkk_key_13", "ธ"); 
						setKeyText("wkk_key_14", "บ");
						setKeyText("wkk_key_15", "ผ");
						setKeyText("wkk_key_16", "พ");
						setKeyText("wkk_key_17", "ภ");
						setKeyText("wkk_key_20", "ย");
						setKeyText("wkk_key_21", "ล");
						setKeyText("wkk_key_22", "ศ");
						setKeyText("wkk_key_23", "ส");
						setKeyText("wkk_key_24", "ฬ");
						setKeyText("wkk_key_25", "ฮ");
						setKeyText("wkk_key_26", "อา");
						setKeyText("wkk_key_27", "อี");
						setKeyText("wkk_key_30", "อื");
						setKeyText("wkk_key_31", "อู");
						setKeyText("wkk_key_32", "แอ");
						setKeyText("wkk_key_33", "อั");
						setKeyText("wkk_key_34", "ฤา");
						setKeyText("wkk_key_35", "ฦา");
						setKeyText("wkk_key_36", "ใอ");
						setKeyText("wkk_key_37", "อ่");
						setKeyText("wkk_key_40", "อ๊");
						setKeyText("wkk_key_41", "อ๊");
						setKeyText("wkk_key_42", "ฯ");
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
			setInnerHtml("wkk_key_61", "THA");	//Lang Toggle
			setInnerHtml("wkk_key_62", " ");				
			switch(chIdx){
			case 20:
				setKeyText("wkk_key_00", "1");    
				setKeyText("wkk_key_01", "2");    
				setKeyText("wkk_key_02", "3");    
				setKeyText("wkk_key_03", "4");    
				setKeyText("wkk_key_04", "5");    
				setKeyText("wkk_key_05", "6");     
				setKeyText("wkk_key_06", "7");    
				setKeyText("wkk_key_07", "8");    
				setKeyText("wkk_key_10", "9");    
				setKeyText("wkk_key_11", "0");    
				setKeyText("wkk_key_12", ".");    
				setKeyText("wkk_key_13", "@");    
				setKeyText("wkk_key_14", "_");    
				setKeyText("wkk_key_15", "/");    
				setKeyText("wkk_key_16", "฿");    
				setKeyText("wkk_key_17", "^");    
				setKeyText("wkk_key_20", "~");    
				setKeyText("wkk_key_21", "?");    
				setKeyText("wkk_key_22", "!");    
				setKeyText("wkk_key_23", "\'");   
				setKeyText("wkk_key_24", "\"");   
				setKeyText("wkk_key_25", "(");    
				setKeyText("wkk_key_26", ")");    
				setKeyText("wkk_key_27", "-");    
				setKeyText("wkk_key_30", ":");    
				setKeyText("wkk_key_31", ";");                           
				setKeyText("wkk_key_32", "+");                           
				setKeyText("wkk_key_33", "&");                           
				setKeyText("wkk_key_34", "%");                           
				setKeyText("wkk_key_35", "*");                           
				setKeyText("wkk_key_36", "<");	                             
				setKeyText("wkk_key_37", ">");                               
				setKeyText("wkk_key_40", "[");                               
				setKeyText("wkk_key_41", "]");                               
				setKeyText("wkk_key_42", "=");                               
				setKeyText("wkk_key_43", "\{");                              
				setKeyText("wkk_key_44", "\}");                              
				setKeyText("wkk_key_45", "\,");     
				setKeyText("wkk_key_46", "\§");     
				setKeyText("wkk_key_47", "\€");   
				setKeyText("wkk_key_50", "\£");  
				setKeyText("wkk_key_51", "\$");  
				setKeyText("wkk_key_52", "\¥");  
				setKeyText("wkk_key_53", "￦");     
				setKeyText("wkk_key_54", "＼");     
				setKeyText("wkk_key_55", "|");     
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
		STYLE_LABEL = 'ๆอข';

		if(gubun == 'lang'){	
			stIdx = 11;
			setInnerHtml("wkk_key_62", 'ๆอข');	
			setKeyText("wkk_key_00", "ก");
			setKeyText("wkk_key_01", "ฃ");
			setKeyText("wkk_key_02", "ฅ");
			setKeyText("wkk_key_03", "ง");
			setKeyText("wkk_key_04", "ฉ");
			setKeyText("wkk_key_05", "ซ"); 
			setKeyText("wkk_key_10", "ญ");
			setKeyText("wkk_key_11", "ฏ");
			setKeyText("wkk_key_12", "ฑ");
			setKeyText("wkk_key_13", "ณ");
			setKeyText("wkk_key_14", "ต");
			setKeyText("wkk_key_15", "ท");
			setKeyText("wkk_key_20", "น");
			setKeyText("wkk_key_21", "ป");
			setKeyText("wkk_key_22", "ฝ");
			setKeyText("wkk_key_23", "ฟ");
			setKeyText("wkk_key_24", "ม");
			setKeyText("wkk_key_25", "ร");
			setKeyText("wkk_key_30", "ว");
			setKeyText("wkk_key_31", "ษ");
			setKeyText("wkk_key_32", "ห");
			setKeyText("wkk_key_33", "อ");
			setKeyText("wkk_key_34", "อะ");
			setKeyText("wkk_key_35", "อิ");
			setKeyText("wkk_key_40", "อึ");
			setKeyText("wkk_key_41", "อุ");
			setKeyText("wkk_key_42", "เอ");
			setKeyText("wkk_key_43", "โอ");
			setKeyText("wkk_key_44", "ฤ");
			setKeyText("wkk_key_45", "ฦ");
			setKeyText("wkk_key_50", "อำ");
			setKeyText("wkk_key_51", "ไอ");
			setKeyText("wkk_key_52", "อ้");
			setKeyText("wkk_key_53", "อ๋");	
		}else	if(gubun == 'sl')	{
			switch(stIdx){
				case 10:
					stIdx = 11;
					setInnerHtml("wkk_key_62", 'ๆอข');	
					doHighlight("wkk_key_62");   
					setKeyText("wkk_key_00", "ก");
					setKeyText("wkk_key_01", "ฃ");
					setKeyText("wkk_key_02", "ฅ");
					setKeyText("wkk_key_03", "ง");
					setKeyText("wkk_key_04", "ฉ");
					setKeyText("wkk_key_05", "ซ"); 
					setKeyText("wkk_key_10", "ญ");
					setKeyText("wkk_key_11", "ฏ");
					setKeyText("wkk_key_12", "ฑ");
					setKeyText("wkk_key_13", "ณ");
					setKeyText("wkk_key_14", "ต");
					setKeyText("wkk_key_15", "ท");
					setKeyText("wkk_key_20", "น");
					setKeyText("wkk_key_21", "ป");
					setKeyText("wkk_key_22", "ฝ");
					setKeyText("wkk_key_23", "ฟ");
					setKeyText("wkk_key_24", "ม");
					setKeyText("wkk_key_25", "ร");
					setKeyText("wkk_key_30", "ว");
					setKeyText("wkk_key_31", "ษ");
					setKeyText("wkk_key_32", "ห");
					setKeyText("wkk_key_33", "อ");
					setKeyText("wkk_key_34", "อะ");
					setKeyText("wkk_key_35", "อิ");
					setKeyText("wkk_key_40", "อึ");
					setKeyText("wkk_key_41", "อุ");
					setKeyText("wkk_key_42", "เอ");
					setKeyText("wkk_key_43", "โอ");
					setKeyText("wkk_key_44", "ฤ");
					setKeyText("wkk_key_45", "ฦ");
					setKeyText("wkk_key_50", "อำ");
					setKeyText("wkk_key_51", "ไอ");
					setKeyText("wkk_key_52", "อ้");
					setKeyText("wkk_key_53", "อ๋");				 
					break; 			
				case 11:                        
					stIdx = 12;                   
					setInnerHtml("wkk_key_62", 'ออฯ');     
					doHighlight("wkk_key_62");       
					setKeyText("wkk_key_00", "ๆ");
					setKeyText("wkk_key_01", "อ์");
					setKeyText("wkk_key_02", "ข");
					setKeyText("wkk_key_03", "ค");
					setKeyText("wkk_key_04", "ฆ"); 
					setKeyText("wkk_key_05", "จ");
					setKeyText("wkk_key_10", "ช");
					setKeyText("wkk_key_11", "ฌ");
					setKeyText("wkk_key_12", "ฎ");
					setKeyText("wkk_key_13", "ฐ");
					setKeyText("wkk_key_14", "ฒ");
					setKeyText("wkk_key_15", "ด");
					setKeyText("wkk_key_20", "ถ");
					setKeyText("wkk_key_21", "ธ");
					setKeyText("wkk_key_22", "บ");
					setKeyText("wkk_key_23", "ผ");
					setKeyText("wkk_key_24", "พ");
					setKeyText("wkk_key_25", "ภ");
					setKeyText("wkk_key_30", "ย");
					setKeyText("wkk_key_31", "ล");
					setKeyText("wkk_key_32", "ศ");
					setKeyText("wkk_key_33", "ส");
					setKeyText("wkk_key_34", "ฬ");
					setKeyText("wkk_key_35", "ฮ");
					setKeyText("wkk_key_40", "อา");
					setKeyText("wkk_key_41", "อี");
					setKeyText("wkk_key_42", "อื");
					setKeyText("wkk_key_43", "อู");
					setKeyText("wkk_key_44", "แอ");
					setKeyText("wkk_key_45", "อั");
					setKeyText("wkk_key_50", "ฤา");
					setKeyText("wkk_key_51", "ฦา");
					setKeyText("wkk_key_52", "ใอ");
					setKeyText("wkk_key_53", "อ่");
					break;
					case 12:                        
					stIdx = 10;                   
					setInnerHtml("wkk_key_62", 'กฃฅ')
					doHighlight("wkk_key_62");          
					setKeyText("wkk_key_00", "อ๊");
					setKeyText("wkk_key_01", "อ็");
					setKeyText("wkk_key_02", "ฯ");
					setKeyText("wkk_key_03", " ");
					setKeyText("wkk_key_04", " "); 
					setKeyText("wkk_key_05", " ");
					setKeyText("wkk_key_10", " ");
					setKeyText("wkk_key_11", " ");
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

			setInnerHtml("wkk_key_61", "THA");	//Lang Toggle
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
					setKeyText("wkk_key_22", "฿");
					setKeyText("wkk_key_23", "^");
					setKeyText("wkk_key_24", "~");
					setKeyText("wkk_key_25", "?");
					setKeyText("wkk_key_30", "!");
					setKeyText("wkk_key_31", "\'");
					setKeyText("wkk_key_32", "\"");
					setKeyText("wkk_key_33", "(");
					setKeyText("wkk_key_34", ")");
					setKeyText("wkk_key_35", "-");
					setKeyText("wkk_key_40", "#");
					setKeyText("wkk_key_41", ":");
					setKeyText("wkk_key_42", ";");
					setKeyText("wkk_key_43", "+");
					setKeyText("wkk_key_44", "&");
					setKeyText("wkk_key_45", "*");
					setKeyText("wkk_key_50", "<");	
					setKeyText("wkk_key_51", ">");
					setKeyText("wkk_key_52", "[");
					setKeyText("wkk_key_53", "]");
				break;
				case 21:
					chIdx = 20;
					setInnerHtml("wkk_key_63", '12;'); 
					doHighlight("wkk_key_63");
					setKeyText("wkk_key_00", "=");
					setKeyText("wkk_key_01", "\{");
					setKeyText("wkk_key_02", "\}");
					setKeyText("wkk_key_03", "\,");
					setKeyText("wkk_key_04", "\§");
					setKeyText("wkk_key_05", "\%");
					setKeyText("wkk_key_10", "\¿");
					setKeyText("wkk_key_11", "\¡");
					setKeyText("wkk_key_12", "\€");
					setKeyText("wkk_key_13", "\£");
					setKeyText("wkk_key_14", "\$");
					setKeyText("wkk_key_15", "\¥");
					setKeyText("wkk_key_20", "￦");  
					setKeyText("wkk_key_21", "＼");  
					setKeyText("wkk_key_22", "|");  
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
		STYLE_LABEL = 'กขค';
		if(gubun == 'lang'){	
			stIdx = 11;
			setInnerHtml("wkk_key_100", 'กขค');				
			setKeyText("wkk_key_001", "ก");    
			setKeyText("wkk_key_002", "ข");   
			setKeyText("wkk_key_003", "ค");   
			setKeyText("wkk_key_004", "ฆ");   
			setKeyText("wkk_key_005", "ง");   
			setKeyText("wkk_key_006", "จ");    
			setKeyText("wkk_key_007", "ฉ");   
			setKeyText("wkk_key_008", "ช");    
			setKeyText("wkk_key_009", "ซ");    
			setKeyText("wkk_key_010", "ญ");    
			setKeyText("wkk_key_011", "ฎ");   
			setKeyText("wkk_key_012", "ฏ");    
			setKeyText("wkk_key_013", "ฐ");    
			setKeyText("wkk_key_101", "ฑ");   
			setKeyText("wkk_key_102", "ฒ");   
			setKeyText("wkk_key_103", "ณ");   
			setKeyText("wkk_key_104", "ด");   
			setKeyText("wkk_key_105", "ต");    
			setKeyText("wkk_key_106", "ถ");    
			setKeyText("wkk_key_107", "ท");   
			setKeyText("wkk_key_108", "ธ");   
			setKeyText("wkk_key_109", "น");   
			setKeyText("wkk_key_110", "บ");  
			setKeyText("wkk_key_111", "ป");  
			setKeyText("wkk_key_112", "ผ");  
			setKeyText("wkk_key_113", "ฝ");  
			setKeyText("wkk_key_201", "พ");  
			setKeyText("wkk_key_202", "ฟ");  
			setKeyText("wkk_key_203", "ภ");   
			setKeyText("wkk_key_204", "ม");   
			setKeyText("wkk_key_210", "ย");   
			setKeyText("wkk_key_211", "ร");   
			setKeyText("wkk_key_212", "ล");   
			setKeyText("wkk_key_213", "ว");		
		}else if(gubun == 'sl')	{
			switch(stIdx){
			case 10:
				stIdx = 11;
				setInnerHtml("wkk_key_100", 'กขค');	
				doHighlight("wkk_key_100");
				setKeyText("wkk_key_001", "ก");    
				setKeyText("wkk_key_002", "ข");   
				setKeyText("wkk_key_003", "ค");   
				setKeyText("wkk_key_004", "ฆ");   
				setKeyText("wkk_key_005", "ง");   
				setKeyText("wkk_key_006", "จ");    
				setKeyText("wkk_key_007", "ฉ");   
				setKeyText("wkk_key_008", "ช");    
				setKeyText("wkk_key_009", "ซ");    
				setKeyText("wkk_key_010", "ญ");    
				setKeyText("wkk_key_011", "ฎ");   
				setKeyText("wkk_key_012", "ฏ");    
				setKeyText("wkk_key_013", "ฐ");    
				setKeyText("wkk_key_101", "ฑ");   
				setKeyText("wkk_key_102", "ฒ");   
				setKeyText("wkk_key_103", "ณ");   
				setKeyText("wkk_key_104", "ด");   
				setKeyText("wkk_key_105", "ต");    
				setKeyText("wkk_key_106", "ถ");    
				setKeyText("wkk_key_107", "ท");   
				setKeyText("wkk_key_108", "ธ");   
				setKeyText("wkk_key_109", "น");   
				setKeyText("wkk_key_110", "บ");  
				setKeyText("wkk_key_111", "ป");  
				setKeyText("wkk_key_112", "ผ");  
				setKeyText("wkk_key_113", "ฝ");  
				setKeyText("wkk_key_201", "พ");  
				setKeyText("wkk_key_202", "ฟ");  
				setKeyText("wkk_key_203", "ภ");   
				setKeyText("wkk_key_204", "ม");   
				setKeyText("wkk_key_210", "ย");   
				setKeyText("wkk_key_211", "ร");   
				setKeyText("wkk_key_212", "ล");   
				setKeyText("wkk_key_213", "ว");		
				break;
			case 11:
				stIdx = 10;
			//	alert("thai vowl :: "+ " ู" + "      ิ" +  "        ั" + "      ะ" +  "์"); 
				setInnerHtml("wkk_key_100", 'เ ไ โ');	
				doHighlight("wkk_key_100");							
				setKeyText("wkk_key_001", "ศ");     
				setKeyText("wkk_key_002", "ษ์");    
				setKeyText("wkk_key_003", "ส");     
				setKeyText("wkk_key_004", "ห");     
				setKeyText("wkk_key_005", "ฬ");     
				setKeyText("wkk_key_006", "อ");     
				setKeyText("wkk_key_007", "ฮ");     
				setKeyText("wkk_key_008", "ะ");     
				setKeyText("wkk_key_009", "า");     
				setKeyText("wkk_key_010", "ิ");     
				setKeyText("wkk_key_011", "ี");     
				setKeyText("wkk_key_012", "ึ");     
				setKeyText("wkk_key_013", "ื");     
				setKeyText("wkk_key_101", "ุ");     
				setKeyText("wkk_key_102", "ู");     
				setKeyText("wkk_key_103", "เ");     
				setKeyText("wkk_key_104", "แ");     
				setKeyText("wkk_key_105", "โ");     
				setKeyText("wkk_key_106", "ั");     
				setKeyText("wkk_key_107", "ฤ");     
				setKeyText("wkk_key_108", "ฤา");     
				setKeyText("wkk_key_109", "ฦ");     
				setKeyText("wkk_key_110", "ฦา");     
				setKeyText("wkk_key_111", "ำ");     
				setKeyText("wkk_key_112", "ใ");    
				setKeyText("wkk_key_113", "ไ");    
				setKeyText("wkk_key_201", "ๆ");    
				setKeyText("wkk_key_202", "ฯ");    
				setKeyText("wkk_key_203", "่");    
				setKeyText("wkk_key_204", "่");    
				setKeyText("wkk_key_210", "๊");    
				setKeyText("wkk_key_211", "๋");    
				setKeyText("wkk_key_212", "็");    
				setKeyText("wkk_key_213", "์");    
				break;
				} 
			} else if (gubun == 'ch') {
			chTggIdx++;
			if(chTggIdx == 1){
						lagnTogglIdx = lagnTogglIdx -1;
			}	

			setInnerHtml("wkk_key_61", "THA");	//Lang Toggle
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
				setKeyText("wkk_key_102", "฿"); 
				setKeyText("wkk_key_103", "^"); 
				setKeyText("wkk_key_104", "~"); 
				setKeyText("wkk_key_105", "?"); 
				setKeyText("wkk_key_106", "!");
				setKeyText("wkk_key_107", "\'");
				setKeyText("wkk_key_108", "\""); 
				setKeyText("wkk_key_109", "("); 
				setKeyText("wkk_key_110", ")"); 
				setKeyText("wkk_key_111", "-"); 
				setKeyText("wkk_key_112", ":"); 
				setKeyText("wkk_key_113", ";"); 
				setKeyText("wkk_key_201", "+"); 
				setKeyText("wkk_key_202", "&"); 
				setKeyText("wkk_key_203", "%"); 
				setKeyText("wkk_key_204", "*"); 
				setKeyText("wkk_key_210", "<");	
				setKeyText("wkk_key_211", ">"); 
				setKeyText("wkk_key_212", "["); 
				setKeyText("wkk_key_213", "]"); 
				break;
			case 21:
				chIdx = 20;
				setInnerHtml("wkk_key_200", '12;)'); 
				doHighlight("wkk_key_200");
				setKeyText("wkk_key_001", "=");
				setKeyText("wkk_key_002", "{");
				setKeyText("wkk_key_003", "}");
				setKeyText("wkk_key_004", ",");
				setKeyText("wkk_key_005", "§");
				setKeyText("wkk_key_006", "#");
				setKeyText("wkk_key_007", "¿");
				setKeyText("wkk_key_008", "¡");
				setKeyText("wkk_key_009", "€");
				setKeyText("wkk_key_010", "£");
				setKeyText("wkk_key_011", "$");
				setKeyText("wkk_key_012", "¥");
				setKeyText("wkk_key_013", "￦");  
				setKeyText("wkk_key_101", "＼");  
				setKeyText("wkk_key_102", "|");  
				setKeyText("wkk_key_103", "ฃ");
				setKeyText("wkk_key_104", "ฅ");
				setKeyText("wkk_key_105", "ฌ");
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