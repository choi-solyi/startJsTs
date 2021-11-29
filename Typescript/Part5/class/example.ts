class Person {
  // 선언
  public name: string = "solyi";
  private age!: number; //느낌표를 붙여서 있을수도 없을수도 있음을 표현
  //생성자
  private constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
  //오버로딩은 나중에
  // constructor(age: number) {
  //   this.age = age;
  // }

  public async init() {}
}
//async await 는 사용할수없다.

// constructor 가 private일때는 호출할수없어진다.
// const p1 = new Person(31);

// 기본적으로는 public 이므로 어디서든 접근이 가능해진다.
// console.log(p1.age);

// private age 로 변경 했을때는 외부에서 p1.age 사용이 불가능해진다.
// console.log(p1.age);

// 이전에는 _age 이런식으로 private 를 표기 해주었었는데
// 현재까지도 private인 경우에는 언더바를 앞에 붙여서 표기해주는 경우도 있다.

// protected
// 외부에서는 접근이 불가능 하지만 상속관계에 있으면 접근이 가능하다.
// 클래스의 상속에 대해서 배운 뒤 다시 !
