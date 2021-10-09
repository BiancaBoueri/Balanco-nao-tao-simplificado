import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Expose } from "class-transformer";

@Entity("category")

class Category {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  father: number;

  @Column()
  initial_value: number;

  @CreateDateColumn()
  created_at: Date;
}

export { Category }