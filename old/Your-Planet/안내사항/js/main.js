function go_next() {
    window.href="../질문화면/index_1.html";
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
