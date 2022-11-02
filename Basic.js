//first line of code
console.log("this is my first code in js");
// My first  variable
var myName = "venu";
var Mynumber=9542772440;
console.log("my name is:",myName);
var MyTech=[
    "java","react js","next js"
];
var myDetails={
    name:"venu",
    lastName:"dara",
};
console.log(myName,Mynumber);
console.log(MyTech);
console.log(myDetails);

//Variable declaration using let
let collegeName="Mallareddy";
let homeTown="Hyderabad";
let pincode=500072;
console.log(collegeName,homeTown,pincode);
let favCol="white";
console.log(favCol);

// Dynamically type conversion
var mobile = 9542772440
// type of  will give you type of variable
console.log("First::", typeof mobile);

mobile = "9542772440";
console.log("Second::", typeof mobile);

mobile = {phone: "9542772440"};
console.log("Third::", typeof mobile);


// Convert number into string
console.log("to String Method");
var myPhone = 9542772440;
console.log(typeof myPhone);
myPhone=myPhone.toString();
console.log(typeof myPhone);

// Convert string into  number
console.log("parseInt Method");
var ticket = "456123";
console.log(typeof ticket);
ticket=parseInt(ticket);
console.log(typeof ticket);

// Convert decimal to integer or number

console.log(parseInt(1234.5678));
