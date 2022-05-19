'use strict'
let user=[]
//lấy dữ liệu user từ storage
getFromStorage('user')!==null?user=getFromStorage('user'):user;
//chuyển dữ liệu từ obj sang class
for(let i= 0 ;i<=user.length-1;i++){
    function instanceUser(user) {
        console.log(user[i].firstName)
        const user1 = new User(user[i].firstName, user[i].lastName, user[i].userName, user[i].Password)
        console.log('user1', user1)
        return user1
    }
        
        user[i]=instanceUser(user)
    }
    console.log(user)

const inputUsername= document.getElementById('input-username')
const inputPassword= document.getElementById('input-password')
const btnlogin=document.getElementById('btn-submit')




btnlogin.addEventListener('click',function(){
    console.log(inputUsername.value=='',inputPassword.value=='')
    if(inputUsername.value==''&&inputPassword.value==''){alert('Chưa đủ nhập thông tin')}{
    let usercheck=user.filter(function(arr){
        return arr.userName==inputUsername.value
    })
    
    if(usercheck.length!==0){
        if(usercheck[0].Password===inputPassword.value){
            saveToStorage('usercurrent',usercheck)
            location.replace("../index.html")
        }else{alert('password chưa chính xác')}
    }else{alert('User name chưa đúng')}}









})

