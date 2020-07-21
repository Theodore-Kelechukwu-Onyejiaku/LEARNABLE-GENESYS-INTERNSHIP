const createCounter = function (){
    let count = 0;

    this.count = count;
    return {
        click: function(){
            return count +=1;
        },
        getCount: function(){
            return count;
        }
    }
    console.log(arguments)
};

const counter = createCounter();

counter.click();
counter.click();
counter.click();

console.log(counter.getCount());
console.log(counter.count)  //Undefined
//wow I couldn't get the count variable

