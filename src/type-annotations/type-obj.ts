const objA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'valor a',
  keyB: 'valor b',
};

objA.keyB = 'outro valor b';
objA.keyD = 'valor d';

console.log(objA);
