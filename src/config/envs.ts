import dotenv from "dotenv";

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === "development";
export const TEST = process.env.NODE_ENV === "test";

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const CLIENT_WEB_URL = process.env.CLIENT_WEB_URL || "http://localhost:3000";

export const ENV = {
  SERVER_HOSTNAME,
  SERVER_PORT,
  CLIENT_WEB_URL,
};
