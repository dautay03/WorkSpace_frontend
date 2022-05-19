let julia = [3,5,2,12,7];
let kate = [4,1,15,8,3];
let juliaCheck= julia.slice(1,-1)
let data= juliaCheck.concat(kate)
let julia1 = [9, 16, 6, 8, 3];
let kate1=[10,5,6,1,4]
let juliaCheck1= julia1.slice(1,-1)
let data1= juliaCheck1.concat(kate)
const checkDogAge =function(value){
   value.forEach(function(value,index){
        if (value>=3)
            {console.log(`Dog number ${index} is an adult, and is ${value} years old`);
            // return `Dog number ${index} is an adult, and is ${value} years old`
        }else {
            console.log(`Dog number ${index} is still a puppy`)
            // return `Dog number ${index} is still a puppy`
        }}
    )
    
}
checkDogAge(data)
checkDogAge(data1)

let data3=[5, 2, 4, 1, 15, 8, 3];
let data4=[16, 6, 10, 5, 6, 1, 4];
let calcAverageHumanAge=(value)=>{
    console.log(value)
    let count=0;
    let data =value
    .map(function(value){
    // console.log(value)
        let humanAge=0;
        if (value <=2){
            humanAge= 2*value
        }else {humanAge= 16+value*4}
        return humanAge
    })
    .filter(function(value){
    // console.log(value)
        count++
        return value>18;
    })                
    .reduce((acc,value)=>acc+value,0)
     console.log(data)
     console.log(count)
    
    return data/count                                                                                                                           
}
console.log(calcAverageHumanAge(data3))
console.log(calcAverageHumanAge(data4))

//-----------------lap 12,3-------------
let calcAverageHumanAge123= function(value){
    console.log(value)
    let count=0;
    let data =value
    .map((value)=>{
    // console.log(value)
        let humanAge=0;
        value <=2? humanAge= 2*value:humanAge= 16+value*4
        return humanAge
    })
    .filter((value)=>{
    // console.log(value)
        count++
        return value%2==0;
    })                
    .reduce((acc,value)=>acc+value,0)
     console.log(data)
     console.log(count)
    
    return data/count                                                                                                                           
}
console.log(calcAverageHumanAge123(data3))
console.log(calcAverageHumanAge123(data4))

////////////////////////////////////




