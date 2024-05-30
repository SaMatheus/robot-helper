# Robot Helper
Este pacote contém um conjunto de funções utilitárias para auxilia-lo na escrita de testes unitários e E2E usando Robot Pattern.<br>
Desde interações básicas com a interface como o cliock de um botão, até formas práticas de mockar chamadas a API's ou banco de dados o Robot Helper foi construido pensando na melhor forma de otimizar a escrita de testes com o Robot Pattern e deixa-lo ainda mais legível.

## Índice
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Importação](#importação)
- [Documentação](#documentação)
- [Tecnologias usadas](#tecnologias-usadas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Pré requisitos
![Static Badge](https://img.shields.io/badge/npm-version%2010-%23CB3837?style=plastic)<br>

## Instalação
Para instalar este pacote, você precisa ter o Node.js e o npm instalados em sua máquina. Depois, você pode instalar o pacote com o seguinte comando:
```bash
npm install robot-helper -D
```

## Importação
Depois de instalar o pacote, você pode importá-lo em seu arquivo de teste da seguinte maneira:
```javascript
import robotHelper from 'robot-helper';
```
e desestruturar os helpers assim:
```javascript
const { actionHelper, mockHelper, assertHelper, renderedComponent } = robotHelper;
```

## Documentação
<details>
<summary><b>Action Helper</b></summary>
<br>
Este módulo exporta um objeto `actionHelper` que contém métodos para interagir com elementos da interface do usuário em testes.

#### Métodos

##### `triggerEvent()`

Este método procura um elemento na tela pelo texto e dispara um evento. Se nenhum evento for especificado, um clique será disparado. Ele lança um erro se o elemento não for encontrado ou se o evento não existir em `fireEvent`.

##### `fillFormField()`

Este método procura um campo de entrada (input) pelo texto do placeholder e preenche com o valor fornecido. Ele lança um erro se o campo não for encontrado ou se não for uma instância de `HTMLInputElement`.

##### `clickButton()`

Este método procura um botão pelo texto e dispara um evento de clique. Ele lança um erro se o botão não for encontrado.

#### Uso

```typescript
import robotHelper from 'robotHelper';

const { actionHelper } = robotHelper;

// Para disparar um evento de clique em um elemento
await actionHelper.triggerEvent('Texto do Elemento');

// Para preencher um campo de entrada
await actionHelper.fillFormField('Texto do Placeholder', 'Valor');

// Para clicar em um botão
await actionHelper.clickButton('Texto do Botão');
```
</details>
<details>
<summary><b>Assert Helper</b></summary>
<br>
Este módulo exporta um objeto `assertHelper` que contém métodos para realizar várias verificações em testes.

#### Métodos

##### `checkIf()`

Este método recebe dois valores, um `matcher` e um `modifier` opcional. Ele usa o `matcher` para comparar os dois valores e o `modifier` para modificar o comportamento da comparação. Por exemplo, se o `modifier` for 'not', a comparação será invertida.

##### `asyncCheckIf`

Este método é semelhante ao `checkIf`, mas é assíncrono. Ele é útil para comparações que envolvem operações assíncronas.

##### `checkArray()`

Este método realiza uma operação em um array e verifica se o resultado é igual ao valor fornecido. A operação pode ser 'contains' para verificar se o array contém um valor, ou 'length' para verificar o comprimento do array.

##### `checkObject()`

Este método realiza uma operação em um objeto e verifica se o resultado é igual ao valor fornecido. A operação pode ser 'hasProperty' para verificar se o objeto tem uma propriedade, ou 'keys' para verificar as chaves do objeto.

##### `verifyElementPresence()`

Este método verifica se um elemento com o texto fornecido está presente na tela.

##### `verifyElementAbsence()`

Este método verifica se um elemento com o texto fornecido não está presente na tela.

#### Uso

```typescript
import robotHelper from 'robotHelper';

const { assertHelper } = robotHelper;

// Para verificar se dois valores são iguais
assertHelper.checkIf(received, expected, 'toEqual');

// Para verificar se um array contém um valor
assertHelper.checkArray(array, 'contains', value);

// Para verificar se um objeto tem uma propriedade
assertHelper.checkObject(object, 'hasProperty', propertyName);

// Para verificar a presença de um elemento
await assertHelper.verifyElementPresence('Texto do Elemento');

// Para verificar a ausência de um elemento
await assertHelper.verifyElementAbsence('Texto do Elemento');
```
</details>
<details>
<summary><b>Mock Helper</b></summary>
<br>
Este módulo exporta um objeto `mockHelper` que contém métodos para simular chamadas de fetch em testes.

#### Métodos

##### `fetchSuccess()`

Este método simula uma chamada de fetch bem-sucedida com os dados fornecidos e um tempo limite opcional. Ele substitui `global.fetch` por uma função que retorna uma promessa que resolve para um objeto de resposta com os dados fornecidos e um status de 200.

##### `fetchFailure()`

Este método simula uma chamada de fetch que falha com o erro fornecido e um tempo limite opcional. Ele substitui `global.fetch` por uma função que retorna uma promessa que rejeita com o erro fornecido.

##### `fetchWithStatus()`

Este método simula uma chamada de fetch com os dados fornecidos, um status de resposta e um tempo limite opcional. Ele substitui `global.fetch` por uma função que retorna uma promessa que resolve para um objeto de resposta com os dados fornecidos e o status fornecido.

##### `clearFetchMock()`

Este método limpa o mock de fetch, substituindo `global.fetch` por uma função vazia.

#### Uso

```typescript
import robotHelper from 'robotHelper';

const { mockHelper } = robotHelper;

// Para simular uma chamada de fetch bem-sucedida
mockHelper.fetchSuccess({ key: 'value' });

// Para simular uma chamada de fetch que falha
mockHelper.fetchFailure(new Error('Network error'));

// Para simular uma chamada de fetch com um status específico
mockHelper.fetchWithStatus({ key: 'value' }, 404);

// Para limpar o mock de fetch
mockHelper.clearFetchMock();
```
</details>

## Tecnologias usadas
Pensando no desempenho e na escalabilidade deste pacote e do seu projeto, escolhemos as tecnologias mais avançadas 
do mercado para compor nosso projeto. Elas são:
<br>
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://jestjs.io/pt-BR/)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/pt/)
[![Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)](https://testing-library.com/)

## Contribuindo
Contribuições são bem-vindas. Por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)
