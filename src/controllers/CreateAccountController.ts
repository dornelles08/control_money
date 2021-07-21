import { Request, Response } from "express";
import { CreateAccountService } from "../services/CreateAccountService";

class CreateAccountController {
  async handle(request: Request, response: Response) {
    const { name, value } = request.body;
    const { user_id } = request;

    const createAccountService = new CreateAccountService();

    const account = await createAccountService.execute({
      user_id,
      name,
      value,
    });

    return response.json(account);
  }
}

export { CreateAccountController };