var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();

var Input  = function(id, previousId, nextId)
{
    var imeReady = function(imeObject)
    {
        installFocusKeyCallbacks();
        installStatusCallbacks();
        Main.ready(id);
    }
    
    var ime = new IMEShell(id, imeReady, 'en');
    var element = document.getElementById( id );
    var previousElement = document.getElementById(previousId);
    var nextElement = document.getElementById(nextId);

    var installFocusKeyCallbacks = function()
    {
        ime.setKeyFunc(tvKey.KEY_UP, function(keyCode) { 
			//element.style.backgroundColor="#002D41";
			//element.style.color="#FFF000";
			//previousElement.style.backgroundColor="#FFFFFF";
			//previousElement.style.color="#000000";
			previousElement.focus(); 
			return false;
		} );
        ime.setKeyFunc(tvKey.KEY_DOWN, function(keyCode) { 
			//element.style.backgroundColor="#002D41";
			//element.style.color="#FFF000";
			nextElement.style.backgroundColor="#FFFFFF";
			nextElement.style.color="#000000";
			nextElement.focus(); 
			return false;
		} );
        //ime.setKeyFunc(tvKey.KEY_RETURN, function(keyCode) {widgetAPI.blockNavigation(event); widgetAPI.sendReturnEvent(); window.location = 'index.html'+window.location.search; return false; } );
		ime.setKeyFunc(tvKey.KEY_RETURN, function(keyCode) {widgetAPI.blockNavigation(event); window.location = 'index.html'+window.location.search; return false; } );
        ime.setKeyFunc(tvKey.KEY_EXIT, function(keyCode) { widgetAPI.sendExitEvent(); return false; } );
    }
    
    var installStatusCallbacks = function()
    {
        ime.setKeypadPos(600, 80);
        ime.setWordBoxPos(18, 6);
		ime.setAnyKeyFunc(onAnyKey);
        ime.setMaxLengthFunc(onMaxLength);
        ime.setPrevEventOnLeftFunc(onLeft);
        ime.setOnCompleteFunc(onComplete);
        ime.setEnterFunc(onEnter);
        ime.setKeyFunc(tvKey.KEY_INFO, onInfoKey);
    }
    
    var onAnyKey = function(keyCode)
    {
       alert("a key pressed");
		if(Display.isStatusShown) {
			Display.hideStatus();
			
			return;
		}
    }
    
    var onMaxLength = function()
    {
        Main.showMessage("Maximum length of input reached in " + element.id + ", text is " + element.value);
		if(Display.isStatusShown) {
			Display.hideStatus();
			
			return;
		}
    }
    
    var onLeft = function()
    {
        Main.showMessage("Left key pressed at start of " + element.id);
		if(Display.isStatusShown) {
			Display.hideStatus();
			
			return;
		}
    }
    
    var onComplete = function()
    {
        Main.showMessage("Letter entry completed in " + element.id + ", text is " + element.value);
		if(Display.isStatusShown) {
			Display.hideStatus();
			
			return;
		}
    }
    
    var onEnter = function(string)
    {
        Main.showMessage("Enter key pressed in " + element.id + ", string is " + string);
		if(Display.isStatusShown) {
			Display.hideStatus();
			
			return;
		}
		var name=document.getElementById("plainText").value;
		var password=document.getElementById("passwordText").value;
		Main.login(name,password);
    }
    
    var onInfoKey = function(keyCode)
    {
		if(Display.isStatusShown) {
			Display.hideStatus();
			
			return;
		}
        Main.showMessage("Info key pressed in " + element.id + ", key code is " + keyCode + ", text is " + element.value);
        ime.setString("Hello world");
        
        return true;
    }
}

var Main =
{
    elementIds : [ "plainText", "passwordText"],
    inputs : [ null, null ],
    ready : [ false, false],
	
	dataReceivedCallback : null,
    XHRObj : null
}

Main.writeToFile = function(name,password) {
	var fs = new FileSystem();
	if (!fs.isValidCommonPath(curWidget.id)) {
		fs.createCommonDir(curWidget.id);
	}

	var keyFilePath = curWidget.id + '/myfile';
	var keyFile = fs.openCommonFile(keyFilePath, 'w');
	keyFile.writeLine('{"username":"'+name+'","password":"'+password+'"}');
	fs.closeCommonFile(keyFile);
}
	
Main.readFromFile = function() {
	var fs = new FileSystem();
	if (!fs.isValidCommonPath(curWidget.id)) {
		fs.createCommonDir(curWidget.id);
	}
	var keyFilePath = curWidget.id + '/myfile';
	var readKeyFile = fs.openCommonFile(keyFilePath, 'r');
	if(readKeyFile){
		var strLine=readKeyFile.readLine();
		alert(strLine);
		var jsonObj = JSON.parse( strLine );
		document.getElementById("plainText").value=jsonObj["username"];
		document.getElementById("passwordText").value=jsonObj["password"];
		var name=document.getElementById("plainText").value;
		var password=document.getElementById("passwordText").value;
		//Main.login(name,password);
	}
}

Main.onLoad = function()
{
    alert("Main.onLoad()");
	
    Main.readFromFile();
	
    this.createInputObjects();
    
    pluginAPI.registIMEKey();
    widgetAPI.sendReadyEvent();
}

Main.onUnload = function()
{
    alert("Main.onUnload()");
}

Main.showMessage = function(message)
{
    alert(message);
}

Main.createInputObjects = function()
{
    for (var index in this.elementIds)
    {
        var previousIndex = index - 1;
        if (previousIndex < 0)
        {   
            previousIndex = Main.inputs.length - 1;
        }
        var nextIndex = (index + 1) % Main.inputs.length;
        alert(nextIndex);
        Main.inputs[index] = new Input( this.elementIds[index], this.elementIds[previousIndex], this.elementIds[nextIndex] );
    }
}

Main.ready = function(id)
{
    var ready = true;
    
    for (var i in Main.elementIds)
    {
        if (Main.elementIds[i] == id)
        {
            Main.ready[i] = true;
        }
        
        if (Main.ready[i] == false)
        {
            ready = false;
        }
    }
    
    if (ready)
    {
        document.getElementById("plainText").focus();
    }
}

Main.login = function(name,password)
{
	//var url="https://web.rsprod.soliton.co/login.php";
	//var dataString="username="+name+"&password="+password+"&version_number=10&device_name=smarttv&device_type=smarttv";
	
	var url='http://majitv.innowil.com/api/login.ashx';
	var dataString= 'user=' + name + '&pwd=' + password;
	var LoginURL='http://majitv.innowil.com/api/login.ashx?user=' + name + '&pwd=' + password;
	
	//widgetAPI.putInnerHTML(document.getElementById("notimsg"), "LOGGING IN...");
	Display.showStatus("登入中...");
    alert(dataString);
	if (this.XHRObj == null)
    {
        this.XHRObj = new XMLHttpRequest();
    }
    
    if (this.XHRObj)
    {
        Main.XHRObj.onreadystatechange = function()
            {
                if (Main.XHRObj.readyState == 4)
                {
					alert("YESSSSSSSS");
				    if (Main.XHRObj.status != 200)
					{
						alert("XML Server Error " + Main.XHRObj.status);
						//Display.status("XML Server Error " + Server.XHRObj.status);
						//widgetAPI.putInnerHTML(document.getElementById("notimsg"), "CONNECTION ERROR");
						Display.showStatus("CONNECTION ERROR");
					}
					else
					{
						alert(Main.XHRObj.responseText);
						var xmlElement = JSON.parse( Main.XHRObj.responseText );
						
						if(xmlElement["status"]){
							//Data.isLogin = true;
							window.name = "true";
							Main.writeToFile(name,password);
							//window.name = xmlElement["data"]["member_id"]+";"+xmlElement["data"]["token"]+";"+xmlElement["data"]["encryption_key"];
							//token,encryption_key
							window.location = 'index.html'+window.location.search;
						}else{
							//widgetAPI.putInnerHTML(document.getElementById("notimsg"), "INVALID PASSWORD");
							Display.showStatus("登入失敗。請檢查輸入資料。");
						}
					}
					
				}
				
            }
            
		var tmpURL = 'http://majitv.innowil.com/api/login.ashx?' + 	dataString;
        this.XHRObj.open("GET", LoginURL, true);
		//this.XHRObj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //this.XHRObj.send(dataString);
		this.XHRObj.send(null);
     }
    else
    {
        alert("Failed to create XHR");
    }
}