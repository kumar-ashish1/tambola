<?php

$servername = "localhost";
$username = "u982311836_game";
$password = "HelloMac@123";
$dbname = "u982311836_game";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  echo '{"status":"error","message":'.$conn->connect_error.'}';
}

?>