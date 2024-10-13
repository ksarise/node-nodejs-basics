import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const wrongFilePath = path.join(__dirname, "files", "wrongFilename.txt");
const propFilePath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  await fs.rename(wrongFilePath, propFilePath).catch((error) => {
    console.error("FS operation failed", error);
  });
};

await rename();
