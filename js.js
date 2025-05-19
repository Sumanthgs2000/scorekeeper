const p1 = {
  score: 0,
  button: document.querySelector('#b1'),
  display: document.querySelector('#displayp1')
};

const p2 = {
  score: 0,
  button: document.querySelector('#b2'),
  display: document.querySelector('#displayp2')
};




const resetButton=document.querySelector('#reset')
const h2=document.querySelector('h2')
const selectWinningScore=document.querySelector('#selectWinningScore')


let winningScore=5;
let isGameOver=false;
function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}
p1.button.addEventListener('click', function () {
  updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScores(p2, p1);
});

  selectWinningScore.addEventListener('change',function(e){
    winningScore=parseInt(e.target.value)
    reset()
  }
  )

  resetButton.addEventListener('click',reset)
  
  
 function reset(){
   {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
  }
}


 }
  


 

    
  
