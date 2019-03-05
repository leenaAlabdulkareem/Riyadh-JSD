class animal{
    constructor(breed , feet){
        this.breed=breed
        this.feet=feet

    }
    sound(){
        console.log("meow")
    }
}
var animal1 = new animal ("sue",10000)
console.log(animal1)
console.log(animal1.sound());


class Mammal extends animal{
    constructor(breed , feet , name){
        super(breed , feet)
        this.name = name
    }

       sound(){
        super.sound()
        console.log("bark")
       }

       static jump(){
        console.log("jump!!");
       }
}

var mammal =new Mammal ("cat",3 , "jack")
console.log(mammal);
console.log(mammal.sound());
console.log(mammal.jump());

