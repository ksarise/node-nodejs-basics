import { env } from "node:process";

const parseEnv = () => {
  const rssEnv = Object.entries(env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([key, value]) => `${key}=${value}`)
    .join("; ");
  console.log(rssEnv);
};

parseEnv();
