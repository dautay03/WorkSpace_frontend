
let Car1= function(make,speed){
   this.make=make
   this.speed=speed
   this.accelerate=function(){
    console.log(`'${this.make}'đi với tốc độ ${Number(this.speed)+10} km/h`)
   }
   this.brake=function(){
    console.log(`'${this.make}'đi với tốc độ ${Number(this.speed)-5} km/h`)
}
}
let bwm1= new Car1('BWM', 110)
bwm1.accelerate()







class Car {
    constructor(make, speed){
        this.make=make
        this.speed=speed
    }
    accelerate(){
        console.log(`'${this.make}'đi với tốc độ ${Number(this.speed)+10} km/h`)
    }
    brake(){
        console.log(`'${this.make}'đi với tốc độ ${Number(this.speed)-5} km/h`)
    }
    get speedUS(){
        return this.speed= this.speed/1.6
    }
    set speedUS(a){
        return this.speed = this.speed*1.6
    }
}


let bwm= new Car('BWM',110)
let mescedes=new Car('Mescedes',100)
bwm.accelerate()
bwm.brake()
mescedes.accelerate()
mescedes.brake()

