//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맟주면, 맞췄습니다.
//랜덤번호가  < 유저번호 DOWN!!!
//랜덤번호가  < 유저번호 UP!!
//RESET 버튼 누르면 게임이 리셋된다
//5번(3번)의 기회를 다쓰면 게임이 끝난다 (더이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다. 

// document.body.addEventListener('click', function() {
//     let audio = document.getElementById('myAudio');
//     audio.pause();  // 오디오 정지
// });

let correctAnswer = document.querySelector(".correct-answer");


let computerNum = 0;
let playButton = document.getElementById("play-button");
// console.log(playbutton); //브라우저 console창 확인하면 출력됨을 알수있음. 

let userInput = document.getElementById("user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");

let chances = 3;
let gameOver = false;
let history = [];


chanceArea.textContent = `남은기회: ${chances}번`;

//함수도 매개변수로 넘길수 있다! 주의할점: play()이런식으로 호출하는게 아니라 이름만 적어줌.
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () { userInput.value = "" })


function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum); //작동되는지 테스트 
    correctAnswer.textContent= "정답힌트:   " + computerNum;
}


function play() {
    
    let userValue = userInput.value; //태그에 있는 값 가지고 오기
    // console.log(userValue);
    if (userValue < 1 || userValue > 100) {
        resultText.textContent = "1~100 숫자only!"
        return;
    }

    if (history.includes(userValue)) {
        resultText.textContent = "You did it already";
        return;
    }
    chances--;
    chanceArea.textContent = `남은기회: ${chances}번`;
    history.push(userValue);
    console.log(history);
    console.log("chances", chances);
    if (userValue < computerNum) {
        resultAreaImg.src =
        "https://images.unsplash.com/photo-1611075384322-731537ad7971?q=80&w=2723&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      resultText.textContent = "Up!";

    } else if (userValue > computerNum) {
        resultAreaImg.src ="https://images.unsplash.com/photo-1634745646763-1f1183bb91c1?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        resultText.textContent = "Down!";
        // console.log("Down"); 
    } else {
         resultAreaImg.src =
         "https://images.unsplash.com/photo-1544911845-1f34a3eb46b1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        resultText.textContent = "Correct!!!";
        gameOver = true;
        // console.log("맞췄습니다!");
    }


    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }
}


function reset() {

    //새로운 번호가 생성되고 
    pickRandomNum();
    //user input창이 깨끗하게 정리되고 
    userInput.value = ""
    resultAreaImg.src =
    "https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    resultText.textContent = "죽기 싫다면 맞춰라";
    gameOver = false;
    playButton.disabled = false;
    chances = 3;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    history = [];
}



pickRandomNum();