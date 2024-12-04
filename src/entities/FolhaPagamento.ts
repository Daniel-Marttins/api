import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from "./Empresa";
import { Funcionario } from "./Funcionario";
import { Tenant } from "./Tenant";

@Entity('folha_pagamentos')
export class FolhaPagamento {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "timestamp", nullable: false })
    dataPagamento!: Date;

    @Column({ type: "varchar", length: "50", nullable: false })
    mesReferencia!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    salarioBruto!: number;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    salarioLiquido!: number;

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