import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import { createHash } from "node:crypto";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = fs.createReadStream(filePath);
  stream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
