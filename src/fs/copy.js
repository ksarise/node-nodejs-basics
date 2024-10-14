import path from "node:path";
import fs from "node:fs/promises";
const filePath = path.join(import.meta.dirname, "files");

const copy = async () => {
  try {
    await fs.cp(filePath, `${filePath}_copy`, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
