<?php
// result
include('./connect.php');
mysqli_set_charset($conn, "utf8"); 

$planet = $_GET['planet'];

$query = "SELECT ROUND(((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM users)),2) AS percentage FROM users WHERE user_planet = ?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, 's', $planet);

if (mysqli_stmt_execute($stmt)) {
    mysqli_stmt_bind_result($stmt, $percentage);
    if (mysqli_stmt_fetch($stmt)) {
        $response = array();
        $response['percentage'] = $percentage;

        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        echo "No data found for the given planet.";
    }
} else {
    echo "Query execution failed: " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
