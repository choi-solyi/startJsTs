
// json
// 참조 URL : https://ko.wikipedia.org/wiki/JSON

// 사용 가능한 자료형과 문법
// number string(큰따옴표만!), boolean, Array, Object, null

import myData from './myData.json'
console.group(myData)
console.groupEnd()

//속성 이름은 따옴표로 묶어줄 필요가 없지만 JSON에서는 묶어주어야한다.

console.group('@ JSON.stringify:스트링화  /  JSON.parse:JSON화 ')
const user = {      
  name: 'solyi',      
  age: 31,
  emails: [
    'choi@solyi.kr',
    'solyi@choi.kr'
  ]
}
console.log('user > ', user)

const str = JSON.stringify(user)  //문자화
console.log('str > ', str)    //문자열로 출력
console.log('typeof str > ', typeof str) 
// JSON은 문자 데이터지만, 사용되면서 객체 데이터로써 사용된다

const obj = JSON.parse(str)   //객체로 출력
console.log('obj > ', obj)

