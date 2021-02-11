import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  name: string;
  @Column('decimal')
  price: number;
  @Column('int')
  quantity: number;
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
}

export default Product;
