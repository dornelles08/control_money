import { Request, Response } from "express";
import { GetAccountService } from "../services/GetAccountService";

class GetAccountController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { user_id } = request;

    const getAccountService = new GetAccountService();

    const account = await getAccountService.execute({
      user_id,
      id
    });

    return response.json(account);
  }
}

export { GetAccountController };