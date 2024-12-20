const redis = require('redis');
let redisClient;

async function connectToRedis() {
  redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  });

  redisClient.on('error', (err) => console.error('Erro no Redis:', err));

  await redisClient.connect();
  console.log('Conexão ao Redis estabelecida!');
}

module.exports = { connectToRedis, redisClient };
