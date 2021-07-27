import { Request, Response } from "express";
import { ListCardService } from "../services/ListCardService";

class ListCardController {

  async handle(request: Request, response: Response) {
    const listCardService = new ListCardService();

    const { user_id } = request;

    const cards = await listCardService.execute({ user_id });

    return response.json(cards);
  }

}

export { ListCardController };