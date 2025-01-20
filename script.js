function messagee() {
    document.getElementById("view_time").innerHTML = getNow();
}

function getNow() {
    var now = new Date();
    var year = now.getFullYear();
    var mon = now.getMonth() + 1; //１を足すこと
    var day = now.getDate();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    //出力用
    var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒";
    return s;
}
function osake() {
    document.getElementById("change_text").textContent = "スーパードライ";
    document.getElementById("change_text").style.color = "black";
}

function jusu() {
    document.getElementById("change_text").textContent = "ジンジャーエール";
    document.getElementById("change_text").style.color = "black";
}

function cocktail() {
    const greetings = ['案山子', 'カルアミルク', 'ジンフィズ', 'シャンディーガフ', 'モスコミュール'];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greeting_text').textContent = randomGreeting;
}

function ans() {
    let text = document.getElementById(e.target.id);
    text.getAttribute("ans") =="True"
}

function nextQuestion(nextId) {
    const currentDiv = document.querySelector('div:not([style*="display:none"])');
    if (currentDiv) {
        currentDiv.style.display = 'none';
    }
    document.getElementById(nextId).style.display = 'block';
}


function nextQuestion2(nextId) {
    const currentDiv = document.querySelector('div:not([style*="display:none"])');
    if (currentDiv) {
        currentDiv.style.display = 'none';
    }
    document.getElementById(nextId).style.display = 'block';
}

function nextQuestion3(nextId) {
    const currentDiv = document.querySelector('div:not([style*="display:none"])');
    if (currentDiv) {
        currentDiv.style.display = 'none';
    }
    document.getElementById(nextId).style.display = 'block';
}
