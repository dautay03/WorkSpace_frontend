'use strict';
let numberpagenews1=0;
let number=1;
let news1=[];
const submit=document.getElementById('btn-submit')
const input=document.getElementById('input-query')
const next= document.getElementById('btn-next')
const prev= document.getElementById('btn-prev')
const num= document.getElementById('page-num')
const navpage= document.getElementById('nav-page-num')
if (!news1.length){navpage.style.display='none'}
num.innerHTML=number
if(number==1){prev.style.display='none'}

async function datanews(search){
    await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&pagesize=5&page=${number}&apiKey=9d90724c3a9f4917b310af132ad47b3c`)
    .then(function(reponse){console.log(reponse);return reponse.json()})
    .then(function(news){ 
        news1=news.articles
        numberpagenews1=news.totalResults/5
        console.log(news1)
        news1.length?navpage.style.display='block':navpage.style.display='none';
        rendernews(news.articles)
        return news.articles})
    
}


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
        <h4>${arr.title}</h4>
        <h6>${arr.description?arr.description:arr.description=''}</h6>
        <button class="btn btn-info"><a style='color:white' href="${arr.url}">View</a></button>
    </div>
</div>`
    })

document.getElementById('news-container').innerHTML= string
}


//bắt sự kiện click submit
submit.addEventListener('click',function(){
    if(input.value){
        console.log('hàm sự kiện đang chạy')
        datanews(input.value)
        
    }else{alert('nhập thông tin cần tìm')}
})


next.addEventListener('click',function(){
    console.log('next da duoc thuc thi')
    number++
    if(number>=numberpagenews1){next.style.display='none'}
    if(number>1){prev.style.display='block'}
    num.innerHTML=number
    datanews(input.value)
    
})
prev.addEventListener('click',function(){
    console.log('prev da duoc thuc thi')
    number--
    if(number==1){prev.style.display='none'}
    if(number<numberpagenews1){next.style.display='block'}
    num.innerHTML=number
    datanews(input.value)
    
})