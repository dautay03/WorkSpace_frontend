'use strict';
var  breed=[
    // {
    //     Type: 'Cat',
    //     Breed:'Tabby' 
    // },{
    //     Type: 'Dog',
    //     Breed:'Domestic Medium Hair '
    // },{
    //     Type: 'Cat',
    //     Breed:'Mixed Breed '
    // },{
    //     Type: 'Dog',
    //     Breed: 'Domestic Short Hair'
    // },{
    //     Type: 'Cat',
    //     Breed:'Terrier' 
    // },{
    //     Type: 'Dog',
    //     Breed: 'Greyhound'
    // },{
    //     Type: 'Cat',
    //     Breed: 'Persian'
    // },{
    //     Type:'Dog' ,
    //     Breed: 'Rottweiler'
    // }
]


//nếu dữ liệu breed từ storage có thì thêm vào mảng breed
if(breedgetFromStorage()!==null) {breed=breedgetFromStorage()}


const inputBreed= document.getElementById('input-breed')
const submitBt= document.getElementById('submit-btn');
const inputType = document.getElementById('input-type')

const displaybreed= function(value){
    document.getElementById('tbody').innerHTML='';
    let stringbreed='';
    
    //lặp mảng dữ liệu đầu vào tạo chuỗi html và nối vào phần từ tbody
    value.forEach(function(value1,index){
    stringbreed+=`
    <tr>
        <th scope="col">${index+1}</th>
        <th scope="col">${value1.Breed}</th>
        <th scope="col">${value1.Type}</th>
        <th><button type="button" onclick=deletebreed(${index}) class="btn btn-danger">Delete</button></th>
    </tr>
    `})
    document.getElementById('tbody').innerHTML=stringbreed

}
displaybreed(breed)

//tại hàm xóa pet nhận vị trí breed trong mảng để xóa
function deletebreed(index){
    if(confirm('bạn muốn xóa breed này?')){
    breed.splice(index,1)
    breedsaveToStorage(breed)
    displaybreed(breed)
 }}

//tạo sự kiện click nhận vào giá trị breed của type dog ỏ cat của nguowngf dùng
submitBt.addEventListener('click',function(){
//nhận dữ liệu breed từ người dùng
const petBreed={
          Type: inputType.value,
          Breed: inputBreed.value
      }

//nếu người dùng chưa nhập đủ thông tin thì thông báo cho người dùng
if(inputBreed.value==='' || inputType.value==='Select Type'){
    alert('vui lòng nhập đầy đủ thông tin')
}else{ 

//tạo biến đẻ kiểm tra xem breed từ người dùng có trùng trong mảng breed hay không
let checkbreed=null;
console.log(petBreed)

/*lặp từng phần tử trên mảng breed kiểm tra xem dữ liệu breed đầu vào của người 
dùng có trùng với breed đã có trong mảng breed hay không. trả về  biến checkbreed trua or false*/
for(let i = 0; i<=breed.length-1;i++){
    if (petBreed.Breed===breed[i].Breed){
        checkbreed=true;break
    }else{checkbreed=false}
}

//hàm điều kiện nếu breed từ người dùng không trùng với dữ liệu có trong mảng tức là checkbreed 
//nhận giá trị false thì thêm breed đó vào mảng breed còn ngược lại thì bỏ qua
if (!checkbreed){breed.push(petBreed)}

//lưu mảng breed vào Storage 
breedsaveToStorage(breed)

//hiển thị các breed đang có ra màn hình
displaybreed(breed)

//reset form để người dùng nhập lại dữ liệu mới
const add = document.createAttribute('class');
add.value='reset'
document.getElementsByTagName("form")[0].setAttributeNode(add);
document.querySelector('.reset').reset();
    
    }




})

// bắt sự kiện sidebar
sidebar.addEventListener('click',function(){
    console.log(sidebar)
    sidebar.classList.toggle('active')
})






