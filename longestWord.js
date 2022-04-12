let string1="The quick brown fox jumped over the lazy dog"
let string2="May the force be with you"
function toArray(str){
    let max=null;
    let strToArray =str.split(' ')
    for (let index in strToArray){
        if(strToArray[index].length>max){ max=strToArray[index].length}
    }
    return max
}
console.log(toArray(string1))
console.log(toArray(string2))