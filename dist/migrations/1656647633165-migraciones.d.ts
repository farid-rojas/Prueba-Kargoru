import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migraciones1656647633165 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
