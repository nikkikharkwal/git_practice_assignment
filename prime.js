
function prime (number) {
    let factor = 0;
    for(let i = 1; i <= number; i++){
        if(number%i==0){
            factor++;
        }
    }
    if(factor==2){
        return true;
    }
    else {
        return false;
    }
}

let ans=prime(17);
if (ans==true){
    console.log("Prime");
}else{
console.log("Not Prime");}

