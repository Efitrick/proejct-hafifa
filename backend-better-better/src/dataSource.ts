import { DataSource  } from 'typeorm';
import { IdentityNumber } from './entities/identityNumber.entity';
export const dataSource:DataSource =  new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "047292",
  database: "postgres",
  entities: [
    IdentityNumber
   ],
  logging: true,
});


