function gameOfThree(number) {

    if (number == 1 || number ==0) {
       console.log(number);
    }
    else if(number < 0 ){
        alert("Unvalid number")
    }
    else {
        if (number % 3 == 0) {
            console.log(`${number}   0`);
             return gameOfThree(number / 3);
        }
        else {
            if ((number + 1) % 3 == 0){
                console.log(`${number}   1`);
                return gameOfThree((number + 1) / 3);

            }
            else{
                console.log(`${number}   -1`); 
                 
               
                return gameOfThree((number -1) / 3);
            }
        }
    }

}

gameOfThree(100)