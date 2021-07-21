import { getCustomRepository } from "typeorm";
import { AccountRepositories } from "../repositories/AccountRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAccountRequest {
  user_id: string;
  name: string;
  value: number;
}

class CreateAccountService {
  async execute({
    user_id, name, value
  }: IAccountRequest) {
    const accountRepositories = getCustomRepository(
      AccountRepositories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne(user_id);

    if (!userExists) {
      throw new Error("User Receiver does not exists!");
    }

    if (value == undefined) {
      value = 0;
    }

    const account = accountRepositories.create({
      user_id,
      name,
      value
    });

    await accountRepositories.save(account);

    return account;
  }
}

export { CreateAccountService };