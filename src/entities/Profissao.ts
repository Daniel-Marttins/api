import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa";
import { JornadaTrabalho } from "./JornadaTrabalho";
import { Tenant } from "./Tenant";

@Entity('profissoes')
export class Profissao {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: "100", nullable: false })
    nome!: string;

    @Column({ type: "text", nullable: true })
    descricao?: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    salarioBase!: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    totalBeneficios!: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    totalDescontos!: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    adicionalPadrao!: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    adicionalNoturno!: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false, default: 0 })
    valorHoraExtra!: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    // RELACIONAMENTOS
    @ManyToOne(() => JornadaTrabalho, { nullable: false })
    @JoinColumn({ name: "jornadaId" })
    jornadaId!: JornadaTrabalho;

    @ManyToOne(() => Empresa, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;

}