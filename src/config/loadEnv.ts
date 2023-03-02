import dotenv from "dotenv";

const loadEnv = () => {
  return dotenv.config().parsed;
};

export default loadEnv;
