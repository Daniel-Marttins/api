import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { Tenant } from "./Tenant";

@Entity('horas_extras')
export class HoraExtra {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "timestamp", nullable: false })
    data!: Date;

    @Column({ type: "boolean", nullable: false, default: false })
    aprovado!: boolean;

    @Column({ type: "text", nullable: true })
    motivo?: string;

    @Column({ type: 'integer', nullable: false })
    quantidadeHoras!: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => Funcionario, funcionario => funcionario.horasExtras, { nullable: false })
    @JoinColumn({ name: "funcionarioId" })
    funcionarioId!: Funcionario;

    @ManyToOne(() => Empresa, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;

}