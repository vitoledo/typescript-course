/* eslint-disable */

// tipos básicos (aqui ocorre a inderencia de tipos)
let nome: string = 'Luiz';
let idade: number = 30; // qualquer tipo de numero
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

// arrays
let numbersArray: Array<number> = [1, 2, 3, 4, 5];
let stringsArray: Array<string> = ['a', 'b'];

let numberArray: number[] = [1, 2, 3, 4, 5];
let stringArray: string[] = ['a', 'b'];

// objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'luiz',
  idade: 30,
};

// funções
function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;
