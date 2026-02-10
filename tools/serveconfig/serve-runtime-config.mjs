#!/usr/bin/env node

import path from 'path';
import express from "express";
import cors from "cors";

if (!process.env.PORT) {
  throw new Error(
    '[frontend-dev-utils] PORT is required. Example: PORT=1234 devutils-serve-runtime-config'
  );
}
const PORT = Number(process.env.PORT);

const RUNTIME_CONFIG_DIR = process.env.RUNTIME_CONFIG_DIR
  ? path.resolve(process.env.RUNTIME_CONFIG_DIR)
  : path.resolve('./runtime-config');

const app = express();

app.use(cors());
app.use(express.static(RUNTIME_CONFIG_DIR));

app.listen(PORT, () => {
  console.log(`Serving runtime config at http://localhost:${PORT}`);
});
