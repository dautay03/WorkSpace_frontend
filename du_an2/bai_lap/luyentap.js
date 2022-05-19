// // const inputyear = '1991';
// // console.log(Number(inputyear), inputyear);
// // console.log(Number(inputyear) + 18);
// // console.log(String(23),23);

// // console.log('Im '+ 23 + ' year old')
// // console.log('23'+2+3)
// // console.log('2'+3)
// // let n = undefined;
// // console.log(Boolean(0))

// // const faverite = Number( prompt("what's your faverrite number?"));
// // console.log(faverite)
// // console.log(typeof faverite)
// //  if(faverite == 56){
// //      console.log(`good ${faverite} is an mazaing number!`);

// //  }
// //  let day = 'day';
// //  if (day=== 'monday'){
// //      console.log('plan course structure')

// //  } else if (day=== 'tuesday'){
// //      console.log('prepare theory videos')
// //  } else  if (day=== 'wednesday'){
// //      console.log('read books')
// //  }else if (day === 'thursday'){
// //      console.log('write code examples')
// //  }else if (day === 'friday'){
// //      console.log('record videos')
// //  }else if (day === 'saturday'){
// //      console.log('enjoy the weekend :D')
// //  }else if (day === 'sunday'){
// //      console.log('enjoy the weekend ')
// //  }else{ console.log('not a valid day')}

// //  faverite >=50 ? console.log('Im like to drink wine'): console.log('Im like to dirink to water')
// "use strict";
// function age(birth){
//     const age1= 2022- birth;
//     return age1
// }
// // let toanAge= age(Number(prompt('nam sinh')))
// // console.log(toanAge);
// let ptbachai1;

// const ptbachai= function(a,b,c){
//    if (a === 0 && b === 0 && c !== 0)
//    {
//     ptbachai1=`Phương trình bậc 2 vô nghiệm`;
//    }else if (a === 0 && b ===0 && c === 0){
    
//     ptbachai1= `Phương trình bậc 2 có vô số nghiệm`;
//    }else if (a === 0 && b !== 0){
//    let x= -c/b;
//    ptbachai1=  `Phương trình bậc 1 : ${a}x + ${b} = 0, có nghiệm x = ${x} `;
//    }else if (a!== 0){
//        const denta= b*b -4*a*c;
//        switch (denta){
//            case denta > 0:
//                const x1= (-b + Math.sqrt(denta))/(2*a);
//                const x2= (-b - Math.sqrt(denta))/(2*a);
//                ptbachai1= `phương trình bậc hai ${a}x^2 +${b}x + ${c} = 0 có 2 nghiệm phân biệt \n\ x1 = ${x1} và x2 = ${x2} `;
//                break
//             case denta === 0:
//                 x=-b/(2*a)
//                 ptbachai1= `phương trình bậc hai ${a}x^2 +${b}x + ${c} = 0 có duy nhất nghiệm x= ${x}`;
//                break
//             case denta <0:
//                 ptbachai1= `phương trình bậc hai vô nghiệm`
//        }
//    }
//    return ptbachai1;
// }  
// let giaiptbachai= ptbachai(1,2,0);
// console.log(giaiptbachai);

// const bill= [25,56,75,150,558,900,36,456,158,432];
// const tip =[];
// const total= [];
// function calctip (bill){
//     return bill>=50 && bill<=300? bill*0.15:bill*0.2;
// }

// for (let i= 0;i < bill.length;i++){
//      let tips = calctip(bill[i]);
//      tip.push(tips);
//      let totals= bill[i]+tips;
//      total.push(totals)
//      console.log(`Hoa don ${i+1} ${bill[i]}$ cong voi tiep tip ${tips} tong cong la ${totals}`)

// }
// console.log(tip)
// console.log(total)

// let test2 = [12,5,-5,0,4];
// let test1 = [17,21,23];
// function prints(arr){
// let print='';
// for (let i= 0 ; i<arr.length;i++){
//     print = print + `...${arr[i]}*C in ${i+1} days`;
// }return print}
// console.log(prints(test2))

// let number= 5;
// let toan = {
//     name:'toan'
// }
// let toanage= function(age,name1){
//     age =23;
//     name1.name= 'nguyen' + name1.name
//     name1['age']=age;
// }
// toanage(number,toan)
// console.log(number,toan)

// const greet = greeting => name=> console.log(`${greeting} ${name}`);
// greet('hi')('toan')



const user1=class{

}




class user {
 constructor(firstName, birthyear){
     this.firstName=firstName
     this.birthyear=birthyear
 }   
  

}
user.prototype.caleage=function(){
    return 2022-this.birthyear
}
user.prototype.greed=function(){
    return `hi ${this.firstName}`
}
const toan = new user('toan',1998);
console.log(toan)
const Agetoan=toan.caleage()
console.log(Agetoan)



console.log(toan.greed())
console.log(user)