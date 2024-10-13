import path from "node:path";
import fs from "node:fs";
import { createHash } from "node:crypto";
const filePath = path.join(
  import.meta.dirname,
  "files",
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const hash = createHash("sha256");
  const stream = fs.createReadStream(filePath);
  stream.pipe(hash).setEncoding("hex").pipe(process.stdout);
};

await calculateHash();
