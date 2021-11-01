const person1 = {name: 'solyi', age:31}
console.log(person1)          // 그대로
console.log(typeof person1);  //object


const person2 = Object.create({name: 'solyi', age:31})
console.log(person2);         // {}
console.log(typeof person2);  // object

//primitive type이 아닌것.
