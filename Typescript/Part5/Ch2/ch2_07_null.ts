// null, undefined 는 타입도 값도 소문자

// tsconfig.json 파일에서 strict 값이 true 일때는 
// null, undefined의 값으로 지정할 수 없지만
// strict 값을 주석처리하면 에러코드 발생하지 않음

// let yourName: string = null
// let yourName2: string = undefined

//let u: undefined = null
// let a: void = null
let b: void  = undefined

let union: string | null = null

union = 'mark'  //string이나 null 추가 가능

