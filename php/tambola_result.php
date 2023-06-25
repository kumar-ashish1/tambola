<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");



$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['name']) || empty($_POST['emp_code']) || empty($_POST['award'])) die();

$date = new DateTime(null, new DateTimezone("Asia/Kolkata"));
$formated_date = date_format($date,"Y/m/d H:i:s");

$name = $_POST['name'];
$award = $_POST['award'];
$emp_code = $_POST['emp_code'];

require_once "bridge.php";


$sql = "INSERT INTO TambolaResult(Name,EmpCode,Award,Time) VALUES ('$name','$emp_code','$award','$formated_date')";

if ($conn->query($sql) === TRUE) {
    echo "New record saved successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();

?>