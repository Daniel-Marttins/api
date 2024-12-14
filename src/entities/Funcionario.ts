import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { REGRA_USUARIO, STATUS } from "../types/Default";
import { EMPRESA } from "./EMPRESA";
import { FERIADO_AUSENCIA } from "./FERIADO_AUSENCIA";
import { HORA_EXTRA } from "./HORA_EXTRA";
import { PROFISSAO } from "./PROFISSAO";
import { REGISTRO_PRONTO } from "./REGISTRO_PRONTO";
import { TENANT } from "./TENANT";

@Entity('FUNCIONARIOS')
export class FUNCIONARIO {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "NOME", type: "varchar", length: "150", nullable: false })
    NOME!: string;

    @Column({ name: "CPF", type: "varchar", length: "20", nullable: false })
    CPF!: string;

    @Column({
        name: "STATUS",
        type: 'enum',
        enum: STATUS,
        default: STATUS.ATIVO,
        nullable: false
    })
    STATUS!: STATUS;

    @Column({
        name: "REGRA",
        type: 'enum',
        enum: REGRA_USUARIO,
        default: REGRA_USUARIO.FUNCIONARIO,
        nullable: false
    })
    REGRA!: REGRA_USUARIO;

    @Column({ name: "EMAIL", type: "varchar", length: "150", nullable: false })
    EMAIL!: string;

    @Column({ name: "SENHA", type: "varchar", length: "100", nullable: false })
    SENHA!: string;

    @Column({ name: "ENDERECO", type: "varchar", length: "200", nullable: false })
    ENDERECO!: string;

    @Column({ name: "TELEFONE", type: "varchar", length: "20", nullable: false })
    TELEFONE!: string;

    @Column({ name: "SEXO", type: "varchar", length: "1", nullable: false })
    SEXO!: string;

    @Column({ name: "ESTADO_CIVIL", type: "varchar", length: "1", nullable: false })
    ESTADO_CIVIL!: string;

    @Column({ name: "DATA_ADMISSAO", type: "timestamp", nullable: true })
    DATA_ADMISSAO!: Date;

    @Column({ name: "DATA_NASCIMENTO", type: "timestamp", nullable: true })
    DATA_NASCIMENTO!: Date;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

    @OneToMany(() => REGISTRO_PRONTO, REGISTRO => REGISTRO.FUNCIONARIO_ID)
    REGISTRO_PONTOS: REGISTRO_PRONTO[];

    @OneToMany(() => HORA_EXTRA, EXTRAS => EXTRAS.FUNCIONARIO_ID)
    HORA_EXTRAS: HORA_EXTRA[];

    @OneToMany(() => FERIADO_AUSENCIA, AUSENCIA => AUSENCIA.FUNCIONARIO_ID)
    FERIADO_AUSENCIAS: FERIADO_AUSENCIA[];

    // RELACIONAMENTOS
    @ManyToOne(() => PROFISSAO, { nullable: false })
    @JoinColumn({ name: "PROFISSAO_ID" })
    PROFISSAO_ID!: PROFISSAO;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;

    @ManyToOne(() => EMPRESA, EMPRESA => EMPRESA.FUNCIONARIOS, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

}