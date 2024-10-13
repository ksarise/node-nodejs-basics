// n should be received from main thread
import { parentPort, workerData } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  if (workerData) {
    parentPort.postMessage(nthFibonacci(workerData));
  } else {
    throw new Error("n should be received from main thread");
  }
};

sendResult();
