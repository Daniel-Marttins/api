import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EMPRESA } from "./EMPRESA";
import { FUNCIONARIO } from "./FUNCIONARIO";
import { TENANT } from "./TENANT";

@Entity('HORAS_EXTRAS')
export class HORA_EXTRA {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "DATA", type: "timestamp", nullable: false })
    DATA!: Date;

    @Column({ name: "APROVADO", type: "boolean", nullable: false, default: false })
    APROVADO!: boolean;

    @Column({ name: "MOTIVO", type: "text", nullable: true })
    MOTIVO?: string;

    @Column({ name: "QUANTIDADE_HORAS", type: 'integer', nullable: false })
    QUANTIDADE_HORAS!: number;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => FUNCIONARIO, FUNCIONARIO => FUNCIONARIO.HORA_EXTRAS, { nullable: false })
    @JoinColumn({ name: "FUNCIONARIO_ID" })
    FUNCIONARIO_ID!: FUNCIONARIO;

    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;

}