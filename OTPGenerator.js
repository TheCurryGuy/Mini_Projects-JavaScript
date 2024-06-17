function optGenerator(){
    let otp = Math.random()*10000//as it generates random number but between 0 and 1 only
    return Math.ceil(otp)
}

console.log(optGenerator())