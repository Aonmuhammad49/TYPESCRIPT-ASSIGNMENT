/// Declare variables for the following:
// A string to store a person's name.
// A number to store their age.
// A boolean to indicate if they are a student.
let Name:string;
let Age:number;
let isStudent:boolean;

Name = "Aon Muhammad",
Age= 17,
isStudent= true
// 2.// Write a TypeScript function addNumbers(a: number, b: number): number that takes two numbers as parameters and returns their sum.
function addNumbers(a:number,b:number):number{
    return a+b;
}
console.log(addNumbers(4,5))
// 3.// Create an array of strings to store the names of five cities. Write a function to print each city in the array
// Step 1: Create an array of strings to store the names of five cities
let cities = ["Hyderabad","Karachi","Lahore","Nawabshah","Sukkur"];
const city = (cityfunction)=>{
    for(let cityprint of cityfunction){
        console.log(cityprint)
    }
}
city(cities)
// 4.Use a tuple to store a product’s details: id (number), name (string), and price (number).
// Write a function that takes the tuple and prints the product details.
const Productprint = (Product:[number,string,number])=>{
    const  [ProductID ,ProductName , ProductPrice] = Product
    console.log(`Produnct ID ${ProductID}`)
    console.log(`Produnct Name ${ProductName}`)
    console.log(`Produnct Price ${ProductPrice}`)
}
const Product :[number,string,number] = [101,"Clothes",5000]
Productprint(Product)
// 5 Write a function greet  that returns a greeting message like "Hello, John!"
const Message=(name:string)=>{
    console.log(`Hello ${name}`)
} 
Message(`Aon Muhammad`)
// 6 Write a function calculateTotal where discount is optional.
// If no discount is provided, it should assume a default value of 0%.
const calculateTotal=(Price:number,discount:number = 0)=>{
        let Total = Price - (Price*discount/100)
        return Total;
}
const TotalDiscount = calculateTotal(80,10)
console.log(TotalDiscount)
// 7.Write a function printAddress(street: string, city: string, country?: string): string. If country is not provided, return a string like "Street, City".
// Otherwise, include the country in the output
const  printAddress=(street: string, city: string, country?: string)=>{
    if(country){
       return street + city + country
    }
    else{
        return street+city
    }
}
let Address = printAddress("Saylani Mass IT Training" , "Hyderbad" , "Pakistan")
console.log(Address)
// 8.Define an interface User with properties: username (required) email (optional) phoneNumber (optional) Write a function that takes a User object and prints their details.
// If email or phoneNumber is missing, handle it gracefully.
interface usertype {
    Username:string
    email?:string
    phoneNumber?:number
}
const UserObject = (User:usertype)=>{
    if(User.email && User.phoneNumber){
        console.log(`User Email ${User.email}`)
        console.log(`User Phone Number ${User.phoneNumber}`)
    }
    else if(!User.email){
        console.log(`User Email is not Provided`)
    }
    else if(!User.phoneNumber){
        console.log(`User Phone Number is not Provided`)
    }
}
let User1:usertype = {
    Username : "JohnDoe",
    email : "johnDoe@gmail.com",
    phoneNumber: 12346789
}
let User2:usertype = {
    Username : "JohnDoe",
    phoneNumber: 12346789
}
UserObject(User1)
UserObject(User2)
// 9.Create a class Product with properties: id, name, price, and quantity.
// Add methods to:
// Update the quantity.
// Calculate the total price for the available stock.
class product {
    id:number;
    Pname:string;
    price:number;
    quantity:number
    constructor(id:number,Pname:string,price:number,quantity:number){
        this.id = id
        this.Pname = Pname
        this.price = price
        this.quantity = quantity
    }
    // Add methods to:
    updatequantitiy(qutity:number):void{
        this.quantity += qutity;
    }
    // Calculate the total price for the available stock.
    totalprice():number{
        return this.price*this.quantity
    }
}
let product1 = new product(1,"Tshirt",200,10)
console.log(product1)
console.log(product1.totalprice())
// 10 Write a function to create a list of Product objects and demonstrate the methods.
// 11 Define an interface Car with properties brand, model, and year. Write a function that accepts a Car object and returns a string summarizing the car’s details.
interface Car {
    brand:string,
    model:string,
    year:string
}
const acceptsCar = (car:Car):string=>{
    return `Car Details: ${car.brand} ${car.model}, Year: ${car.year}`;
}
const myCar: Car = {
    brand: "Toyota",
    model: "Corolla",
    year: "2020"
};
console.log(acceptsCar(myCar))
// 12 Define a Product with properties like id, name, price, and quantity. Write a function that calculates the total price of all products in a cart
class Product2 {
    id:number; 
    name:string;
    price:number;
    quantity:number
    constructor(id:number,name:string,price:number,quantity:number){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    calculatetotal():number{
        return this.price*this.quantity
    }
}
var Product3 = new Product2(21,"Shoes",5000,2)
console.log(Product3.calculatetotal())
// 13.Create a function findMax(numbers: number[]): number that takes an array of numbers and returns the largest number.
const findMax = (arr: number[]): number => {
    let largestNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (largestNumber < arr[i]) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

let largestNumber = findMax([1, 20, 30, 40, 2, 1000]);
console.log(largestNumber)
// 14.Create a simple Person class with properties firstName and lastName and a method getFullName() that returns the full name
class simplePreson {
    firstName:string;
    lastName:string;
    constructor(firstName:string,lastName:string,){
        this.firstName = firstName
        this.lastName = lastName
    }
    getfullName():string{
        return `${this.firstName}${this.lastName}`;  
    }
}
let Person1 = new simplePreson("John","Doe")
console.log(Person1.getfullName())
// 15.Define an enum Color with values Red, Green, and Blue. Write a function that takes a Color and returns its string representation.
enum Color  {
    Red="red",
    Green = "Green",
    Blue = "Blue",
}
const NewColor = ()=>{
    console.log(Color.Red)
    console.log(Color.Green)
    console.log(Color.Blue)
}
NewColor()
// 16.Create an interface Student with name, age, and grade. Write a function to calculate the average grade of an array of Student objects
interface Student {
    name:string;
    age:number;
    garde:number
}
const averagegradearray = (students:Student[]):number=>{
    let TGrade = 0;
    for(let student of students){
        console.log(TGrade)
        TGrade += student.garde
        
    }
    const average = TGrade/students.length
    return average;
}
const students: Student[] = [
    { name: "Alice", age: 20, "garde": 85 },
    { name: "Bob", age: 22, "garde": 90 },
    { name: "Charlie", age: 23, "garde": 78 },
    { name: "David", age: 21, "garde": 92 }
];
const average = averagegradearray(students);
console.log(`The average grade is: ${average}`);
// 17.Inventory Management:
// Create a class Product with properties: id, name, price, and quantity.
// Add methods to:
// Update the quantity.
// Calculate the total price for the available stock
// Define the Product class with basic properties
// Write a function to create a array of Product objects and demonstrate the methods.
class Product4 {
    constructor(public id: number, public name: string, public price: number, public quantity: number) {}
    calculatetotal(): number {
        return this.price * this.quantity;
    }
}
function createProducts(): Product4[] {
    return [
        new Product4(1, "Laptop", 1000, 2),
        new Product4(2, "Smartphone", 600, 5),
        new Product4(3, "Headphones", 150, 3),
        new Product4(4, "Keyboard", 80, 4)
    ];
}
function displayProductDetails(products: Product4[]): void {
    products.push(new Product4(5, "Monitor", 300, 2));
    products.unshift(new Product4(0, "Mouse", 20, 10));
    console.log("Products after push and unshift:");
    products.forEach(product => {
        console.log(`${product.name} - $${product.price} x ${product.quantity} = $${product.calculatetotal()}`);
    });
    const poppedProduct = products.pop();
    console.log(`\nRemoved product using pop: ${poppedProduct?.name}`);
    const shiftedProduct = products.shift();
    console.log(`Removed product using shift: ${shiftedProduct?.name}`);
    console.log("\nProducts after pop and shift:");
    products.forEach(product => {
        console.log(`${product.name} - $${product.price} x ${product.quantity} = $${product.calculatetotal()}`);
    });
}
const products = createProducts();
displayProductDetails(products);
// 18.Library Management:
// Create a Library class with properties: name and an array of Book objects (use an interface for Book with properties like title, author, isAvailable).
// Add methods to:
// Add a new book to the library.
// Lend a book (update its isAvailable property to false).
// Return a book (update isAvailable to true).
interface Book {
    title:string;
    author:string;
    isAvailable:boolean;
}
class Library {
    name:string
    books:Book[]
    constructor(name:string,books:Book[]){
        this.name = name
        this.books = books
    }
}
// 19 Write a generic function findUnique<T>(arr: T[]): T[] that takes an array of any type and returns a new array with only the unique elements.
const FindUnique = <T>(arr: T[]): T[] => {
    const res = Array.from(new Set(arr));
    return res
  };
  const data1 = [1, 0, 1, 23, 24, 23];
console.log(FindUnique(data1));
// 20.Create a function truncateString(str: string, maxLength: number): string that truncates the string to the specified length and adds "..." at the end if the string exceeds the length.
// Example:
// Input: truncateString("TypeScript is awesome!", 10)
// Output: "TypeScript..."
const truncateString=(str: string, maxLength: number): string=> {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength) + "...";
  }
  console.log(truncateString("TypeScript is awesome!", 10))
  console.log(truncateString("Hello", 10))
  console.log(truncateString("This is a test", 5))
// 21.Employee Management:
// Define an interface Employee with properties id, name, department, and position.
// Write a function to filter employees based on their department.
// Use Partial<Employee> to allow updating only specific properties of an employee.
// Define the Employee interface
interface Employee {
    id: number;
    name: string;
    department: string;
    position: string;
  }
  const employees: Employee[] = [
    { id: 1, name: "Alice", department: "HR", position: "Manager" },
    { id: 2, name: "Bob", department: "Engineering", position: "Developer" },
    { id: 3, name: "Charlie", department: "Engineering", position: "Designer" },
    { id: 4, name: "David", department: "HR", position: "Assistant" }
  ]; 
  function filterEmployeesByDepartment(employees: Employee[], department: string): Employee[] {
    return employees.filter(employee => employee.department === department);
  }
  function updateEmployee(id: number, updates: Partial<Employee>): Employee | undefined {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
      Object.assign(employee, updates);
      return employee;
    }
    return undefined;
  }
const engineeringEmployees = filterEmployeesByDepartment(employees, "Engineering");
console.log("Engineering Employees:", engineeringEmployees);
const updatedEmployee = updateEmployee(2, { position: "Senior Developer" });
console.log("Updated Employee:", updatedEmployee);
// 22.Define an enum TrafficLight with values Red, Yellow, and Green.
// Write a function getAction(light: TrafficLight): string that returns:
// "Stop" for Red.
// "Get Ready" for Yellow.
// "Go" for Green.
enum TrafficLight {
    Red = "Red",
    Yellow = "Yellow",
    Green = "Green"
  }
  function getAction(light: TrafficLight): string {
    switch (light) {
      case TrafficLight.Red:
        return "Stop";
      case TrafficLight.Yellow:
        return "Get Ready";
      case TrafficLight.Green:
        return "Go";
      default:
        return "Invalid Light";
    }
  }
  console.log(getAction(TrafficLight.Red));
  console.log(getAction(TrafficLight.Yellow));
  console.log(getAction(TrafficLight.Green));