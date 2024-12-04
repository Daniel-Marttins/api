import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { STATUS } from "../types/Default";
import { Empresa } from "./Empresa";
import { RegistroPonto } from "./RegistroPonto";
import { Tenant } from "./Tenant";

@Entity('funcionarios')
export class Funcionario {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: "150", nullable: false })
    nome!: string;

    @Column({ type: "varchar", length: "20", nullable: false })
    cpf!: string;

    @Column({
        type: 'enum',
        enum: STATUS,
        default: STATUS.ATIVO,
        nullable: false
    })
    status!: STATUS;

    @Column({ type: "varchar", length: "150", nullable: false })
    email!: string;

    @Column({ type: "varchar", length: "100", nullable: false })
    senha!: string;

    @Column({ type: "varchar", length: "200", nullable: false })
    endereco!: string;

    @Column({ type: "varchar", length: "20", nullable: false })
    telefone!: string;

    @Column({ type: "varchar", length: "1", nullable: false })
    sexo!: string;

    @Column({ type: "varchar", length: "1", nullable: false })
    estadoCivil!: string;

    @Column({ type: "varchar", length: "100", nullable: false })
    cargo!: string;

    @Column({ type: "timestamp", nullable: true })
    dataAdmissao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataNascimento!: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

    @OneToMany(() => RegistroPonto, registro => registro.funcionarioId)
    registropontos: RegistroPonto[];

    // RELACIONAMENTOS
    @ManyToOne(() => Tenant, { nullable: false })
    @JoinColumn({ name: "tenantId" })
    tenantId!: Tenant;

    @ManyToOne(() => Empresa, empresa => empresa.funcionario, { nullable: false })
    @JoinColumn({ name: "empresaId" })
    empresaId!: Empresa;

}