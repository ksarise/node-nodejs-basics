import path from "node:path";
import fs from "node:fs";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = fs.createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();
