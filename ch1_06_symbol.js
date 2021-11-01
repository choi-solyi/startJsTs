"use strict";
// SYmbol
var _a;
// new Symbol('') 불가
console.log(Symbol('foo'));
console.log(Symbol('foo') === Symbol('foo')); //false
// 고유하고 수정 불가능한 값으로 만들어준다.
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
obj[sym];
// 함수 - 대문자
// 타입 - 소문자
