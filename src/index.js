import {
  error,
  execute,
  finish,
  info,
  moveDirectory,
  success,
  verbose,
} from "./common";
import {
  CLEAN_PHASE_MESSAGE,
  CLONE_PHASE_MESSAGE,
  COMPLETE_MESSAGE,
  FAIL_MESSAGE,
  INSTALL_PHASE_MESSAGE,
  INVALID_ARGUMENT_MESSAGE,
  REPOSITORY,
  WELCOME_MESSAGE,
} from "./constants";

// Check command validation
function checkValidation() {
  if (process.argv.length < 3) {
    error(INVALID_ARGUMENT_MESSAGE);
    finish();
  }

  verbose(WELCOME_MESSAGE);
}

// Clone crayon project
function cloneProject() {
  const projectName = process.argv[2];

  info(CLONE_PHASE_MESSAGE);
  execute(`git clone ${REPOSITORY} ${projectName}`);
}

// Remove unnecessary files
function removeFiles() {
  info(CLEAN_PHASE_MESSAGE);
  execute("npx rimraf ./.git");
  execute("npx rimraf ./docs");
}

// Install dependencies
function installDependencies() {
  info(INSTALL_PHASE_MESSAGE);
  execute("yarn");
}

// Create crayon
function createCrayon() {
  checkValidation();
  cloneProject();

  moveDirectory(process.argv[2]);

  removeFiles();
  installDependencies();
}

try {
  createCrayon();

  success(COMPLETE_MESSAGE);
} catch (_error) {
  error(`${FAIL_MESSAGE}\n${_error}`);
}
