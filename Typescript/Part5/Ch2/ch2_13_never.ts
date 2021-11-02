// never

function error(msg: string): never {
  throw new Error(msg); //  throw는  리턴되지않음
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

// 모든 타입의서브타입이지만, never에는 어떤것도 할당할 수 없음

let q: string = "hello";
if (typeof q !== "string") {
  q; // never
}

//타입오브 타입가드
declare const w: string | number;
if (typeof w !== "string") {
  w; // number
}

type Indexable<T> = T extends string // T가  String 이면
  ? T & { [index: string]: any } // 이타입으로 나오고
  : never; // 아니면 never타입

// 나중에 다시
type ObjectIndexable = Indexable<{}>;
const e: Indexable<{}> = ""; //never타입인데 뭐하니!
