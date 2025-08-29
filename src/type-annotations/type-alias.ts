type idade = number;
type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: string;
};

type corRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = corRGB | corCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  salario: 200_000,
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Vermelho'));
console.log(pessoa);
