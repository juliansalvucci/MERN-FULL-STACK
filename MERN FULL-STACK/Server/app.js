//Archivo de configuración express

import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import postRoutes from "./routes/posts.routes.js";

//MidleWare
const app = express();

//Rutas
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);

app.use(express.static(path.join(__dirname, '../client/build')));

// Routes
app.use("/api", postRoutes);

export { app };