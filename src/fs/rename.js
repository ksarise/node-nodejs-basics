import path from "node:path";
import fs from "node:fs/promises";
const wrongFilePath = path.join(
  import.meta.dirname,
  "files",
  "wrongFilename.txt"
);
const propFilePath = path.join(
  import.meta.dirname,
  "files",
  "properFilename.md"
);

const rename = async () => {
  await fs.rename(wrongFilePath, propFilePath).catch((error) => {
    console.error("FS operation failed", error);
  });
};

await rename();
