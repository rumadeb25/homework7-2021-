var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= .95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	video.playbackRate /= .95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime + 15 < video.duration) {
		console.log("Original location" + video.currentTime);
		video.currentTime = video.currentTime + 15;
	}
	else{
		console.log("Back to begining");
		video.currentTime = 0;
		video.play()
	}
	console.log("New location " + video.currentTime);
	
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = (this.value) + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
	}
});




