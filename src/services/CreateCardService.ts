import { getCustomRepository } from "typeorm";
import { CardRepositories } from "../repositories/CardRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ICardRequest {
  name: string;
  limit: number;
  closing: number;
  due: number;
  user_id: string;
}

class CreateCardService {

  async execute({ name, limit, closing, due, user_id }: ICardRequest) {
    const cardRepository = getCustomRepository(CardRepositories);
    const userRepository = getCustomRepository(UsersRepositories);

    const cardExist = await cardRepository.findOne({ name });

    if (cardExist) {
      throw new Error("Card already exists");
    }

    const user = await userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found");
    }

    const card = cardRepository.create({
      name,
      limit,
      closing,
      due,
      user_id,
      user
    });

    await cardRepository.save(card);

    return card;
  }

}

export { CreateCardService };