let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozila.png') {
        myImage.setAttribute ('src','images/slamdunk.jpg');
    } else {
        myImage.setAttribute ('src','images/mozila.png');
    }
}

/*
저는 강소진입니다
*/

//이것은 주석입니다 
let myButton = document.querySelector('button'); //버튼을 변수로 지정
let myHeading = document.querySelector('h1'); //제목을 변수로 지정

function setUserName() {
    let myName = prompt('Please enter your name.'); //prompt함수로 이름을 받음 
    if(!myName || myName === null) { 
        setUserName(); //이름 안쓰면 계속 입력하라고 나오게 설정
    } else { //
        localStorage.setItem('name', myName); //이름을 받은것을 로컬저장소에 저장함
        myHeading.textContent = 'hello, ' + myName; //이름받은것을 가지고 제목의 내용을 바꿈
    }
}

    if(!localStorage.getItem('name')) { //이름 받은게 없으면 위의 이름설정해서제목바꾸는함수실행
        setUserName();
    } else {
        let storedName = localStorage.getItem('name'); //이름 받은게 있다면 로컬저장소에서 불러와서 제목바꾸게함
        myHeading.textContent = 'hello, ' + storedName;
    }

    myButton.onclick = function() { //버튼 만들어놓은거 누르면 다시 이름설정함수 실행해서 이름바꾸기 가능 
        setUserName();
    }