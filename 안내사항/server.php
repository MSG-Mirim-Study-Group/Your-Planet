<?php

include('connect.php');
if(isset($_POST['user_name'])){
    $user_name = ($conn, $_POST['user_name']);
    
    if(empty($user_name)){
        header("location: index.html?error=이름을 써주세요");
        exit();
    }else{
        $save = "insert into member(user_name) value($user_name)"
        $rname = mysqli_query($conn, $save);
        if($rname){
            header("location: index.html?error=이름 저장 성공");
            exit();
        }else{
            header("location: index.html?error=이름 저장 실패");
            exit();
        }
    }
    


}
else{
    header("location: index.html?error=오류 발생");
}



?>