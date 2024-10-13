import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files");

const list = async () => {
  await fs
    .readdir(filePath)
    .then(console.log)
    .catch((error) => console.error("FS operation failed", error));
};

await list();
