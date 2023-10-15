<?php
include('../db/connect.php');
mysqli_set_charset($conn, "utf8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uname = isset($_POST['uname']) ? $_POST['uname'] : '';

    if (empty($uname)) {
        $response = array('message' => '사용자 이름을 입력하세요.');
        header('Content-Type: application/json');
        echo json_encode($response);
    } else {
        $query = "INSERT INTO users (user_name) VALUES (?)";
        $stmt = mysqli_prepare($conn, $query);

        if (!$stmt) {
            $response = array('message' => '쿼리 준비 실패: ' . mysqli_error($conn));
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            mysqli_stmt_bind_param($stmt, 's', $uname);
            $result = mysqli_stmt_execute($stmt);

            if ($result) {
                $response = array('message' => '데이터베이스에 연결되었습니다.');
                header('Content-Type: application/json');
                echo json_encode($response);
            } else {
                $response = array('message' => '데이터베이스 연결 실패: ' . mysqli_error($conn));
                header('Content-Type: application/json');
                echo json_encode($response);
            }

            mysqli_stmt_close($stmt);
        }
    }
} else {
    $response = array('message' => 'POST 요청이 필요합니다.');
    header('Content-Type: application/json');
    echo json_encode($response);
}

mysqli_close($conn);
?>
