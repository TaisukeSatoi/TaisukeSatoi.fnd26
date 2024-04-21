'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function PlayRockPaperScissors(playerRockPaperScissors){
    const rockPaperScissors = ['✊','✌️','🖐️'];
    const rockPaperScissorsRandom = Math.floor( Math.random() * rockPaperScissors.length);
    document.getElementById("rock-paper-scissors").src="rockPaperScissors" + rockPaperScissorsRandom + ".jpg";
    const winAudio = new Audio();
    winAudio.src = "勝ち.mp3";
    const loseAudio = new Audio();
    loseAudio.src = "負け.mp3";
    const drawAudio = new Audio();
    drawAudio.src = "あいこで.mp3";
    let result = "";
    if (playerRockPaperScissors === rockPaperScissorsRandom) {
        result = "DRAW";
        document.getElementById("rps-result").style.backgroundColor = "yellow";
        drawAudio.play()
    } else if(playerRockPaperScissors === 0 && rockPaperScissorsRandom === 1) {
        result  = "WIN!!";
        document.getElementById("rps-result").style.backgroundColor = "red";
        winAudio.play();
    }else if(playerRockPaperScissors === 1 && rockPaperScissorsRandom === 2) {
        result  = "WIN!!";
        document.getElementById("rps-result").style.backgroundColor = "red";
        winAudio.play();
    }else if(playerRockPaperScissors === 2 && rockPaperScissorsRandom === 0) {
        result  = "WIN!!";
        document.getElementById("rps-result").style.backgroundColor = "red";
        winAudio.play();
    }else {
        result  = "LOSE";
        document.getElementById("rps-result").style.backgroundColor = "silver";
        loseAudio.play()
}

    document.getElementById("rps-result").innerText = result;


}


    function startAction() {
        document.getElementById('start-audio').currentTime = 0; //連続クリックに対応
        document.getElementById('start-audio').play(); //クリックしたら音を再生
        document.getElementById("rock-paper-scissors").src="rockPaperScissors.jpg";
        console.log("じゃんけん");
    }
    function rockAudio() {
        document.getElementById('rock-audio').currentTime = 0; //連続クリックに対応
        document.getElementById('rock-audio').play(); //クリックしたら音を再生
        console.log("グー");
    }

    function scissorsAudio() {
        document.getElementById('scissors-audio').currentTime = 0; //連続クリックに対応
        document.getElementById('scissors-audio').play(); //クリックしたら音を再生
        console.log("チョキ");
    }

    function paperAudio() {
        document.getElementById('paper-audio').currentTime = 0; //連続クリックに対応
        document.getElementById('paper-audio').play(); //クリックしたら音を再生
        console.log("パー");
    }

    document.getElementById("start").addEventListener("click", startAction);
  

// 追加したい仕様
// １.コインを入れる
// ２.じゃんけん後勝ったら、コインがもらえる倍率を決める
// ３.獲得したコインが増える
// ４.他のコインゲーム作って同じコインで使えるようにする
