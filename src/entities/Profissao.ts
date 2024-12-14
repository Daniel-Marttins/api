import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EMPRESA } from "./EMPRESA";
import { JORNADA_TRABALHO } from "./JORNADA_TRABALHO";
import { TENANT } from "./TENANT";

@Entity('PROFISSOES')
export class PROFISSAO {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "NOME", type: "varchar", length: "100", nullable: false })
    NOME!: string;

    @Column({ name: "DESCRICAO", type: "text", nullable: true })
    DESCRICAO?: string;

    @Column({ name: "SALARIO_BASE", type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    SALARIO_BASE!: number;

    @Column({ name: "TOTAL_BENEFICIOS", type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    TOTAL_BENEFICIOS!: number;

    @Column({ name: "TOTAL_DESCONTOS", type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    TOTAL_DESCONTOS!: number;

    @Column({ name: "ADICIONAL_PADRAO", type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    ADICIONAL_PADRAO!: number;

    @Column({ name: "ADICIONAL_NOTURNO", type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    ADICIONAL_NOTURNO!: number;

    @Column({ name: "VALOR_HORA_EXTRA", type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    VALOR_HORA_EXTRA!: number;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO",type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => JORNADA_TRABALHO, { nullable: false })
    @JoinColumn({ name: "JORNADA_ID" })
    JORNADA_ID!: JORNADA_TRABALHO;

    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;

}