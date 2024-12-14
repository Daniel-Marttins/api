import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TIPO_BENEFICIO, TIPO_DESCONTO } from "../types/Default";
import { TENANT } from "./TENANT";
import { EMPRESA } from './EMPRESA';

@Entity('DESCONTOS')
export class DESCONTO {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({
        name: "TIPO",
        type: 'enum',
        enum: TIPO_BENEFICIO,
        default: TIPO_BENEFICIO.OUTROS,
        nullable: false
    })
    TIPO!: TIPO_DESCONTO;

    @Column({ name: "DESCRICAO", type: "varchar", length: "150", nullable: true })
    DESCRICAO?: string;

    @Column({ name: "ALTERAR_SALARIO", type: "boolean", nullable: false, default: false })
    ALTERAR_SALARIO!: boolean;

    @Column({ name: "VALOR", type: "decimal", precision: 10, scale: 2, nullable: false })
    VALOR!: number;

    // RELACIONAMENTOS
    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;
}