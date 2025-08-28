// Array<T> - T[]
function multiply(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenate(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const result = multiply(1, 2, 3);
const concat = concatenate('a', 'b', 'c');
const upper = toUpperCase('meu nome é victor ', 'a');

console.log(result);
console.log(concat);
console.log(upper);
