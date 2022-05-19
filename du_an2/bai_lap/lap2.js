let population = 13;
console.log(population);
let language;
language = "Vietnamese";
const country = "vietnam";
const continent = "Asia";
const isIsland = false;
let population_country = population < 33;
console.log(typeof population)
console.log(typeof  isIsland)
console.log(typeof language)
console.log(typeof country)
// console.log(population/2)
// console.log(population++)
if (population>=6){
    console.log(population)
}
console.log(population_country)
if (population_country){
    console.log("dân số bé hơn 33 triệu người.")
} else { console.log("dân số lớn hơn 33 triệu người")
}
let description = `${country} and its ${population} milion speak ${language}`
console.log(description)

//lap 2.5
if(population > 33){
    console.log(`${country}'s population is  above average`)
}else{
    console.log(`${country}'s population is ${33-population} milion below average`)
}

//lap 2.6

let massMark = 78;
let massJohn = 95;
let heightMark= 1.69;
let heightJohn=1.88;
let BMIMark = massMark/(heightMark ** 2);
let BMIJohn= massJohn/(heightJohn ** 2);
let markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI){
    console.log(`Mark's BMI (${BMIMark}) is higher than John (${BMIJohn})!`);
}else{
    console.log(`John's (${BMIJohn}) is higher than Mark BMI (${BMIMark})!`);
}


const toan=[2,3,5,7]
toan[0]=4


