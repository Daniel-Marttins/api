import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TIPO_REGISTRO } from "../types/Default";
import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { Tenant } from "./Tenant";

@Entity('registros_pontos')
export class RegistroPonto {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "timestamp", nullable: false })
    data!: Date;

    @Column({ type: 'time', nullable: false })
    horaEntrada!: string;

    @Column({ type: 'time', nullable: false })
    horaSaida!: string;

    @Column({ type: 'time', nullable: false })
    horaAlmocoInicio!: string;

    @Column({ type: 'time', nullable: false })
    horaAlmocoFim!: string;

    @Column({
        type: 'enum',
        enum: TIPO_REGISTRO,
        default: TIPO_REGISTRO.PRESENCIAL,
        nullable: false
    })
    tipoRegistro!: TIPO_REGISTRO;

    @Column({ type: 'varchar', length: 200, nullable: false })
    observacoes!: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => Funcionario, { nullable: false })
    @JoinColumn({ name: "funcionarioId" })
    funcionarioId!: Funcionario;

    @ManyToOne(() => Empresa, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;
    
}