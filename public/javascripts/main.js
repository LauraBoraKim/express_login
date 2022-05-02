let listBtn = document.querySelector('#list');
let registerBtn = document.querySelector('#register');
let userId = document.querySelector('#userid').innerHTML;

listBtn.addEventListener('click', checkPermission(userId));
registerBtn.addEventListener('click', popUp('register'));


// 팝업창 띄우기 
function popUp(url) {
    var chatWidth = 450;
    var chatHeight = 655;
    var chatLeft = 90;
    var chatTop = 100;
    // xPos = (document.body.offsetWidth) - w; // 오른쪽 정렬
    // xPos += window.screenLeft; // 듀얼 모니터일 때
    // var yPos = (document.body.offsetHeight/2) - (h/2);
    window.open(url, 'a', `width = ${chatWidth}px, height = ${chatHeight}px,left = ${chatLeft}%,top = ${chatTop}`);
}

// 목록 조회 권한(write) 체크
function checkPermission(userId){
    console.log("뭐야");
    const req = {
                id: userId,
            };
    fetch('/list', {
        method: "Post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)//객체를 json으로 바꿈
    })
        .then((res) => res.json())
        .then(permission => {
            if(permission.write) // write 권한이 있으면
                popUp('list')  // 목록 팝업창 띄우기
            else
                alert('목록 조회 권한이 없는 회원입니다.')
        })
        .catch((err) => {
            //console.error(new Error(err))
        })
}