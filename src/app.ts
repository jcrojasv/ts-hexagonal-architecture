import express from "express";
import cors from "cors";
import { config } from "dotenv";
import configEnvs from "./config";

config();
const app: express.Application = express();
app.use(cors());
app.use(express.json());

app.listen(configEnvs.port, () => {
  console.log(`\x1b[34m listening on port ${configEnvs.port}`);
  console.log(`\x1b[32m running environment NODE_ENV=${process.env.NODE_ENV}`);
});

// Routes
app.get("/", (req, res) => {
  res.send({msg: 'Running in TS'});
});

export { app };
