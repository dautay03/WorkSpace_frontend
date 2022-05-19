'use strict'
const saveToStorage= function(key,value){
   localStorage.setItem(key,JSON.stringify(value))
}
const getFromStorage= function(key){
   return JSON.parse(localStorage.getItem(key))
}
const removetoStorage= function(key){
   localStorage.removeItem(key)
}
// const saveToStorage1= function(arr){
//     localStorage.setItem(`user`,JSON.stringify(arr))
// }
// const getFromStorage1= function(){
//    return JSON.parse(localStorage.getItem('user'))
// }


// const saveToStoragetodolist= function(task){
//     localStorage.setItem('todolist', JSON.stringify(task))
// }
// const getFromStoragetodolist= function(){
//    return JSON.parse(localStorage.getItem('todolist'))
// }


// const saveTosettingnews= function(setting){
//    localStorage.setItem('setting', JSON.stringify(setting))
// }
// const getFromsettingnews= function(){
//   return JSON.parse(localStorage.getItem('setting'))
// }
// const removesettingnews= function(){
//    localStorage.removeItem('setting')
// }

// const usercurrentsave= function(arr){
//    localStorage.setItem(`usercurrent`,JSON.stringify(arr))
// }

// const getusercurrent= function(){
//    return JSON.parse(localStorage.getItem('usercurrent'))
// }

// const removeusercurrent= function(){
//    localStorage.removeItem('usercurrent')
// }