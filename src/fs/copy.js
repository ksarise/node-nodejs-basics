import path from "node:path";
import fs from "node:fs/promises";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files");

const copy = async () => {
  await fs
    .cp(filePath, `${filePath}_copy`, {
      recursive: true,
      errorOnExist: true,
      force: false,
    })
    .catch((error) => console.error("FS operation failed", error));
};

await copy();
