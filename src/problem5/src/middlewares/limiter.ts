import rateLimit from 'express-rate-limit';

const minute = parseInt(process.env.MINUTE_REQUEST || '1');
const limit = parseInt(process.env.LIMIT_REQUEST || '100');

export default rateLimit({
  windowMs: minute * 60 * 1000,
  max: limit,
  statusCode: 429,
  message: {
    error: true,
    code: 429,
    message: 'Too many requests',
  },
});
