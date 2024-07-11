export {};

type Mojirethu = string;

const fooString: string = 'Hello';
const fooMjirethu: Mojirethu = 'Hello';

const exsample1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const exsample2: Profile = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof exsample1;
