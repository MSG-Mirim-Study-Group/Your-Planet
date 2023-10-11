<?php
include('../db/connect.php');
mysqli_set_charset($conn, "utf8"); 

$planet = isset($_GET['planet']) ? $_GET['planet'] : null; // 'planet' 매개변수가 전달되지 않은 경우에 대한 처리

if ($planet) {
  // 'planet' 값을 사용하여 쿼리 실행
  $query = "SELECT user_name FROM users WHERE user_planet = '$planet'";
  $result = mysqli_query($conn, $query);

  if (!$result) {
      die("Query failed: " . mysqli_error($conn));
  }

  $response = array();
  while ($row = mysqli_fetch_assoc($result)) {
      $response['user_names'][] = $row['user_name'];
  }

  mysqli_free_result($result);
  mysqli_close($conn);

  header('Content-Type: application/json');
  echo json_encode($response);
} else {
  // 'planet' 매개변수가 전달되지 않은 경우에 대한 처리
  echo "Missing 'planet' parameter";
}

?>