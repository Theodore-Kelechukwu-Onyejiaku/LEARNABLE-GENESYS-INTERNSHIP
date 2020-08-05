const person = {
    firstName: "Theodore",
    lastName: "Onyejiaku",
    yearOfBirth: 1900,
    get fullName(){
        return this.firstName + " " + this.lastName;
    },
    set fullName(name){
        this.firstName = name
    }
}

person.firstName = "Kelechukwu";
console.log(person.fullName);