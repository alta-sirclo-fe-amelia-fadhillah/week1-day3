function primeNumber(number){
    for(let i=2; i<number; i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}
console.log(primeNumber(8));
