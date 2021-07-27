import { Request, Response } from "express";
import { CreateRegisterService } from "../services/CreateRegisterService";

class CreateRegisterController {

  async handle(request: Request, response: Response) {
    const { account_id, card_id, category_id, description, type, value } = request.body;
    const { user_id } = request;

    const createRegisterService = new CreateRegisterService();

    const register = await createRegisterService.execute({ account_id, user_id, card_id, category_id, description, type, value });

    return response.status(201).json(register);
  }
}

export { CreateRegisterController };