
function prime (number) {
    let flag = 0;
    for(let i = 1; i <= number; i++){
        if(number%i==0){
            flag++;
        }
    }
    if(flag==2){
        return true;
    }
    else {
        return false;
    }
}

let ans=prime(13);
if (ans==true){
    console.log("Prime");
}else{
console.log("Not Prime");}

