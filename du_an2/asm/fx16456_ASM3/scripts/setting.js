'use strict'

let setting = []

let submit= document.getElementById('btn-submit')
let inputpagesize= document.getElementById('input-page-size')
let inputCategory= document.getElementById('input-category')


submit.addEventListener('click',function(){
    if(inputpagesize.value!=''&&inputCategory.value!=''){
        setting=[{size:inputpagesize.value,category:inputCategory.value}]
        saveToStorage('setting',setting)
        inputpagesize.value=''
        inputCategory.value=''
    }else{alert('Chưa nhập đủ thông tin')}

})



