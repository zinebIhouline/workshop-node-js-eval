# workshop-node-js-noob

Workshop to learn the basics of Node.js.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests & lint

To launch the tests.

	npm test

To lint sources.

	npm run lint

### Start

To start program.

	npm start

## Exercises

Please verify that after all exercises the tests and the linter should not return errors.

### Exercise 1

Your program must be written into the file **src/exercise1.js_** into the function +run+.

This function should return the parameter given in input but in a uppercase way.

```javascript
// For example
run('Hello you') // "HELLO YOU"
```

:point_right: [function `.toUpperCase`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toUpperCase) should help you.

After finish this exercise, please commit this file.

	git add src/exercise1.js

	git commit -m "Exercise 1"

### Exercise 2

Your program must be written into the file **src/exercise1.js_** into the function +run+.

This function should return (a number) the biggest number of the string input considering only one character.

```javascript
// For example
run('14725') // 7
run('642356') // 6
run('125') // 5
```

:point_right: [function `.split`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) should help you.

After finish this exercise, please commit this file.

	src/exercise2.js

	git commit -m "Exercise 2"

### Exercise 3

Your program must be written into the file **src/exercise3.js_** into the function +run+.

This function should return (a number) which is the multiplication of the values of objects where the property +multiply+ is true.

```javascript
// For example
run([
  { multiply: true, value: 2 },
  { multiply: false, value: 5 },
  { multiply: true, value: 3 }
]) // 6
run([
  { multiply: false, value: 2 },
  { multiply: false, value: 5 },
  { multiply: true, value: 7 },
  { multiply: true, value: 3 },
]) // 21
```

After finish this exercise, please commit this file.

	src/exercise3.js

	git commit -m "Exercise 3"

### Exercise 4

Your program must be written into the file **src/exercise4.js_** into the function +run+.

Be careful, some code is already present for this exercise, it's strictly forbidden to change this code.

This function should return a particular string : "Beetlejuice, Beetlejuice, Beetlejuice".

After finish this exercise, please commit this file.

	src/exercise4.js

	git commit -m "Exercise 4"

### Exercise 5

Your program must be written into the file **src/exercise5.js_** into the function +run+.

This function should return a string which indicates number of files in a directory with a particular message.

To do this you should absolutely use the asynchronous way.

```javascript
// For example
run({
	directory: "test",
	showInProgress: () => "In progress ...",
  showError: () => "Something goes wrong",
  showDone: number => `Project contains ${number} file(s) of tests`
}) // "Project contains 6 file(s) of tests"
```


:point_right: [function `.readdir`](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback) should help you.

After finish this exercise, please commit this file.

	src/exercise5.js

	git commit -m "Exercise 5"
