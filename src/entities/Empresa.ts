import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { STATUS } from "../types/Default";
import { FUNCIONARIO } from "./FUNCIONARIO";
import { REGISTRO_PRONTO } from "./REGISTRO_PRONTO";
import { TENANT } from "./TENANT";

@Entity('EMPRESAS')
export class EMPRESA {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "NOME_FANTASIA", type: "varchar", length: "150", nullable: false })
    NOME_FANTASIA!: string;

    @Column({ name: "RAZAO_SOCIAL", type: "varchar", length: "150", nullable: false })
    RAZAO_SOCIAL!: string;

    @Column({ name: "CNPJ", type: "varchar", length: "20", nullable: false })
    CNPJ!: string;

    @Column({
        name: "STATUS", 
        type: 'enum',
        enum: STATUS,
        default: STATUS.ATIVO,
        nullable: false
    })
    STATUS!: STATUS;

    @Column({ name: "ENDERECO", type: "varchar", length: "150", nullable: true })
    ENDERECO?: string;

    @Column({ name: "CIDADE", type: "varchar", length: "100", nullable: true })
    CIDADE?: string;

    @Column({ name: "ESTADO", type: "varchar", length: "2", nullable: true })
    ESTADO?: string;

    @Column({ name: "CELULAR", type: "varchar", length: "20", nullable: true })
    CELULAR?: string;

    @Column({ name: "EMAIL", type: "varchar", length: "100", nullable: true })
    EMAIL?: string;

    @Column({ name: "LOGO", type: "text", nullable: true })
    LOGO?: string;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    // RELACIONAMENTOS
    @OneToMany(() => FUNCIONARIO, FUNCIONARIO => FUNCIONARIO.EMPRESA_ID)
    FUNCIONARIOS: FUNCIONARIO[];

    @OneToMany(() => REGISTRO_PRONTO, REGISTRO => REGISTRO.EMPRESA_ID)
    REGISTRO_PRONTOS: REGISTRO_PRONTO[];

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;

}