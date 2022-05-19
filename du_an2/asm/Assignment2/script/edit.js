'use strict';
// bắt sự kiện sidebar
sidebar.addEventListener('click',function(){
    console.log(sidebar)
    sidebar.classList.toggle('active')
})

let editindex=0;

//chọn các phần tử html
const form=document.getElementById('container-form')
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
const inputDewormed = document.getElementById('input-dewormed')
const inputSterilized = document.getElementById('input-sterilized')




// hiển thị các thú cưng
let petArray=getFromStorage()
console.log(petArray)

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
                <td>${petarray1[i].day}</td>
                <td><button type="button" onclick="editPet('${petarray1[i].id}')" class="btn btn-warning">Edit</button></td>     
            </tr>
        `}
    document.getElementById('tbody').innerHTML=rowstring;

}}
displaytable(petArray)




function editPet(id){
//hiển thị form chỉnh sửa

let pet = petArray.filter(function(arr,index){
    
    if(arr.id==id){editindex=index;return arr}
})

inputId.value=pet[0].id
inputAge.value=pet[0].age
inputName.value=pet[0].Name
inputLength.value=pet[0].Length
inputColor.value=pet[0].color
inputSterilized.checked=pet[0].Sterilized
inputType.value=pet[0].Type
inputWeight.value=pet[0].weight
inputDewormed.checked=pet[0].dewormed
inputVaccinated.checked=pet[0].vaccinated
inputBreed.innerHTML=`<option>${pet[0].Breed}</option>`


form.classList.remove('hide')
console.log('pet[0].breed',pet[0].Breed)

}
//tính năng hiển thị breed theo type người dùng
inputBreed.addEventListener('change',function(){
    
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
    const selecttype=[{Type:'', Breed:'Select Breed'}]

    console.log(Dog,Cat)
    function displaybreed(arr){    
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
//bắt sự kiện cho nút button
submitBt.addEventListener('click',function(){
    console.log('sumit')
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
        dewormed: inputDewormed.checked,
        Sterilized: inputSterilized.checked,
        day: function(){
            const day1= new Date();
                return `${day1.getDate()}/${day1.getMonth()}/${day1.getFullYear()}`}()
    }

console.log(data.day)
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

if(data.id!==''&& data.Name!== ''&& data.Length>=1 && data.Length<=100&& data.age>=1 && data.age <=15&& data.weight>=1 && data.weight<=15 && data.Type!== 'Select Type'&& data.Breed!== 'Select Breed')
{   
    console.log(editindex)
    petArray[editindex]=data
    saveToStorage(petArray)
    form.classList.add('hide')
    displaytable(petArray)
}
})


