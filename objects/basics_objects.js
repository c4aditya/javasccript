/* 
--------------What is objects--------------------------------------- 

*Object are comes under the reference data type or non- primitive data type 
*Objects are collection of key value pairs 
*In object we can define property as well as behaviour of the object 


--------------How can we create an object-----------------------------

For creating an object we can initlize the variable and in curely brasis we define the key value pairs 


----------------How can we create the object with the function---------

There are two ways for creating object in function 
  -Factory Function 
  -Constructor Function 

  1- Factory Function 

  *It use basically use return key word for return the key values paris 
  *and in factory function we also define the new variable that stroe the value of boject and return the values 

  2- Constructor Function 

   *it does't use the return key word
   *we need to declare the this keyword  and  object creation for getting the value of the object 







   

*/


// ------------------------------------pass by value----------------------------------
// Pass by value means all fuction arguments are pass by value means in js it copy the valuee of the  variable into the function arugument 
// If there is any change done with the argument in side the function that not impact the outside variable 

// Ex->

function add(a){ // funtion argument  here value is comes from (a) which is actually a copy of variable(a)
  a = a+10 // the value is change inside the function that not impact outside the function
  console.log(a);// here the value of a being 20 but outside the function the value of a is remain 10
}
let a=10// outside veriable 
add(a)// call the function
console.log(a);



// -------------------------------------Pass by reference-----------------------------
// Pass by reference is means if the argument value passing throug the variable and we make chage on it than it will change the value that 
// is present in the variable  

// let number ={num : 10}
function mul(number){
  number.num *= 10
  number.num2 *= 10
}
let number ={num : 10,
             num2 :20
}
mul(number)
console.log(number.num);
console.log(number.num2);

// creating the object 

/*
varuable object_name ={
 key : value ,
 key :value 
}

// access the value 

there are two way for accessing the value in object 

1- using dot opeator 
2- using [] 


*/

let person={
  Name : "Aditya",
  age : 21,
  gmail: "aditya@gmail.com",
  phone:8115448296

}
console.log(person.Name);
console.table([person.Name,person.age,person.gmail,person.phone])

// crete the object with the function 
//1- Factory function
// for create the factory function fristaly we create the function and then we need to create the object 

// step 1
function school(){
// step 2 
return my_school={
  frist_school : "Rama",
  second_school :"Ramadhar",
  third_school :"Bdnd",
  fourth_ashool:"Tps",
  fifth_school:"MJRP",
  six_school:"city inter college",
  college:"TERI",
  master:"GLBTN"
}
}
// step 3 create the new variable and assing the variaable to the equall(=) to function name 
let name_list = school()
console.log(name_list.frist_school);

// 2 constructor function 
// note - we use assignment operator = insted of : for assign the value in constructor function 
// we use this keyword in the constructor function  
function Address(vill,post,dist,pin){
  this.village = vill,
  this.post = post,
  this.dist=dist,
  this.pin =pin
// basically It is called using new keyword and when we call it using new keyword it makes a new object and thiskey word is refer
// to the current property or object 
// so this.village refer to the 

}
let new_address = new Address("Bhairopur","baddhupur","ghazipur",23300)// we pass the value here 
console.log(new_address.village)

//-------------------------------------------------Garbage Callactor----------------------------
// those memory area that are access by the var and const are unused the garbage callector delete it self or automatically 
// it can't handel by the programmer it is handel by automatically 

///-----------------------------------------------clonaing object ----------------------------------------
// there are basically three obperator are use to clonaning the object 
/*
1- itration 
2-asign
3-spred 
*/

// 1 -  in itration we use for in loop for the clonaning the object 

// step 1- create the orignal object thats you want to clone
let orignal_data = {name : "Aditya",
                    age  :21
}

// step 2 create the empty object were we clone the object 

let clone_data={}

// step 3 use for in loop for the clone the data 

for(let key in orignal_data){
  clone_data[key] = orignal_data[key]
}

console.log(clone_data)
