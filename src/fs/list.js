import path from "node:path";
import fs from "node:fs/promises";
const filePath = path.join(import.meta.dirname, "files");

const list = async () => {
  try {
    await fs.readdir(filePath);
    console.log(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
