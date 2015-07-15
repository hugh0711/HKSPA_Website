
/**
 * key board page count
 */
var pageCnt = 3;

/**
 * label string seting
 */
var OK_BUTTON_LABEL = "OK";
var CANCEL_BUTTON_LABEL = "CANCEL";
var TITLE_LABEL = "TITLE";
var DESC_LABEL = "DESC";

/**
 * initialize keyboard data, for example set mini popup characters and so on.
 * @return
 */
function initialize() {
	
}

/**
 * return page idx change button label
 * @return
 */
function getPageHtml(isFocus) {
	
}

/**
 * return isHighLightable key?? except 'space', 'back space','switch page', 'ok', 'cancel' key 
 * @param curPageIdx
 * @param keyId
 * @return true/false
 */
function isHighlightableKey(curPageIdx, keyId) {
	
}
/**
 * return has black background.
 * @param curPageIdx
 * @param keyId
 * @return true/false
 */
function isBlackKey(curPageIdx, keyId) {
	
}

/**
 * return keyId after arrow key pressed.
 * @param keyId
 * @param keyCode
 * @return next keyId or null
 */
function getNextKeyId(curPageIdx, keyId, keyCode) {

}

/**
 * Numeric key display on screen.
 * @param currPageIdx
 * @return truel/false
 */
function isNumericKeyActivated(currPageIdx) {
	
}

/**
 * action that ok button pressed 
 * @return
 */
function executeOK() {
	
}

/**
 * action that cancel button pressed 
 * @return
 */
function executeCancel() {
	
}

/**
 * change key values
 * @return
 */
function changeKeyValue() {
	
}

/**
 * add space to textbox's content
 * @return
 */
function addSpaceText() {
	
}

/**
 * backspace text
 * @return
 */
function backspaceText() {
	
}

/**
 * append text
 * @param val
 * @return
 */
function appendText(val) {
	
}

/**
 * pre processing define when key pressed (for combination charset ex> hangle)
 * @param nMode
 * @return
 */
function setNewMode(nMode) {
	
}