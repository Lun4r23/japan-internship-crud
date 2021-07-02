<?php
include_once 'layout/header.php';
include_once 'objects/user_info.php';
header('Access-Control-Allow-Origin: http://localhost:3000');
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// instantiate product object
$userInfo = new User_info($db);
 


// get posted data
$data = json_decode(file_get_contents("php://input"));
// set product property values
$userInfo->firstname = (isset($data->firstname) ? $data->firstname : '');
$userInfo->lastname = (isset($data->lastname) ? $data->lastname : '');
$userInfo->address = (isset($data->address) ? $data->address : '');
$userInfo->addressnr = (isset($data->addressnr) ? $data->addressnr : '');
$userInfo->place = (isset($data->place) ? $data->place : '');
$userInfo->country = (isset($data->country) ? $data->country : '');
$userInfo->discription = (isset($data->discription) ? $data->discription : '');
$userInfo->pay = (isset($data->pay) ? $data->pay : '');


// create the userInfo
if(
    !empty($userInfo->firstname) &&
    !empty($userInfo->lastname) &&
    !empty($userInfo->address) &&
    !empty($userInfo->addressnr) &&
    !empty($userInfo->place) &&
    !empty($userInfo->country) &&
    !empty($userInfo->discription) &&
    !empty($userInfo->pay) &&
    $userInfo->createinfo()
){
 
    // set response code
    http_response_code(200);
 
    // display message: user was created
    echo json_encode(array("message" => "User Info was created."));
}
 
// message if unable to create user
else{
 
    // set response code
    http_response_code(400);
 
    // display message: unable to create user
    echo json_encode(array("message" => "Unable to create user info."));
}