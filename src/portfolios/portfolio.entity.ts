import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Portfolio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  tokenId: string;

  @Column()
  tokenSymbol: string;

  @Column({type: 'numeric', precision: 20, scale: 10})
  amount: number;

}
