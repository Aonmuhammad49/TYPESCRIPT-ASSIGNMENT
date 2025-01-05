/// Declare variables for the following:
// A string to store a person's name.
// A number to store their age.
// A boolean to indicate if they are a student.
var Name;
var Age;
var isStudent;
Name = "Aon Muhammad",
    Age = 17,
    isStudent = true;
// 2.// Write a TypeScript function addNumbers(a: number, b: number): number that takes two numbers as parameters and returns their sum.
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(4, 5));
// 3.// Create an array of strings to store the names of five cities. Write a function to print each city in the array
// Step 1: Create an array of strings to store the names of five cities
var cities = ["Hyderabad", "Karachi", "Lahore", "Nawabshah", "Sukkur"];
var city = function (cityfunction) {
    for (var _i = 0, cityfunction_1 = cityfunction; _i < cityfunction_1.length; _i++) {
        var cityprint = cityfunction_1[_i];
        console.log(cityprint);
    }
};
city(cities);
// 4.Use a tuple to store a product’s details: id (number), name (string), and price (number).
// Write a function that takes the tuple and prints the product details.
var Productprint = function (Product) {
    var ProductID = Product[0], ProductName = Product[1], ProductPrice = Product[2];
    console.log("Produnct ID ".concat(ProductID));
    console.log("Produnct Name ".concat(ProductName));
    console.log("Produnct Price ".concat(ProductPrice));
};
var Product = [101, "Clothes", 5000];
Productprint(Product);
// 5 Write a function greet  that returns a greeting message like "Hello, John!"
var Message = function (name) {
    console.log("Hello ".concat(name));
};
Message("Aon Muhammad");
// 6 Write a function calculateTotal where discount is optional.
// If no discount is provided, it should assume a default value of 0%.
var calculateTotal = function (Price, discount) {
    if (discount === void 0) { discount = 0; }
    var Total = Price - (Price * discount / 100);
    return Total;
};
var TotalDiscount = calculateTotal(80, 10);
console.log(TotalDiscount);
// 7.Write a function printAddress(street: string, city: string, country?: string): string. If country is not provided, return a string like "Street, City".
// Otherwise, include the country in the output
var printAddress = function (street, city, country) {
    if (country) {
        return street + city + country;
    }
    else {
        return street + city;
    }
};
var Address = printAddress("Saylani Mass IT Training", "Hyderbad", "Pakistan");
console.log(Address);
var UserObject = function (User) {
    if (User.email && User.phoneNumber) {
        console.log("User Email ".concat(User.email));
        console.log("User Phone Number ".concat(User.phoneNumber));
    }
    else if (!User.email) {
        console.log("User Email is not Provided");
    }
    else if (!User.phoneNumber) {
        console.log("User Phone Number is not Provided");
    }
};
var User1 = {
    Username: "JohnDoe",
    email: "johnDoe@gmail.com",
    phoneNumber: 12346789
};
var User2 = {
    Username: "JohnDoe",
    phoneNumber: 12346789
};
UserObject(User1);
UserObject(User2);
// 9.Create a class Product with properties: id, name, price, and quantity.
// Add methods to:
// Update the quantity.
// Calculate the total price for the available stock.
var product = /** @class */ (function () {
    function product(id, Pname, price, quantity) {
        this.id = id;
        this.Pname = Pname;
        this.price = price;
        this.quantity = quantity;
    }
    // Add methods to:
    product.prototype.updatequantitiy = function (qutity) {
        this.quantity += qutity;
    };
    // Calculate the total price for the available stock.
    product.prototype.totalprice = function () {
        return this.price * this.quantity;
    };
    return product;
}());
var product1 = new product(1, "Tshirt", 200, 10);
console.log(product1);
console.log(product1.totalprice());
var acceptsCar = function (car) {
    return "Car Details: ".concat(car.brand, " ").concat(car.model, ", Year: ").concat(car.year);
};
var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: "2020"
};
console.log(acceptsCar(myCar));
// 12 Define a Product with properties like id, name, price, and quantity. Write a function that calculates the total price of all products in a cart
var Product2 = /** @class */ (function () {
    function Product2(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product2.prototype.calculatetotal = function () {
        return this.price * this.quantity;
    };
    return Product2;
}());
var Product3 = new Product2(21, "Shoes", 5000, 2);
console.log(Product3.calculatetotal());
// 13.Create a function findMax(numbers: number[]): number that takes an array of numbers and returns the largest number.
var findMax = function (arr) {
    var largestNumber = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (largestNumber < arr[i]) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
};
var largestNumber = findMax([1, 20, 30, 40, 2, 1000]);
console.log(largestNumber);
// 14.Create a simple Person class with properties firstName and lastName and a method getFullName() that returns the full name
var simplePreson = /** @class */ (function () {
    function simplePreson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    simplePreson.prototype.getfullName = function () {
        return "".concat(this.firstName).concat(this.lastName);
    };
    return simplePreson;
}());
var Person1 = new simplePreson("John", "Doe");
console.log(Person1.getfullName());
// 15.Define an enum Color with values Red, Green, and Blue. Write a function that takes a Color and returns its string representation.
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
var NewColor = function () {
    console.log(Color.Red);
    console.log(Color.Green);
    console.log(Color.Blue);
};
NewColor();
var averagegradearray = function (students) {
    var TGrade = 0;
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        console.log(TGrade);
        TGrade += student.garde;
    }
    var average = TGrade / students.length;
    return average;
};
var students = [
    { name: "Alice", age: 20, "garde": 85 },
    { name: "Bob", age: 22, "garde": 90 },
    { name: "Charlie", age: 23, "garde": 78 },
    { name: "David", age: 21, "garde": 92 }
];
var average = averagegradearray(students);
console.log("The average grade is: ".concat(average));
// 17.Inventory Management:
// Create a class Product with properties: id, name, price, and quantity.
// Add methods to:
// Update the quantity.
// Calculate the total price for the available stock
// Define the Product class with basic properties
// Write a function to create a array of Product objects and demonstrate the methods.
var Product4 = /** @class */ (function () {
    function Product4(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product4.prototype.calculatetotal = function () {
        return this.price * this.quantity;
    };
    return Product4;
}());
function createProducts() {
    return [
        new Product4(1, "Laptop", 1000, 2),
        new Product4(2, "Smartphone", 600, 5),
        new Product4(3, "Headphones", 150, 3),
        new Product4(4, "Keyboard", 80, 4)
    ];
}
function displayProductDetails(products) {
    products.push(new Product4(5, "Monitor", 300, 2));
    products.unshift(new Product4(0, "Mouse", 20, 10));
    console.log("Products after push and unshift:");
    products.forEach(function (product) {
        console.log("".concat(product.name, " - $").concat(product.price, " x ").concat(product.quantity, " = $").concat(product.calculatetotal()));
    });
    var poppedProduct = products.pop();
    console.log("\nRemoved product using pop: ".concat(poppedProduct === null || poppedProduct === void 0 ? void 0 : poppedProduct.name));
    var shiftedProduct = products.shift();
    console.log("Removed product using shift: ".concat(shiftedProduct === null || shiftedProduct === void 0 ? void 0 : shiftedProduct.name));
    console.log("\nProducts after pop and shift:");
    products.forEach(function (product) {
        console.log("".concat(product.name, " - $").concat(product.price, " x ").concat(product.quantity, " = $").concat(product.calculatetotal()));
    });
}
var products = createProducts();
displayProductDetails(products);
var Library = /** @class */ (function () {
    function Library(name, books) {
        this.name = name;
        this.books = books;
    }
    return Library;
}());
// 19 Write a generic function findUnique<T>(arr: T[]): T[] that takes an array of any type and returns a new array with only the unique elements.
var FindUnique = function (arr) {
    var res = Array.from(new Set(arr));
    return res;
};
var data1 = [1, 0, 1, 23, 24, 23];
console.log(FindUnique(data1));
// 20.Create a function truncateString(str: string, maxLength: number): string that truncates the string to the specified length and adds "..." at the end if the string exceeds the length.
// Example:
// Input: truncateString("TypeScript is awesome!", 10)
// Output: "TypeScript..."
var truncateString = function (str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + "...";
};
console.log(truncateString("TypeScript is awesome!", 10));
console.log(truncateString("Hello", 10));
console.log(truncateString("This is a test", 5));
var employees = [
    { id: 1, name: "Alice", department: "HR", position: "Manager" },
    { id: 2, name: "Bob", department: "Engineering", position: "Developer" },
    { id: 3, name: "Charlie", department: "Engineering", position: "Designer" },
    { id: 4, name: "David", department: "HR", position: "Assistant" }
];
function filterEmployeesByDepartment(employees, department) {
    return employees.filter(function (employee) { return employee.department === department; });
}
function updateEmployee(id, updates) {
    var employee = employees.find(function (emp) { return emp.id === id; });
    if (employee) {
        Object.assign(employee, updates);
        return employee;
    }
    return undefined;
}
var engineeringEmployees = filterEmployeesByDepartment(employees, "Engineering");
console.log("Engineering Employees:", engineeringEmployees);
var updatedEmployee = updateEmployee(2, { position: "Senior Developer" });
console.log("Updated Employee:", updatedEmployee);
// 22.Define an enum TrafficLight with values Red, Yellow, and Green.
// Write a function getAction(light: TrafficLight): string that returns:
// "Stop" for Red.
// "Get Ready" for Yellow.
// "Go" for Green.
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["Red"] = "Red";
    TrafficLight["Yellow"] = "Yellow";
    TrafficLight["Green"] = "Green";
})(TrafficLight || (TrafficLight = {}));
function getAction(light) {
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
const pallendrem=(name)=>{
    const reversed2 = name.split().reverse().join('')
    return name === reversed2;
}
console.log(pallendrem("Hello World!"))
