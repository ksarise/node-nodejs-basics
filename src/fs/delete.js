import path from "node:path";
import fs from "node:fs/promises";

const filePath = path.join(import.meta.dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(filePath, { force: false });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
