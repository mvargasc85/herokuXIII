//playlist_store.js

function save(item,itemId) {
	var playlistArray = getStoreArray("playlist");
	var song={ "name":item, "id":itemId};
	playlistArray.push(song);
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}

function removeSong(item) {
	var playlistArray = getStoreArray("playlist");
	playlistArray = jQuery.grep(playlistArray, function(value) {
		return value.name != item;
	});
	localStorage.setItem("playlist", JSON.stringify(playlistArray));
}


function loadPlaylist() {
	var playlistArray = getSavedSongs();
	$("#playlist").html('');
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			var songId = playlistArray[i].id;
			var songName= playlistArray[i].name;
			var li = '<li><label id="'+songId+'">'+songName+' </label><input type="button" id="'+songId+'" class="removeSong" style="float: right" value="Remover" onclick="removeSongHandler(&quot;'+songName+'&quot;)"></li>';
			$("#playlist").append(li);
			
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


function getSongIds(){
	var playlistArray = getSavedSongs();
	var songIds = new Array();
	if (playlistArray != null) {
		for (var i = 0; i < playlistArray.length; i++) {
			var songId = playlistArray[i].id;
			songIds.push(songId);
			
		}
	}
	return songIds;
}

