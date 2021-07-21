import { getCustomRepository } from "typeorm";
import { AccountRepositories } from "../repositories/AccountRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAccountRequest {
  user_id: string;
}

class ListAccountService {
  async execute({
    user_id
  }: IAccountRequest) {
    const accountRepositories = getCustomRepository(
      AccountRepositories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne(user_id);

    if (!userExists) {
      throw new Error("User does not exists!");
    }

    const account = accountRepositories.find({ user_id });

    return account;
  }
}

export { ListAccountService };