// tupla é um array de tamanho fixo
const userData: [number, string] = [1, 'victor'];
const userData2: [number, string, string] = [2, 'manu', 'marquez'];
const userData3: [number, string, string?] = [2, 'manu'];
const userData4: [number, string, ...string[]] = [
  2,
  'manu',
  'marquez',
  'victor',
];

userData[0] = 100;
userData[1] = 'ola';

console.log(userData);
console.log(userData2);
console.log(userData3);
console.log(userData4);

// readonly

const array1: readonly string[] = ['victor', 'toledo'];
const array2: ReadonlyArray<string> = ['manu', 'marquez'];

console.log(array1)
console.log(array2)
