const chalk = require("chalk");

const numExercise = process.argv[2] || 1;

const inputs = [
  "it sounds good !",
  "15843",
  [
    { multiply: true, value: 4 },
    { multiply: false, value: 7 },
    { multiply: true, value: 5 },
    { multiply: true, value: 9 }
  ]
];

if (!Number.isInteger(parseInt(numExercise))) {
  console.log(
    chalk.red(`
      ${numExercise} is not a appropriate value
    `)
  );
  return;
}

if (numExercise <= 0 || numExercise > 5) {
  console.log(
    chalk.red(`
      You must select an exercise between 1 and 5 only
    `)
  );
  return;
}

const exercise = require(`./src/exercise${numExercise}`);
const input = inputs[numExercise - 1];

console.log(
  chalk.yellow(`
    Exercise #${numExercise} is running with input ${chalk.cyan.bold(input)}
  `)
);

const output = exercise.run(input);

console.log(
  chalk.green(`
    Exercise #${numExercise} finished with value ${chalk.cyan.bold(output)}
  `)
);
