class Person5 {
  public readonly name: string = "Mark";
  private readonly country: string = "korea";
  //readonly 는 public , private 상관없이 초기화되는 영역에서만 값을 세팅할수있고
  // 다른곳에서는 변경이 불가능하다

  //readonly 세팅은 -> 초기화 선언부분 or 컨트스럭터 내부 에서만 가능!!

  public constructor(private _name: string, private age: number) {
    this.country = "UK";
  }

  helle() {
    this.country = "US";
  }

  // get name() {
  //   console.log("get");
  //   return this._name + " <- 이름";
  // }
  // set name(n: string) {
  //   console.log("set");
  //   this._name = n;
  // }
}
const p5: Person5 = new Person5("solyi", 31);

// console.log(p5.name);
// console.log(p5.age); private 이므로 접근 불가

console.log(p5.name); //get 을 하는 함수 getter
p5.name = "choi"; //set 을 하는 함수 setter
//
console.log(p5);
