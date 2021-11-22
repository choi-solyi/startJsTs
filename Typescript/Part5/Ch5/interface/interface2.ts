interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요, ${person.name}에욤 ㅋ `);
}
hello2({ name: "solyi", age: 31 });
hello2({ name: "carol" });
