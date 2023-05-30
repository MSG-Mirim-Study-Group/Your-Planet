<?php
$server = "localhost3306";
$user = "root";
$password = "0000";
$dbname = "Local instance MySQL80";

$conn = new mysqli($server, $user, $password, $dbname);

if($conn->connect_error)
    echo "<h2>접속에 실패하였습니다.</h2>";
?>