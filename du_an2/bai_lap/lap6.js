
let test2 = [12,5,-5,0,4];
let test1 = [17,21,23];
function prints(arr){
let print='';
for (let i= 0 ; i<arr.length;i++){
    print = print + `...${arr[i]}*C in ${i+1} days`;
}return print}
console.log(prints(test2))