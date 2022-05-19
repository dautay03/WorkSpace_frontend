'use strict'
// API Key  : 4f604104a07b4a19bf6a55e3db603646  và  9d90724c3a9f4917b310af132ad47b3c
let number= 1
let numberpagenews=0;

let setting=getFromStorage('setting')?getFromStorage('setting'):0;
console.log('setting',setting)
const next= document.getElementById('btn-next')
const prev= document.getElementById('btn-prev')
const num= document.getElementById('page-num')
num.innerHTML=number
if(number==1){prev.style.display='none'}
//hàm nhận dữ liệu từ api
async function datanews(category,pagesize){
    console.log(category,pagesize)
await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pagesize}&page=${number}&apiKey=9d90724c3a9f4917b310af132ad47b3c`)
.then(function(reponse){console.log(reponse);return reponse.json()})
.then(function(news){ 
    console.log(`du lieu${number}`,news)
    numberpagenews=news.totalResults/pagesize
    rendernews(news.articles)
    return news.articles})

}
//hàm hiển thị thông tin news ra màn hình
if(setting){datanews(setting[0].category,setting[0].size)}else{datanews('general',3)}

function rendernews(arr){
    console.log(arr)
    let string='';
    arr.forEach(function(arr){
        // background-image:url('${arr.urlToImage}');background-size: cover;
    string +=
    `<div class="col-12 row" style="margin-top: 20px; border: 1px black solid;padding: 0px;height: 300px;">
    <div class="col-4 col-sm1-12 col-md-4 box" style="padding: 0px;">
    <img src="${arr.urlToImage}" alt="hình ảnh" style="width:100%;height:300px;object-fit:cover">
    </div>
    <div class="col-7 col-sm1-12 col-md-8 box">
        <h3>${arr.title}</h3>
        <h6>${arr.description?arr.description:arr.description=''}</h6>
        <button class="btn btn-info"><a style='color:white' href="${arr.url}">View</a></button>
    </div>
    </div>`
 })

document.getElementById('news-container').innerHTML= string
}

next.addEventListener('click',function(){
    console.log('next da duoc thuc thi')
    number++
    if(number>=numberpagenews){next.style.display='none'}
    if(number>1){prev.style.display='block'}
    num.innerHTML=number
    if(setting){datanews(setting[0].category,setting[0].size)}else{datanews('general',3)}
    
})
prev.addEventListener('click',function(){
    console.log('prev da duoc thuc thi')
    number--
    if(number==1){prev.style.display='none'}
    if(number<numberpagenews){next.style.display='block'}
    num.innerHTML=number
    if(setting){datanews(setting[0].category,setting[0].size)}else{datanews('general',3)}
    
})

