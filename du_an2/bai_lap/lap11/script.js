'use strict';

let poll={
    arrAnswer:[0,0,0,0],
    Option:['Array', 'String'],
    registerNewAnswer(){
        let valueAnswer = Number(prompt(`What is your favourite programming language? 
        0: Javascript
        1: Python
        2: Rust
        3: C++
        (Write option number)`))
        console.log(valueAnswer)
        if (valueAnswer>=0&& valueAnswer<=3)
         {  console.log(valueAnswer ,typeof valueAnswer)
            let arrvalue = this.arrAnswer[valueAnswer]+1
            this.arrAnswer[valueAnswer]=arrvalue
            console.log(this.arrAnswer)
        }else {alert('between 0 to 3')}
        let display = prompt(this.Option)
        if (display='Array'){this.displayResults(this.arrAnswer)}
        else {this.displayResults('string')}
    
    },
    displayResults(tyle){
        if(tyle=='array'){
            console.log(this.arrAnswer)
        }else{console.log(`Poll results are ${this.arrAnswer[0]},${this.arrAnswer[1]},${this.arrAnswer[2]},${this.arrAnswer[3]}`)}
    }

};

document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
