function Person(name, age){
    this.age = age;
    this.name = name;

    this.getYearOfBirth = function(){
        return new Date().getFullYear() - this.age
    }
}

const firstPerson = new Person("Ugochukwu", 23);

console.log(firstPerson.getYearOfBirth());