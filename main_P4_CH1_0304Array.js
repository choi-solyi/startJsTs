// Part04_ch1_03. 배열(1)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

// index : 배열 내의 특정한 위치
// indexing : 인덱스 위치 조회하는것
// element / item : 각 요소들을 의미

const numbers = [1,2,3,4]
const fruits = ['apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(fruits)

// length : 배열의 길이 (item의 갯수)
console.group('@ length : 배열의 길이 (item의 갯수)')
console.log(numbers.length) // 4 
console.log([1,2].length)   // 2
console.log([].length)      // 0 
console.groupEnd() 

// find(판별함수) 
// callback 함수 (element, index, array)
console.groupEnd() 
console.group('@ find(조건) : 첫번쨰 요소 번환')
console.groupEnd() 


// concat 
console.group('@ concat : 병합! 원본은 손상되지 않음') 
console.log(numbers.concat(fruits))   // 총 7개의 item을 가진 배열
console.groupEnd() 


// forEach(콜백함수)
console.group('@ forEach : 배열 item의 length만큼 콜백함수를 반복')
fruits.forEach(function (item, index, array) {
  console.log(item, index, array)
  // 3번 출력되며 각각 Apple, 0, [사과,바나나,체리] , ...
})
console.groupEnd() 


// map(콜백함수) 
console.group('@ map(콜백함수) : 콜백 내부에서 반환하는 데이터를 가지고 새로운 배열을 만들어 반환한다')
const a = fruits.forEach(function(fruit, index){
  console.log(`${fruit} - ${index}`)
})
const b = fruits.map(function(fruit, index){
  return `${fruit} - ${index}`
})
const c = fruits.map(function(fruit, index) {   //객체 리터럴 방식으로 작성
  return {
    id: index,
    name: fruit
  }
})
const d = fruits.map((fruit, index) => ({     // 화살표 함수 작성시({ 콜백함수 내용 })
  id: index,
  name: fruit
}))
console.log('a', a)   // undefined
console.log('b', b)   // ['apple-0', ...]
console.log('c', c)   // [{}, {}, {}]
console.log('d', d)   // [{}, {}, {}]
console.groupEnd() 

// filter
console.group('@ filter(콜백함수) : 배열 내의 값이 특정조건에서 true 인 경우에 그 item을 배열에 추가')
const x = numbers.map(number => number < 3)
const y = numbers.filter(number =>  number < 3 )
console.log(x)    // true, false 값의 배열 출력
console.log(y)    // 3보다 작은 1,2가 배열로 출력
console.groupEnd()

// find() :
// findIndex()
console.group('@ find() 특정 내용을 찾으면 반환, 그이후 데이터는 조회하지않음!!')
const find = fruits.find(fruit => /^B/.test(fruit)) // B로 시작하는 문자데이터

console.log(find)

console.log('@ findIndex() : find는 데이터를 추출하지만 findIndex는 몇번째 값인지 반환')
const findIndex = fruits.findIndex(fruit => /^B/.test(fruit))
console.log(findIndex)
console.groupEnd()

// includes()
console.group('@ includes() ')
const includes = numbers.includes(3)
console.log(includes)       //true
const includesStr = fruits.includes('solyi')
console.log(includesStr)    //false
console.groupEnd()

// push() unshift() 
console.group('@ push(값) : 뒤에 값을 추가 / unshift(값) : 맨 앞에 값을 추가 / !!! 원본 데이터 변경됨')
numbers.push(5)         //5를 뒤에 추가
console.log(numbers)
numbers.unshift(0)      //0을 맨 앞에 추가
console.log(numbers)
console.groupEnd()

// reverse() : 배열의 item 순서를 뒤집음  / !!! 원본 데이터 변경됨
console.group('@ reverse() : 배열의 item 순서를 뒤집음  / !!! 원본 데이터 변경됨')
numbers.reverse()
fruits.reverse()
console.log(numbers)    // 5 4 3 2 1 0 
console.log(fruits) 
console.groupEnd()

// splice(m, n)  m번째부터 n개 삭제 / !!! 원본 데이터 변경됨
console.group('@ splice(m, n)  m번째부터 n개 삭제 / !!! 원본 데이터 변경됨')
numbers.splice(2,1)       //2번째부터 1개 삭제
console.log(numbers)        // 5 4 2 1 0
numbers.splice(1,3)       //1번째부터 3개 삭제
console.log(numbers)        // 5 0
numbers.splice(1,0,999)   // 1번째 값 뒤에 999 끼워넣기
console.log(numbers)        // 5 999 0
numbers.splice(2,1,888)   // 2번째 부터 1개만큼 지우고 888끼워넣기
console.log(numbers)        // 5 999 888

fruits.splice(2,0, 'Orange')    //2번째 값 뒤에 끼워넣기
console.log(fruits)       
console.groupEnd()