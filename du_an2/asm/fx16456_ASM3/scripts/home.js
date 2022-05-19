'use strict'
let messger=document.getElementById('welcome-message')
let logout=document.getElementById('main-content')
let login=document.getElementById('login-modal')

let usercurrent=getFromStorage('usercurrent')
if(getFromStorage('usercurrent')!==null){
    usercurrent=getFromStorage('usercurrent') 
    messger.innerHTML=`Welcome ${usercurrent[0].firstName}`
    login.style.display='none'
}else{
    logout.style.display= 'none'
}


document.getElementById('btn-logout').addEventListener('click',function(){
    logout.style.display='none'
    login.style.display='block'
    removetoStorage('usercurrent')
})

