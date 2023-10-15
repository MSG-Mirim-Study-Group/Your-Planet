<?php
// userlist_explain
include('./connect.php');
mysqli_set_charset($conn, "utf8"); 

$planet = isset($_GET['planet']) ? $_GET['planet'] : null;

if ($planet) {
  // 사용자 입력을 안전하게 처리하기 위해 준비된 명령문을 사용
  $query = "SELECT user_name FROM users WHERE user_planet = ?";
  
  // 준비된 명령문 초기화
  $stmt = mysqli_stmt_init($conn);
  if (mysqli_stmt_prepare($stmt, $query)) {
    // 사용자 입력을 바인딩
    mysqli_stmt_bind_param($stmt, "s", $planet);
    
    // 쿼리 실행
    if (mysqli_stmt_execute($stmt)) {
      $result = mysqli_stmt_get_result($stmt);
      
      if (!$result) {
          die("Query failed: " . mysqli_error($conn));
      }
      
      $response = array();
      while ($row = mysqli_fetch_assoc($result)) {
          $response['user_names'][] = $row['user_name'];
      }

      mysqli_free_result($result);
      mysqli_stmt_close($stmt);

      header('Content-Type: application/json');
      echo json_encode($response);
    } else {
      die("Query execution failed: " . mysqli_error($conn));
    }
  } else {
    die("Prepare statement failed: " . mysqli_error($conn));
  }
} else {
  echo "Missing 'planet' parameter";
}
?>
