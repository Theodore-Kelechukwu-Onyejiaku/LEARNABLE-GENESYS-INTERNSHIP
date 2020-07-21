function Animal(name, limbs){
    this.name = name;
    this.limbs = limbs;
}

//Here we are saying that the property "move" is a method of the animal function Constructor
Animal.prototype.move = function(){
    console.log("Currently Moving");
}

function Dog(name){
    //Here we create inheritance with Animal Function Constructor using "call" and "this"
    Animal.call(this, name, 4);
}

Dog.prototype.move = function(){
    console.log("Currently running");
}

function Bird(name){
    Animal.call(this, name , 2);
}

Bird.prototype.move =  function(){
    console.log("currently flying");
}


const puppy = new Dog("Puppy");
const eagle = new Bird("Eagle");
const anyAnimal = new Animal("anyAnimal", 5) 


puppy.move();
eagle.move();
anyAnimal.move();

//So basically, the call() is just the inheritance magic