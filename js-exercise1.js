let num = Math.floor((Math.random()*100)+1)
let guess = 0
let score = 100
do{
    guess = Number.parseInt(prompt("guess the number (1-100)"))
    score -= 1 
    if(guess==num){
        alert(num+"!\nYou have guesssed it right!"+"\n\nYour score is: "+score)
        break
    }
    else if(guess>num){
        alert("Your guess is greater than the number!")
    }
    else if(guess<num){
        alert("Your guess is smaller than the number!")
    }
}while(score!=0 || guess!=num )