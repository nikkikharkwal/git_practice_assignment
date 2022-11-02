function prime (number) {
    for(let i = 1; i <= number; i++){
        if(number%2==1){
            return true;
        }
    }
    return false;
}