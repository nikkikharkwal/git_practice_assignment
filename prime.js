function prime (number) {
    for(let i = 1; i <= number; i++){
        if(number%2==1){
            return true;
function prime(number) {
    let factor = 0;
    for(let i=1; i<=number; i++){
        if(number%i==0){
           factor++;
        }
    }
    return false;
       
    } return factor;
   
}
let factor = prime(17);
if(factor===2){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}