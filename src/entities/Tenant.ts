import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tenants')
export class Tenant {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: "150", nullable: false })
    razao!: string;

    @Column({ type: "varchar", length: "20", nullable: false })
    cpfCnpj!: string;

    @Column({ type: "varchar", length: "150", nullable: false })
    email!: string;

    @Column({ type: "varchar", length: "100", nullable: false })
    senha!: string;

    @Column({ type: "varchar", length: "200", nullable: true })
    endereco?: string;
    
    @Column({ type: "varchar", length: "100", nullable: true })
    cidade?: string;

    @Column({ type: "varchar", length: "2", nullable: true })
    estado?: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataCriacao!: Date;

    @Column({ type: "timestamp", nullable: true })
    dataAtualizacao?: Date;

}