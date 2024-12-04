import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TIPO_BENEFICIO } from "../types/Default";
import { Empresa } from "./Empresa";
import { Tenant } from "./Tenant";

@Entity('beneficios')
export class Beneficio {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'enum',
        enum: TIPO_BENEFICIO,
        default: TIPO_BENEFICIO.OUTROS,
        nullable: false
    })
    tipo!: TIPO_BENEFICIO;

    @Column({ type: "varchar", length: "150", nullable: true })
    descricao?: string;

    @Column({ type: "boolean", nullable: false, default: false })
    alteraSalario!: boolean;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    valor!: number;

    // RELACIONAMENTOS
    @ManyToOne(() => Empresa, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;

}