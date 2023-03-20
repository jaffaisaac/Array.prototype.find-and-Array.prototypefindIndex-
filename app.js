//Array.prototype.find() and  Array.prototypefindIndex()

// Array.prototype.find() let you iterate through an array  and returns the first item that matches  the callback ( element ,index and array) 
const inventory = [
    {name:'powpow',Qtn:3},
    {name:'beans',Qtn:0},
    {name:'mango',Qtn:5}
];

let result = inventory.find( (food) =>food.name ==='mango')
console.log(result) //{ name: 'mango', Qtn: 5 }

let max = inventory.find((food) => food.Qtn >2)
console.log(max)//{ name: 'powpow', Qtn: 3 }

//this look for the element with the index given
let indexVale =inventory.find((food ,i)=> i===2)
console.log(indexVale)


//findIndex() method
//this returns the index position of the element basing on the coditions  given

//if it returns  -1 means the element is not present ease return the position  the element

let location = inventory.findIndex( (fruilt) => fruilt.name ==='beans');
console.log(location)
