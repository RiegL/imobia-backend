import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cpfCnpj: string;

  @Column({ nullable: true })
  mobilePhone: string;

  @Column({ nullable: true, type: 'float' })
  incomeValue: number;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  addressNumber: string;

  @Column({ nullable: true })
  province: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  loginEmail: string;

  @Column({ nullable: true })
  birthDate: string;

  @Column({ nullable: true })
  companyType: string;

  @Column({ nullable: true })
  asaasAccountId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
