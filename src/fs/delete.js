import path from "node:path";
import fs from "node:fs/promises";

const filePath = path.join(import.meta.dirname, "files", "fileToRemove.txt");

const remove = async () => {
  await fs
    .rm(filePath, { force: false })
    .catch((error) => console.error("FS operation failed", error));
};

await remove();
