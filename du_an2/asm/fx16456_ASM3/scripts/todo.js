'use strict'

let inputtask= document.getElementById('input-task')
let inputadd=document.getElementById('btn-add')
let list=document.getElementById('todo-list')
let usercurrent=[]
list.innerHTML=''

//nhận dữ liệu user từ storage
if(getFromStorage('usercurrent')){usercurrent=getFromStorage('usercurrent')}

//mảng todo list
let todoarr=[];
(getFromStorage('todolist'))?todoarr=getFromStorage('todolist'):todoarr=[];
//hiển thị task của của người dùng đã đăng nhập
if(usercurrent.length>0){
    displaytask(todoarr);
    }

//hàm hiển thị task ra màn hình
function displaytask(arr){
    list.innerHTML=''
    let string='';
    arr.forEach(function(arr,index){
    if(arr.owner===usercurrent[0].userName){
    string+=`
    <li id='list${index}' onclick=checklist('${index}','list${index}') class=${arr.isDone?'checked':" "}  >${arr.task}<span onclick=deletetask('${index}') class="close">×</span></li>
    `
    }
})
    list.innerHTML=string
}
console.log(usercurrent)


//class task 
class Task {
    constructor(task,owner){
        this.task=task,
        this.owner=owner,
        this.isDone=false 
    }
}
//bắt sự kiện nhận dữ liệu của người dùng tạo stack mới
inputadd.addEventListener('click',function(){
    if(usercurrent.length){
    let newstack= new Task(inputtask.value,usercurrent[0].userName)
    todoarr.push(newstack)
    saveToStorage('todolist',todoarr)
    todoarr= getFromStorage('todolist')
    displaytask(todoarr)
    inputtask.value=''
    }else{alert('bạn cần đăng nhập')}})

//hàm kiểm tra xem công việc hoàn thành hay chưa hoàn thành và hiện thị ra màn hình
function checklist(edit,check){
    console.log('edit',edit)
    //khi người dùng click thì đổi giá trị của isdone true thành false và ngược lại
    todoarr[Number(edit)].isDone=!todoarr[Number(edit)].isDone
    
    //lưu giá trị vào storage và cập nhật lại dữ liệu 
    saveToStorage('todolist',todoarr)
    todoarr= getFromStorage('todolist')
    let check1= document.getElementById(check)
    //nếu giá trị của isDone là true tức là hoàn thành công việc thì thêm class checked vào
    if(todoarr[Number(edit)].isDone){
        console.log(edit,'add')
        check1.classList.add('checked')
    }else{
        console.log(edit,'remove')
        check1.classList.remove('checked')
    }
}



//hàm xóa todolist
function deletetask(index){
    todoarr.splice(index,1)
    saveToStorage('todolist',todoarr)
    todoarr= getFromStorage('todolist')
    displaytask(todoarr)

}





    




