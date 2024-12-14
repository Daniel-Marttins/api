import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TIPO_AUSENCIA } from "../types/Default";
import { EMPRESA } from "./EMPRESA";
import { FUNCIONARIO } from "./FUNCIONARIO";
import { TENANT } from "./TENANT";

@Entity('FERIADOS_AUSENCIAS')
export class FERIADO_AUSENCIA {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "DATA_INICIO", type: "timestamp", nullable: false })
    DATA_INICIO!: Date;

    @Column({ name: "DATA_FIM", type: "timestamp", nullable: false })
    DATA_FIM!: Date;

    @Column({
        name: "TIPO",
        type: 'enum',
        enum: TIPO_AUSENCIA,
        default: TIPO_AUSENCIA.OUTROS,
        nullable: false
    })
    TIPO!: TIPO_AUSENCIA;

    @Column({ name: "JUSTIFICATIVA", type: "text", nullable: true })
    JUSTIFICATIVA?: string;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => FUNCIONARIO, FUNCIONARIO => FUNCIONARIO.FERIADO_AUSENCIAS, { nullable: false })
    @JoinColumn({ name: "FUNCIONARIO_ID" })
    FUNCIONARIO_ID!: FUNCIONARIO;

    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;
}