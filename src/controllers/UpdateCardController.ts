import { Request, Response } from "express";
import { UpdateCardService } from "../services/UpdateCardService";

class UpdateCardController {
  async handle(request: Request, response: Response) {
    const { name, limit, due, closing } = request.body;
    const { user_id } = request;
    const { id } = request.params;

    const updateCardService = new UpdateCardService();

    await updateCardService.execute({ id, user_id, closing, due, limit, name });

    return response.status(204).send();
  }
}

export { UpdateCardController };