require("./src/main/node/config/variables");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const env = require("./src/main/node/config/variables");

global.log = require("./src/main/node/config/logger");

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json({ limit: process.env.JSON_LIMIT }));
app.use(rateLimit({
  windowMs: Number(process.env.RATE_WINDOW_MS),
  max: Number(process.env.RATE_MAX_REQUESTS),
  standardHeaders: true,
  legacyHeaders: false
}));

async function startServer() {
  try {
    if (process.env.MONGO_URI) await mongoose.connect(process.env.MONGO_URI);

    app.use(process.env.CONTEXT_PATH, require("./src/main/node/router/routes"));

    app.use(require("./src/main/node/middlewares/not-found"));
    app.use(require("./src/main/node/middlewares/error"));

    app.listen(process.env.PORT, () => {
      log.info(
        `🚀 Server running at http://localhost:${process.env.PORT}${process.env.CONTEXT_PATH}/`
      );
    });

  } catch (err) {
    log.error(err.stack);
    process.exit(1);
  }
}

startServer();
