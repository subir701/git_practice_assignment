function prime(n){
    let flag=0;
    for(let i=2;i<=n;i++){
        if(n%i==0){
            flag++
        }
    }
    if(flag==1){
        console.log("It is a prime number",n);
    }else{
        console.log("It is not a prime number");
    }
}
prime(13)