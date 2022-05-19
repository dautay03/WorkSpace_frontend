'use strict';
// chọn ddối tượng
const rollbt = document.querySelector('.btn--roll');
const newbt = document.querySelector('.btn--new');
const holdbt = document.querySelector('.btn--hold');
const player1= document.querySelector('.player--0');
const player2= document.querySelector('.player--1');
const  dice= document.querySelector('.dice');
const score0el=document.querySelector('#score--0');
const score1el=document.querySelector('#score--1');
const playactive= document.querySelector('.player--active');
const current0el= document.querySelector('#current--0');
const current1el= document.querySelector('#current--1');


//khai báo biến
let arr, score0, score1; 
let current;
let active;

//giá trị khởi động
const init=function(){
 arr=[0,0];
 score0= 0;
 score1= 0;
 current= 0;
 active = 0;
 score0el.textContent=score0;
score1el.textContent=score1;
dice.classList.add('hidden');
document.getElementById(`current--${active}`).textContent=current;
player1.classList.remove('player--winner');
player2.classList.remove('player--winner');
player1.classList.add('player--active');
player2.classList.remove('player--active');
}
init();
let switchplayer=function(){
    current=0;
    document.getElementById(`current--${active}`).textContent=current;
    active =active===0? 1:0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

//tạo sự kiện đổ xúc sắc
rollbt.addEventListener('click',function(){
    //tạo giá trị khi đổ xúc sắc
    let dicenumber= Math.trunc(Math.random()*6+1);
    //hiển thị xúc sắc
    dice.classList.remove('hidden')
    dice.src=`dice-${dicenumber}.png`;

    //kiểm tra xem xúc sắc có bằng 1 ko
    if (dicenumber!==1){
        
        current+=dicenumber;
        document.getElementById(`current--${active}`).textContent=current;
        }else{
        switchplayer();
    }
})
//lưu điểm và hiển thị điểm khi người dùng click hold
holdbt.addEventListener('click',function(){
    arr[active]+=current;
    document.getElementById(`score--${active}`).textContent= arr[active];
    let sumscore= arr[active];
    //nếu điểm của người chơi hiện tại đạt 100 thì chiến thắng nếu không thì chuyển người chơi
    if(sumscore>=100){
        document.getElementById(`score--${active}`).textContent= arr[active]
        document.querySelector(`.player--${active}`).classList.add('player--winner');
        document.querySelector(`.player--${active}`).classList.remove('player--active');
        dice.classList.add('hidden');
    }else{
        // chuyển người chơi
        switchplayer();
    }
})
newbt.addEventListener('click', init)