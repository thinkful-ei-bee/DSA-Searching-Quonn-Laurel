const BST = require("./BST");

//How  many searches?
//DFS/in-order
//target = 8
//Step 1: Find the midpoint
//3, 5, 6, 8, 11, 12, 14, 15, 17, 18
// midpoint = 11
// 8 < 11 === true
//newArr = [3,5,6,8,11]
//               11
//              6  8
//             3 5
// Start at 11/ Does 11 have a left => left = 6 
// Process 6/ Does 6 have a left => left = 3
// Process 3/ Does 3 have a left => left = null
// Since left is null console.log(3) 
// Go back to 6/ Left is processed
// Process 5/ Five left = null => console.log(5)
// Go back to 6 , then back to 11
// Left of 11 has been processed
// Process right of 11 which equals our target(8)

// Sequence of numbers = 11=>6=>3=>6=>5=>6=>11=>8


//DFS/in-order
//target = 16
//Midpoint = 11
//3, 5, 6, 8, 11, 12, 14, 15, 16, 17, 18
// since target(16) > midpoint(11),  remainingArr = [12,14,15,16,17,18]
//               12
//                 14
//                   15
//                    16
//                     17
//                      18
//Start at midpoint(12)/ Left is null/ Right is 14
// Process 14/ 14 left is null/ 14 right is 15
// Process 15/ 15 left is null/ 15 right is 16 which is our target value 

// Sequence of numbers = 12=>14=>15=>16


