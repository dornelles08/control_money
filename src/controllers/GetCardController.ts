import { Request, Response } from "express";
import { GetCardService } from "../services/GetCardService";

class GetCardController {

  async handle(request: Request, response: Response) {
    const getCardService = new GetCardService();

    const { id } = request.params;
    const { user_id } = request;

    const cards = await getCardService.execute({ user_id, card_id: id });

    return response.json(cards);
  }

}

export { GetCardController };