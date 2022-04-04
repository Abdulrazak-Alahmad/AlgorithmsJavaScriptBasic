let sum=0;
let max=null;
let sumAverage=0;

for (let i = 0; i <135; i++){
    console.log(i+1)
}

for (let i = 0; i <135; i++){
    if ((i %2)==0) {
        console.log(i)
    }
}

for (let i = 0; i <=135; i++){
    
    sum=sum+i
    console.log("number is: " + i + " sum: " + sum)
}

X = [1,4,2,12]

for (let i = 0; i < X.length; i++) {
    console.log(X[i])
}
X = [1,-3,4,2,12,2,-3,0]
for (let i = 0; i < X.length; i++){
    if(X[i]>max){
        max=X[i]
    }
}
console.log("max= "+max)

X = [2,1,3]
for (let i = 0; i < X.length; i++){
    sumAverage=sumAverage+X[i]
}
console.log(sumAverage/X.length)

X = [2,-1,4,-3]
for (let i = 0; i < X.length; i++){
    if(X[i]<0){
        X[i]=0
    }
}
console.log(X)

X = [1,-4,0,-1]
for (let i = 0; i < X.length; i++){
    if(X[i]<0){
        X[i]="Turing"
    }
}

console.log(X)

