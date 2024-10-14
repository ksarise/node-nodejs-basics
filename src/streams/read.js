import path from "node:path";
import fs from "node:fs";
const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = fs.createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();
