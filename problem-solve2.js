// Task 1

// Find the lowest number in the array below.

// let numbers = [11, 23, 19, 51, 9, 4];
// function findLowest(array){
//     let lowest = numbers[0];
//     for(number of numbers){
//       if (lowest < number) {
//         number;
//       }
//     }
//     return number;
// }
// const result = findLowest(numbers);
// console.log(`The lowest number of the array is ${result}`);

// Task 2

// Find the friend with the smallest name.

//  const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'ab'];
//  let lowest = names[0];
//  function findLowestChar(array){
//     for(name of names){
//        if (name.length < lowest.length) {
//        lowest = name;
//        }
//     }
//     return lowest;
//  }
// const smallest = findLowestChar(names);
// console.log(smallest);

// Task 3

// let laptopPrice = 35;
// let tabletPrice = 15;
// let mobilePrice = 20;

// function calculateElectronicsBudget(laptop, tablet, mobile){
//     let buyGadgets = (laptop * laptopPrice) + (tablet * tabletPrice) + (mobile * mobilePrice);
//     return buyGadgets;
// }

// let total = calculateElectronicsBudget(2, 3, 1);
// console.log(total);

// Task 4

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function findAveragePhonePrice(array){
//     let sum = 0;
//     for(item of phones){
//         sum += item.price;
//         average = sum / phones.length;
//     }
//     return average;
// }
// let avg = findAveragePhonePrice(phones);
// console.log(`The average price of the phone is ${avg}`);

// Task 5

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// function findSalary(employees){
//     let monthlySalary = 0;
//     for(employee of employees){
//        const currentSalary = employee.starting + (employee.increment * employee.experience);
//        monthlySalary += currentSalary;
//     }
//     return monthlySalary;
// }
// let salary = findSalary(employees);
// console.log(salary);
