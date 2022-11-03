function prime(n){
    let counter=0;
    for(let i=2;i<=n;i++){
        if(n%i==0){
            flag++
        }
    }
    if(counter==1){
        return true;

    }else{
        console.log("It is not a prime number");
    }
}
prime(13)