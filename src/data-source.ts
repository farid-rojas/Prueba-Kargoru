import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'pruebas',
  password: 'Pruebas@2022',
  database: 'Prueba',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.{js,ts}'],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
