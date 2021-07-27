import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

import { v4 as uuid } from 'uuid'

@Entity("cards")
class Card {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  limit: number;

  @Column()
  closing: number;

  @Column()
  due: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Card };