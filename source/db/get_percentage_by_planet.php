<?php
include('./connect.php');
mysqli_set_charset($conn, "utf8");

$planet = $_GET['planet'];

if (empty($planet)) {
    die('planet 매개변수를 전달하세요.');
}

$query = "SELECT ROUND(((COUNT(*) * 100.0) / (SELECT COUNT(*) FROM users)), 2) AS percentage FROM users WHERE user_planet = ?";
$stmt = mysqli_prepare($conn, $query);

if (!$stmt) {
    die('쿼리 준비 실패: ' . mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, 's', $planet);

if (mysqli_stmt_execute($stmt)) {
    mysqli_stmt_bind_result($stmt, $percentage);

    if (mysqli_stmt_fetch($stmt)) {
        $response = array();
        $response['percentage'] = $percentage;

        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        echo "해당 행을 찾을 수 없습니다.";
    }
} else {
    echo "쿼리 실행 실패: " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
