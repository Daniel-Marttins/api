import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { STATUS, STATUS_FINANCEIRO } from '../types/Default';

@Entity('TENANTS')
export class TENANT {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "CONTRATO", type: "varchar", length: 10, nullable: false })
    CONTRATO!: string;

    @Column({
        name: "STATUS",
        type: 'enum',
        enum: STATUS,
        default: STATUS.ATIVO,
        nullable: false
    })
    STATUS!: STATUS;

    @Column({
        name: "STATUS",
        type: 'enum',
        enum: STATUS_FINANCEIRO,
        default: STATUS_FINANCEIRO.REGULAR,
        nullable: false
    })
    STATUS_FINANCEIRO!: STATUS_FINANCEIRO;

    @Column({ name: "RAZAO", type: "varchar", length: "150", nullable: false })
    RAZAO!: string;

    @Column({ name: "CPFCNPJ", type: "varchar", length: "20", nullable: false })
    CPFCNPJ!: string;

    @Column({ name: "EMAIL", type: "varchar", length: "150", nullable: false })
    EMAIL!: string;

    @Column({ name: "ENDERECO", type: "varchar", length: "200", nullable: true })
    ENDERECO?: string;

    @Column({ name: "CIDADE", type: "varchar", length: "100", nullable: true })
    CIDADE?: string;

    @Column({ name: "ESTADO", type: "varchar", length: "2", nullable: true })
    ESTADO?: string;

    @Column({ name: "DATA_CRIACAO", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    DATA_CRIACAO!: Date;

    @Column({ name: "DATA_ATUALIZACAO", type: "timestamp", nullable: true })
    DATA_ATUALIZACAO?: Date;

}