class Animal {
     constructor(name , image){
       this.name=name
       this.image=image
    
        }
        talk(){
            console.log("hmmm")
        }
}


class Dog extends animal{
    constructor(name ,type,  image){
        super(name , image)
        this.type=type
    }

       talk(){
        console.log("bark")
       }

}
class Chihuahua extends Dog {
    constructor(headType , body){
    super(name ,type,  image)
      this.headType=headType
      this.body= body
        /**
        * Long-Coat Chihuahua. ...
        Apple Head Chihuahua. ...
        Deer Head Chihuahua. ...
        Teacup Chihuahua. ...
        Fawn Chihuahua.
         */
    }
}

class  Bullmastiff extends Dog {
    constructor(Temperament , LifeExpectancy){
    super(name ,type,  image)
      this.Temperament=Temperament
      this.LifeExpectancy= LifeExpectancy
     /**
      * Temperament: Affectionate, Loyal, Brave
      * Life Expectancy: 7-9 years.
      */
    }
}

cowEventlisener.addEventListener("")
{
   // let conterainer 
}

var dog =new Dog ("sese", "Chihuahua" , "https://www.ukclassifieds.co.uk/bullmastiff_bull_and_mastiff_breeds_forum-o434929.html")
console.log(Dog);
console.log(Dog.sound());
console.log(Dog.jump());

class cat extends animal{
    constructor(name ,type,  image){
        super(name , image)
        this.type=type
    }

       talk(){
        console.log("meow")
       }

    }

    class cow extends animal{
        constructor(name ,type,  image){
            super(name , image)
            this.type=type
        }
    
           talk(){
            console.log("mooo")
           }
    
        }
    
        class sheep extends animal{
            constructor(name ,type,  image){
                super(name , image)
                this.type=type
            }
               talk(){
                console.log("baaa")
               }
        
            }

            class chicken extends animal{
                constructor(name ,type,  image){
                    super(name , image)
                    this.type=type
                }
            
                   talk(){
                    console.log("cluck , cluck")
                   }
            
                }

                
            
        cd studentapp
        