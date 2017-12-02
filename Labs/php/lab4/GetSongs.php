<!DOCTYPE html>
<html>
<head>
<style>
#songs {
    width: 100%;
    border-collapse: collapse;
}

#songs, #songs td, #songs th {
    border: 1px solid black;
    padding: 5px;
}

#songs th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','playlist');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM Cancion WHERE Id_artista = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table id='songs'>
<tr>
<th>Titulo</th>
<th>Genero</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['Titulo'] . "</td>";
    echo "<td>" . $row['Genero'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>