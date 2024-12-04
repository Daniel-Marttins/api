import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TIPO_AUSENCIA } from "../types/Default";
import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { Tenant } from "./Tenant";

@Entity('feriados_ausencias')
export class FeriadoAusencia {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "timestamp", nullable: false })
    dataInicio!: Date;

    @Column({ type: "timestamp", nullable: false })
    dataFim!: Date;

    @Column({
        type: 'enum',
        enum: TIPO_AUSENCIA,
        default: TIPO_AUSENCIA.OUTROS,
        nullable: false
    })
    tipo!: TIPO_AUSENCIA;

    @Column({ type: "text", nullable: true })
    justificativa?: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => Funcionario, funcionario => funcionario.feriadoAusencias, { nullable: false })
    @JoinColumn({ name: "funcionarioId" })
    funcionarioId!: Funcionario;

    @ManyToOne(() => Empresa, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;
}