let arr = [
    {firstName: "Pradeep", lastName: "Patidar", age: 21},
    {firstName: "Manmohan", lastName: "Lanjhesh", age: 42},
    {firstName: "Adarsh", lastName: "Kewat", age: 18},
    {firstName: "Sunny", lastName: "Ranalkar", age: 24}
];
let newArr = arr.map((val)=>val['firstName']+" "+val['lastName']);

console.log(newArr);
