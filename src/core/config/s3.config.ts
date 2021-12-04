import { registerAs } from '@nestjs/config';

export default registerAs('s3', () => ({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_DEFAULT_REGION
}));
