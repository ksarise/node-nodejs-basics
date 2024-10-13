import path from "node:path";
import fs from "node:fs/promises";
const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");

const read = async () => {
  console.log(
    await fs
      .readFile(filePath, "utf-8")
      .catch((error) => console.error("FS operation failed", error))
  );
};

await read();
