<?php
	$dbc = mysqli_connect('localhost','root','','playlist')
	or die ('Error conectando a MySql');
	
	$id_artista  = $_POST['artistDdl'];
	$titulo= $_POST['titulo'];
	$genero= $_POST['genero'];
	
	$query = "insert into Cancion (id_artista, titulo, genero) values ('$id_artista','$titulo','$genero')";
	
	mysqli_query($dbc,$query)
	or die ('Error ejecutando query para agregar artista a la BD');
	
	echo ('Cancion Agregada');
	
	mysqli_close($dbc);
	
	if(isset($_SERVER['HTTP_REFERER'])){
		header("Location: " . $_SERVER['HTTP_REFERER']);    
		} else {
		echo "An Error";
	}
?>