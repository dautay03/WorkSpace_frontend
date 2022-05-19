'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const addimage= document.querySelector('.images')
const createImage= function(imgPath){
    return new Promise(function(resolve, reject){
        const image= document.createElement('img')
        image.src=imgPath
        image.addEventListener('load',function(){
           addimage.append(image)
            resolve(image)
        })
        image.addEventListener('error',function(){
            reject(new Error('lỗi tải hình ảnh'))
           
        })
    

})
}
// let imageCurrent;
// createImage('./img/img-1.jpg')
// .then(l=>{
//     imageCurrent=l
//     console.log(imageCurrent)
//     return new Promise(function(resolve){setTimeout(resolve,3000)})
// })
// .then(()=>{
//     console.log('1')
//     imageCurrent.style.display='none'
//     createImage('./img/img-2.jpg')
//     .then(l=>{
//         imageCurrent=l
//         console.log(imageCurrent)

//         return new Promise(function(resolve){setTimeout(resolve,3000)})
//     })
//     .then(()=>{
//         console.log('2')
//         imageCurrent.style.display='none'
//         createImage('./img/img-3.jpg')
//         .then(l=>{
//             imageCurrent=l
//             console.log(imageCurrent)

//             return new Promise(function(resolve){setTimeout(resolve,3000)})
//         })
//         .then(()=>{
//             imageCurrent.style.display='none'
//         })
//         .catch(err=>console.log(err))

//     })
//     .catch(err=>console.log(err))

// })
// .catch(err=>console.log(err))

// async function loadNpause(){
//     const img1=await createImage('./img/img-1.jpg')
//     console.log('load img')
//     await new Promise(function(resolve){setTimeout(resolve,3000)})
//     img1.style.display='none'
//     const img2=await createImage('./img/img-2.jpg')
//     console.log('load img')
//     await new Promise(function(resolve){setTimeout(resolve,3000)})
//     img2.style.display='none'
//     const img3=await createImage('./img/img-3.jpg')
//     console.log('load img')
//     await new Promise(function(resolve){setTimeout(resolve,3000)})
//     img3.style.display='none'
// }
// loadNpause()


async function loadAll(Arr){
    let imgs= Arr.map(async arr=> await createImage(arr))
    console.log(imgs)
    let img1 = await Promise.all(imgs)
    console.log(img1)
    img1.forEach( arr=> arr.classList.add('parallel'))

}
loadAll( ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])

// new Promise(function(e,f){
//     console.log('start')
//     return new Promise(function(resolve){setTimeout(resolve,2000)})
// }).then(()=>{
//     console.log('thirt')
// })








