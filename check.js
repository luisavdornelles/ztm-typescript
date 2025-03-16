const execSync = require('child_process').execSync;

const path = process.argv[2];

try {
  execSync(`pnpm typecheck ${path}`, { stdio: [0, 1, 2] });
  execSync(`pnpm eslint ${path}`, { stdio: [0, 1, 2] });
} catch (_) {

}
