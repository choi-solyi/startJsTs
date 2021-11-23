interface Iperson2 {
  name: string;
  age?: number;
}
interface IKorean extends Iperson2 {
  city: string;
}

const k: IKorean = {
  name: "solyi",
  city: "seoul",
  age: 31,
};

