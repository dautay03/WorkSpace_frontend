'use strict';
'use strict';
// tạo các biến và các mảng
let petArrayid= ['id'];
let petArray=[];
let petheathycheck=true;
let petheathy=[];

//chọn các đối tượng
const submitBt= document.getElementById('submit-btn');
const inputId= document.getElementById('input-id');
const inputName = document.getElementById('input-name');
const inputAge = document.getElementById('input-age')
const inputType = document.getElementById('input-type')
const inputColor = document.getElementById('input-color-1')
const inputLength = document.getElementById('input-length')
const inputBreed = document.getElementById('input-breed')
const inputWeight = document.getElementById('input-weight')
const inputVaccinated = document.getElementById('input-vaccinated')
const inputdDewormed = document.getElementById('input-dewormed')
const inputSterilized = document.getElementById('input-sterilized')
const healthybtn= document.getElementById('healthy-btn')
const buttonBMI = document.getElementById('BMI-btn')
const sidebar = document.getElementById('sidebar')

// hàm hiển thị dữ liệu cho người dùng 
const displaytable= function(petarray1){
    document.getElementById('tbody').innerHTML = '';
    renderTableData(petarray1)
    function renderTableData(petarray1){
    let rowstring= '';
    for (let i =0; i<petarray1.length; i++){
         rowstring+=`
            <tr>
                <td>${petarray1[i].id} </td>
                <td>${petarray1[i].Name} </td>
                <td>${petarray1[i].age} </td>
                <td>${petarray1[i].Type} </td>
                <td>${petarray1[i].weight} Kg</td>
                <td>${petarray1[i].Length} Cm</td>
                <td>${petarray1[i].Breed} </td>
                <td><i class="bi bi-square-fill" style="color:${petarray1[i].color}"></i></td>
                <td><i class="bi ${petarray1[i].vaccinated==true?'bi-check-circle-fill': 'bi-x-circle-fill'}"></i></td>
                <td><i class="bi ${petarray1[i].dewormed==true?'bi-check-circle-fill': 'bi-x-circle-fill'}"></i></td>
                <td><i class="bi ${petarray1[i].Sterilized==true?'bi-check-circle-fill': 'bi-x-circle-fill'}"></i></td>
                <td id='BMI${i}'>?</td>
                <td>${petarray1[i].day}</td>
                <td><button type="button" onclick="deletePet('${petarray1[i].id}')" class="btn btn-danger">Delete</button></td>     
            </tr>
        `}
    document.getElementById('tbody').innerHTML=rowstring;

}}
//xóa dữ liệu bảng trên trang
document.getElementById('tbody').innerHTML = '';
// hiển thị pet đã lưu trữ ở localstorage
if(getFromStorage()) {petArray=getFromStorage()}
if(getFromStorageID()) {petArrayid=getFromStorageID()}
displaytable(petArray)



//hiển thị loại breed theo type dog or cat
inputType.addEventListener('change',function(){
    
    while (inputBreed.hasChildNodes()) {
        inputBreed.removeChild(inputBreed.firstChild);
      }
     
    let breed = breedgetFromStorage() 
    let Cat=  breed.filter(function(e){
     return e.Type=='Cat'
    })
    
    let Dog=  breed.filter(function(e){
        return e.Type=='Dog'
    })
    const selecttype=[{Type:'', Breed:'Select Type'}]

    console.log(Dog,Cat)
    function displaybreed(arr){
        console.log('hàm displaybreed đã được thực thi')
        console.log(arr)
    
        for(let i=0;i<=arr.length-1;i++){
        let option = document.createElement('option') 
        option.innerHTML= `
            ${arr[i].Breed}
        `
        console.log('arr[].breed',arr[i].Breed)
        console.log(option)
        inputBreed.appendChild(option)
        
    }}
    if (inputType.value=='Cat'){displaybreed(selecttype.concat(Cat));console.log(selecttype.concat(Dog))}
    else if (inputType.value=='Dog'){displaybreed(selecttype.concat(Dog));console.log(selecttype.concat(Dog))}
})




//sự kiện click submit
submitBt.addEventListener('click', function(){
    const data = {
    id:inputId.value,
    Name:inputName.value,
    age: inputAge.value,
    Type: inputType.value,
    weight: inputWeight.value,
    Length: inputLength.value,
    color: inputColor.value,
    Breed:inputBreed.value,
    vaccinated: inputVaccinated.checked,
    dewormed: inputdDewormed.checked,
    Sterilized: inputSterilized.checked,
    day: function(){
        const day1= new Date();
            return `${day1.getDate()}/${day1.getMonth()}/${day1.getFullYear()}`
    }()
};
console.log('petarrayid',petArrayid)
// kiểm tra người dùng đã nhập đúng dữ liệu hay chưa
if(data['id']=== ""){ alert('bạn chưa nhập id của thú cưng')}
else if( check(petArrayid)){alert("ID must unique!")}
            
const checkinformation1=function(check){ 
if (data[check]===""){
    alert(`bạn chưa nhập thông tin ${check} của thú cưng`)
}else if (data[check]===`Select ${check}`){
    alert(`bạn chưa nhập thông tin ${check} của thú cưng`)
}else if (data[check]<1 && data[check]==data['Length']) {
    alert(`${check} must be between 1 and 100!`)
}else if(data[check]>100 && data[check]==data['Length']){
    alert(`${check} must be between 1 and 100!`)
}else if (data[check]<1 && data[check]!== data['Length']) {
    alert(`${check} must be between 1 and 15!`)
}else if (data[check]!== data['Length'] && data[check]>15) {
    alert(`${check} must be between 1 and 15!`)}
}
checkinformation1('Name')
checkinformation1('age');
checkinformation1('Length');
checkinformation1('weight')
checkinformation1('Type');
checkinformation1('Breed');


//thêm dữ liệu vào bản dữ liệu chứa thú cưng
function check(petarray1){
    let check2;
    for(let i = 0;i<=petarray1.length-1;i++){
        if( data['id']===petarray1[i]){check2=true;break}else{check2=false}}
        return check2;
    }
console.log(check(petArrayid))
if(data.id!==''&& data.Name!== ''&& data.Length>=1 && data.Length<=100&& data.age>=1 && data.age <=15&& data.weight>=1 && data.weight<=15 && data.Type!== 'Select Type'&& data.Breed!== 'Select Breed'&& !check(petArrayid))
{petArray.push(data)
petArrayid.push(data.id)
console.log('dữ liệu đã được thêm vào array')
//thêm dữ liệu vào Storage
saveToStorageID(petArrayid)
saveToStorage(petArray)
//đặt lại dữ liệu nhập dữ liệu mới
const add = document.createAttribute('class');
add.value='reset'
document.getElementsByTagName("form")[0].setAttributeNode(add);
document.querySelector('.reset').reset();
}
console.log(petArrayid)
console.log(petArray)

//xóa dữ liệu đang hiển thị và hiển thị lại
displaytable(petArray);


//khi nhập dữ liệu trong khi đang hiển thị petheadthy quay trở lại màn hình hiển thị tất cả các pet
petheathycheck=true
healthybtn.innerHTML='Show Heathy Pet';
})

//tạo chức năng xóa thú cưng nhận dữ liệu đầu vào là id và index 
function deletePet(id){
    if(confirm('bạn muốn xóa breed này?')){
    for (let i =0; i <= petArray.length-1; i++){
        //xóa pet trên các mảng chưa pet
        if (id=== petArray[i].id) {petArray.splice(i,1);petArrayid.splice(i+1,1);displaytable(petArray);break}else{continue}}   
    // xóa pet trong mảng chưa pet heathy
    for (let j=0; j<=petheathy.length-1;j++){
        if(id===petheathy[j].id){
            petheathy.splice(j,1);
            if(!petheathycheck){displaytable(petheathy)}
    }}
    console.log(petArray)
    saveToStorage(petArray)}
}

//show pet khoe manh hoặc tất cả pet
healthybtn.addEventListener('click',function(){
    if(petheathycheck) {
        healthybtn.innerHTML='Show All Pet';
        alert('bạn đã show pet khỏe mạnh')
        for (let i =0;i<petArray.length;i++){
            function petHeathyCheck(petarray){
                let check2;
                for(let j = 0;j<=petheathy.length-1;j++){
                    if( petarray[i].id===petheathy[j].id){check2=true;break}else{check2=false}}
                    return check2;
                }
                console.log(petHeathyCheck(petArray))
            if (petArray[i].vaccinated==true && petArray[i].Sterilized==true && petArray[i].dewormed&& !petHeathyCheck(petArray)){
                petheathy.push(petArray[i])
            }else{continue}
        }
        displaytable(petheathy);
        petheathycheck= !petheathycheck;
        console.log(petheathycheck);
    }else {
        displaytable(petArray);
        healthybtn.innerHTML='Show Heathy Pet';
        petheathycheck= !petheathycheck;
        console.log(petheathycheck);
    }
})
//tạo chức năng tính toán chỉ số BMI
document.getElementById('idthead').innerHTML='';
const thBMI=`
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Type</th>
        <th scope="col">Weight</th>
        <th scope="col">Length</th>
        <th scope="col">Breed</th>
        <th scope="col">Color</th>
        <th scope="col">Vaccinated</th>
        <th scope="col">Dewormed</th>
        <th scope="col">Sterilized</th>
        <th scope="col">BMI</th>
        <th scope="col">Date Added</th>
        <th scope="col">Action</th>
    </tr>`
document.getElementById('idthead').innerHTML=thBMI;
buttonBMI.addEventListener('click',function(){
    let BMI;
    for(let i= 0; i<petArray.length;i++){
        if (petArray[i].Type=='Dog'){
            BMI= (Number(petArray[i].weight)*703)/petArray[i].Length**2;
            BMI=Math.round(BMI * 100) / 100
            document.getElementById(`BMI${i}`).innerHTML=BMI
        }else{
            BMI= (Number(petArray[i].weight)*886)/petArray[i].Length**2;
            BMI=Math.round(BMI * 100) / 100
            document.getElementById(`BMI${i}`).innerHTML=BMI
        }
    }
})

// bắt sự kiện sidebar
sidebar.addEventListener('click',function(){
    console.log(sidebar)
    sidebar.classList.toggle('active')
})


