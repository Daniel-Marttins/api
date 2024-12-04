import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { STATUS } from "../types/Default";
import { Funcionario } from "./Funcionario";
import { RegistroPonto } from "./RegistroPonto";
import { Tenant } from "./Tenant";

@Entity('empresas')
export class Empresa {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: "150", nullable: false })
    nomeFantasia!: string;

    @Column({ type: "varchar", length: "150", nullable: false })
    razaoSocial!: string;

    @Column({ type: "varchar", length: "20", nullable: false })
    cnpj!: string;

    @Column({
        type: 'enum',
        enum: STATUS,
        default: STATUS.ATIVO,
        nullable: false
    })
    status!: STATUS;

    @Column({ type: "varchar", length: "150", nullable: true })
    endereco?: string;

    @Column({ type: "varchar", length: "100", nullable: true })
    cidade?: string;

    @Column({ type: "varchar", length: "2", nullable: true })
    estado?: string;

    @Column({ type: "varchar", length: "20", nullable: true })
    celular?: string;

    @Column({ type: "varchar", length: "100", nullable: true })
    email?: string;

    @Column({ type: "text", nullable: true })
    logo?: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    // RELACIONAMENTOS
    @OneToMany(() => Funcionario, funcionario => funcionario.empresaId)
    funcionarios: Funcionario[];

    @OneToMany(() => RegistroPonto, registro => registro.empresaId)
    registrosPontos: RegistroPonto[];

    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;

}