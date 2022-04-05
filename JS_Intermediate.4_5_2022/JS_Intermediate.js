//1. Addition: 

let sum=0
for (let i = 200; i <= 2700; i++) {
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
console.log('sum :>> ', sum);


//2. Shift the Values
let x =  [2,1,6,4,-7];
  let  reverseX=x.reverse()
console.log('reverseX :>> ', reverseX);
    

//3. FizzBuzz
let z=[];
for (let i = 1; i < 135; i++){
    if(i%3==0 & i%5==0){
        z[i]="FizzBuzz";
    }
    else if(i%3==0){
        z[i]="Fizz";
    }
    else if(i%5==0){
        z[i]="Buzz";
    }
    else{ z[i]=i;
        }
    z.push(z[i]) 
}
console.log(z);


//4. Fibonacci
let number=0;
let previousNumber=0;
let beforPreviousNumber=1;
for(let i =0; i <= 1000000; i++){
    
    if(i==0){
        console.log(i);
        continue
    }
    else if(i==1){
        console.log(i);
        continue
    }

    else {
        number=beforPreviousNumber+previousNumber;
        if (number > 1000000) {
            break;
            
        }
        console.log(number);
        beforPreviousNumber=previousNumber;
        previousNumber=number;
        if (number > 1000000) {
            break;
            
        }
    }
}


//5. Remove the Negative
var myArray = [1,-2,4,1];
for (i=0;i<myArray.length;i++) {
    if (myArray[i]<0)
    myArray.splice(i, 1);
}


//6. Communist Censorship
let text ="";
console.log(myArray);
var array1=[]
var array = ['Man', 'I','Love','The','Matrix','Program']
for (i=0;i<array.length;i++) {
  if (array[i]=='Program'){
      for (let index = 0; index < array[i].length; index++) {
          text=text+"*"
      }
      array.splice(i, 1);
      array.push(text);
  }
}
console.log(array);
