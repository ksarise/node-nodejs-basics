import path from "node:path";
import url from "node:url";
import os from "os";
import { Worker } from "worker_threads";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "worker.js");

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const workerServer = new Worker(path.join(filePath), { workerData });

    workerServer.on("message", (result) =>
      resolve({ status: "resolved", data: result })
    );

    workerServer.on("error", () => resolve({ status: "error", data: null }));

    workerServer.on("exit", (code) => {
      if (code !== 0) {
        resolve({ status: "error", data: null });
      }
    });
  });
};

const performCalculations = async () => {
  const currentWorkers = os.cpus().length;
  let results = [];

  results = Array.from({ length: currentWorkers }, (_, i) =>
    createWorker(10 + i)
  );
  const workerResults = await Promise.all(results);
  console.log(workerResults);
};

await performCalculations();
