// // // // // // // //  -----------------------Vazifa---------------

// // // // // // // 1) numbers arrayidan faqat tub sonlarni ajratib olib, ularni yangi array ko‘rinishida qaytaradigan function yozing.

// // // // // // // function tubSonlar(numbers) {
// // // // // //     let yangiArray = [];

// // // // // //     for (let son of numbers) {
// // // // // //         if (son < 2) {
// // // // // //             continue;
// // // // // //         }

// // // // // //         let tub = true;

// // // // // //         for (let i = 2; i <= Math.sqrt(son); i++) {
// // // // // //             if (son % i === 0) {
// // // // // //                 tub = false;
// // // // // //                 break;
// // // // // //             }
// // // // // //         }

// // // // // //         if (tub) {
// // // // // //             yangiArray.push(son);
// // // // // //         }
// // // // // //     }

// // // // // //     return yangiArray;
// // // // // // }

// // // // // // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15];

// // // // // // console.log(tubSonlar(numbers));'




// // // // //  2) students arrayidan bali 60 yoki undan yuqori bo‘lgan talabalarni ajratib, yangi array qaytaradigan function yozing.

// // // // // function passedStudents(students) {
// // // // //     return students.filter(student => student.ball >= 60);
// // // // // }

// // // // // let students = [
// // // // //     { ism: "Ali", ball: 85 },
// // // // //     { ism: "Vali", ball: 45 },
// // // // //     { ism: "Sardor", ball: 60 },
// // // // //     { ism: "Aziz", ball: 55 },
// // // // //     { ism: "Malika", ball: 90 }
// // // // // ];

// // // // // console.log(passedStudents(students));
// // // // // // [ { ism: 'Ali', ball: 85 }, { ism: 'Sardor', ball: 60 }, { ism: 'Malika', ball: 90 } ]



// // // // // 3) numbers arrayidagi barcha sonlarni bir-biriga ko‘paytirib, yakuniy natijani qaytaradigan function yozing.

// // // // function multiplyAll(numbers) {
// // // //   return numbers.reduce((product, num) => product * num, 1);
// // // // }

// // // // console.log(multiplyAll([2, 5, 5]));


// // // 4) products arrayidan ombordagi soni 10 tadan kam bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan function yozing.

// // function getLowStock(products) {
// //   return products.filter(product => product.stock < 10);
// // }

// // const products = [
// //   { name: "Olma", stock: 25 },
// //   { name: "Nok", stock: 5 },
// //   { name: "Banan", stock: 9 },
// //   { name: "Uzum", stock: 10 }
// // ];

// // console.log(getLowStock(products));
// // // [{ name: "Nok", stock: 5 }, { name: "Banan", stock: 9 }]


// // 5) Function bitta id qabul qilsin. U products arrayidan shu ID ga mos mahsulotni topib qaytarsin.

// // function getProductById(id) {
// //   return products.find(product => product.id === id);
// // }
// // const products = [
// //   { id: 1, name: "Mouse", stock: 15 },
// //   { id: 2, name: "Monitor", stock: 4 },
// //   { id: 3, name: "Keyboard", stock: 8 },
// //   { id: 4, name: "Webcam", stock: 20 }
// // ];

// // console.log(getProductById(1));  // { id: 4, name: "Webcam", stock: 20 }
// // console.log(getProductById(99)); // undefined

// 6) students arrayidan eng katta score qiymatiga ega talabani topib, uning objectini qaytaradigan function yozing.

// const students = [
//   { name: "Samandar", score: 90 },
//   { name: "Jamshid", score: 95 },
//   { name: "Doston", score: 87 },
//   { name: "Muhammadamin", score: 98 },
//   { name: "Muhammad Ali", score: 105 }
// ];

// function getTopStudent(students) {
//   return students.reduce(
//     (top, student) => (!top || student.score > top.score ? student : top),
//     null
//   );
// }

// console.log(getTopStudent(students));

// 7) Yangi talaba objectini qabul qilib, uni students arrayiga qo‘shadigan function yozing. Qo‘shilgandan keyin yangilangan arrayni qaytaring.

// const students = [
//   { id: 1, name: "Samandar", score: 90 },
//   { id: 2, name: "Jamshid", score: 95 },
//   { id: 3, name: "Doston", score: 87 },
//   { id: 4, name: "Muhammadamin", score: 98 },
//   { id: 5, name: "Muhammad Ali", score: 105 }
// ];

// function addStudent(student) {
//   students.push(student);
//   return students;
// }

// console.log(addStudent({ id: 9, name: "Kamola", score: 81 }));

// 8) products arrayidan narxi 500 000 so‘mdan yuqori bo‘lgan mahsulotlarni tanlab, yangi array qaytaradigan function yozing.

// const products = [
//   { id: 1, name: "Mouse", price: 150000 },
//   { id: 2, name: "Monitor", price: 1800000 },
//   { id: 3, name: "Keyboard", price: 500000 },
//   { id: 4, name: "Webcam", price: 650000 },
//   { id: 5, name: "Quloqchin", price: 320000 }
// ];

// function getExpensiveProducts(products) {
//   return products.filter(product => product.price > 500000);
// }

// console.log(getExpensiveProducts(products));

// 9) Har bir talabaning score qiymatiga 10 ball qo‘shib, yangi array qaytaradigan function yozing. Asl students arrayi o‘zgarmasligi kerak.

// const students = [
//   { id: 1, name: "Xonzoda", score: 75 },
//   { id: 2, name: "Laylo", score: 45 },
//   { id: 3, name: "Aziz", score: 87 },
//   { id: 4, name: "Jasur", score: 98 },
//   { id: 5, name: "Shox", score: 60 }
// ];

// function addBonus(students) {
//   return students.map(student => ({
//     ...student,
//     score: student.score + 10
//   }));
// }

// const updated = addBonus(students);

// console.log(updated);
// // console.log(students);

// 10) Har bir mahsulot uchun narxini ombordagi soniga ko‘paytiring. Keyin barcha mahsulotlar qiymatini qo‘shib, umumiy summani qaytaradigan function yozing.

// const products = [
//   { id: 1, name: "Mouse", price: 150000, stock: 10 },
//   { id: 2, name: "Monitor", price: 1800000, stock: 4 },
//   { id: 3, name: "Keyboard", price: 500000, stock: 8 },
//   { id: 4, name: "Webcam", price: 650000, stock: 5 },
//   { id: 5, name: "Quloqchin", price: 320000, stock: 20 }
// ];

// function getTotalValue(products) {
//   return products.reduce(
//     (total, product) => total + product.price * product.stock,
//     0
//   );
// }

// console.log(getTotalValue(products));

// // Hissoblanishi
// Mouse:     150000 * 10 = 1 500 000
// Monitor:  1800000 * 4  = 7 200 000
// Keyboard:  500000 * 8  = 4 000 000
// Webcam:    650000 * 5  = 3 250 000
// Quloqchin: 320000 * 20 = 6 400 000