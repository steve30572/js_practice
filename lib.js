function sum(numbers){
    let s=0;
    for(let i=0;i<numbers.length;i++){
        s +=numbers[i];
    }
    return s;
}
function avg(numbers){
    return sum(numbers)/numbers.length;
}
function max(numbers){
    let m=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(m<numbers[i]){
            m=numbers[i];
        }
    }
    return m;
}
function min(numbers){
    let m=numbers[0];
    for(let i=1;i<numbers.length;i++){
        if(m>numbers[i]){
            m=numbers[i];
        }
    }
    return m;
}
function med(numbers){
    numbers=numbers.sort();
    let m=numbers.length/2;
    
    let result;
    if (numbers.length%2===0){
        var temp=parseInt(m-1);
        result=(numbers[temp]+numbers[temp+1])/2
    }
    else{
        
        result=numbers[parseInt(m)];
    }
    return result;
}
exports.sum=sum;
exports.avg=avg;
exports.max=max;
exports.min=min;
exports.med=med;