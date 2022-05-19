'use strict';
// bắt sự kiện sidebar
sidebar.addEventListener('click',function(){
    console.log(sidebar)
    sidebar.classList.toggle('active')
})

let pet;
const idpet=[];
const breed=[];
const petArray= getfileFromStorage()
const exportpet= document.getElementById('export-btn')
const importpet= document.getElementById('import-btn')
const fileinput= document.getElementById('input-file')


// nhận file từ người dùng 
async function readText(event) {
    const file = event.target.files.item(0)
    const text = await file.text();
    pet=JSON.parse(text)
    console.log(pet)
    
       
}

importpet.addEventListener('click',function(){
    //lưu file pet vào Storage
    saveToStorage(pet)

    //lấy dữ liệu id từ file và lưu vào storage
    pet.forEach(function(arr){
        idpet.push(arr.id)
    })
    saveToStorageID(idpet)

    //lặp qua mảng pet tạo đối tượng chưa type và breed của từng pét kiểm tra và thêm vào mảng breed
    pet.forEach(function(arr){
        
        let breed1={
            Type:arr.Type,
            Breed:arr.Breed
        }
        let checkbreed;
        for(let i = 0; i<=breed.length-1;i++){
            console.log(`pet ${i+1}`)
            console.log(breed1.Breed,breed[i].Breed)
            if (breed1.Breed===breed[i].Breed){
                checkbreed=true;break
            }else{checkbreed=false}
        }
        if(!breed){
            breed.push(breed1)
        }else if(!checkbreed){
            breed.push(breed1)
        }
        breedsaveToStorage(breed)
    })

  


})

//tải dữ liệu pet xuống
exportpet.addEventListener('click',function(){

    let pet = new Blob([petArray], { type: "text/plain;charset=utf-8" });
    saveAs(pet, "pet.json");
})






