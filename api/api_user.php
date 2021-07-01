<?php

include_once './config/core.php';

$connect = mysqli_connect("localhost", "root", "", "internship");
$sql = "SELECT * FROM users_information ORDER BY country DESC";
$result = mysqli_query($connect, $sql);
$json_array = array();

while($row = mysqli_fetch_assoc($result)) {
    $json_array[]=$row;
}
echo json_encode($json_array);

?>