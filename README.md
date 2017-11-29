# workshop-node-js-eval

Workshop to evaluate students on the basics of Node.js.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests

To launch the tests.

	npm test

### Start

To start program.

	node index.js

## Exercises

### Exercise 1

Your program must be written into the file **_src/exercise1.js_** into the function `run`.

This function should return the number of characters of the string given in input.

```javascript
// For example
run('Hello you') // 9
```

After finish this exercise, please commit this file.

	git add src/exercise1.js

	git commit -m "Exercise 1"

### Exercise 2

Your program must be written into the file **_src/exercise2.js_** into the function `run`.

This function should return a string with only number under 6 of the string given in input.

```javascript
// For example
run('14725') // 1425
run('642356') // 4235
run('125') // 125
```

:point_right: function[`split`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) should help you.

After finish this exercise, please commit this file.

	git add src/exercise2.js

	git commit -m "Exercise 2"

### Exercise 3

Your program must be written into the file **_src/exercise3.js_** into the function `run`.

This function should return (a number) which is the result of the values of objects with specific operator mentionned in the property "operator".

```javascript
// For example +2-4+3=1
run([
  { operator: 'add', value: 2 },
  { operator: 'substract', value: 4 },
  { operator: 'add', value: 3 }
]) // 1
// For example +2+5+7-3=11
run([
  { operator: 'add', value: 2 },
  { operator: 'add', value: 5 },
  { operator: 'add', value: 7 },
  { operator: 'substract', value: 3 },
]) // 11
```

After finish this exercise, please commit this file.

	git add src/exercise3.js

	git commit -m "Exercise 3"

### Exercise 4

Your program must be written into the file **_src/exercise4.js_** into the function `run`.

Be careful, some code is already present for this exercise, it's strictly forbidden to change this code.

This function should return a particular string : "The value of One is 1, The value of Two is 2, The value of Three is 3".

After finish this exercise, please commit this file.

	git add src/exercise4.js

	git commit -m "Exercise 4"

### Exercise 5

Your program must be written into the file **_src/exercise5.js_** into the function `run`.

This function should return (a number) which is the sum of the values written in the path given in input.

```javascript
run("exercise5-sample-1.txt") // 30
```

After finish this exercise, please commit this file.

	git add src/exercise5.js

	git commit -m "Exercise 5"
