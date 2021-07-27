import { getCustomRepository } from "typeorm";
import { CardRepositories } from "../repositories/CardRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ICardRequest {
  id: string;
  user_id: string;
  name?: string;
  limit?: number;
  due?: number;
  closing?: number;
}

interface ICardUpdate {
  name?: string;
  limit?: number;
  due?: number;
  closing?: number;
}

class UpdateCardService {
  async execute({ id, user_id, name, limit, due, closing }: ICardRequest) {
    const cardRepository = getCustomRepository(CardRepositories);
    const userRepository = getCustomRepository(UsersRepositories);

    const userExist = await userRepository.findOne({ id: user_id });

    if (!userExist) {
      throw new Error("User not found");
    }

    const card = await cardRepository.findOne({ id, user_id });

    if (!card) {
      throw new Error("Card not found");
    }

    const fields = ["name", "limit", "due", "closing"];
    const data = { name, limit, closing, due } as ICardUpdate;
    const updateData = {} as ICardUpdate;

    fields.forEach((field: string) => {
      const value = data[field];
      if (value !== undefined) {
        updateData[field] = value;
      }
    });

    await cardRepository.update({ id, user_id }, updateData);

    return;
  }
}

export { UpdateCardService };