import { DataSource  } from 'typeorm';
import { IdentityNumber } from './entities/identityNumber.entity';
import 'dotenv/config';

export const dataSource:DataSource =  new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    IdentityNumber
   ],
  logging: true,
});


