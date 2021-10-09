import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Expose } from "class-transformer";

@Entity("release")

class Release {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  value: number;

  @Column()
  amount: number;

  @Column()
  category_id: number;

  @CreateDateColumn()
  created_at: Date;
}

export { Release }