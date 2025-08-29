type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };

type Pessoa = HaveAge & HaveLastName & HaveName;

const pessoa: Pessoa = {
  name: 'Victor',
  lastName: 'Toledo',
  age: 18,
};

console.log(pessoa);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type intersection = AB & AC & AD;
