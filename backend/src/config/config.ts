export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  connectionString: process.env.MONGO_CONNECTION_STRING,
});
