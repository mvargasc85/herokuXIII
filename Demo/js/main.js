function showMood() {
	name = document.getElementById('name').value;
	mood = document.getElementById('mood').value;
	
	if(!name || !mood){
		alert("Porfavor llene todos los campos");
	}
	
	if(mood=="happy"){
		face = " :)";
	} else if(mood == "sad") {
		face = " :(";
	} else {
		face = " :|";
	}	
	
	moodString = name+" esta "+mood+" el dia de hoy "+face;
	
	holder = document.getElementById('holder');
	
	holder.innerHTML = moodString;
}

function clearMood(){
	document.getElementById("moodForm").reset();
	holder = document.getElementById('holder');	
	holder.innerHTML = "";	
}

