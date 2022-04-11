import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tokenId: string;

  @Column()
  tokenSymbol: string;

  @Column()
  amount: number;

}
