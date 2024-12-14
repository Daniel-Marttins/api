import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EMPRESA } from "./EMPRESA";
import { TENANT } from "./TENANT";

@Entity('JORNADAS_TRABALHOS')
export class JORNADA_TRABALHO {

    @PrimaryGeneratedColumn({ name: "ID" })
    id!: number;

    @Column({ name: "DIAS_SEMANAS", type: "simple-array", nullable: false })
    DIAS_SEMANAS!: string[];

    @Column({ name: "HORA_INICIO", type: 'time', nullable: false })
    HORA_INICIO!: string;

    @Column({ name: "HORA_FIM", type: 'time', nullable: false })
    HORA_FIM!: string;

    @Column({ name: "INTERVALO", type: 'time', nullable: false })
    INTERVALO!: string;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;
}