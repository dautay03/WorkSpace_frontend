'use strict'
function describecountry(country, population, capitalCity){
    return ` ${country} has ${population} people and its capital city is ${capitalCity}`}

let vietnam1=describecountry('viet nam',34,'hanoi')
console.log(vietnam1)

function percentageOFWorld1(population){
    return (population / 7900)*100;
}
const vietnam = percentageOFWorld1(90);
const china = percentageOFWorld1(1441);
const singapo = percentageOFWorld1(5);
console.log(vietnam);
console.log(china);
console.log(singapo);

const percentageOFWorld2 = function(population){
    return (population / 7900)*100;

}
const lao = percentageOFWorld1(90);
const india = percentageOFWorld1(1441);
const timoleste = percentageOFWorld1(5);
console.log(lao);
console.log(india);
console.log(timoleste);

const percentageOFWorld3 = population => (population / 7900)*100;
const timoleste1 = percentageOFWorld3(5);
console.log(timoleste1);

function describePopulation(country, population){
    const percent= percentageOFWorld1(population);
    return `${country} has ${population} milion people, which is about ${percent} of the world.`
}
const lao1 = describePopulation('Lao',90);
const india1= describePopulation('India', 1441);
const timoleste2 = describePopulation( 'timoleste', 5);
console.log(lao1);
console.log(india1);
console.log(timoleste2);

const populations = [90,1441,5,35];
const check=populations.length === 4;
console.log(check);
let percentages = new Array(percentageOFWorld1(populations[0]),percentageOFWorld1(populations[1]),percentageOFWorld1(populations[2]),percentageOFWorld1(populations[3]),)
console.log(percentages)


let neighbours = ['china', 'campuchia','lao']
neighbours.push('Utopia');
if(!neighbours.includes('Germany')){
    console.log('Probably not a central European country :D')
}
let indextlao=neighbours.indexOf('lao');
neighbours[indextlao]='thailan';
console.log(neighbours);

const calcAverage = (score,score1,score2) => (score+score1+score2)/3;
const avgDolphins = calcAverage(44,23,71)
const avgKoalas = calcAverage(65,54,49);
function checkWinnerfirst(avgDolphins, avgKoalas){
    if (avgDolphins>= avgKoalas * 2){
        console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`)
    }else if (avgKoalas>= avgDolphins*2){
        console.log(`koalas win(${avgKoalas} vs ${avgDolphins})`)

    }else {
        console.log('no team winner')
    }
}
checkWinnerfirst(avgDolphins,avgKoalas);

const avgDolphins1 = calcAverage(44,23,71)
const avgDolphins2 = calcAverage(85,54,41)
const avgKoalas1 = calcAverage(65,54,49);
const avgKoalas2 = calcAverage(23,34,27);
function checkWinner(avgDolphins, avgKoalas){
    if (avgDolphins>= avgKoalas ){
        console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`)
    }else{
        console.log(`koalas win(${avgKoalas} vs ${avgDolphins})`)

    }
    
}
checkWinner(avgDolphins1,avgKoalas1);
checkWinner(avgDolphins2,avgKoalas2);

const calctip = function(bill){
    if (bill >= 50 && bill <=300){
        return bill*0.15
    }else {
        return bill*0.2
    }
}
let tip1 =calctip(100);
let bills=[125,555,44]
let tip = [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]
let total=[bills[0]+tip[0], bills[1]+tip[1],bills[2]+tip[2]]
console.log(total)


