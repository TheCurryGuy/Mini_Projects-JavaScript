function calculate(operation, a, b){
    let total = a 
    for(i of b){ //b is a array
        total = operation(total, i)
    }
    return total
}
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}   
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
console.log(calculate(add, 5, [1,2,3,4,5]))
console.log(calculate(sub, 5, [1,2,3,4,5]))
console.log(calculate(mul, 5, [1,2,3,4,5]))