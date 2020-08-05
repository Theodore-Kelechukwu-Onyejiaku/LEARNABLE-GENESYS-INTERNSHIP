class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getDateOfBirth(){
        return new Date().getFullYear() - this.age
    }

    getName(){
        return this.name
    }

    //Here we are using a getter. 
    get dob(){
        return this.getDateOfBirth()
    }
}

let me = new Person("Theodore", 20);
console.log(me.getDateOfBirth());
console.log(me.getName());

me.name = "Kelechukwu";
console.log(me.getName());
console.log(me.age)

//Here we try the getter. But we won't call the getter as a method but as a property
console.log(me.dob);
