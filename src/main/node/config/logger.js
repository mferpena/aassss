const COLORS = {
  info: "\x1b[32m",
  warn: "\x1b[33m",
  error: "\x1b[31m",
  reset: "\x1b[0m"
};

const formatJson = (level, message) => ({
  timestamp: new Date().toISOString(),
  level,
  message
});

module.exports = {
  info: (msg) =>
    console.log(`${COLORS.info}%s${COLORS.reset}`, JSON.stringify(formatJson("INFO", msg))),

  warn: (msg) =>
    console.warn(`${COLORS.warn}%s${COLORS.reset}`, JSON.stringify(formatJson("WARN", msg))),

  error: (msg) =>
    console.error(`${COLORS.error}%s${COLORS.reset}`, JSON.stringify(formatJson("ERROR", msg)))
};
