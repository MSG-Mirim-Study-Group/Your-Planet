<?php
include('../db/connect.php');
mysqli_set_charset($conn, "utf8");

$planet = $_POST['planet'];

if (empty($planet)) {
    $response = array('message' => 'planet 매개변수를 전달하세요.');
    header('Content-Type: application/json');
    echo json_encode($response);
    die();
}

// 업데이트 쿼리
$query = "UPDATE users SET user_planet = ? WHERE user_planet IS NULL";

// SQL 쿼리 준비
$stmt = mysqli_prepare($conn, $query);

if (!$stmt) {
    $response = array('message' => '쿼리 준비 실패: ' . mysqli_error($conn));
    header('Content-Type: application/json');
    echo json_encode($response);
    die();
}

// 파라미터 바인딩
mysqli_stmt_bind_param($stmt, 's', $planet);

// 쿼리 실행
$result = mysqli_stmt_execute($stmt);

if ($result) {
    $response = array('message' => 'DB에 성공적으로 연결하고 업데이트를 수행했습니다.');
} else {
    $response = array('message' => 'DB 업데이트 실패: ' . mysqli_error($conn));
}

// 리소스 정리
mysqli_stmt_close($stmt);
mysqli_close($conn);

header('Content-Type: application/json');
echo json_encode($response);
?>
