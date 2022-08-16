export const questions = [
  {
    text: '¿Cual NO es un tipo de datos válido?',
    options: [
      { id: 0, text: 'int', isCorrect: false },
      { id: 1, text: 'char', isCorrect: false },
      { id: 2, text: 'string', isCorrect: false },
      { id: 3, text: 'video', isCorrect: true },
    ],
  },
  {
    text: `Existen diferentes tipos de operadores matemáticos: suma(+), resta(-), multiplicacion(*), division(/) ¿Cual sería el resultado de esta operación?<br> var num1 = 2;<br> var result = num1 * 3;`,
    options: [
      { id: 0, text: '1', isCorrect: false },
      { id: 1, text: '2', isCorrect: false },
      { id: 2, text: '6', isCorrect: true },
      { id: 3, text: '5', isCorrect: false },
    ],
  },
  {
    text: 'Las variables se guardan en una memoria para acceder a ellas y estan ocupas un cierto tamaño. Si una variable tipo &#39;int&#39; ocupa 4 bytes y una tipo &#39;char&#39; ocupa 1 byte, ¿cuál es el tamaño ocupado en memoria de este código?<br>int num1 = 1;<br>int num2 = 3;<br>char a = &#39;h&#39;;',
    options: [
      { id: 0, text: '9', isCorrect: true },
      { id: 1, text: '5', isCorrect: false },
      { id: 2, text: '8', isCorrect: false },
      { id: 3, text: '3', isCorrect: false },
    ],
  },
  {
    text: 'Las funciones son trozos de código que realizan una acción concreta y a estas se le pueden mandar variables como datos para usar, ¿qué nombre reciben en la programación estas variables en las funciones?',
    options: [
      { id: 0, text: 'auxiliares', isCorrect: false },
      { id: 1, text: 'datos', isCorrect: false },
      { id: 2, text: 'parámetros', isCorrect: true },
      { id: 3, text: 'variables', isCorrect: false },
    ],
  },
  {
    text: '¿Cuáles de las siguientes opciones es una estructura condicional?',
    options: [
      { id: 0, text: 'function', isCorrect: false },
      { id: 1, text: 'while', isCorrect: false },
      { id: 2, text: 'var', isCorrect: false },
      { id: 3, text: 'if', isCorrect: true },
    ],
  },
  {
    text: '¿Qué palabra reservada se usa para finalizar un código y devolver el resultado?',
    options: [
      { id: 0, text: 'function', isCorrect: false },
      { id: 1, text: 'result', isCorrect: false },
      { id: 2, text: 'var', isCorrect: false },
      { id: 3, text: 'return', isCorrect: true },
    ],
  },
  {
    text: 'Si queremos ejecutar un bucle que ejecute un trozo de código MIENTRAS se cumpla una condición, ¿cuál deberíamos elegir?',
    options: [
      { id: 0, text: 'while', isCorrect: true },
      { id: 1, text: 'for', isCorrect: false },
      { id: 2, text: 'if', isCorrect: false },
      { id: 3, text: 'switch', isCorrect: false },
    ],
  },
  {
    text: 'Cuando pensamos en un problema, imaginamos como resolverlo y lo escribimos en código, ¿qué nombre recibe este resultado?',
    options: [
      { id: 0, text: 'Maquetación', isCorrect: false },
      { id: 1, text: 'Creación', isCorrect: false },
      { id: 2, text: 'Algoritmo', isCorrect: true },
      { id: 3, text: 'Imaginación', isCorrect: false },
    ],
  },
  {
    text: 'Pregunta 9',
    options: [
      { id: 0, text: 'Opcion 1', isCorrect: false },
      { id: 1, text: 'Opcion 2', isCorrect: true },
      { id: 2, text: 'Opcion 3', isCorrect: false },
      { id: 3, text: 'Opcion 4', isCorrect: false },
    ],
  },
  {
    text: 'Pregunta 10',
    options: [
      { id: 0, text: 'Opcion 1', isCorrect: false },
      { id: 1, text: 'Opcion 2', isCorrect: false },
      { id: 2, text: 'Opcion 3', isCorrect: true },
      { id: 3, text: 'Opcion 4', isCorrect: false },
    ],
  },
]
