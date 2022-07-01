"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=data-source.js.map