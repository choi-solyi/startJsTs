import _ from 'lodash'

// 객체 Object 
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object


console.group('@ ')

console.log()
console.groupEnd()
// --------- 객체 Object------------ //

// Object.prototype... prototype안붙어 있으면 정적 메서드
// [].reverse() 는 가능하지만 {}.assign()은 불가능하다.

const userAge = {
  name: 'solyi',
  age: 31
}
const userEmail = {
  name: 'solyi',
  email: 'solyi@solyi.kr'
}


// assign(타겟, 소스)
console.group('@ assgign(타겟, 출처 객체) 타겟에 소스를 더한다. 복사하는 용도! ')
const target = Object.assign(userAge, userEmail)
console.log(target)               // name, age, email
console.log(userAge)              // name, age, email
console.log(target === userAge)   // true
console.groupEnd()


// keys 
console.group('@ keys(객체) 객체의 Key,value의 key값들을 배열로 출력 ')
console.log('@ values 는 keys.map으로 구할 수 있음!')
const user = {
  name: 'solyi',
  age: 31,
  email: 'solyi@solyi.kr',
  emails: []
}
const keys = Object.keys(user)
console.log(keys)   // [ name, age, email ]
console.log(user['email'])  // solyi@solyi.kr

const values = keys.map(key => user[key])   //배열의 갯수만큼 콜백함수를 실행
console.log(values)   // ['solyi', 31, 'solyi@solyi.kr']
console.groupEnd()  



// ----------------구조 분해 할당----------------- //

console.group('@ 객체의 구조 분해 할당')
// 구조분해해서 원하는 데이터만 사용할 수 있음
const { name: me, age, email, address = 'Korea' } = user
console.log(`이름은 ${name}입니다.`)
console.log(`${me}의 이름은 ${age}살이며`)      //me라는 이름으로 대체해서 가져올 수 있다. 그럼 name이란 변수는 사용할수없음!
console.log(`${address} 에 거주중입니다.`)      //구조분해할당시 default 값 지정할 수 있다 !
console.log(`문의사항이 있다면 -> ${email}`)
console.log(user.name  === `${name}`)   // true !
console.groupEnd()

console.group('@ 배열의 구조 분해 할당')
const fruits = ['Apple', 'Banana', 'Cherry']
const [ a, b, c, d ] = fruits
console.log(a, b, c, d)   // Apple Banana Cherry undefined
const [, , x ] = fruits   // 건너뛰어서 추출
console.log(x)            // 3번째 데이터 출력




// ---------------- 전개 연산자 Spread ---------------- //
console.group('@ 전개 연산자 Spread ')

console.log(fruits)     // 배열로 출력
console.log(...fruits)  // 문자열로 전개해서 출력

function toObject(a,b,c) {
  return {
    a: a,
    b: b,
    c: c
  }
}
console.log(toObject(...fruits))    //{ a:'apple', b:'banana' , ...}
console.log(toObject(fruits[0], fruits[1], fruits[2]))    // 위와 동일

fruits.push('Orange')
const toObject2 = (a,b, ...c) => ({a,b,c})
console.log(toObject2(...fruits))   // Cherry와 Orange가 c에 묶여 Array로 출력됨
console.groupEnd()



// ---------------- 데이터 불변성 Immutability ---------------- //

// 원시 데이터 : String, number, Boolean, undefined, null, ...
// 참조형 데이터 : Object, Array, Function

console.group('@ 데이터 불변성')
let aa = 1; let bb = 4;
console.log(aa, bb, aa === bb)    // 1 4 false  메모리가 다른곳에 할당
bb = aa
console.log(aa, bb, aa === bb)    // 1 1 true   메모리의 주소가 동일
aa = 7
console.log(aa, bb, aa === bb)    // 7 1 false
let cc = 1
console.log(bb, cc, bb === cc)    // 1 1 true
console.groupEnd()

// 얕은 복사 : 겉 표면만 복사
// 깊은 복사 : 내부의 모든 참조 관계까지 새로 복사

// 참조형 데이터 관리 할 때 bb = aa와 같은 할당연산자를 쓰는것은 문제를 발생 시킬 수 있으므로
// 일반적으로는 복사라는 개념으로 aa와 bb를 분리해주어야한다.


// ---------------- 얕은 복사, 깊은복사 ---------------- //

console.group('@ 얕은 복사 / 깊은 복사')
// const copyUser = user
// console.log(copyUser === user)    //true

// user.age = 22
// console.log('user', user)           
// console.log('copyUser ', copyUser)
// user의 age만 변경했을 뿐인데 copyUser의 age도 22로 변경이 된다.
// 가리키고 있는 값이 똑같기 때문!!

// 얕은 복사 :  
const copyUser2 = Object.assign({}, user)
console.log(copyUser2)
console.log(copyUser2 === user) // false 

const copyUser3 = {...user}
console.log(copyUser3)
console.log(copyUser3 === user) // false 

user.emails.push('solyi@choi.com')
console.log(user.emails === copyUser3.emails)   //true
//복사한적 없지만 emails 같은 메모리 주소를 공유한다.
// 그래서 깊은 복사를 해야함!!!

// 깊은 복사 : 참조형 데이터 내부에서 또 참조형 데이터가 사용될 경우에 꼭 깊은 복사
// JS 만으로는 구현이 어렵기 때문에 lodash를 추가 설치 해주어야 한다.
// 상단에 import _ from 'lodash'

const copyUser4 = _.cloneDeep(user)   //lodash를 이용한 깊은 복제
console.log(copyUser4 === user)       //값이 다름

// console error .. .
// Uncaught SyntaxError: Cannot use import statement outside a module

// https://lodash.com/docs/4.17.15

// 재귀? 하나의 데이터 안에서 반복적으로 실행되는것
// 반복실행 하면서 모두 복사한다
