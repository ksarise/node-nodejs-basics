import path from "node:path";
import fs from "node:fs";
import url from "node:url";
import { createUnzip } from "node:zlib";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCompress.txt");
const archiveFilePath = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const readStream = fs.createReadStream(archiveFilePath);
  const writeStream = fs.createWriteStream(filePath);
  const zip = createUnzip();
  readStream.pipe(zip).pipe(writeStream);
  readStream.on("error", (err) => {
    console.error("FS read operation failed", err);
  });
  writeStream.on("error", (err) => {
    console.error("FS write operation failed", err);
  });
};

await compress();
