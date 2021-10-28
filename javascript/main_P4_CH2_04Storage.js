// 콘솔창 - 애플리케이션 - 로컬스토리지, 세션스토리지
// 참조 URL : https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage

// localStorage : 데이터 만료되지 않음  // 시크릿모드일때 닫으면 지워짐)
// sessionStorage : 페이지를 닫으면 사라짐


// 
console.group('@ local storage : 문자 데이터만 가능!')
console.log(' .setItem( data ) : 값 추가 ')
localStorage.setItem('first', 'Louis')

console.log(' .getItem(key) : 값 읽기')
const dog = localStorage.getItem('first')

console.log(' .removeItem(key) : 값 삭제')
localStorage.removeItem('first')

const user = {      
  name: 'solyi',      
  age: 31,
  emails: [
    'choi@solyi.kr',
    'solyi@choi.kr'
  ]
}

// 객체를 추가하는 경우 Object로 출력 되므로, 문자열화 하여 추가해야함.
console.log(' JSON.stringify 객체 추가시 문자열화')
localStorage.setItem('user', JSON.stringify(user))


console.log(' .setItem : 값 수정 parse로 객채화 해서 수정 후 문자열화해서 수정')
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 20
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))


// 참조 URL : https://github.com/typicode/lowdb
