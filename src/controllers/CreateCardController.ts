import { Request, Response } from "express";
import { CreateCardService } from "../services/CreateCardService";

class CreateCardController {
  async handle(request: Request, response: Response) {
    const createCardService = new CreateCardService();

    const { name, limit, closing, due } = request.body;
    const { user_id } = request;

    const card = await createCardService.execute({ name, closing, due, limit, user_id });

    return response.status(201).json(card);

  }
}

export { CreateCardController };