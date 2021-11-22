interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요 ${person.name}임당`);
}

const p31: Person3 = {
  name: "solyi",
};

const p32: Person3 = {
  name: "carol",
  systers: ["sol", "yi"],
};

const p33: Person3 = {
  name: "Sunny",
  family: p31,
  syster: p32,
};

hello3(p33);
