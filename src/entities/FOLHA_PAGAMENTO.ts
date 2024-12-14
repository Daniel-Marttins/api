import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EMPRESA } from "./EMPRESA";
import { FUNCIONARIO } from "./FUNCIONARIO";
import { TENANT } from "./TENANT";

@Entity('FOLHA_PAGAMENTOS')
export class FOLHA_PAGAMENTO {

    @PrimaryGeneratedColumn({ name: "ID" })
    ID!: number;

    @Column({ name: "DATA_PAGAMENTO", type: "timestamp", nullable: false })
    DATA_PAGAMENTO!: Date;

    @Column({ name: "MES_REFERENCIA", type: "varchar", length: "50", nullable: false })
    MES_REFERENCIA!: string;

    @Column({ name: "SALARIO_BRUTO", type: "decimal", precision: 10, scale: 2, nullable: false })
    SALARIO_BRUTO!: number;

    @Column({ name: "SALARIO_LIQUIDO", type: "decimal", precision: 10, scale: 2, nullable: false })
    SALARIO_LIQUIDO!: number;

    @ManyToOne(() => FUNCIONARIO, { nullable: false })
    @JoinColumn({ name: "FUNCIONARIO_ID" })
    FUNCIONARIO_ID!: FUNCIONARIO;

    @ManyToOne(() => EMPRESA, { nullable: false })
    @JoinColumn({ name: "EMPRESA_ID" })
    EMPRESA_ID!: EMPRESA;

    @ManyToOne(() => TENANT, { nullable: false })
    @JoinColumn({ name: "TENANT_ID" })
    TENANT_ID!: TENANT;

}