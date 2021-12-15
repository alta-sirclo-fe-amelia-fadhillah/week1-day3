function primeNumber(number){
    if(number<2){
        return false;
    }
    else if(number===2){
        return true;
    }else{
        for(let i=2; i<number; i++){
            if(number%i===0){
                return false;
            }
        }
    }
    return true;
}
function fullPrime(n){
    if(primeNumber(n)){
        let teks=n.toString();
        for(i=0;i<teks;i++){
            if(primeNumber(teks[i])){
                return true;
            }else{
                return false;
            }
        }
    }else{
        return false;
    }        
    
}
console.log(fullPrime(47));