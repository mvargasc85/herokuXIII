
$(document).ready(function(){
	createNavMenu();
});



function createNavMenu(){
	var navMenuHtml = '<ul class="nav">'+
					'<li><a href="index.html">Home</a></li>'+
					'<li><a href="#">Products</a></li>'+
					'<li><a href="#">Services</a></li>'+
					'<li><a href="#">Contact</a></li>'+
					'<li><a href="#">Laboratorios</a>'+
						'<ul>'+
							
							'<li><a href="#">Lab 2</a>'+
								'<ul>'+
									'<li><a href="../lab2/index2.html">Index generado con js</a></li>'+
									'<li><a href="#">Graficos y animaciones con 2D / 3D</a></li>'+
									'<li><a href="../lab2/geolocation.html">Geolocalizacion</a></li>'+
									'<li><a href="../lab2/playlist.html">LocalStorage JS</a></li>'+
								'</ul>'+
							'</li>'+
							'<li><a href="#">Lab 3</a>'+
								'<ul>'+
									'<li><a href="../lab3/index3.html">Index generado con jquery</a></li>'+
									'<li><a href="../lab3/animaciones.html">Animaciones y efectos</a></li>'+
									'<li><a href="../lab3/geolocation.html">Geolocalizacion</a></li>'+
									'<li><a href="../lab3/playlist.html">LocalStorage JQuery</a></li>'+
									'<li><a href="../lab3/events.html">Eventos JQuery</a></li>'+
								'</ul>'+
							'</li>'+
							'<li><a href="#">Lab 4</a>'+
								'<ul>'+
									'<li><a href="../lab4/playlist.html">Playlist con Php y MySql</a></li>'+									
								'</ul>'+
							'</li>'+
						'</ul>'+
					'</li>'+
				'</ul>';
				$('nav').append(navMenuHtml);
}