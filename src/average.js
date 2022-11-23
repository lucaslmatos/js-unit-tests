/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. inicial

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayNumber) => {
  let soma = 0;
  if (arrayNumber.length === 0) {
    return undefined;
  }
    for (let i = 0; i < arrayNumber.length; i += 1) {
      if (typeof arrayNumber[i] !== typeof 0) {
        return undefined;
      }
      soma += arrayNumber[i];
    }
    return Math.round((soma) / (arrayNumber.length));
};

module.exports = average;
