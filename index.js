let chalk = require("chalk");

let numExercise = process.argv[2] || 1;

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

console.log(
  chalk.yellow(`
    Exercise #${numExercise} is running ...
  `)
);

const exercise = require(`./src/exercise${numExercise}`);

const output = exercise.run();

console.log(
  chalk.green(`
    Exercise #${numExercise} finished with value ${output}
  `)
);
