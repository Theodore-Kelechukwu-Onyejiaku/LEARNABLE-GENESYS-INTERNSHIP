let object1 = {value : 10}
let object2 = object1
let object3 = {value : 10}

console.log(object1 == object2);    //false
console.log(object1 == object3);    //True

console.log(object2.value);
object1.value = 5;
console.log(object2.value);

//Object1 and object2 binds the same object or references the same object

const secondObject1 = {value : 20};
const secondObject2 = secondObject1;

