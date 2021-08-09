import { getCustomRepository } from "typeorm";
import { Register } from "../entities/Register";
import { CardRepositories } from "../repositories/CardRepositories";
import { RegisterRepositories } from "../repositories/RegisterRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IInvoiceRequest {
  user_id: string;
  card_id: string;
  month: number;
}

const SumNumericArray = (array: Register[]): number => {
  let total = 0;
  array.forEach(({ value }: Register) => total = total + parseFloat(value));
  return total;
}

class GetInvoiceService {
  async execute({ month, user_id, card_id }: IInvoiceRequest) {
    const cardRepository = getCustomRepository(CardRepositories);
    const userRepository = getCustomRepository(UsersRepositories);
    const registerRepository = getCustomRepository(RegisterRepositories);

    const user = await userRepository.findOne({ id: user_id });
    if (!user) throw new Error("User not found!");

    const card = await cardRepository.findOne({ user_id, id: card_id });
    if (!card) throw new Error("Card not found!");

    const date_in = new Date(`2021-${month - 1}-${card.closing}`).toISOString().split('T')[0];
    const date_out = new Date(`2021-${month}-${card.closing}`).toISOString().split('T')[0];

    const registers = await registerRepository.invoidCard(card_id, user_id, date_in, date_out);

    return { registers, total: SumNumericArray(registers) };
  }
}

export { GetInvoiceService };