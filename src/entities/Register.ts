import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Account } from "./Account";
import { Card } from "./Card";
import { Category } from "./Category";
import { User } from "./User";

@Entity("registers")
class Register {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  category_id: string;

  @Column()
  user_id: string;

  @Column()
  account_id?: string;

  @Column()
  card_id?: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToOne(() => Account)
  @JoinColumn({ name: "account_id" })
  account?: Account;

  @OneToOne(() => Card)
  @JoinColumn({ name: "card_id" })
  card?: Card;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Register };