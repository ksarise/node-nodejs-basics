import path from "node:path";
import fs from "node:fs/promises";
const filePath = path.join(import.meta.dirname, "files");

const list = async () => {
  await fs
    .readdir(filePath)
    .then(console.log)
    .catch((error) => console.error("FS operation failed", error));
};

await list();
