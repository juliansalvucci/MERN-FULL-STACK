//Archivo para cargar las variables de entorno.

import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/merndb";
export const PORT = process.env.PORT || 4000;   //Ejecuta el valor de la variable de entorno o sino 4000 que tiene por defecto.

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;