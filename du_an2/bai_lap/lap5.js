const toan = {
    firstname: 'toan',
    lastname: 'nguyen',
    brithyear: 1998,
    driverlicense: true,
    job: 'teacher',
    introductyoursell: function (){
        this.agejob = (2022-this.brithyear)-18;
        return `${this.firstname} is a ${this.agejob}-year old ${this.job} and he has ${this.driverlicense? 'a':'no'} driver's liscense.`
    }
}
// console.log(toan.introductyoursell())

const so_chan_1to100= []

for(let i=0; i<=100;i++ ){
    if(i%2==0){
        so_chan_1to100.push(i)
    }else {
        console.log(`so ${i} la so le`)
    }
}
console.log(so_chan_1to100)
