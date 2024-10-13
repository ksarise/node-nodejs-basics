import path from "node:path";
import fs from "node:fs/promises";

const filePath = path.join(import.meta.dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.writeFile(filePath, "I am fresh and young", { flag: "wx" });
  } catch (error) {
    if (error.code === "EEXIST") throw new Error("FS operation failed");
    throw error;
  }
};

await create();
