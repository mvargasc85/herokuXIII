<?php
	$con = mysqli_connect('localhost','root','','playlist');
	if (!$con) {
		die('Could not connect: ' . mysqli_error($con));
	}
	

	$sql="SELECT * FROM Artista";
	$result = mysqli_query($con,$sql);
	
	echo '<select name="artistDdl" onchange="showSongs(this.value)">
	<option value="">Seleccione ...</option>';
	
	while($row = mysqli_fetch_array($result)) {
		echo '<option value="'. $row["Id_artista"] .'">' . $row["Nombre"]  . ' ' . $row["Apellido1"] . ' ' . $row["Apellido2"] .'</option>';
		
	}
	echo '</select>';
	mysqli_close($con);
?>