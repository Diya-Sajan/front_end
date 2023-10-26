let num = [3,33,42,1,4,23]

for (let i=0;i<num.length;i++){
    console.log(num[i])
}
console.log(" ")

num.forEach((i)=>{
    console.log(i*i)
})

for (let i in num){
    console.log(num[i])
}

//map makes a new modified array. original no change
let arr = [45,23,81]
let a = arr.map((va,index,array)=>{
    console.log(va,index,array)
    return va + index
})
console.log(a)

//filter also makes a new modified array. original no change
let arr2 = [45,23,12,23,4,55,5,67,]
a2 = arr2.filter((a)=>{
    return a<25
})
console.log(a2)

//reduce returns a single value, ie it reduces an array into one single balue
let arr3 = ['d','i','y','a',' ','2','3']
let a3= arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)

