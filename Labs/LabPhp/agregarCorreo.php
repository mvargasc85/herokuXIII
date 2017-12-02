<?php
	$dbc = mysqli_connect('localhost','root','','correos');
	or die ('Error conectando a MySql');
	
	$nombre  = $_POST['nombre'];
	$apellido= $_POST['apellido'];
	$correo= $_POST['correo'];
	
	$query = "insert into Usuario (nombre, apellido, correo) values ('$nombre','$apellido','$correo')";
	
	mysqli_query($dbc,$query);
	or die ('Error ejecutando query en la BD');
	
	echo ('Usuario Agregado');
	
	mysqli_close($dbc);
	
	
?>