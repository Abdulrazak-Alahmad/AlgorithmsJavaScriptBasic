
function factorialize(n){
    if (n == 0) return 1
    if (n == 1) return n;
    return (n*factorialize(n-1))
}
console.log(factorialize(/* you have to right nuber here */));
