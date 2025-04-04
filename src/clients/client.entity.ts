import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  cpfCnpj: string; 

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  addressNumber: string;

  @Column({ nullable: true })
  province: string;

  @Column({ nullable: true })
  asaasAccountId: string; 

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
