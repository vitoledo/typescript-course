function createError(): never {
  throw new Error('quakquer erro');
}

createError();

// trava a aplicação caso o erro não seja tratado
