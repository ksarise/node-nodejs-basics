import path from "node:path";
import fs from "node:fs";
import { createGzip } from "node:zlib";
const filePath = path.join(import.meta.dirname, "files", "fileToCompress.txt");
const archiveFilePath = path.join(import.meta.dirname, "files", "archive.gz");

const compress = async () => {
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(archiveFilePath);
  const zip = createGzip();
  readStream.pipe(zip).pipe(writeStream);
  readStream.on("error", (err) => {
    console.error("FS read operation failed", err);
  });
  writeStream.on("error", (err) => {
    console.error("FS write operation failed", err);
  });
};

await compress();
