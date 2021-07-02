<?php

include_once './layout/header.php';
header('Access-Control-Allow-Origin: http://localhost:3000');



$connect = mysqli_connect("localhost", "root", "", "internship");
$sql = "SELECT * FROM user_information ORDER BY id DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();

while($row = mysqli_fetch_assoc($result)) {
    $json_array[]=$row;
}
echo json_encode($json_array);

?>