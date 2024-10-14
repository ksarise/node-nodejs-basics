import path from "node:path";
import fs from "node:fs/promises";
const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
