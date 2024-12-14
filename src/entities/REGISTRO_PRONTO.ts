import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TIPO_REGISTRO } from "../types/Default";
import { EMPRESA } from "./EMPRESA";
import { FUNCIONARIO } from "./FUNCIONARIO";
import { TENANT } from "./TENANT";

@Entity('REGISTROS_PRONTOS')
export class REGISTRO_PRONTO {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "DATA", type: "timestamp", nullable: false })
    DATA!: Date;

    @Column({ name: "HORA_ENTRADA", type: 'time', nullable: false })
    HORA_ENTRADA!: string;

    @Column({ name: "HORA_SAIDA", type: 'time', nullable: false })
    HORA_SAIDA!: string;

    @Column({ name: "HORA_ALMOCO_INICIO", type: 'time', nullable: false })
    HORA_ALMOCO_INICIO!: string;

    @Column({ name: "HORA_ALMOCO_FIM", type: 'time', nullable: false })
    HORA_ALMOCO_FIM!: string;

    @Column({
        name: "TIPO_REGISRO",
        type: 'enum',
        enum: TIPO_REGISTRO,
        default: TIPO_REGISTRO.PRESENCIAL,
        nullable: false
    })
    TIPO_REGISTRO!: TIPO_REGISTRO;

    @Column({ name: "OBSERVACOES", type: 'varchar', length: 200, nullable: false })
    OBSERVACOES!: string;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => FUNCIONARIO, { nullable: false })
    @JoinColumn({ name: "FUNCIONARIO_ID" })
    FUNCIONARIO_ID!: FUNCIONARIO;

    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;
    
}