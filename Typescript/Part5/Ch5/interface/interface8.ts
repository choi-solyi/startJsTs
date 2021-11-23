interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: "louis",
  gender: "male",
};

// p81.gender = "female";
// readonly 는 변경불가!
