function withoutReturn(...arsgs: string[]): void {
  console.log(arsgs.join(''));
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'silva',

  showName(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

withoutReturn('luiz', 'otavio');
pessoa.showName();
