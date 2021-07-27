import { getCustomRepository } from "typeorm";
import { AccountRepositories } from "../repositories/AccountRepositories";
import { CardRepositories } from "../repositories/CardRepositories";
import { CategoriesRepositories } from "../repositories/CategoriesRepositories";
import { RegisterRepositories } from "../repositories/RegisterRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IRegisterRequest {
  description: string;
  type: string;
  value: number;
  category_id: string;
  user_id: string;
  account_id: string;
  card_id: string;
}

class CreateRegisterService {
  async execute({ account_id, card_id, category_id, description, type, user_id, value }: IRegisterRequest) {
    const registerRepository = getCustomRepository(RegisterRepositories);
    const userRepository = getCustomRepository(UsersRepositories);
    const categoryRepository = getCustomRepository(CategoriesRepositories);
    const accountRepository = getCustomRepository(AccountRepositories);
    const cardRepository = getCustomRepository(CardRepositories);

    const user = await userRepository.findOne({ id: user_id });

    if (!user) {
      throw new Error("User not found")
    }

    const category = await categoryRepository.findOne({ id: category_id });

    if (!category) {
      throw new Error("Category not found")
    }

    let data;

    if (account_id) {
      const account = await accountRepository.findOne({ id: account_id, user_id });
      data = {
        description,
        type,
        value,
        user_id,
        category_id,
        user,
        category,
        account_id,
        account
      }
    } else if (card_id) {
      const card = await cardRepository.findOne({ id: card_id, user_id });
      data = {
        description,
        type,
        value,
        user_id,
        category_id,
        user,
        category,
        card_id,
        card
      }
    }

    const register = registerRepository.create(data);

    await registerRepository.save(register);

    return register;

  }
}

export { CreateRegisterService };