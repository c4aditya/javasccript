let age ="23ABCD"
console.log(typeof(age))

// convert the datatype 
let type_convert = Number(age)
/*
So age is the string mixup with both number+ string  and we covert it with number data type so, when we convert it using typecasting then data type is change 
but when we print the acutall value then it print ------NaN----------- means not a number 

when we convert the number when it is not convertable like string to Number then it return -----NaN------

* using null it return - 0
*bollean 0-> false, 1-> true
*undefined -> NaN
"" empty string to the bollean it always retuen false  
"aditya"-> true 

2- 
*/

console.log(typeof(type_convert))
console.log(type_convert)

// number  to bollean
let num = null;
let r=Number(num)

console.log(r);