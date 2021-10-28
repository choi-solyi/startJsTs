// 숫자 데이터 number
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
const pi = 3.14159265358979
console.log(pi)

// toFixed(소수점자리수) 소수점 뒷자리 삭제
console.log('@ toFixed(소수점자리수) 소수점 뒷자리 삭제')
const str = pi.toFixed(2)
console.log(str)
console.log(typeof str)

// parseInt(문자열)  parseFloat(문자열)
console.log('@ parseInt(문자열)  parseFloat(문자열)')
const integer = parseInt(str)
const float = parseFloat(str)
console.log(integer)    // 3 출력
console.log(float)      // 3.14 출력
console.log(typeof integer, typeof float) //number number

console.log('abs: ', Math.abs(-12))          //절대값
console.log('min: ', Math.min(2,8,5,1))      //최소값
console.log('max: ', Math.max(2,8,3,9))      //최대값
console.log('ceil: ', Math.ceil(3.14123))    //올림
console.log('floor: ', Math.floor(3.14123))  //내림
console.log('round: ', Math.round(3.14123))  //반올림
console.log('random: ', Math.random())       //난수
console.log('random: ', parseInt(Math.random()*100))       // 2자리수의 난수