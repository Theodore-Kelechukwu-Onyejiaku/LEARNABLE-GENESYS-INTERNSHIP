let anObject = {left: 1, right: 2}
console.log(anObject.left)

//Using the delete operator: this is used to delete the property of an object 
//delete
delete anObject.left
console.log(anObject.left); //undefined


//we use the "in" operator to determing the properties available in an object
console.log("left" in anObject);    //false
console.log("right" in anObject);   //true

//To know all the properties present in an object we use Object.keys() method.
//Object.keys
console.log(Object.keys(anObject));


//To assign properties of another object to an object we use Object.assign() method
//Object.assign()
let objectA = {a: 1, b: 2, c: 3};
let objectB = {b: 3, c:4, d:5, e:6}

//Here we assign the properties of object B to A.
Object.assign(objectA, objectB)
console.log(objectA)

//Arrays are objects
//[]
console.log(typeof []);