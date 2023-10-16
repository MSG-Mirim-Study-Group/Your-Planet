<?php
$servername = "db";  // MariaDB 컨테이너의 서비스 이름을 사용
$name = "root";
$password = "1234";
$dbname = "YourPlanet";

$conn = new mysqli($servername, $name, $password, $dbname);

if ($conn->connect_error) {
    die("데이터베이스 연결 실패: " . $conn->connect_error);
}
?>
