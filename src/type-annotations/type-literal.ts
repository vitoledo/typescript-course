let x = 10;
x = 0b1010;

// subtipo de number, é 10, nunca deixará de ser
const y = 10;

// usando let
let a: 100 = 100;
let b = 100 as const;

// nome por ser literal 'as const' é do tipo Victor
const pessoa = {
  nome: 'Victor' as const,
  idade: 18,
};
