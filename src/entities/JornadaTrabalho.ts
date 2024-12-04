import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa";
import { Tenant } from "./Tenant";

@Entity('jornadas_trabalho')
export class JornadaTrabalho {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: "100", nullable: false })
    diasSemana!: string;

    @Column({ type: 'time', nullable: false })
    horaInicio!: string;

    @Column({ type: 'time', nullable: false })
    horaFim!: string;

    @Column({ type: 'time', nullable: false })
    intervalo!: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => Empresa, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;
}