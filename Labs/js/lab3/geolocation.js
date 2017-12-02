$(document).ready(function(){
	//findme();
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(exito, error);
		} else {
		error('Navegador no soportado');
	}
});

function exito(position) {
	var s = $('#status');
	if (s.className == 'exito') {
		return;
	}
	
	s.html("Latitud: "+position.coords.latitude+"   Longitud: "+position.coords.longitude + "  D.C.L.");
	s.addClass('exito');
	

	
	var mapcanvas = document.createElement('div');
	mapcanvas.id = 'mapcanvas';
	mapcanvas.style.height = '100%';
	mapcanvas.style.width = '100%';
	document.querySelector('#mapa').appendChild(mapcanvas);
	
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var myOptions = {
		zoom: 15,
		center: latlng,
		mapTypeControl: false,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapcanvas, myOptions);
	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		title:""
	});
}
function error(msg) {
	var s = $('#status');
	s.html(typeof msg == 'string' ? msg : "Error");
	s.removeClass( "exito" ).addClass( "Error" );
}
