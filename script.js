

let digit;

digit = 0;

if(digit > 0){
    console.log("The number is positive");
}
else if(digit < 0){
    console.log("The number is negative");
}
else{
    console.log("The number is 0");
}


let number;

number = 6906;

if(number%2 == 0){
    console.log('This is even number');
}

else{
    console.log("This is odd number");
}


let mark;

mark= -65;

if(mark < 0 || mark > 100){
    console.log("Invalid Mark");
}
else if(mark >= 80){ //80 81 82 83 84 85 86 87, 88, 89 90 91......98 99 100 
    console.log("The grade is A+");
}
else if(mark >= 70){ //70 71 72 73 74 75 76 78 79
    console.log("The grade is A");
}
else if(mark >= 60){ //60 61 62 63 64 65 67 68 69
    console.log("The grade is A-");
}
else if(mark >= 50){ //50-59
    console.log("The grade is B");
}
else if(mark >= 40){
    console.log("The grade is C");
}
else if(mark >= 33){
    console.log('The grade is D');
}
else{
    console.log("The grade is F");
}
