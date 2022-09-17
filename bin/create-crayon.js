#! /usr/bin/env node

const child_process = require("child_process");
const chalk = require("chalk");

const REPOSITORY = "https://github.com/gdsc-ys/crayon.git";

// Process
function execute(command) {
  child_process.execSync(command);
}

function move(path) {
  process.chdir(path);
}

function finish() {
  process.exit(1);
}

// Check command validation
function checkValidation() {
  if (process.argv.length < 3) {
    console.info("Please specify the project name.");
    console.info(chalk.yellow('Like "npx create-crayon my-blog"'));
    finish();
  }

  console.log(chalk.blue("Welcome to crayon!"));
}

// Clone crayon project
function cloneProject() {
  const projectName = process.argv[2];

  console.info('1. Cloning "crayon" project...');
  execute(`git clone ${REPOSITORY} ${projectName}`);
}

// Remove unnecessary files
function removeFiles() {
  console.info("2. Removing unnecessary files...");
  execute("npx rimraf ./.git");
  execute("npx rimraf ./docs");
}

// Install dependencies
function installDependencies() {
  console.info("3. Installing dependencies...");
  execute("yarn");
}

// Create crayon
function createCrayon() {
  checkValidation();
  cloneProject();

  move(process.argv[2]);

  removeFiles();
  installDependencies();
}

try {
  createCrayon();

  console.info(chalk.blue("Crayon is ready to use. Let's make your own blog!"));
} catch (error) {
  console.error(chalk.red("Failed to initialize crayon."));
}
