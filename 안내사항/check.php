<?php
// connect.php파일의 내용을 그대로 가져옴
include_once("connect.php");

// form 데이터 읽어오기
$user_name = $_POST["input_name"];

echo "<h3>사용자의 이름은 {$user_name}입니다."
?>