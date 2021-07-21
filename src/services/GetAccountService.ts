import { getCustomRepository } from "typeorm";
import { AccountRepositories } from "../repositories/AccountRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAccountRequest {
  user_id: string;
  id: string;
}

class GetAccountService {
  async execute({
    user_id,
    id
  }: IAccountRequest) {
    const accountRepositories = getCustomRepository(
      AccountRepositories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne(user_id);

    if (!userExists) {
      throw new Error("User does not exists!");
    }



    const account = accountRepositories.findOne({ user_id, id });

    if (!account) {
      throw new Error("Account does not exists!");
    }
    return account;
  }
}

export { GetAccountService };