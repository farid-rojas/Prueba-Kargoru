"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migraciones1656647633165 = void 0;
class migraciones1656647633165 {
    constructor() {
        this.name = 'migraciones1656647633165';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "quotes" ("id" SERIAL NOT NULL, "document" integer NOT NULL, "name" character varying NOT NULL, "weigth" character varying NOT NULL, "addressSource" character varying NOT NULL, "addressDestination" character varying NOT NULL, CONSTRAINT "PK_99a0e8bcbcd8719d3a41f23c263" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "quotes"`);
    }
}
exports.migraciones1656647633165 = migraciones1656647633165;
//# sourceMappingURL=1656647633165-migraciones.js.map