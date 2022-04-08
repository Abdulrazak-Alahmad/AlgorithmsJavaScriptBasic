var array=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
let first=second=third=null;
for (let index = 0; index < array.length; index++) {
    if(array[index]> first){
        third =second;
        second = first;
        first= array[index];
    }
    else if(array[index]<first && array[index]> second){
        third = second;
        second=array[index];
    }
    else if(array[index]< first && array[index]< second && array[index] > third){
        third= array[index];
    }
    else {
        continue;
    }

    
}
console.log(third);