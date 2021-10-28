

import _ from 'lodash'
import { t } from './getType' //이름은 getType이 아니어도 상관없다
// import { random, user } from './getRandom'   //마찬가지로 getRandom 이 아니어도 상관없다
              // user as solyi 로 이름을 지정해줄수있음
import * as R from './getRandom'


console.group('@ 기본 export / named export')
//  기본 export : export 해줄때 export dafault  라면
// export default function () { ... } 
// import abc from 파일명
// 갯수제한 1개 default는 한개만 사용 가능하다.

// getType.js + getRandom.js
console.log(_.camelCase('the hello world'))
console.log(t([1,2,3]))

// named export : export 해줄 때 export function 함수이름 () { } 라면
// export function 함수이름 () {... }
// import { 함수이름 } from 파일명 
// 함수 뿐만 아니라 객체 등 데이터도 가져올 수있다.
// 갯수 제한 없음!!  export default도 1개 추가 가능
// console.log(random(), random())
// console.log(user)
console.log(R)      
console.log(R.user) //import * as R 사용시