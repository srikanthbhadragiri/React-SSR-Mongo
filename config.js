const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const mongodbUri = 'mongodb://sri:sri@ds157971.mlab.com:57971/emaily-dev';

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};
