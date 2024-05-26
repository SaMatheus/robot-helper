# Robot Test Methods

Este pacote contém um conjunto de funções utilitárias para interagir com elementos da interface do usuário em testes usando Robot Pattern. Ele usa a biblioteca `@testing-library/react` para simular eventos do usuário.

## Instalação

Para instalar este pacote, você precisa ter o Node.js e o npm instalados em sua máquina. Depois, você pode instalar o pacote com o seguinte comando:

```bash
npm install robot-test-methods
```

## Importação

Depois de instalar o pacote, você pode importá-lo em seu arquivo de teste da seguinte maneira:

```javascript
import { interactWithElement, fillInput, clickButton } from 'robot-test-methods';
```

Agora você pode usar as funções `interactWithElement`, `fillInput` e `clickButton` em seus testes conforme necessário.

## Funções
O pacote contém as seguintes funções:

`interactWithElement(elementText, event)` &rArr;
Esta função procura um elemento na tela pelo texto e dispara um evento. Se nenhum evento for especificado, um clique será disparado.

`fillInput(placeholderText, value)` &rArr;
Esta função procura um campo de entrada (input) pelo texto do placeholder e preenche com o valor fornecido.

`clickButton(buttonText)` &rArr;
Esta função procura um botão pelo texto e dispara um evento de clique.

## Contribuindo
Contribuições são bem-vindas. Por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença
[MIT](https://choosealicense.com/licenses/mit/)
