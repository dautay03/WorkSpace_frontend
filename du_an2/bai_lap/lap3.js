let numNeighbours = Number(prompt('how many neighbour countries does your country have?'))
if (numNeighbours === 1){
    console.log('Only 1 border!')
}else if (numNeighbours >1){
    console.log('More than 1 border')
}else{ 
    console.log('no border')
}



let country = prompt('Country');
let Language = prompt('language');
let population = Number(prompt('Population'));
let island = prompt('true or false')=='false'?false: true ;
if (Language =='english' && population <= 50 && !island ){
    console.log(`You should live in ${country} :`)
}else{
    console.log(`${country} does not meet your criteria :`)
}

switch(Language){
    case 'Chinese':
        console.log('MOST nuber of native speakers!');
    break
    case 'Mandarin':
        console.log('MOST nuber of native speakers!');
    break
    case 'spanish':
        console.log('2nd place in number of native speakers');
    break
    case 'english':
        console.log('3rd place');
    break
    case 'Hindi':
        console.log('Number 4');
    break;
    case 'Arabic':
        console.log('5th most spoken language');
    break;
    default:
       console.log('Great language too :D')
}

population >= 33? console.log(`${country} population is above average.`):console.log(`${country} population is below average.`);

// // lab 3.6.1
let Dolphins1= Number(prompt('Dolphins1'))
let Dolphins2= Number(prompt('Dolphins2'))
let Dolphins3= Number(prompt('Dolphins3'))
let Koalas1= Number(prompt('Koalas1'))
let Koalas2= Number(prompt('Koalas2'))
let Koalas3= Number(prompt('Koalas3'))
let DolphinsAverage= (Dolphins1+ Dolphins2 + Dolphins3)/3;
let KoalasAverage= (Koalas1+Koalas2+Koalas3)/3;
if (DolphinsAverage>KoalasAverage ){
    console.log('team Dolphinns victory')
}else if (KoalasAverage>DolphinsAverage ){
    console.log('team koalas victory')
}else{
    console.log('hai team hòa nhau')
}

if (DolphinsAverage>KoalasAverage && DolphinsAverage>=100){
    console.log('team Dolphinns victory')
}else if (KoalasAverage>DolphinsAverage && KoalasAverage>=100){
    console.log('team koalas victory')
}else if (KoalasAverage==DolphinsAverage && DolphinsAverage>=100){
    console.log('two team victory')
}else{
    console.log('no team victory')
}
const Bill = Number(prompt('Bill'))
let tip=Bill>= 50 && Bill<= 300? console.log(`the bill was ${Bill}, the tip was ${Bill*0.15}, and the total value ${Bill+Bill*0.15}`):console.log(`the bill was ${Bill}, the tip was ${Bill*0.2}, and the total value ${Bill+Bill*0.2}`) ;