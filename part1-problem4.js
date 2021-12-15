let kata="tamat";
let a="";
let b="";
let c=kata.length-1;
for(let i=0; i<kata.length; i++){
    a+=kata[i];
}
for(let i=c; i>=0; i--){
    b+=kata[i]
}
if(a===b){
    console.log(true)
}else{
    console.log(false)
}