//***Code Is Intellectual Property Of crmmetrix inc.(Copyright 2006).
//***The use os this code is permitted for this project only as per the license agreement.
//***Code Has Been Developed For The Sole Purpose Of crmmetrix inc./afadvisor.org Project.
//***Licensed For crmmetrix inc./afadvisor.org Project.

var st=top.location.href;
//alert(st);
if(st.search(".com")>0)
 {vari=".com";}
else
 {vari=".fr";}

if (st != "http://preprod.suez-env.com/")
{var maindirurlpopcrm="http://www.suez-environnement"+vari+"/sitecrm"}
else
{var maindirurlpopcrm="http://preprod.suez-env.com/sitecrm"}


//-------Declare the intercept rates (Should add up to 100%)
var exit=75;     //Enter percent
var entry=0;    //Enter percent
var nosurvey=25; //Enter percent
//var exiturl=maindirurlpopcrm+"/stealth.htm"; //enter the stealth.htm path
var entryurl=""; //enter the stealth.htm path

var pid="";
var cookieexp=3*24*30;
var wtx=(screen.width);
var htx=(screen.height);
var wtx2=((wtx-457)*0.5);


//Note : To deactivate project assign sniffernet=2;
//The below sniffernet code is to centrally activate,deactivate the project.
//The survey is by default disabled and its only enabled if the site visitor has cookies enabled
//on his system

var sniffernet=1;


//-----------------------------------------------------FUNCTIONS---DO NOT EDIT BELOW THIS
function writeCookie(name, value, hours)
{
  var expire = "";
  if(hours != null)
  {
    expire = new Date((new Date()).getTime() + hours * 3600000);
    expire = "; expires=" + expire.toGMTString();
  }
  document.cookie = name + "=" + escape(value) + expire +";path=/;";
}


function readCookie(name)
{
  var cookieValue = "";
  var search = name + "=";
  if(document.cookie.length > 0)
  { 
    offset = document.cookie.indexOf(search);
    if (offset != -1)
    { 
      offset += search.length;
      end = document.cookie.indexOf(";", offset);
      if (end == -1) end = document.cookie.length;
      cookieValue = unescape(document.cookie.substring(offset, end))
    }
  }
  return cookieValue;
}

function GetParam(name)
{
  var start=location.search.indexOf("?"+name+"=");
  if (start<0) start=location.search.indexOf("&"+name+"=");
  if (start<0) return '';
  start += name.length+2;
  var end=location.search.indexOf("&",start)-1;
  if (end<0) end=location.search.length;
  var result=location.search.substring(start,end);
  var result='';
  for(var i=start;i<=end;i++) {
    var c=location.search.charAt(i);
    result=result+(c=='+'?' ':c);
  }
  return unescape(result);
}


//------To block the survey for people who are visiting from http://video.msn.com/v/us/v.htm,www.fusionamerica.com/zsitecrm.asp

writeCookie("crm_cookieEnabled","1",20);	//writing cookie to check if cookies are enabled or disabled.
var cookieEnabled=readCookie("crm_cookieEnabled");	//reading the cookie value to see if cookie is written or not.

if(cookieEnabled=="1")
{

	//-------Determining whether this is the first visit to tagged page. Tracking the referer url.
	var visitctr=readCookie("ctr");
		
	if (visitctr!="1")
	{
		//-------Capturing Referring URL
		if (document.referrer&&document.referrer!="")
		{
			writeCookie("refer",document.referrer,20);			
		}
		writeCookie("ctr","1",20);
	}

}
else
{
	sniffernet=2;
}

//--------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------- DO NOT EDIT -----------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------

function hideAd(divId) 

{ 
	if (document.layers) document.layers[divId].visibility = 'hide';
	else if (document.all) document.all[divId].style.visibility = 'hidden';
	else if (document.getElementById) document.getElementById(divId).style.visibility = 'hidden';
	//writeCookie("crmseen","seen",24);
}

function showAd(divId) 
{ 
	if (document.layers) document.layers[divId].visibility = 'show';
	else if (document.all) document.all[divId].style.visibility = 'visible';
	else if (document.getElementById) document.getElementById(divId).style.visibility = 'visible';
	//writeCookie("crmseen","seen",24);
}

function create(divId) 
{ 
	if (document.layers) document.layers[divId].visibility = 'show';
	else if (document.all) document.all[divId].style.visibility = 'visible';
	else if (document.getElementById) document.getElementById(divId).style.visibility = 'visible';
	//writeCookie("crmseen","seen",24);
}

function adDown(divId) 
{ 
	state=typeof topPos;
	var fposi;
	if (divId=='bg')
	{
	fposi=0;
	}
	else
	{
	fposi=80;
	}

	if(state=='undefined') {topPos=-440;}
	if(topPos < fposi)
	{ 
		topPos+=40;
		if (document.layers)
		{
			document.layers[divId].top = topPos;
		}
		else
		{
			if(document.all)
			{
				document.all[divId].style.top = topPos;
			}
			else
			{
				if(document.getElementById)
				{
					document.getElementById(divId).style.top = topPos;
				}
			}
		}
		
		{setTimeout("adDown('"+divId+"');",5);}
	 }
	/* if(topPos>=80&&divId=='bg')
		   {if (document.all)
			{
				document.all[divId].style.top = 0;
			}
			else
			{
				if(document.getElementById)
				{
					document.getElementById(divId).style.top = 0;
				}
			}
		   }*/
}

function entryfx()
{
	var win2=window.open(entryurl,'entry_survey','top=0,left=0,height='+screen.height*0.4+',width='+screen.width*0.4+',resizable=yes,scrollbars=yes');
	if(win2!=null)
	{
		win2.focus();
		writeCookie("crmseen","seen",cookieexp);
	}
	hideAd('entry_pop');

}

function stealthfx(idx)
{
	var win2=window.open(maindirurlpopcrm+'/stealth'+idx+'.htm','stealth','height=30,width=60,scrollbars=yes,toolbars=no,location=no,resizable=yes');
	if(win2!=null)
	{
		win2.blur();
		writeCookie("crmseen","seen",cookieexp);
	}
	hideAd('stealth_pop');

	window.focus();
}

function crmlinkfx()
{
popupWin = window.open('http://fr.crmmetrix.com/','open_window','menubar, toolbar, location, directories, status, scrollbars, resizable, dependent, width=640, height=480, left=100, top=100')
}



function nosurveyfx(divId)
{
	hideAd(divId);
	writeCookie("crmseen","seen",20*24);
}


 var thiscookie=readCookie("crmseen");



if (parseInt(navigator.appVersion) >= 4 && navigator.javaEnabled()) 
{ 
document.write('<div id="entry_pop" style="">');

document.write('</div>');



document.write('<div id="stealth_pop" style="">');
document.write('<table id="Tableau_01" width="457" height="370" border="0" cellpadding="0" cellspacing="0">');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_01.png" width="65" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_02.png" width="111" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_03.png" width="109" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_04.png" width="109" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_05.png" width="63" height="53"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_06.png" width="65" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_07.png" width="111" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_08.png" width="109" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_09.png" width="109" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_10.png" width="63" height="53"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_11.png" width="65" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_12.png" width="111" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_13.png" width="109" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_14.png" width="109" height="53"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_15.png" width="63" height="53"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_16.png" width="65" height="52"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_17.png" width="111" height="52"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_18.png" width="109" height="52"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_19.png" width="109" height="52"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_20.png" width="63" height="52"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_21.png" width="65" height="60"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_22.png" width="111" height="60"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_23.png" width="109" height="60"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_24.png" width="109" height="60"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_25.png" width="63" height="60"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_26.png" width="65" height="26"></td>');
document.write('<td><a href="javascript:stealthfx(\'fr\')"><img src="'+maindirurlpopcrm+'/images/pinSuzE_27.png" width="111" height="26" border="0"></a></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_28.png" width="109" height="26"></td>');
document.write('<td><a href="javascript:stealthfx(\'en\')"><img src="'+maindirurlpopcrm+'/images/pinSuzE_29.png" width="109" height="26" border="0"></a></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_30.png" width="63" height="26"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_31.png" width="65" height="14"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_32.png" width="111" height="14"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_33.png" width="109" height="14"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_34.png" width="109" height="14"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_35.png" width="63" height="14"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_36.png" width="65" height="29"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_37.png" width="111" height="29"></td>');
document.write('<td><a href="javascript:nosurveyfx(\'stealth_pop\');">	<img src="'+maindirurlpopcrm+'/images/pinSuzE_38.png" width="109" height="29" border="0"></a></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_39.png" width="109" height="29"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_40.png" width="63" height="29"></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_41.png" width="65" height="30"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_42.png" width="111" height="30"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_43.png" width="109" height="30"></td>');
document.write('<td><img src="'+maindirurlpopcrm+'/images/pinSuzE_44.png" width="109" height="30"></td>');
document.write('<td><a href="javascript:crmlinkfx();"><img src="'+maindirurlpopcrm+'/images/pinSuzE_45.png" width="63" height="30" border="0"></a></td>');
document.write('</tr>');
document.write('</table>');
document.write('</div>');



  if (document.layers) document.layers.entry_pop.left = 10;
  else if (document.all) document.all.entry_pop.style.left = 10;
  else if (document.getElementById) document.getElementById("entry_pop").style.left = 10;
  
  if (document.layers) document.layers.entry_pop.zIndex = 1000;
  else if (document.all) document.all.entry_pop.style.zIndex = 1000;
  else if (document.getElementById) document.getElementById("entry_pop").style.zIndex = 1000;
  
  if (document.layers) document.layers.stealth_pop.left = 10;
  else if (document.all) document.all.stealth_pop.style.left = 10;
  else if (document.getElementById) document.getElementById("stealth_pop").style.left = 10;
  
  if (document.layers) document.layers.stealth_pop.zIndex = 1000;
  else if (document.all) document.all.stealth_pop.style.zIndex = 1000;
  else if (document.getElementById) document.getElementById("stealth_pop").style.zIndex = 1000;


 hideAd('entry_pop')
 hideAd('stealth_pop') 

}
//--------------------------------------------Floating code------------------------------------------------------------------------------------
//--------------------------------------------Pl do not modify it------------------------------------------------------------------------------------

var ns = (navigator.appName.indexOf("Netscape") != -1);
var d = document;
function JSFX_FloatDiv(id, sx, sy)
{
	var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
	var px = document.layers ? "" : "px";
	window[id + "_obj"] = el;
	if(d.layers)el.style=el;
	el.cx = el.sx = sx;el.cy = el.sy = sy;
	el.sP=function(x,y){this.style.left=x+px;this.style.top=y+px;};

	el.floatIt=function()
	{
		var pX, pY;
		pX = (this.sx >= 0) ? 0 : ns ? innerWidth : 
		document.documentElement && document.documentElement.clientWidth ? 
		document.documentElement.clientWidth : document.body.clientWidth;
		pY = ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ? 
		document.documentElement.scrollTop : document.body.scrollTop;
		if(this.sy<0) 
		pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ? 
		document.documentElement.clientHeight : document.body.clientHeight;
		this.cx += (pX + this.sx - this.cx)/8;this.cy += (pY + this.sy - this.cy)/8;
		this.sP(this.cx, this.cy);
		setTimeout(this.id + "_obj.floatIt()", 40);
	}
	return el;
}


//------------------------------------------------------End of floating code----------------------------------------------------------------------

if (sniffernet==1)
{
	timerfx();
	//document.write("<img id='imgx' height='0' width='0'>");

}

//Timer function
// to declare timer example - for 10 minutes assign secs = 600
var secs = 6;
var timerID = null;
var timerRunning = false;
var delay = 1000;

function timerfx()
{ 
	if (secs==0)
    {
        if(timerRunning)
        clearTimeout(timerID);
    	timerRunning = false;
		recontact_crmfx();
		window.onerror=null;
    }
    else
    {
        //self.status = secs;
        secs = secs - 1;
        timerRunning = true;
        timerID = self.setTimeout("timerfx()", delay);
    }
}


function recontact_crmfx()
{

	//Browser Sniffer
	var agt=navigator.userAgent.toLowerCase();
	var client=(agt.indexOf("msie"));

	//reading popseen cookie to make sure the user hasn't taken the survey within past 6 months
	var thiscookie=readCookie("crmseen");
	if(thiscookie!="seen")
	{

		//***Random Number Generated For Control Sample / Test Sample.
		rndNumber=readCookie("rndNumber");
			var x;
			x=Math.random()*100;
			//writeCookie("rndNumber",x,1);
		//alert(x);
		
		//****************
		//***Entry Survey Interception Rate. (30% Interception Rate)		
		if (x<=entry)
		{
			
			showAd('entry_pop');
			adDown('entry_pop');
			JSFX_FloatDiv("entry_pop", wtx2,150).floatIt();
			imgfx('entry');
			
		}
	
			if (x>(100-exit))
		{
			showAd('stealth_pop');
			adDown('stealth_pop');
			JSFX_FloatDiv("stealth_pop", wtx2,150).floatIt();
			imgfx('exit');
			//imgfx('exit=1');
		}

		if (x>entry && x<=(100-exit))
		{
			//writing cookie which expires in 20 hrs
			writeCookie("crmseen","seen",20*24);
		}
		
	}
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------- CRMMETRIX TRACKING CODES - DO NOT MODIFY ------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------------
function imgfx(x)
{
	//document.write("<img src='http://www.crm-metrix.fr/Projects/invitetrack.asp?project=xpopin_colcoscfrq19' height='0' width='0'>");
	//var elem = document.getElementById("imgx");
 	//elem.src = "http://www.crmmetrixnet.com/crmTrack/track.asp?pid="+pid+"&"+x;
	//elem.src = "http://www.crmmetrix.fr/invitetrack.asp?project="+x+"popin_"+pid;
}


function loadStyleSheet(file)
{
	// Create script DOM(Document Object Model) element
	var script = document.createElement('link');
	script.rel = 'stylesheet';
	script.type = 'text/css';
	script.href = file;

	// Alert when the script is loaded
	if (typeof(script.onreadystatechange) == 'undefined') // W3C
		script.onload = function(){ this.onload = null;  };
	else // IE
		script.onreadystatechange = function(){ if (this.readyState != 'loaded' && this.readyState != 'complete') return; this.onreadystatechange = null;  }; // Unset onreadystatechange, leaks mem in IE

	// Add script DOM(Document Object Model) element to document tree
	document.getElementsByTagName('head')[0].appendChild(script);
}

loadStyleSheet(maindirurlpopcrm+"/style2.css");
