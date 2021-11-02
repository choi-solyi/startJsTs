"use strict";
// never
function error(msg) {
    throw new Error(msg); //  throw는  리턴되지않음
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
// 모든 타입의서브타입이지만, never에는 어떤것도 할당할 수 없음
var q = "hello";
if (typeof q !== "string") {
    q; // never
}
if (typeof w !== "string") {
    w; // number
}
var e = ""; //never타입인데 뭐하니!
