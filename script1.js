// // Task-1 Employee Registration//
// const company = "Stackly";
// let employeeId = "EMP205";
// let employeeName = prompt("Enter Employee Name");

// console.log("Company :", company);
// console.log("Employee Name :", employeeName);
// console.log("Employee ID :", employeeId);

// // Task-2 College Admission //
// const collegeName = "Sunrise Institute of Technology";
// let studentName = prompt("Enter Student Name");
// let course = prompt("Enter Course");

// console.log("College :", collegeName);
// console.log("Student :", studentName);
// console.log("Course :", course);


// // Task-3 Food Order //
// const restaurantName = "Spice Villa";
// let customerName = prompt("Enter Customer Name");
// let foodName = prompt("Enter Food Name");
// let quantity = 3;

// console.log("Restaurant :", restaurantName);
// console.log("Customer :", customerName);
// console.log("Food :", foodName);
// console.log("Quantity :", quantity);

// // Task-4 Hospital Registration //
// const hospitalName = "City Care Hospital";
// let patientName = prompt("Enter Patient Name");
// let token = 42;

// console.log("Hospital :", hospitalName);
// console.log("Patient :", patientName);
// console.log("Token :", token);


// // Task-5 Movie Ticket Booking //
// const theatreName = "PVR Cinemas";
// let movieName = prompt("Enter Movie Name");
// let customerName = prompt("Enter Customer Name");
// let seat = "C15";

// console.log("Theatre :", theatreName);
// console.log("Movie :", movieName);
// console.log("Customer :", customerName);
// console.log("Seat Number :", seat);


// // Task-6 Mobile Shop//
// const shopName = "Smart Mobile Store";
// let customerName = prompt("Enter Customer Name");
// let mobileModel = prompt("Enter Mobile Model");
// let price = 32000;

// console.log("Shop :", shopName);
// console.log("Customer :", customerName);
// console.log("Mobile :", mobileModel);
// console.log("Price :", price);


// // Task-7 Gym Membership //
// const gymName = "Power Fitness";
// let memberName = prompt("Enter Member Name");
// let membershipfee = 4500;

// console.log("Gym :", gymName);
// console.log("Member :", memberName);
// console.log("Membership Fee :", membershipfee);

// // Task-8 ATM Welcome Screen//
// const bankName = "HDFC Bank";
// let userName = prompt("Enter Your Name");

// console.log("Welcome", userName);
// console.log("Bank :", bankName);

// // Task-9 Bus Ticket//
// const travelsName = "VRL Travels";
// let passengerName = prompt("Enter Passenger Name");
// let seat = "D8";

// console.log("Travels :", travelsName);
// console.log("Passenger :", passengerName);
// console.log("Seat Number :", seat);

// // Task-10 Online Shopping //
// const websiteName = "Flipkart";
// let productName = prompt("Enter Product Name");
// let customerName = prompt("Enter Customer Name");
// let price = 1999;

// console.log("Website :", websiteName);
// console.log("Product :", productName);
// console.log("Customer :", customerName);
// console.log("Price :", price);

// // Task-11 Print a success message using console.log() //
// console.log("Registration Successful");
// // Task-12 Show an error using console.error() //
// console.error("Payment Failed");
// // Task-13 Show a warning using console.warn()//
// console.warn("Battery Low");
// // Task-14 Print some values and then clear the console using console.clear()//
// console.log("Loading...");
// console.log("Welcome");

// console.clear();
// // Task-15 Display: Welcome to Amazon using alert() //
// alert("Welcome to Amazon");
// // Task-16 Ask: Do you want to logout? using confirm().Store the result in a variable and print it//
// let logout = confirm("Do you want to logout?");

// console.log(logout);

// // Task-17 Ask the user's city using prompt()//
// let city = prompt("Enter Your City");

// console.log("Your City :", city);
// // Task-18 //
// var product = "Laptop";

// product = "Mobile";

// var product = "Tablet";

// console.log(product);

// // Task-19 //

// let salary = 25000;
// salary = 30000;
// console.log(salary);

// // Task-20 //
// const company = "Google";
// console.log(company);






//-------------------------------------------------------------------------------------------------------------------------------

// DAY - 2 TASK

//-------------------------------------------------------------------------------------------------------------------------------



// =====================
// Task 1 - Employee Profile
// =====================

let name = "Tushara";
let employeeId = "Emp1234";
let department="Frontend";
let salary = 10000;
let ispermanent = "true";

console.log("Name:",name); // Tushara
console.log("Employee ID:",employeeId); //Emp1234
console.log("Department :", department); //Frontend
console.log("Salary :", salary); //10000
console.log("Permanent :", ispermanent); //true

// =====================
// Task 2 - Student Details
// =====================

let student = {
    name: "Rahul",
    age: 20,
    course: "B.Tech",
    college: "ABC College",
    passed: "true"
};

console.log("Student Name :", student.name);
console.log("Course :", student.course);
console.log("Passed :", student.passed);


// =====================
// Task 3 - Shopping Cart
// =====================

let cart=["Milk","Rice","Oil","Sugar","Soap"];

console.log("First product :",cart[0]);
console.log("Third product :",cart[2]);
console.log("Last product :",cart[cart.length-1]);
console.log("Total products :",cart.length);

// =====================
// Task 4 - Company Employee Database
// =====================

let EmployeeDetails={
    name:"Tushara",
    designation:"Frontend",
    salary:10000,
    skills:["HTML","CSS","JavaScript","Python","SQL"]
}

console.log("Employee name :",EmployeeDetails.name);
console.log("Designation :",EmployeeDetails.designation);
console.log("Skills :",EmployeeDetails.skills[1]);


// =====================
// Task 5 - Salary Calculation
// =====================

let Basic_Salary = 25000;
let Bonus = 5000;

let total_salary = Basic_Salary + Bonus

console.log("Total Salary Expected :",total_salary);


// =====================
// Task 6 - GST Calculator
// =====================

let product_price = 4500;
let gst=18;

let gst_amount = (product_price*gst/100);
let final_amount = product_price + gst_amount

console.log("GST Amount :",gst_amount);
console.log("Final Amount :",final_amount);



// =====================
// Task 7 - Even or Odd
// =====================

let a = 25;

a % 2 === 0? console.log("Even"): console.log("Odd");


// =====================
// Task 8 - Login System
// =====================

let Username = "admin";
let Password = 12345;

Username == "admin" && Password == 12345 ? console.log("Login Success"): console.log("Invalid Credentials");
;


// =====================
// Task 9 - Voting Eligibility
// =====================

let Age = 22;

Age == 22? console.log("Eligible for Vote"): console.log("Not Eligible");
;

// =====================
// Task 10 - EMI Eligibility
// =====================


let Salary = 40000;
let Experience = 3;

Salary > 30000 && Experience >=2? console.log("Eligible"): console.log("Not Eligible");
;

// =====================
// Task 11 - Product Discount
// =====================


let Price = 5000;
let Discount = 10;

let discount_amount = (Price*Discount)/100;
let final_price = Price - discount_amount;

console.log("Discount Amount :",discount_amount);
console.log("Final Price :",final_price);


// =====================
// Task 12 - User Registration
// =====================


let Name = "Sowmya";
let Email = "sowmya1234@gmail.com";
let Phone = "7639093867";
let City = "Hyderabad";


console.log("----- User Details-----");
console.log("Name :",Name);
console.log("Email :",Email);
console.log("Phone :",Phone);
console.log("City :",City);


// =====================
// Task 13 - Social Media Profile
// =====================

let profile_details = {
    Username: "Samuel",
    Followers : 23000,
    Following: 567,
    Posts : 674,
    Verified : "Verified"
}

console.log("Username :",profile_details.Username);
console.log("Followers :",profile_details.Followers);
console.log("Verified Status :",profile_details.Verified);




// =====================
// Task 14 - Restaurant Menu
// =====================

let menu=["Idli","Dosa","Poori","Meals","Parotta"];

console.log("Second Item :",menu[1]);
console.log("Fourth Item :",menu[3]);
console.log("Last Item :",menu[menu.length-1]);



// =====================
// Task 15 - Banking System
// =====================

let Account_Balance = 25000;
let Withdraw = 8000;

let remaining_balance = Account_Balance - Withdraw;

console.log("Remaining Balance :",remaining_balance);


// =====================
// Task 16 - Mobile Store
// =====================


let Mobile_Price = 25000;
let Exchange = 5000;
let Coupon = 2000;

let finalAmount = Mobile_Price - (Exchange + Coupon);

console.log("Final Amount :",finalAmount);


// =====================
// Task 17 - Employee Promotion
// =====================

let experience = 5;
let performance = "true";

experience >=5 && performance == "true" ? console.log("Promotion Approved"): console.log("Promotion Pending");



// =====================
// Task 18 - Movie Ticket
// =====================

let Ticket_Price = 180;
let People = 5;

let total_amount = Ticket_Price * People;

console.log("Total Amount :",total_amount);

// =====================
// Task 19 - Weather App
// =====================


 let Temperature = 38;

 Temperature >= 38 ? console.log("Hot Day"): console.log("Normal Weather");
 ;
 
// =====================
// Task 20 - Mini HR Management (Real-Time)
// =====================

let employee = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML","CSS","JavaScript","React"],
    permanent: true
}

console.log("Employee Code :",employee.empCode);
console.log("Employee Name :",employee.name);
console.log("Department :",employee.department);
console.log("Salary :",employee.salary);
console.log("Last Skill :",employee.skills[employee.skills.length-1]);
console.log("Permanent Status :",employee.permanent);



