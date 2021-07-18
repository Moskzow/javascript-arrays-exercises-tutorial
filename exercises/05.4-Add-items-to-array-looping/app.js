var arr = [4,5,734,43,45];

//*****************
// Your code here
for(let i = 0; i<10; i++){

// you need to loop 10 times, for example, using a for loop
// for(let i = 0; i<10;i++){
//         your loop content here   
// }
    arr.push(Math.ceil(Math.random() * 100));
}
//*****************

console.log(arr);