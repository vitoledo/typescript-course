// enum Colors {
//   vermelho, // 0
//   azul, // 1
//   amarelo, // 2
// }

enum Colors {
  vermelho = 10,
  azul = 100,
  amarelo = 1000,
  roxo = 'roxo',
}

console.log(Colors);
console.log(Colors.vermelho);
console.log(Colors[0]);
console.log(Colors.roxo);

function choiceColor(cor: Colors): void {
  console.log(Colors[cor]);
}

choiceColor(10);
