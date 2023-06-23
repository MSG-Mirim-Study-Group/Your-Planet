function go_next() {
    window.href="../ask/index_1.html";
}

function handleKeyPress(event) {
    if (event.keyCode === 13) { // Enter 키의 keyCode는 13입니다.
        window.location.href = "다음페이지의URL";
    }
}
// 다음버튼이 눌렸을 때 체크박스가 체크되지 않은 경우
document.addEventListener('DOMContentLoaded', function() {
    // label 체크시 체크박스 checked
    const checkbox = document.getElementById('myCheck');
    const label = document.querySelector('label');
    
    const nextBtn = document.getElementById('next');
    nextBtn.addEventListener('click', function() {
        if ( !checkbox.checked ) {
            label.style.color = 'red';
        } else {
            label.style.color = 'white';
        }
    });
});

label.addEventListener('click', function() {
    checkbox.checked = !checkbox.checked;
});


// 엔터키 실행 안 됨
function preventEnterKey(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); // 기본 동작 취소
    }
}