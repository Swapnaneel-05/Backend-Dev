const emp = {
    id : 1,
    name: "qerty",
    salary: "123456",
    address: "ghjkl",
    age: 35,
    department: "hR"
}

const empCopy = {...emp}

// const {id,name,salary, ...otherInfo} = emp;
// console.log(otherInfo)

// update the address

empCopy.address = "agra";
console.log(empCopy)

// or
let updateemp = {...emp,address:"delhi"}
console.log(updateemp)

