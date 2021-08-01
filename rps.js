const buttons = Array.from(document.querySelectorAll('.choice'));
const reset = document.querySelector('#reset');
reset.addEventListener('click', Reset);
buttons.forEach(btn => btn.addEventListener('click', playRound));
let p_score = 0, c_score = 0;
const end = document.querySelector('#end');
const p = document.querySelector('#score');
const p2 = document.querySelector('#result');
const round = document.querySelector('#round_result');

function playRound(e) {
    console.log(this.id);
    let p_choice = this.id;
    let c_choice = computerPlay();
    if(p_choice == c_choice);
    else if(p_choice == 'rock' && c_choice == 'scissors') p_score++;
    else if(p_choice == 'paper' && c_choice == 'rock') p_score++;
    else if(p_choice == 'scissors' && c_choice == 'paper') p_score++;
    else c_score++;
    round.textContent = `Human: ${p_choice} Computer: ${c_choice}`;
    update();
}

function update() {
    p.textContent = `Score: ${p_score}-${c_score}`;
    if(p_score < 5 && c_score < 5);
    else {
        if(p_score >= 5) p2.textContent='Human Won';
        else p2.textContent='Computer Won';
        end.style.visibility='visible';
        buttons.forEach(btn => btn.removeEventListener('click', playRound));
    } 
}
function Reset() {
    p_score = 0; c_score = 0;
    end.style.visibility='hidden';
    buttons.forEach(btn => btn.addEventListener('click', playRound));
    round.textContent = 'Human: Computer: '
    update();
}
function computerPlay() {
    let v = Math.random();
    if (v <= 0.33) return "rock";
    if (v <= 0.66) return "paper";
    else return "scissors";
}