'use strict';
// bắt sự kiện sidebar
sidebar.addEventListener('click',function(){
    console.log(sidebar)
    sidebar.classList.toggle('active')
})


let petArray;
let petArrayid;
let breed;
const find = document.getElementById('find-btn');
const inputId= document.getElementById('input-id');
const inputName = document.getElementById('input-name');
const inputType = document.getElementById('input-type')
const inputBreed = document.getElementById('input-breed')
const inputVaccinated = document.getElementById('input-vaccinated')
const inputDewormed = document.getElementById('input-dewormed')
const inputSterilized = document.getElementById('input-sterilized')

//nhận dữ liệu pet và id pet
if(getFromStorage()!==null) {petArray=getFromStorage()}
if(getFromStorageID()!==null) {petArrayid=getFromStorageID()}
if(breedgetFromStorage()!==null) {breed=breedgetFromStorage()}

//hiển thị breed 
inputBreed.addEventListener('change',function(){
    
    while (inputBreed.hasChildNodes()) {
        inputBreed.removeChild(inputBreed.firstChild);
      }
     const selectbreed=[{Type:'', Breed:'Select Breed'}]

     let breed = breedgetFromStorage()
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
     displaybreed(selectbreed.concat(breed))
    })

console.log(petArray)
console.log(petArrayid)

//khi người dùng nhập số liệu trên form
find.addEventListener('click',function(){
    
    let pet_display='';
    function id() {
        console.log('id run')
        if(inputId.value!==''){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.id][0].includes(inputId.value)
        }):pet_display.filter(function(arr){
            return [arr.id][0].includes(inputId.value)
        })}else{return ''}
    };
    pet_display= id();
    console.log('petdisplay',pet_display)

    function petName() {
        
        if(inputName.value!==''){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.Name][0].includes(inputName.value)
        }):pet_display.filter(function(arr){
            return [arr.Name][0].includes(inputName.value)
        })}else{return ''}
    };
    pet_display=petName()!==''?petName():pet_display;
    console.log('petdisplay',pet_display)

    function petbreed() {
        
        if(inputBreed.value!=='Select Breed'){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.Breed][0].includes(inputBreed.value)
        }):pet_display.filter(function(arr){
            return [arr.Breed][0].includes(inputBreed.value)
        })}else{return ''}
    };
    pet_display=petbreed()!==''?petbreed():pet_display;
    console.log('petdisplay',pet_display)

    function petType() {
        
        if(inputType.value!=='Select Type'){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.Type][0].includes(inputType.value)
        }):pet_display.filter(function(arr){
            return [arr.Type][0].includes(inputType.value)
        })}else{return ''}
    };
    pet_display=petType()!==''?petType():pet_display;
    console.log('petdisplay',pet_display)

    function petvaccinated() {
        
        if(inputVaccinated.checked!==false){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.vaccinated][0]===inputVaccinated.checked
        }):pet_display.filter(function(arr){
            return [arr.vaccinated][0]===inputVaccinated.checked
        })}else{return ''}
    };
    pet_display=petvaccinated()!==''?petvaccinated():pet_display;
    console.log('petdisplay',pet_display)

    function petSterilized() {
        
        if(inputSterilized.checked!==false){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.Sterilized][0]===inputSterilized.checked
        }):pet_display.filter(function(arr){
            return [arr.Sterilized][0]===inputSterilized.checked
        })}else{return ''}
    };
    pet_display=petSterilized()!==''?petSterilized():pet_display;
    console.log('petdisplay',pet_display)

    function petDewormed() {
        
        if(inputDewormed.checked!==false){return pet_display==''?
            petArray.filter(function(arr){
            return [arr.dewormed][0]===inputDewormed.checked
        }):pet_display.filter(function(arr){
            return [arr.dewormed][0]===inputDewormed.checked
        })}else{return ''}
    };
    pet_display=petDewormed()!==''?petDewormed():pet_display;
    console.log('petdisplay',pet_display)

    //hiển thị pet đã lọc cho người dùng
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
                </tr>
            `}
        document.getElementById('tbody').innerHTML=rowstring;
    
    }}
    displaytable(pet_display)


})

