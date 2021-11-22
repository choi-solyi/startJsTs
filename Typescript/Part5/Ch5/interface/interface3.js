"use strict";
function hello3(person) {
    console.log(`안녕하세요 ${person.name}임당`);
}
const p31 = {
    name: "solyi",
};
const p32 = {
    name: "carol",
    systers: ["sol", "yi"],
};
const p33 = {
    name: "Sunny",
    family: p31,
    syster: p32,
};
hello3(p33);
