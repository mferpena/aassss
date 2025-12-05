require("dotenv").config();

const requiredDefault = [
  "PORT",
  "CONTEXT_PATH",
  "JSON_LIMIT",
  "RATE_WINDOW_MS",
  "RATE_MAX_REQUESTS",
  "CORS_ORIGIN"
];

const requiredExtra = process.env.REQUIRED_ENVS
  ? process.env.REQUIRED_ENVS.split(",").map(v => v.trim())
  : [];

const required = [...new Set([...requiredDefault, ...requiredExtra])];

required.forEach(v => {
  if (!process.env[v] || process.env[v].trim() === "") {
    console.error(`missing env ${v}`);
    process.exit(1);
  }
});
