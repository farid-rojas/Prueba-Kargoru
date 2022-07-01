import { MigrationInterface, QueryRunner } from "typeorm";
export declare class migraciones1656647119131 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
