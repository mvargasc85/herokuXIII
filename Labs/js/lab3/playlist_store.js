//playlist_store.js

function save(item) {
	var playlistArray = getStoreArray("playlist");
	playlistArray.push(item);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function removeSong(item) {
	var playlistArray = getStoreArray("playlist");
	playlistArray = jQuery.grep(playlistArray, function(value) {
		return value != item;
	});
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function loadPlaylist() {
	var playlistArray = getSavedSongs();
	$("#playlist").html('');
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			$("#playlist").append('<li><label>'+playlistArray[i]+' </label><input type="button" id="'+playlistArray[i]+'"  class="removeSong" style="float: right" value="Remover" onclick="removeSongHandler(&quot;'+playlistArray[i]+'&quot;)"></li>');
		}
	}
}

function getSavedSongs() {
	return getStoreArray("playlist");
}

function getStoreArray(key) {
	var playlistArray = localStorage.getItem(key);
	if (playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	}
	else {
		playlistArray = JSON.parse(playlistArray);
	}
	return playlistArray;
}

