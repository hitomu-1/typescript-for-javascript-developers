export {};

type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectInterface = {
  name: 'Ham',
  age: 43,
};

interface ObjectInterface {
  name: string;
  age: number;
}
