ques = prompt("question number?")
switch(ques){
    case "1":

        let age = prompt("tell age!");
        if (age>10 && age <20){
            console.log("your age is between 10 and 20")
        }
        break

    case '2':
        console.log("this itself is ques 2")
        break

    case '3':
        //question 3
        let num = prompt("tell number")
        if (num%2==0 && num%3==0){
            console.log(num,"is divisible by 2 and 3")
        }
        else{console.log("not divisible")}
        break
    
    case '4':
        //question 4
        let num2 = prompt("tell number")
        if (num2%2==0 || num2%3==0){
            console.log(num2,"is divisible by 2 or 3")
        }
        else{console.log("not divisible")}
        break
    
    case '5':
        //question 5
        let ag = prompt("enter age")
        console.log("you can",(ag<18)?"not drive":"drive")
}