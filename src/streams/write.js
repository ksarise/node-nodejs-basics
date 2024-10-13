import path from "node:path";
import fs from "node:fs";
const filePath = path.join(import.meta.dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = fs.createWriteStream(filePath);
  process.stdin.pipe(stream);
  process.on("SIGINT", () => {
    process.exit();
  });
};

await write();
