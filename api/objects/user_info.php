<?php
// 'user' object
class User_info{
 
    // database connection and table name
    private $conn;
    private $table_name = "user_information";

 
    // object properties
    public $id;
    public $firstname;
    public $lastname;
    public $role;
    public $address;
    public $addressnr;
    public $place;
    public $country;
    public $discription;
    public $pay;

 
    // constructor
    public function __construct($db){
        $this->conn = $db;
    }
 
// create new user info record
    function createinfo(){
    
        // insert query
        $query = "INSERT INTO " . $this->table_name . "
        SET
            firstname = :firstname,
            lastname = :lastname,
            address = :address,
            addressnr = :addressnr,
            place = :place,
            country = :country,
            discription = :discription,
            pay = :pay";
            
        // prepare the query
        $stmt = $this->conn->prepare($query);

        // bind the values
        $stmt->bindParam(':firstname', $this->firstname);
        $stmt->bindParam(':lastname', $this->lastname);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':addressnr', $this->addressnr);
        $stmt->bindParam(':place', $this->place);
        $stmt->bindParam(':country', $this->country);
        $stmt->bindParam(':discription', $this->discription);
        $stmt->bindParam(':pay', $this->pay);

        // execute the query, also check if query was successful
        if($stmt->execute()){
            return true;
        }
        return false;

        
    }

    // check if given email exist in the database
// function emailExists(){
 
//     // query to check if email exists
//     $query = "SELECT id, password
//             FROM " . $this->table_name . "
//             WHERE email = ?
//             LIMIT 0,1";
 
//     // prepare the query
//     $stmt = $this->conn->prepare( $query );
 
//     // sanitize
//     $this->email=htmlspecialchars(strip_tags($this->email));
 
//     // bind given email value
//     $stmt->bindParam(1, $this->email);
 
//     // execute the query
//     $stmt->execute();
 
//     // get number of rows
//     $num = $stmt->rowCount();
 
//     // if email exists, assign values to object properties for easy access and use for php sessions
//     if($num>0){
 
//         // get record details / values
//         $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
//         // assign values to object properties
//         $this->id = $row['id'];
//         $this->password = $row['password'];
 
//         // return true because email exists in the database
//         return true;
//     }
 
//     // return false if email does not exist in the database
//     return false;
// }

    // public function update(){
    //     //var_dump($this->password);
    //     // if password needs to be updated
    //     //$password_set=!empty($this->password) ? " password = :password" : "";
    //     //if(empty($password_set)) {
    //     //    return false;
    //     //}
    //     // if no posted password, do not update the password
    //     $query = "UPDATE " . $this->table_name . "
    //             SET
    //                 email = :email
    //             WHERE id = :id";
    
    //     // prepare the query
    //     $stmt = $this->conn->prepare($query);
    
    //     // sanitize
    //     //$this->firstname=htmlspecialchars(strip_tags($this->firstname));
    //     //$this->lastname=htmlspecialchars(strip_tags($this->lastname));
    //     //$this->email=htmlspecialchars(strip_tags($this->email));
    
    //     // bind the values from the form
    //     //$stmt->bindParam(':firstname', $this->firstname);
    //     //$stmt->bindParam(':lastname', $this->lastname);
    //     //$stmt->bindParam(':email', $this->email);
    
    //     // hash the password before saving to database
    //     /*if(!empty($this->password)){
    //         $this->password=htmlspecialchars(strip_tags($this->password));
    //         $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
    //         $stmt->bindParam(':password', $password_hash);
    //     }*/
    //     $stmt->bindParam(':email', $this->email);
    //     // unique ID of record to be edited
    //     $stmt->bindParam(':id', $this->id);
    
    //     // execute the query
    //     if($stmt->execute()){
    //         return true;
    //     }
    
    //     return false;
    // }
}