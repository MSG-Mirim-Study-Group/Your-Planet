<?php

// ask
include('./connect.php');
mysqli_set_charset($conn, "utf8"); 

$planet = $_POST['planet'];
$query = "UPDATE users SET user_planet = ? WHERE user_planet is null";


$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, 's', $planet);
$result = mysqli_stmt_execute($stmt);

if ($result) {
    echo 'db에 연결 성공';
} else {
    echo 'db에 연결 실패' . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);

?>