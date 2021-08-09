import { EntityRepository, Repository } from "typeorm";
import { Register } from "../entities/Register";

@EntityRepository(Register)
class RegisterRepositories extends Repository<Register> {
  async invoidCard(card_id, user_id, date_in, date_out): Promise<Register[]> {
    return await this.createQueryBuilder("registers")
      .where("card_id = :card_id", { card_id })
      .andWhere("user_id = :user_id", { user_id })
      .andWhere("created_at > :date_in", { date_in })
      .andWhere("created_at < :date_out", { date_out })
      .getMany();
  }
}

export { RegisterRepositories };