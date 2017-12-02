/* playlist.js */

$(function(){
	init();
});

function init() {
	$("#addButton").click(handleButtonClick);
	
	loadPlaylist();
}

function handleButtonClick(e) {
	var songName = $("#songTextInput").val();
	if (songName == "") {
		alert("Ingrese una cancion");
	}
	else {
		$("#playlist").append('<li><label>'+songName+' </label><input type="button" id="'+songName+'" class="removeSong" style="float: right" value="Remover" onclick="removeSongHandler(&quot;'+songName+'&quot;)"></li>');
		save(songName);
		$("#songTextInput").val("");
	}
}

function removeSongHandler(song) {
	var songName = song;
	if (songName != "") {
		removeSong(songName);
		loadPlaylist();
	}
	
}



