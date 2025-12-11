# Funciones y Ámbito
## Objetivos del módulo
- Qué es una función en JavaScipt
- Tipo de funciones: declaradas, expresadas, flecha
- Scope dentro de funciones
- Conceptos de parámetros, argumentos, return
- Variables locales vs globales dentro de funciones
- Closures (Explicación simple)

### 1. Qué es una función?
Una función es un bloque de códio reutilizable que se ejecuta cuando se invoca

```js
function saludar() {
  console.log('Hola mundo');
}

saludar(); // Se llama a la función
```

### 2. Tipos de funciones
- **Function declaration:** Soporta *hoisting* y se puede llamar antes de declararla.
- **Function expressión:** No soporta *hoisting* y se debe declarar antes de llamar.
- **Arrow function:** No soporta *hoisting* y se debe declarar antes de llamar.