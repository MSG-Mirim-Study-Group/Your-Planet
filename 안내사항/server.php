<?php

include('connect.php');
if(isset($_POST['user_name'])){
<<<<<<< HEAD
    $user_name = ($conn, $_POST['user_name']);
=======
    $user_name = $_POST['user_name'];
>>>>>>> 6926db4e88ed09b2f23909393876815c8293a317
    
    if(empty($user_name)){
        header("location: index.html?error=이름을 써주세요");
        exit();
    }else{
<<<<<<< HEAD
        $save = "insert into member(user_name) value($user_name)"
        $rname = mysqli_query($conn, $save);
        if($rname){
=======
        $save = "INSERT INTO member (user_name) VALUES ('$user_name')";
        $result = mysqli_query($conn, $save);
        if($result){
>>>>>>> 6926db4e88ed09b2f23909393876815c8293a317
            header("location: index.html?error=이름 저장 성공");
            exit();
        }else{
            header("location: index.html?error=이름 저장 실패");
            exit();
        }
    }
<<<<<<< HEAD
    


}
else{
    header("location: index.html?error=오류 발생");
}



?>
=======
}
else{
    header("location: index.html?error=오류 발생");
    exit();
}
?>

<!-- 
<?php
// 폼이 제출되었는지 확인합니다.
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // 체크박스가 선택되었는지 확인합니다.
  if (isset($_POST["agree"]) && $_POST["agree"] == "on") {
    // 사용자 이름 값을 가져옵니다.
    $user_name = $_POST["user_name"];

    // 데이터베이스에 연결합니다 (아래에 데이터베이스 연결 정보를 입력해야 합니다).
    $servername = "데이터베이스_서버_주소";
    $username = "사용자_이름";
    $password = "비밀번호";
    $dbname = "데이터베이스_이름";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // 연결을 확인합니다.
    if ($conn->connect_error) {
      die("데이터베이스 연결 실패: " . $conn->connect_error);
    }

    // 사용자 이름 값을 데이터베이스에 저장합니다.
    $sql = "INSERT INTO users (user_name) VALUES ('$user_name')";

    if ($conn->query($sql) === TRUE) {
      echo "사용자 이름이 성공적으로 저장되었습니다.";
    } else {
      echo "오류: " . $sql . "<br>" . $conn->error;
    }

    // 데이터베이스 연결을 닫습니다.
    $conn->close();
  }
}
?> -->
>>>>>>> 6926db4e88ed09b2f23909393876815c8293a317
