import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect();

export const GetDataFromCache = async (key) => {
  // Check if data is already in Redis cache
  const cachedData = await client.get(key);
  if (cachedData) {
    console.log("Retrieved data from cache");
    return JSON.parse(cachedData);
  }
};

export const SetDataToCache = async (key, result) => {
  // Check if data is already in Redis cache

  // Store data in Redis cache for 1 hour
  await client.set(key, JSON.stringify(result));
};

export const DisconnectRedis = async () => {
  // Check if data is already in Redis cache

  // Store data in Redis cache for 1 hour
  await client.disconnect();
};
