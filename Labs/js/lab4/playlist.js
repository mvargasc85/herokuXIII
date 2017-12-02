/* playlist.js */

$(function(){
	loadArtistData();
	loadSongsListData();
	init();
});

function init() {
	
	$("#addSongToPlaylistBtn").click(AddSongToPlayList);
	$("#addArtistBtn").click(ShowAddArtist);
	$("#addSongBtn").click(ShowAddSong);
	$("#cancelAddArtist").click(function(){
		$("#addArtistDiv").dialog('close');
		
	});
	$("#showSavePlaylistButton").click(ShowSavePlayList);
	$("#savePlaylistBtn").click(SavePlayListData);
	loadPlaylist();
}

function ShowAddArtist(){
	$("#container").css("opacity","0.4");
	$("#addArtistDiv").dialog({
		resizable: false,
		height: "auto",
		width: 360,
		modal: true,
		close: function( event, ui ) {
			$("#container").css("opacity","1");
		}
	});
	
}


function ShowAddSong(){
	$("#container").css("opacity","0.4");
	$("#addSongDiv").dialog({
		resizable: false,
		height: "auto",
		width: 360,
		modal: true,
		close: function( event, ui ) {
			$("#container").css("opacity","1");
		}
	});
	
}

function ShowSavePlayList(){
	$("#container").css("opacity","0.4");
	$("#savePlDiv").dialog({
		resizable: false,
		height: "auto",
		width: 360,
		modal: true,
		close: function( event, ui ) {
			$("#container").css("opacity","1");
		}
	});
	
}


function loadArtistData(){
	
	$.ajax({
		url: '../php/lab4/GetArtists.php',
		type: 'POST',
		success: function(data) {
			$("#artistDiv").html(data);
			$("#artistDiv2").html(data);
		},
		error: function(){
			alert('Error!');
		}
	});
}



function loadSongsListData(){
	
	$.ajax({
		url: '../php/lab4/GetSongsList.php',
		type: 'POST',
		success: function(data) {
			$("#songsCbx").html(data);
		},
		error: function(){
			alert('Error!');
		}
	});
}

function showSongs(id_artista){
	if(id_artista=="")
	{
		$("#songsTbl").hide();
		}else{
		$.ajax({
			url: '../php/lab4/GetSongs.php?q='+ id_artista,
			type: 'POST',
			success: function(data) {
				$("#songsDiv").html(data);
				$("#songsTbl").show();
			},
			error: function(e){
				alert('Error!');
			}
		});
		}
}



function AddSongToPlayList(e) {
	var songId = $("#songsDdl option:selected").val();
	var songName = $("#songsDdl option:selected").text();
	if (songId != "") {
	var li = '<li><label id="'+songId+'">'+songName+' </label><input type="button" id="'+songId+'" class="removeSong" style="float: right" value="Remover" onclick="removeSongHandler(&quot;'+songName+'&quot;)"></li>';
		$("#playlist").append(li);
		save(songName,songId);
		$("#songsDdl").val("");
	}
	}

function removeSongHandler(song) {
	var songName = song;
	if (songName != "") {
		removeSong(songName);
		loadPlaylist();
	}
	
}

function SavePlayListData(){
	
	var data1 ={
		name: $("#playlistnametxt").val(),
		ids: getSongIds()
		}
	$.ajax({
		url: '../php/lab4/SavePlaylist.php',
		type: 'POST',
		data:{songData:data1},
		success: function(data) {
			alert(data);
		},
		error: function(e){
		
		}
	});
}


