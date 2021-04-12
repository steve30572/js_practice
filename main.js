#!/usr/bin/env node

const lib=require("./lib");
if(process.argv.length<=3){
    console.log("Insufficient parameters!");
    process.exit(1);
}
let command=process.argv[2];
let numbers=process.argv.slice(3,process.argv.length)
;
let repeat_numbers=[];
const repeator='@';
for(let i=0;i<numbers.length;i++){
    
        if (numbers[i].includes(repeator)){
            const number_from=numbers[i].split("@");
            if (number_from.length>=3){
                console.log("Invalid repeat!");
                process.exit(1);
            }
            first=parseFloat(number_from[0])
            second=parseFloat(number_from[1])
            if (isNaN(second)){
                console.log("Invalid repeat!");
                process.exit(1);
            }
            if (second===0){
                console.log("Invalid repeat!");
                process.exit(1);
            }
            for(let j=0;j<second;j++){
                repeat_numbers.push(first);
            }
        }
        else{
            if(isNaN(parseFloat(numbers[i]))){
                console.log("Some arguments are not numbers!");
    process.exit(1);
            }
            repeat_numbers.push(parseFloat(numbers[i]));
        }
    
    
}
numbers=repeat_numbers
let result;
switch (command){
    case "med":
        result=lib.med(numbers);
        break;
    case "sum":
        result=lib.sum(numbers);
        break;
    case "avg":
        result=lib.avg(numbers);
        break;
    case "max":
        result=lib.max(numbers);
        break;
    case "min":
        result=lib.min(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);