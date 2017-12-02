<?php
	$con = mysqli_connect('localhost','root','','playlist');
	if (!$con) {
		die('Could not connect: ' . mysqli_error($con));
	}
	
	$sql="Select * from Cancion c inner join Artista a on c.Id_Artista = a.Id_Artista ";
	$result = mysqli_query($con,$sql);
	
	echo '<select id="songsDdl" name="songsDdl"> <option value="">Seleccione ...</option>';
	
	while($row = mysqli_fetch_array($result)) {
		echo '<option value="'. $row["Id_cancion"] .'">' . $row["Titulo"]  . ' - ' . $row["Nombre"] . ' ' . $row["Apellido1"] . ' ' . $row["Apellido2"] . ' - ' . $row["Genero"] . '</option>';
	}
	echo '</select>';
	mysqli_close($con);
?>