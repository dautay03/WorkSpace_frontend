'use strict'
//
let user=[];

//nhận dữ liệu user từ storage
getFromStorage('user')!==null?user=getFromStorage('user'):user;
console.log(user.length)
//chuyển đổi dữ liệu obj sang dữ liệu class instanct
console.log(user)
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
const inputfirstname=document.getElementById('input-firstname');
const inputlastname= document.getElementById('input-lastname');
const inputusername= document.getElementById('input-username');
const inputpassword= document.getElementById('input-password');
const inputpasswordconfim=document.getElementById('input-password-confirm');
const btnsumit= document.getElementById('btn-submit');


btnsumit.addEventListener('click',function(){
    const fistName= inputfirstname.value
    const lastName= inputlastname.value
    const UserName=inputusername.value;
    const password= inputpassword.value;
    const confirm= inputpasswordconfim.value;

    // neus người dùng chưa nhập thông tin thì thông báo 
    if (fistName && lastName&&UserName&&password!==''&&confirm!==''){
        console.log('good')
        /*biến check nhận về giá trị true nếu user trùng với user
        đã có hoặc nhận giá trị false nếu không trùng user*/
        const check= user.filter(function(arr){
        return arr.userName==inputusername.value
        })
        if(check.length){alert('UserName trùng với người dùng khác')}
        else if(password.length<8){alert('Password phải có nhiều hơn 8 kí tự')}
        else if (password!==confirm){alert('nhập lại password chưa đúng')}
        else{   
            const  usernew = new User(`${fistName}`,`${lastName}`,`${UserName}`,`${password}`);
            user.push(usernew)
            window.location='login.html'
            saveToStorage('user',user)
            }   
    }else{alert('bạn cần nhập đầy đủ thông tin')}

})