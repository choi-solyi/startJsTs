// any
// 무엇이든 가능하다 

// any 정확하게 알고 쓰는것이 중요하다.


function returnAny(msg: any): any {
  console.log(msg)
}

const any1 = returnAny("리턴은 아무거나")

console.log(typeof any1)    // undefined

any1.toString()   

// any 는 무슨 타입인지 알수 없으므로
// > 무엇이든 할수있다 < 개념에 가까움

// 최대한 안 쓰는것이 좋지만 써야 하는 경우가 있음

// log 출력 등

//any
// 어떤 타입이어도 상관없음
// 최대한 안쓰는게 핵심
// any를 써야하는데 안쓰면 오류를 뱉도록 하는 옵션있음
   // nolmplicitAny

// 무차별적으로 사용하면 안전성 위험!
let looselyTyped: any = {}
const d = looselyTyped.a.b.c.d


function leakingAny(obj: any) {
  const a = obj.num
  const b = a + 1
  return b
}

const c = leakingAny({ num: 0 })
c.indexOf("0")
