import { getCustomRepository } from "typeorm"
import { CardRepositories } from "../repositories/CardRepositories"
import { RegisterRepositories } from "../repositories/RegisterRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUpdateRegisterRequest {
  register_id: string;
  description?: string;
  type?: string;
  value?: number;
  category_id?: string;
  user_id?: string;
  account_id?: string;
  card_id?: string;
  date?: string
}

class UpdateRegisterService {
  async execute({ register_id, description, type, value, category_id, user_id, account_id, card_id, date }: IUpdateRegisterRequest) {
    const cardRepository = getCustomRepository(CardRepositories);
    const userRepository = getCustomRepository(UsersRepositories);
    const registerRepository = getCustomRepository(RegisterRepositories);

    const user = await userRepository.findOne({ id: user_id });
    if (!user)
      throw new Error("User not found");

    const card = await cardRepository.findOne({ id: card_id });
    if (!card)
      throw new Error("Card not found");

    const register = await registerRepository.findOne({ id: register_id });
    if (!register)
      throw new Error("Register not found");

    const data = { description, type, value, category_id, account_id, card_id, date };
    const updateDate = {};

    Object.keys(data).forEach((key: string) => {
      const value = data[key];
      if (value !== undefined && key !== "date") {
        updateDate[key] = value
      }
      if (value !== undefined && key === "date") {
        const formatDate = new Date(date.split("T")[0].replace("-", "/"));

        updateDate["created_at"] = formatDate;
      }
    });

    await registerRepository.update({ id: register_id }, updateDate);

    return updateDate;
  }
}
export { UpdateRegisterService }