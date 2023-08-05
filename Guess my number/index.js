'use strict';




let secretnumber = Math.floor(Math.random()*20)+1; 

let score = 20;
let highscore=0;

const dispmsg = function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

// when there is no input
if(!guess){
    dispmsg('No number⚠️');
}
// when palyer wins
else if(guess === secretnumber){
   dispmsg("🥳Correct Number!!");
  
    document.querySelector('.number').textContent= secretnumber;
    document.querySelector('body').style.backgroundColor= '#A2FF86' ;
    document.querySelector('.number').style.width='35rem';

    if(score>highscore){
         highscore=score;
         document.querySelector('.highscore').textContent=highscore;
    }
        
 //when player guesses wrongly 
}else if(guess!=secretnumber){

    if(score>1){
  dispmsg(guess>secretnumber ? 'Too high📈':'Too low📉');
  score = score - 1;
  document.querySelector('.score').textContent = score;
}else{
      dispmsg( "you lost the game😕");
    document.querySelector('.score').textContent = 0;

}
}
});

document.querySelector('.again').addEventListener('click',function(){
   score =20;
    let secretnumber = Math.floor(Math.random()*20)+1;  
    dispmsg("Start guessing....");
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value='';


  document.querySelector('body').style.backgroundColor='#0e2b35';
  document.querySelector('.number').style.width='15rem';
});
