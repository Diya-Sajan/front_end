let marks = [71,82,67,"89",91]
console.log(marks)
console.log(typeof(marks))
marks [5] = 44
console.log(marks.length )
console.log("this is the aray " )

// for (let i=0;i<= marks.length;i++){
//     console.log(marks[i])
// }

let num = [10,2,4,3,2]

let b = num.toString()
console.log(b)

let c = num.join("*")
console.log(c)

let d = num.pop()//pops last element (changes original array)
console.log(num, d)//d giving the popped element

let e = num.push(99)//pushes new element to the back of the array
console.log(num, e)//e returns length

let f = num.shift()//pops front element and changes original array
console.log(num,f)

let g = num.unshift(23)//adds to front element and changes original array
console.log(num,g) // g returns length

let num1 = [1,2,43,4,55,6,7,888,9]
delete num1[0] // it only deletes the value from the position. but the position is still held with "empty"
console.log(num1) 

let num2 = [11,142,13,14,15,136,137]
let newnum = num1.concat(num2,num)// add as many arrays as you want. but none of the originals change
console.log(newnum)

console.log(newnum)
newnum.sort() //sorts alphabetically. to sort in order, refer use of compare function below
console.log(newnum)

let compare = (a,b) =>{
    return a-b
}
newnum.sort(compare)//this is us calling a compare function which we define where we compare the numbers and return true or false based on which it does the sorting, so if we want accending then a-b and b-a for descending. 
console.log(newnum)
newnum.reverse() // to reverse the order of the numbers
console.log(newnum)

