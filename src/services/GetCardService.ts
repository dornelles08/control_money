import { getCustomRepository } from "typeorm";
import { CardRepositories } from "../repositories/CardRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ICardRequest {
  user_id: string;
  card_id: string;
}

class GetCardService {

  async execute({ card_id, user_id }: ICardRequest) {
    const cardRepository = getCustomRepository(CardRepositories);
    const userRepository = getCustomRepository(UsersRepositories)

    const userExist = await userRepository.findOne({ id: user_id });

    if (!userExist) {
      throw new Error("User not found");
    }

    const card = await cardRepository.findOne({ user_id, id: card_id });

    return card;
  }

}

export { GetCardService };