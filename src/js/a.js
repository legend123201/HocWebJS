//spread operator (three dot): huỷ con trỏ, copy 1 cách đúng nghĩa
//[], {} => reference type
const number = [1,2,3];
const copyNumber = number;
number.push(10);
console.log(copyNumber);

const addNumbers = (a,b,c) => {
    return a + b + c;
};

console.log(addNumbers(...number));

const user = {
    name: "user 1"
};

const copyUser = {...user, age: 10, gender: "female"};

console.log(user);
console.log(copyUser);

const copyNumber2 = [...number, 22];
console.log(copyNumber2);