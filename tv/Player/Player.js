var Player = {
	plugin : null,
	state : -1,
	skipState : -1,
	stopCallback : null, /* Callback function to be set by client */
	originalSource : null,

	STOPPED : 0,
	PLAYING : 1,
	PAUSED : 2,
	FORWARD : 3,
	REWIND : 4,

	pluginObject3D : null,
	is3DVideo : false
}

Player.init = function(path, is3D) {
	var success = true;
	var m = getMedia();
	if(m != null) {
		m.onPlayStateChange = onPlayStateChange;
	}
	// alert("success vale : " + success);
	this.state = this.STOPPED;
	this.is3DVideo = is3D;
	
	console.log("Player.init");

	var Device = document.getElementById("device");
	if (is3D) {
		if ( Device.support3DMode.side_by_side ) {
			this.plugin = document.getElementById("pluginPlayer");	
		} else {
			this.plugin = document.getElementById("pluginPlayer");
		}
				
	} else {
		this.plugin = document.getElementById("pluginPlayer");
	}
	this.plugin.data = path;
	console.log("Movie 3d mode after init ?" + this.plugin.getAttribute("mode3D"));
	console.log("this.is3DVideo : " + this.is3DVideo);
	tmOut = setInterval("refresh();", 1000);
	m.onBuffering = processBufferingFunction;
	return success;
}

Player.deinit = function() {
	console.log("Player deinit !!! ");
	document.getElementById("loadingIcon").style.visibility = "hidden";
	if (this.plugin) {
		this.plugin.Stop();
	}
		clearInterval(tmOut);
}

Player.setWindow = function() {
	this.plugin.SetDisplayArea(85, 40, 480, 360);
}

Player.setFullscreen = function() {
	this.plugin.SetDisplayArea(0, 0, 960, 540);
}

Player.setVideoURL = function(url) {
	var patt = /\.mp4/i;
	if (url != "" && url != null && url.match(patt)) {
		this.url = url;
	} else {
		this.url = null;
	}

	// testing

	// this.url = "./Sizzle3D.mp4";
}

Player.playVideo = function() {
	console.log(this.plugin.data);
	//console.log(document.getElementById("playTimeCur").innerHTML);
	
	console.log(this.plugin.data);
	
	

	if (this.plugin.data == null) {
		console.log("No videos to play");
		Display.showStatus("The Video URL is invalid");
	} else {
		var nRtn_3D = 0;

		console.log("Ready to play");
		this.plugin.play(1);
		console.log("play");
		this.state = this.PLAYING;
		Main.switchMenuBar(Main.NAVI_STOP);
		
		
		
	}
	

}
function refresh(){
	var m = getMedia();
	var playTime = m.playTime;
	var currentPosition = m.playPosition;
	console.log("playTime: "+playTime);
	console.log("currentPosition: "+playTime);
	document.getElementById("playTimeCur").innerHTML = getTimeText(currentPosition);
	document.getElementById("playTimeTotal").innerHTML = "/ "+getTimeText(playTime);
	
	
	
}
function onPlayStateChange() {
	var media = getMedia();
	var playState = media.playState;
	if(playState == 5) {
		//when media terminated.?
		document.getElementById("loadingIcon").style.visibility = "hidden";
	} else if(playState==1) {
		//when media start ?
		document.getElementById("loadingIcon").style.visibility = "hidden";
	} else if(playState == 4) {
		//buffring
		document.getElementById("loadingIcon").style.visibility = "visible";
	} else if(playState == 0) {
		
	}
}
function processBufferingFunction(isStarted) {
	var media = getMedia();
	var playInfo = media.mediaPlayInfo();
	var duration = playInfo.duration/1000;
	var bufRemain = playInfo.bufRemain/1000;
	
	}
Player.pauseVideo = function() {
	console.log("HELLO");
	Main.switchMenuBar(Main.NAVI_PLAY);
	this.state = this.PAUSED;
	/*
	 * document.getElementById("play").style.opacity = '1.0';
	 * document.getElementById("stop").style.opacity = '1.0';
	 * document.getElementById("pause").style.opacity = '0.2';
	 * document.getElementById("forward").style.opacity = '0.2';
	 * document.getElementById("rewind").style.opacity = '0.2';
	 */
	//PlayerDisplay.status("Pause");
	this.plugin.play(0);
}

Player.stopVideo = function() {
	if (this.state != this.STOPPED) {
		this.state = this.STOPPED;
		/*
		 * document.getElementById("play").style.opacity = '1.0';
		 * document.getElementById("stop").style.opacity = '0.2';
		 * document.getElementById("pause").style.opacity = '0.2';
		 * document.getElementById("forward").style.opacity = '0.2';
		 * document.getElementById("rewind").style.opacity = '0.2';
		 */
		//PlayerDisplay.status("Stop");
		this.plugin.Stop();
//		PlayerDisplay.setTime(0);
//
		if (this.stopCallback) {
			this.stopCallback();
		}
	} else {
		console.log("Ignoring stop request, not in correct state");
	}
}

Player.resumeVideo = function() {
	Main.switchMenuBar(Main.NAVI_STOP);
	this.state = this.PLAYING;
	/*
	 * document.getElementById("play").style.opacity = '0.2';
	 * document.getElementById("stop").style.opacity = '1.0';
	 * document.getElementById("pause").style.opacity = '1.0';
	 * document.getElementById("forward").style.opacity = '1.0';
	 * document.getElementById("rewind").style.opacity = '1.0';
	 */
	//PlayerDisplay.status("Play");
	this.plugin.play(1);
}

Player.skipForwardVideo = function() {
	this.skipState = this.FORWARD;
	console.log("skipForwardVideo.this.plugin.playPosition" + this.plugin.playPosition);
	this.plugin.seek(this.plugin.playPosition + 5000);
}

Player.skipBackwardVideo = function() {
	this.skipState = this.REWIND;
	console.log("skipBackwardVideo.this.plugin.playPosition" + this.plugin.playPosition);
	this.plugin.seek(this.plugin.playPosition - 5000);
}

Player.getState = function() {
	return this.state;
}

// Global functions called directly by the player

Player.onBufferingStart = function() {
	PlayerDisplay.status("Buffering...");
	switch (this.skipState) {
	case this.FORWARD:
		/*
		 * document.getElementById("forward").style.opacity = '0.2';
		 */
		break;

	case this.REWIND:
		/*
		 * document.getElementById("rewind").style.opacity = '0.2';
		 */
		break;
	}
}

Player.onBufferingProgress = function(percent) {
	PlayerDisplay.status("Buffering:" + percent + "%");
	Display.showStatus(Display.POPUP_TEXT_LOADING + percent + "%");
}

Player.onBufferingComplete = function() {
	PlayerDisplay.status("Play");
	switch (this.skipState) {
	case this.FORWARD:
		// document.getElementById("forward").style.opacity = '1.0';
		break;

	case this.REWIND:
		// document.getElementById("rewind").style.opacity = '1.0';
		break;
	}
}

Player.setCurTime = function(time) {
	PlayerDisplay.setTime(time);
}

Player.setTotalTime = function() {
	PlayerDisplay.setTotalTime(Player.plugin.GetDuration());
}

onServerError = function() {
	PlayerDisplay.status("Server Error!");
}

OnNetworkDisconnected = function() {
	PlayerDisplay.status("Network Error!");
}

getBandwidth = function(bandwidth) {
	alert("getBandwidth " + bandwidth);
}

onDecoderReady = function() {
	alert("onDecoderReady");
}

onRenderError = function() {
	alert("onRenderError");
}

stopPlayer = function() {
	Player.stopVideo();
}

setTottalBuffer = function(buffer) {
	alert("setTottalBuffer " + buffer);
}

setCurBuffer = function(buffer) {
	alert("setCurBuffer " + buffer);
}
 getMedia = function() {
	 console.log("getMedia");
	return document.getElementById("pluginPlayer");
}
getTimeText = function (t) {
	console.log("getTimeText,Time: "+t);
	var pt = new Number(t) / 1000;
	var hh = Math.floor(pt / 3600);
	var mm = Math.floor((pt % 3600) / 60);
	var ss = Math.floor(pt % 60);
	return "" + (hh < 10 ? "0"+hh : hh) + ":"+ (mm < 10 ? "0"+mm : mm) +":"+ (ss < 10 ? "0"+ss : ss);
}
Player.setInnerHtml = function(elementId, html) {
	console.log("elementId: "+ elementId);
	console.log("elementId: "+ document.getElementById("navi").innerHTML);
	var e = document.get.getElementById(elementId);
	console.log("elementId2: "+ e);
	if(e != null) {
		console.log("setInnerHtml: "+ html);
		e.innerHTML = html;
	}
};