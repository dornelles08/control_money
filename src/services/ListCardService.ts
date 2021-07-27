import { getCustomRepository } from "typeorm";
import { CardRepositories } from "../repositories/CardRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ICardRequest {
  user_id: string;
}

class ListCardService {

  async execute({ user_id }: ICardRequest) {
    const cardRepository = getCustomRepository(CardRepositories);
    const userRepository = getCustomRepository(UsersRepositories)

    const userExist = await userRepository.findOne({ id: user_id });

    if (!userExist) {
      throw new Error("User not found");
    }

    const cards = await cardRepository.find({ user_id });

    return cards;
  }

}

export { ListCardService };