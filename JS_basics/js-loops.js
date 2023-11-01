// //let sum = 0
// n = prompt("enter number")
// n= Number.parseInt(n)

// for(let i =1;i<=n;i++){
//     alert ("yo lol")
//     //sum += i
// }
// //console.log(sum)

let obj = {
    diya: "68",
    cap: "79",
    rey: "97",
    yam: "69",
    aadi: "93"
}

for (let a in obj){
    console.log("marks of "+a+" are "+obj[a] )
}

for (let a of "di"){
    console.log(a)
}

const hello = (a,b)=>{
    console.log("hey sup shawty")
    return a+b
}

console.log(hello(1,22));

