//ques 1
const marks = (obj) => {
    for (let key in obj){
        console.log("marks of "+key+" are "+obj[key]+"/100")
    }
}
let obj = {
    harry:98,
    soham:70,
    ankit:7
}
marks(obj);

//ques 2
//done above

// //ques 3
// num = prompt("enter a number")
// num = parseInt(num)
// while (num!= 5){
//     alert("try again")
//     num = prompt("enter a number")
// }

//ques 4

const ave = ()=>{
    let av = 0;
    num = prompt("how many numbers?");
    console.log(num)
    if (num==0){return 0}
    for (let i=1; i<=num; i++){
        x= parseInt(prompt("enter number "+(i)));
        console.log(x)
        av += x
    }
    return av/num
}
console.log(ave());