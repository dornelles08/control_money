import { Request, Response } from "express";
import { ListRegisterService } from "../services/ListRegisterService";

class ListRegisterController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listRegisterService = new ListRegisterService();

    const registers = await listRegisterService.execute({ user_id });

    return response.json(registers);
  }
}

export { ListRegisterController };