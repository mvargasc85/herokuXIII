<?php
	$data  = $_REQUEST['songData'];
	$name =$data['name'];
    $songIds = $data['ids'];
	$longitud = count($songIds);
	
	$dbc = mysqli_connect('localhost','root','','playlist')
	or die ('Error conectando a MySql');
	
	
	for($i=0; $i<$longitud; $i++)
	{
		$query = "insert into playlist (Nombre, Id_cancion) values ('" .$name . "'," . $songIds[$i]. ")";
		
		mysqli_query($dbc,$query)
		or die ('Error ejecutando query para agregar artista a la BD');
		
	}
	
	
	echo "<p> guardado exitosamente </p>";
	mysqli_close($dbc);
	
	
	
?>