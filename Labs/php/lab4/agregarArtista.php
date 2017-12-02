<?php
	$dbc = mysqli_connect('localhost','root','','playlist')
	or die ('Error conectando a MySql');
	
	$nombre  = $_POST['nombre'];
	$apellido1= $_POST['apellido1'];
	$apellido2= $_POST['apellido2'];
	
	$query = "insert into Artista (nombre, apellido1, apellido2) values ('$nombre','$apellido1','$apellido2')";
	
	mysqli_query($dbc,$query)
	or die ('Error ejecutando query para agregar artista a la BD');
	
	echo ('Artista Agregado');
	
	mysqli_close($dbc);
	
	if(isset($_SERVER['HTTP_REFERER'])){
		header("Location: " . $_SERVER['HTTP_REFERER']);    
		} else {
		echo "An Error";
	}
?>