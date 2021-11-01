"use strict";
// 애초에 배열의 값이 [숫자,문자열]로 지정이 되어있을 때
// tuple 사용
var x;
x = ['solyi', 31];
// x = [31, 'soyli']   //순서를 바꾸면 에러 발생
// type 지정 할 수 없도록 undefined로 지정이 되어있기 때문에
// x[2] 는 에러가 발생한다
// x[2] = 'world'    //length 잘못 됨
var person0 = ['mark', 32];
var first = person0[0], second = person0[1];
//구조분해해도 동일하게 배열의 타입 지정된 상태로만 사용
//first는 string
//second는 number
// 최초의 튜플이 지정된 상태로~
