# Robot Helper

This package contains a set of utility functions to assist you in writing unit and E2E tests using Robot Pattern.<br> From basic interactions with the interface such as clicking a button, to practical ways of mocking API or database calls, Robot Helper was built thinking about the best way to optimize test writing with the Robot Pattern and make it even more readable.

## Index

- [Pré-requisitos](#pr%C3%A9-requisitos)
- [Installation](#instala%C3%A7%C3%A3o)
- [Import](#importa%C3%A7%C3%A3o)
- [Documentation](#documenta%C3%A7%C3%A3o)
- [Tecnologias usadas](#tecnologias-usadas)
- [Contributing](#contribuindo)
- [License](#licen%C3%A7a)

## Pré requisitos

![Static Badge](https://img.shields.io/badge/npm-version%2010-%23CB3837?style=plastic)<br>

## Installation

To install this package, you need to have Node.js and npm installed on your machine. Then you can install the package with the following command:

```bash
npm install robot-helper -D
```

## Import

After installing the package, you can import it into your test file as follows:

```javascript
import robotHelper from 'robot-helper';
```

and destructure the helpers like this:

```javascript
const { actionHelper, mockHelper, assertHelper, renderedComponent } = robotHelper;
```

## Documentation

 <summary><b>Action Helper</b></summary><br> This module exports an `actionHelper` object that contains methods for interacting with UI elements in tests.

#### Methods

##### `triggerEvent()`

This method searches for an element on the screen by text and triggers an event. If no event is specified, a click will be triggered. It throws an error if the element is not found or the event does not exist in `fireEvent` .

##### `fillFormField()`

This method searches an input field for placeholder text and fills it with the provided value. It throws an error if the field is not found or if it is not an instance of `HTMLInputElement` .

##### `clickButton()`

This method searches the text for a button and fires a click event. It throws an error if the button is not found.

#### Use

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

  <summary><b>Assert Helper</b></summary><br> This module exports an `assertHelper` object that contains methods for performing various checks in tests.

#### Methods

##### `checkIf()`

This method receives two values, a `matcher` and an optional `modifier` . It uses the `matcher` to compare the two values ​​and the `modifier` to modify the comparison behavior. For example, if the `modifier` is 'not', the comparison will be reversed.

##### `asyncCheckIf`

This method is similar to `checkIf` , but it is asynchronous. It is useful for comparisons involving asynchronous operations.

##### `checkArray()`

This method performs an operation on an array and checks if the result is equal to the given value. The operation can be 'contains' to check if the array contains a value, or 'length' to check the length of the array.

##### `checkObject()`

This method performs an operation on an object and checks if the result is equal to the given value. The operation can be 'hasProperty' to check if the object has a property, or 'keys' to check the object's keys.

##### `verifyElementPresence()`

This method checks whether an element with the given text is present on the screen.

##### `verifyElementAbsence()`

This method checks if an element with the given text is not present on the screen.

#### Use

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

  <summary><b>Mock Helper</b></summary><br> This module exports a `mockHelper` object that contains methods for simulating fetch calls in tests.

#### Methods

##### `fetchSuccess()`

This method simulates a successful fetch call with the given data and an optional timeout. It replaces `global.fetch` with a function that returns a promise that resolves to a response object with the given data and a status of 200.

##### `fetchFailure()`

This method simulates a fetch call that fails with the given error and an optional timeout. It replaces `global.fetch` with a function that returns a promise that rejects with the given error.

##### `fetchWithStatus()`

This method simulates a fetch call with the given data, a response status, and an optional timeout. It replaces `global.fetch` with a function that returns a promise that resolves to a response object with the given data and the given status.

##### `clearFetchMock()`

This method clears the fetch mock, replacing `global.fetch` with an empty function.

#### Use

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




## Tecnologias usadas

Pensando no desempenho e na escalabilidade deste pacote e do seu projeto, escolhemos as tecnologias mais avançadas do mercado para compor nosso projeto. Elas são: <br> [](https://react.dev/)![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) [](https://jestjs.io/pt-BR/)![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white) [](https://www.typescriptlang.org/pt/)![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) [](https://testing-library.com/)![Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

[](https://choosealicense.com/licenses/mit/)![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
