import path from "node:path";
import fs from "node:fs/promises";
const filePath = path.join(import.meta.dirname, "files");

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
