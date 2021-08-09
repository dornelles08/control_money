import { Request, Response } from "express";
import { UpdateRegisterService } from "../services/UpdateRegisterService";

class UpdateRegisterController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const { id } = request.params
    const { description, type, value, category_id, account_id, card_id, date } = request.body;

    const updateRegisterService = new UpdateRegisterService();
    await updateRegisterService.execute({ register_id: id, description, type, value, category_id, user_id, account_id, card_id, date });

    return response.status(204).send();
  }
}

export { UpdateRegisterController }