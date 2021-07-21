import { Request, Response } from "express";
import { ListAccountService } from "../services/ListAccountService";

class ListAccountController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listAccountService = new ListAccountService();

    const account = await listAccountService.execute({
      user_id
    });

    return response.json(account);
  }
}

export { ListAccountController };