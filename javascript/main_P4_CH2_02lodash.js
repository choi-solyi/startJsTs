import _ from 'lodash'
// lodash 사용 방법
// 참조  URL : https://lodash.com/docs/4.17.15

// 데이터
const usersA = [
  { userId: '1',  name: 'solyi'},
  { userId: '2',  name: 'carol'}
]
const usersB = [
  { userId: '1',  name: 'solyi'},
  { userId: '3',  name: 'Amy'}
]

// _.uniq(데이터) = 중복제거
// 배열데이터가 하나일때 사용
console.group('@ _.uniq(데이터) = 중복제거')
const usersC = usersA.concat(usersB)
console.log('CONCAT > ', usersC)      // 1 2 1 3 으로 중복도 함께 출력 됨
console.log('uniqBy > ', _.uniqBy(usersC, 'userId'))     // 1 2 3 중복제거된 데이터 출력
console.groupEnd()

// _.unionBy(데이터1, 데이터2, 고유지정값) = 고유한 값들을 합침
// 배열 데이터가 여러개일때 사용
console.group('@ _.unionBy(데이터1, 데이터2, 고유지정값) = 고유한 값들을 합침')
const  usersD = _.unionBy(usersA, usersB, 'userId') //고유한 내용으로 합칠수있음
console.log('unionBy > ' , usersD)
console.groupEnd()



// _.find     // 조회
// _.findIndex  //조회
console.group('@ _.find(데이터, 찾고자하는값  객체 전체 반환')
console.log('@ _.findIndex(데이터), 찾고자 하는값  > index 값 반환 ')   
const users = [
  
  { userId: '1',  name: 'solyi'},
  { userId: '2',  name: 'Amy'},
  { userId: '3',  name: 'carol'},
  { userId: '4',  name: 'sunny'},
  { userId: '5',  name: 'solyi'}
]
const foundUser = _.find(users, { name:'Amy'})
console.log(foundUser)
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUserIndex)
console.groupEnd()

// _.remove   //삭제
console.group('@ _.remove(배열, 삭제할값)')
_.remove(users,{ name: 'solyi'})
console.log(users)  