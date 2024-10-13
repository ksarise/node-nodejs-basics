import path from "node:path";
import fs from "node:fs";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = fs.createWriteStream(filePath);
  process.stdin.pipe(stream);
  process.on("SIGINT", () => {
    process.exit();
  });
};

await write();
