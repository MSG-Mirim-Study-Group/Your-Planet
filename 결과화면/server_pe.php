<?php

include('./connect.php');

$planet = $_GET['planet'];

$query = "SELECT ROUND(((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM user)),2) AS percentage FROM user WHERE user_planet = ?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, 's', $planet);
mysqli_stmt_execute($stmt);
mysqli_stmt_bind_result($stmt, $percentage);
mysqli_stmt_fetch($stmt);
mysqli_stmt_close($stmt);
mysqli_close($conn);

$response = array();
$response['percentage'] = $percentage;

header('Content-Type: application/json');
echo json_encode($response);
?>