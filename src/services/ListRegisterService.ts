import { getCustomRepository } from "typeorm";
import { RegisterRepositories } from "../repositories/RegisterRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListRegisterService {
  async execute({ user_id }) {
    const registerRepository = getCustomRepository(RegisterRepositories);
    const userRepository = getCustomRepository(UsersRepositories);

    const userExist = await userRepository.findOne({ id: user_id });

    if (!userExist) {
      throw new Error("User not found")
    }

    const registers = await registerRepository.find({ user_id });

    return registers;
  }
}

export { ListRegisterService };