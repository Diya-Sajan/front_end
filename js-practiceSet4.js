let name1 = "Diya Sajan";

//question 1
console.log("diy\"".length)

//question 2
console.log(name1.includes("jan"))
console.log(name1.endsWith("n"))
console.log(name1.trim().startsWith("D"))

//question 3
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())

//question 4
let ab = " please give Rs 1000";
ab = ab.trim()
let num =''
for (let i of ab){
    if (i >= 0 && i <=9 && i!=' '){
        num = num + i
    }
}
console.log(ab)
console.log(parseInt(num))

//question 5
name1[4] = "d";
console.log(name1)
//answer is no