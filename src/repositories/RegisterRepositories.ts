import { EntityRepository, Repository } from "typeorm";
import { Register } from "../entities/Register";

@EntityRepository(Register)
class RegisterRepositories extends Repository<Register> { }

export { RegisterRepositories };