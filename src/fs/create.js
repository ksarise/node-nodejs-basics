import path from "node:path";
import fs from "node:fs/promises";

const filePath = path.join(import.meta.dirname, "files", "fresh.txt");

const create = async () => {
  await fs
    .writeFile(filePath, "I am fresh and young", (err) =>
      console.error("FS operation failed", err)
    )
    .catch((err) => {
      console.error("FS operation failed", err);
    });
};

await create();
