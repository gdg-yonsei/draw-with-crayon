import * as child_process from "child_process";
import chalk from "chalk";

// Process
export const execute = (command) => {
  child_process.execSync(command);
};

export const moveDirectory = (path) => {
  process.chdir(path);
};

export const finish = () => {
  process.exit(1);
};

// Log
export const info = (message) => {
  console.info(message);
};

export const success = (message) => {
  console.info(chalk.green(message));
};

export const verbose = (message) => {
  console.verbose(chalk.cyan(message));
};

export const error = (message) => {
  console.error(chalk.red(message));
};
