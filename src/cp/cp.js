import path from "node:path";
import { spawn } from "node:child_process";
const filePath = path.join(import.meta.dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [filePath, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on("error", (err) => {
    console.error("Child process failed", err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["1", "2"]);
