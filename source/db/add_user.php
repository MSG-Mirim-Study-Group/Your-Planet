<?php
include('./connect.php');
mysqli_set_charset($conn, "utf8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uname = isset($_POST['uname']) ? $_POST['uname'] : '';

    if (empty($uname)) {
        die('사용자 이름을 입력하세요.');
    }

    $query = "INSERT INTO users (user_name) VALUES (?)";
    $stmt = mysqli_prepare($conn, $query);

    if (!$stmt) {
        die('쿼리 준비 실패: ' . mysqli_error($conn));
    }

    mysqli_stmt_bind_param($stmt, 's', $uname);
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        echo '데이터베이스에 연결되었습니다.';
    } else {
        echo '데이터베이스 연결 실패: ' . mysqli_error($conn);
    }

    mysqli_stmt_close($stmt);
} else {
    echo 'POST 요청이 필요합니다.';
}

mysqli_close($conn);
?>
