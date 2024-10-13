import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import { spawn } from "node:child_process";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "script.js");

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
