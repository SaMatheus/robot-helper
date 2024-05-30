# Robot Helper

Este paquete contiene un conjunto de funciones de utilidad para ayudarte a escribir pruebas unitarias y de extremo a extremo utilizando el Patrón Robot. Desde interacciones básicas con la interfaz, como hacer clic en un botón, hasta formas prácticas de simular llamadas a API o a la base de datos, Robot Helper fue creado pensando en la mejor manera de optimizar la escritura de pruebas con el Patrón Robot y hacerlo aún más legible.

## Índice

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Importación](#importación)
- [Documentación](#documentación)
- [Tecnologías](#tecnologías)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Requisitos

![Static Badge](https://img.shields.io/badge/npm-versión%2010-%23CB3837?style=plastic)<br>

## Instalación

Para instalar este paquete, debes tener Node.js y npm instalados en tu máquina. Luego puedes instalar el paquete con el siguiente comando:

```bash
npm install robot-helper -D
```

## Importación

Después de instalar el paquete, puede importarlo en su archivo de prueba de la siguiente manera:

```javascript
import robotHelper from 'robot-helper';
```

y desestructurar a los ayudantes así:

```javascript
const { actionHelper, mockHelper, assertHelper, renderedComponent } = robotHelper;
```

## Documentación

<details>
<summary><b>Action Helper</b></summary><br>
Este módulo exporta un objeto `actionHelper` que contiene métodos para interactuar con elementos de IU en pruebas.

#### Métodos

##### `triggerEvent()`

Este método busca un elemento en la pantalla por texto y activa un evento. Si no se especifica ningún evento, se activará un clic. Lanza un error si el elemento no se encuentra o el evento no existe en `fireEvent` .

##### `fillFormField()`

Este método busca un campo de entrada para texto de marcador de posición y lo llena con el valor proporcionado.
Lanza un error si el campo no se encuentra o si no es una instancia de `HTMLInputElement`.

##### `clickButton()`

Este método busca un botón en el texto y dispara un evento click. Genera un error si no se encuentra el botón.

#### Uso

```typescript
import robotHelper from 'robotHelper';

const { actionHelper } = robotHelper;

// Para desencadenar un evento de clic en un elemento
await actionHelper.triggerEvent('Texto del elemento');

// Para llenar un campo de entrada
await actionHelper.fillFormField('Texto de marcador', 'Valor');

// Para hacer clic en un botón
await actionHelper.clickButton('Texto del botón');
```
</details>
<details>
<summary><b>Assert Helper</b></summary><br>
Este módulo exporta un objeto `assertHelper` que contiene métodos para realizar diversas comprobaciones en las pruebas.

#### Métodos

##### `checkIf()`

Este método recibe dos valores, un `matcher` y un `modifier` opcional. Utiliza el `matcher` para comparar los dos valores y el `modifier` para modificar el comportamiento de comparación. Por ejemplo, si el `modifier` es 'not', la comparación se invertirá.

##### `asyncCheckIf`

Este método es similar a `checkIf` pero es asíncrono. Es útil para comparaciones que implican operaciones asíncronas.

##### `checkArray()`

Este método realiza una operación en una matriz y comprueba si el resultado es igual al valor dado. La operación puede ser 'contains' para verificar si la matriz contiene un valor, o 'length' para verificar la longitud de la matriz.

##### `checkObject()`

Este método realiza una operación en un objeto y comprueba si el resultado es igual al valor dado. La operación puede ser 'hasProperty' para comprobar si el objeto tiene una propiedad, o 'keys' para comprobar las claves del objeto.

##### `verifyElementPresence()`

Este método comprueba si un elemento con el texto dado está presente en la pantalla.

##### `verifyElementAbsence()`

Este método comprueba si un elemento con el texto dado no está presente en la pantalla.

#### Uso

```typescript
import robotHelper from 'robotHelper';

const { assertHelper } = robotHelper;

// Para comprobar si dos valores son iguales
assertHelper.checkIf(received, expected, 'toEqual');

// Para comprobar si una matriz contiene un valor
assertHelper.checkArray(array, 'contains', value);

// Para comprobar si un objeto tiene una propiedad
assertHelper.checkObject(object, 'hasProperty', propertyName);

// Para verificar la presencia de un elemento
await assertHelper.verifyElementPresence('Texto del elemento');

// Para verificar la ausencia de un elemento
await assertHelper.verifyElementAbsence('Texto del elemento');
```
</details>
<details>
<summary><b>Mock Helper</b></summary><br>
Este módulo exporta un objeto `mockHelper` que contiene métodos para simular llamadas de búsqueda en pruebas.

#### Métodos

##### `fetchSuccess()`

Este método simula una llamada de búsqueda exitosa con los datos dados y un tiempo de espera opcional. Reemplaza `global.fetch` con una función que devuelve una promesa que se resuelve a un objeto de respuesta con los datos dados y un estado de 200.

##### `fetchFailure()`

Este método simula una llamada de recuperación que falla con el error dado y un tiempo de espera opcional. Reemplaza `global.fetch` con una función que devuelve una promesa que rechaza con el error dado.

##### `fetchWithStatus()`

Este método simula una llamada de búsqueda con los datos dados, un estado de respuesta y un tiempo de espera opcional. Reemplaza `global.fetch` con una función que devuelve una promesa que se resuelve a un objeto de respuesta con los datos dados y el estado dado.

##### `clearFetchMock()`

Este método borra el mock de fetch, reemplazando `global.fetch` con una función vacía.

#### Uso

```typescript
import robotHelper from 'robotHelper';

const { mockHelper } = robotHelper;

// Para simular una llamada de búsqueda exitosa
mockHelper.fetchSuccess({ key: 'value' });

// Para simular una llamada de recuperación que falla
mockHelper.fetchFailure(new Error('Network error'));

// Para simular una llamada de búsqueda con un estado específico
mockHelper.fetchWithStatus({ key: 'value' }, 404);

// Para borrar el simulacro de búsqueda
mockHelper.clearFetchMock();
```
</details>

## Tecnologías

Pensando en el rendimiento y la escalabilidad de este paquete y su proyecto, elegimos las tecnologías más avanzadas del mercado para componer nuestro proyecto. Estos son los siguientes:<br>
[](https://react.dev/)![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)[](https://jestjs.io/pt-BR/)![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)[](https://www.typescriptlang.org/pt/)![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)[](https://testing-library.com/)![Testing Library](https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red)

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abra un tema primero para discutir lo que le gustaría cambiar.

## Licencia

[](https://choosealicense.com/licenses/mit/)![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
