"use strict";
// void : 어떤 타입도 가지지 않는 상태 
// 값은 반환하지 않는 일종의 undefined를 리턴하는 경우
// return 외에 사용할일 거의 없다 
function returnVoid(msg) {
    console.log(msg);
    return undefined;
    // void는 undefined 를 작성하지않거나, undefined 만 작성 가능.
}
var r = returnVoid('리턴이 없다');
