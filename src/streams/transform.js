import { Transform } from "node:stream";

const transform = async () => {
  const stream = new Transform({
    transform(chunk, encoding, callback) {
      const reverse = chunk.toString().split("").reverse().join("");
      callback(null, reverse);
    },
  });

  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
