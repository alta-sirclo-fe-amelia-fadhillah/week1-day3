function primeNumber(number){
    let bilangan=number;
    if(bilangan<2){
        return false;
    }
    if(bilangan===2){
        return true;
    }
    for(let i=2; i<bilangan; i++){
        if(bilangan%i===0){
            return false;
        }
    return true;
    }
}
console.log(primeNumber(1));
