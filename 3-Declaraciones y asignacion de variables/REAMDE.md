# Declaraciones y asignación de variables
## Objetivos del módulo
- Creación de variables en JavaScript
- Cómo funciona el var, let y const
- Conocer mas de JavaScript

### 1. Qué es una variable?
Una variable es un contender de datos que tiene un nombre y un valor
```js
let edad = 25;
```
- edad es el nombre y 25 es el valor

### 2. Declarar vs asignar
#### Declarar (reservar el nombre)
```js
let nombre;
```
#### Asignar (Dar un valor)
```js
nombre = 'Carlos';
```
### 3. var, let y const
|Tipo de variable|Ámbito (scope)|Se puede reasignar|Se puede Redaclarar|Se puede usar|
|---|---|---|---|---|
|`var`|Ámbito de función (global)| sí | sí|sí (se inicializa a undefined)|
|`let`|Ámbito de bloque `( {}) `| sí | no | no (no se inicializa, causa un TDZ)|
|`const`|Ámbito de bloque `( {}) `| no | no | no (no se inicializa, causa un TDZ)|

TDZ: Temporal Dead Zone