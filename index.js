
let person={
    name: "diya",
    age: 21,
};
person.name = 'dooya';
person['name'] = 'deeeya';

let items = ["diya", "sajan"];
items[3] = "disha"

console.log(items.keys)

//performing a task
function greet(name){
    console.log("hey there "+name)
}

greet("ding ding")