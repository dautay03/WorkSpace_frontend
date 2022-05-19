'use strict';


// hàm lưu trữ pet vào Storage
// tham khảo https://www.w3schools.com/js/js_json_parse.asp và https://www.w3schools.com/js/js_json_stringify.asp nội dung không nằm trong bài học

//lưu và nhận dữ liệu pet vào Storage
const saveToStorage= function(arr){
     localStorage.setItem(`pet`,JSON.stringify(arr))
}
const getFromStorage= function(){
    return JSON.parse(localStorage.getItem('pet'))
}
//lưu và nhận dữ liệu id vào Storage
const saveToStorageID= function(id){
     localStorage.setItem('id', JSON.stringify(id))
}
const getFromStorageID= function(){
    return JSON.parse(localStorage.getItem('id'))
}
//lưu và nhận dữ liệu breed vào Storage
const breedsaveToStorage= function(arr){
    localStorage.setItem(`breed`,JSON.stringify(arr))
}
const breedgetFromStorage= function(){
    return JSON.parse(localStorage.getItem('breed'))
}
//hàm lấy dữ liệu từ storage để người dùng tải xuống
const getfileFromStorage= function(){
    return localStorage.getItem('pet')
}


